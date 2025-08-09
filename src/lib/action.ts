// lib/action.ts (or lib/actions/contact.ts)
'use server'

import { z } from 'zod'

// Define the form state interface
interface FormState {
  success: boolean;
  message: string;
  errors: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
}

// Validation schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email').max(255, 'Email is too long'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required').max(2000, 'Message is too long'),
  language: z.enum(['ar', 'en'])
})

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Extract form data
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      language: formData.get('language') as 'ar' | 'en'
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // Here you would typically:
    // 1. Send email notification using a service like Resend, SendGrid, etc.
    // 2. Save to database
    // 3. Log the submission
    
    // Example email sending (uncomment and configure when ready):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'hello@vooksio.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E2A38; border-bottom: 2px solid #007BFF; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
            <p><strong>Language:</strong> ${validatedData.language === 'ar' ? 'Arabic' : 'English'}</p>
          </div>
          <div style="margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
              ${validatedData.message}
            </div>
          </div>
        </div>
      `
    });
    */

    // Simulate processing delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Return success state
    return {
      success: true,
      message: validatedData.language === 'ar' 
        ? 'تم إرسال الرسالة بنجاح!' 
        : 'Message sent successfully!',
      errors: {}
    }

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    if (error instanceof z.ZodError) {
      // Return validation errors
      const errors: FormState['errors'] = {}
      
      error.issues.forEach((err) => {
        const field = err.path[0] as keyof FormState['errors']
        if (field) {
          if (!errors[field]) {
            errors[field] = []
          }
          errors[field]?.push(err.message)
        }
      })

      return {
        success: false,
        message: 'Please correct the errors below',
        errors
      }
    }

    // Return generic error
    return {
      success: false,
      message: 'Failed to send message. Please try again.',
      errors: {}
    }
  }
}