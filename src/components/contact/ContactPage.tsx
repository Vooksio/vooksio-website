"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  ArrowLeft,
  Send,
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";
import { RefreshLink } from "../ui-actions/RefreshLink";
import { cn } from "@/lib/utils";
import { useSwitchData } from "@/app/hooks/useSwitchData";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import SubPageHeader from "../layouts/SubPageHeader";
import { useLocale } from "next-intl";
import { submitContactForm } from "@/lib/action";

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

function SubmitButton() {
  const { pending } = useFormStatus();
  const { switchData } = useSwitchData();
  const language = useLocale();

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className={cn(
        "w-full btn-vooksio-primary px-8 py-4 vooksio-hover-shadow",
        "transition-all duration-200 ease-in-out",
        pending && "opacity-70 cursor-not-allowed"
      )}
      isLoading={pending}
      icon={<Send className={cn("h-5 w-5", language === "ar" && "rotate-180")} />}
    >
      {pending ? switchData("جاري الإرسال...", "Sending...") : switchData("إرسال الرسالة", "Send Message")}
    </Button>
  );
}

function ErrorAlert({ message }: { message: string }) {
  const { switchData } = useSwitchData();

  return (
    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
        <div>
          <h4 className="text-red-800 dark:text-red-200 font-medium text-sm">
            {switchData("خطأ في الإرسال", "Submission Error")}
          </h4>
          <p className="text-red-600 dark:text-red-300 text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
}

export const ContactPage = () => {
  const language = useLocale();
  const { switchData } = useSwitchData();
  const isRTL = language === "ar";

  const initialState: FormState = {
    success: false,
    message: "",
    errors: {},
  };

  const [state, formAction] = useActionState(submitContactForm, initialState);

  // Enhanced contact info with better localization
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" style={{ color: "var(--vooksio-cyan)" }} />,
      title: switchData("تواصل عبر البريد", "Email Communication"),
      content: "hello@vooksio.com",
      description: switchData(
        "أرسل لنا استفسارك في أي وقت على مدار الساعة",
        "Send us your inquiry anytime, 24/7 availability"
      ),
      action: switchData("إرسال بريد إلكتروني", "Send Email"),
    },
    {
      icon: <Clock className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
      title: switchData("مدة الاستجابة", "Response Timeline"),
      content: switchData("خلال 24 ساعة", "Within 24 hours"),
      description: switchData(
        "نضمن الرد على جميع الاستفسارات خلال يوم عمل واحد",
        "We guarantee response to all inquiries within one business day"
      ),
      badge: switchData("سريع", "Fast"),
    },
    {
      icon: <MapPin className="w-6 h-6" style={{ color: "var(--vooksio-orange)" }} />,
      title: switchData("نطاق العمل", "Service Coverage"),
      content: switchData("عالمي - عن بُعد", "Global - Remote"),
      description: switchData(
        "نخدم العملاء في جميع المناطق الزمنية حول العالم",
        "Serving clients across all time zones worldwide"
      ),
      badge: switchData("عالمي", "Global"),
    },
  ];

  // Form field configurations with enhanced localization
  const formFields = {
    name: {
      icon: <User className="w-4 h-4" style={{ color: "var(--vooksio-purple)" }} />,
      label: switchData("الاسم الكامل", "Full Name"),
      placeholder: switchData("مثال: أحمد محمد علي", "Example: John Smith"),
      required: true,
      type: "text" as const,
      autoComplete: "name",
      errorColor: "border-red-500 focus-visible:ring-red-500",
      normalColor: "border-[var(--vooksio-purple)]/20 focus-visible:ring-[var(--vooksio-purple)]",
    },
    email: {
      icon: <Mail className="w-4 h-4" style={{ color: "var(--vooksio-cyan)" }} />,
      label: switchData("البريد الإلكتروني", "Email Address"),
      placeholder: switchData("مثال: ahmed@example.com", "Example: john@example.com"),
      required: true,
      type: "email" as const,
      autoComplete: "email",
      errorColor: "border-red-500 focus-visible:ring-red-500",
      normalColor: "border-[var(--vooksio-cyan)]/20 focus-visible:ring-[var(--vooksio-cyan)]",
    },
    phone: {
      icon: <Phone className="w-4 h-4" style={{ color: "var(--vooksio-emerald)" }} />,
      label: switchData("رقم الهاتف", "Phone Number"),
      placeholder: switchData("مثال: ٠١٠١٢٣٤٥٦٧٨", "Example: +1 (555) 123-4567"),
      required: false,
      type: "tel" as const,
      autoComplete: "tel",
      errorColor: "border-red-500 focus-visible:ring-red-500",
      normalColor: "border-[var(--vooksio-emerald)]/20 focus-visible:ring-[var(--vooksio-emerald)]",
    },
    message: {
      icon: <MessageSquare className="w-4 h-4" style={{ color: "var(--vooksio-orange)" }} />,
      label: switchData("رسالتك", "Your Message"),
      placeholder: switchData(
        "أخبرنا بالتفصيل عن مشروعك، الميزانية المتوقعة، والجدول الزمني المطلوب. كلما كانت التفاصيل أكثر، كلما تمكنا من مساعدتك بشكل أفضل...",
        "Tell us in detail about your project, expected budget, and required timeline. The more details you provide, the better we can help you..."
      ),
      required: true,
      errorColor: "border-red-500 focus-visible:ring-red-500",
      normalColor: "border-[var(--vooksio-orange)]/20 focus-visible:ring-[var(--vooksio-orange)]",
    },
  };

  // Success state with improved UX
  if (state.success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-input-background via-white to-input-background flex items-center justify-center">
        <div className="text-center space-y-8 max-w-lg mx-auto px-4">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-[var(--vooksio-emerald)] to-[var(--vooksio-cyan)] rounded-full flex items-center justify-center mx-auto animate-pulse">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-[var(--vooksio-emerald)] to-[var(--vooksio-cyan)] rounded-full mx-auto animate-ping opacity-25"></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-dark-navy">
              {switchData("تم إرسال رسالتك بنجاح! ✨", "Message Sent Successfully! ✨")}
            </h1>
            <p className="text-lg text-muted-gray leading-relaxed">
              {switchData(
                "شكراً لك على التواصل معنا! تم استلام رسالتك وسيقوم فريقنا بالرد عليك خلال 24 ساعة على البريد الإلكتروني المُدخل.",
                "Thank you for reaching out! We've received your message and our team will respond within 24 hours to the provided email address."
              )}
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                {switchData(
                  "💡 نصيحة: تأكد من فحص صندوق البريد المهمل في حال لم تصلك الرسالة",
                  "💡 Tip: Check your spam folder if you don't receive our response"
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RefreshLink href={`/${language}`} className="btn-vooksio-primary px-8 py-3" variant="default">
              <ArrowLeft className={cn("h-4 w-4", isRTL && "rotate-180")} />
              {switchData("العودة للرئيسية", "Back to Home")}
            </RefreshLink>

            <Button
              variant="outline"
              onClick={() => (window.location.href = "mailto:hello@vooksio.com")}
              className="px-8 py-3"
            >
              <Mail className="h-4 w-4" />
              {switchData("تواصل مباشر", "Direct Contact")}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br from-input-background via-white to-input-background",
        isRTL && "rtl"
      )}
    >
      {/* Header */}
      <SubPageHeader />

      {/* Hero Section with improved responsive design */}
      <section className="relative overflow-hidden vooksio-animated-bg py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--vooksio-purple)] to-[var(--vooksio-cyan)] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--vooksio-emerald)] to-[var(--vooksio-orange)] rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark-navy leading-tight">
                {switchData("تواصل معنا", "Get in Touch")}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-gray max-w-4xl mx-auto leading-relaxed">
                {switchData(
                  "مستعد لتحويل أفكارك إلى واقع رقمي؟ دعنا نناقش مشروعك ونصنع شيئاً رائعاً معاً.",
                  "Ready to transform your ideas into digital reality? Let's discuss your project and create something amazing together."
                )}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-gray-200">
              <p className="text-base text-muted-gray leading-relaxed">
                {switchData(
                  "نحن متخصصون في تطوير البرمجيات، التعليم التقني، واستشارات المنتجات. فريقنا مستعد لمساعدتك في تحقيق أهدافك التقنية.",
                  "We specialize in software development, technical education, and product consulting. Our team is ready to help you achieve your technical goals."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark-navy mb-4">
              {switchData("طرق التواصل", "Contact Information")}
            </h2>
            <p className="text-muted-gray">
              {switchData("اختر الطريقة الأنسب للتواصل معنا", "Choose the most convenient way to reach us")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="vooksio-card p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-semibold text-dark-navy">{info.title}</h3>
                  {info.badge && (
                    <span className="px-2 py-1 bg-gradient-to-r from-[var(--vooksio-purple)] to-[var(--vooksio-cyan)] text-white text-xs rounded-full">
                      {info.badge}
                    </span>
                  )}
                </div>
                <p className="text-lg font-medium text-dark-navy mb-3">{info.content}</p>
                <p className="text-sm text-muted-gray leading-relaxed">{info.description}</p>
                {info.action && <span className="text-sm text-muted-gray leading-relaxed">{info.action}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vooksio-card rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-navy mb-4">
                {switchData("أرسل لنا رسالة مفصلة", "Send us a Detailed Message")}
              </h2>
              <p className="text-muted-gray leading-relaxed max-w-2xl mx-auto">
                {switchData(
                  "املأ النموذج أدناه بكل التفاصيل المطلوبة وسنرد عليك بعرض مخصص لمشروعك في أقرب وقت ممكن.",
                  "Fill out the form below with all required details and we'll respond with a custom proposal for your project as soon as possible."
                )}
              </p>
            </div>

            {/* Enhanced Error Display */}
            {!state.success && state.message && <ErrorAlert message={state.message} />}

            <form action={formAction} className="space-y-8">
              {/* Hidden field for language */}
              <input type="hidden" name="language" value={language} />

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="flex items-center space-x-2 rtl:space-x-reverse text-base font-medium"
                  >
                    {formFields.name.icon}
                    <span>{formFields.name.label}</span>
                    <span className="text-red-500 text-lg">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type={formFields.name.type}
                    required={formFields.name.required}
                    autoComplete={formFields.name.autoComplete}
                    placeholder={formFields.name.placeholder}
                    className={cn(
                      "h-12 text-base transition-all duration-200",
                      state.errors?.name ? formFields.name.errorColor : formFields.name.normalColor
                    )}
                  />
                  {state.errors?.name && (
                    <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {state.errors.name[0]}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="flex items-center space-x-2 rtl:space-x-reverse text-base font-medium"
                  >
                    {formFields.email.icon}
                    <span>{formFields.email.label}</span>
                    <span className="text-red-500 text-lg">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type={formFields.email.type}
                    required={formFields.email.required}
                    autoComplete={formFields.email.autoComplete}
                    placeholder={formFields.email.placeholder}
                    className={cn(
                      "h-12 text-base transition-all duration-200",
                      state.errors?.email ? formFields.email.errorColor : formFields.email.normalColor
                    )}
                  />
                  {state.errors?.email && (
                    <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {state.errors.email[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-3">
                <Label
                  htmlFor="phone"
                  className="flex items-center space-x-2 rtl:space-x-reverse text-base font-medium"
                >
                  {formFields.phone.icon}
                  <span>{formFields.phone.label}</span>
                  <span className="text-muted-gray text-sm bg-gray-100 px-2 py-1 rounded">
                    ({switchData("اختياري", "Optional")})
                  </span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type={formFields.phone.type}
                  autoComplete={formFields.phone.autoComplete}
                  placeholder={formFields.phone.placeholder}
                  className={cn("h-12 text-base transition-all duration-200", formFields.phone.normalColor)}
                />
                <p className="text-xs text-muted-gray">
                  {switchData(
                    "إضافة رقم الهاتف يساعدنا في التواصل السريع معك عند الضرورة",
                    "Adding your phone number helps us contact you quickly when necessary"
                  )}
                </p>
              </div>

              {/* Message Field */}
              <div className="space-y-3">
                <Label
                  htmlFor="message"
                  className="flex items-center space-x-2 rtl:space-x-reverse text-base font-medium"
                >
                  {formFields.message.icon}
                  <span>{formFields.message.label}</span>
                  <span className="text-red-500 text-lg">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required={formFields.message.required}
                  placeholder={formFields.message.placeholder}
                  rows={8}
                  className={cn(
                    "resize-none text-base transition-all duration-200 leading-relaxed",
                    state.errors?.message ? formFields.message.errorColor : formFields.message.normalColor
                  )}
                />
                {state.errors?.message && (
                  <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {state.errors.message[0]}
                  </p>
                )}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                    {switchData(
                      "💡 لضمان تقديم أفضل خدمة، يُرجى ذكر: نوع المشروع، الميزانية المتوقعة، الجدول الزمني، والمتطلبات التقنية إن وجدت.",
                      "💡 For the best service, please mention: project type, expected budget, timeline, and technical requirements if any."
                    )}
                  </p>
                </div>
              </div>

              {/* Enhanced Submit Button */}
              <div className="pt-6">
                <SubmitButton />
                <p className="text-center text-sm text-muted-gray mt-4">
                  {switchData(
                    "بإرسال هذا النموذج، أنت توافق على سياسة الخصوصية الخاصة بنا",
                    "By submitting this form, you agree to our privacy policy"
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--vooksio-purple)]/5 to-[var(--vooksio-cyan)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-navy mb-4">
            {switchData("تفضل المراسلة المباشرة؟", "Prefer Direct Communication?")}
          </h2>
          <p className="text-muted-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            {switchData(
              "يمكنك أيضاً التواصل معنا مباشرة عبر بريدنا الإلكتروني. نضمن الرد خلال 24 ساعة من أيام العمل.",
              "You can also reach us directly at our email address. We guarantee a response within 24 business hours."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="sm"
              className="btn-vooksio-secondary px-8 py-4 vooksio-hover-shadow"
              onClick={() => (window.location.href = "mailto:hello@vooksio.com")}
            >
              <Mail className="h-5 w-5" />
              hello@vooksio.com
            </Button>
            <RefreshLink variant="outline" className="px-8 py-4 text-card-forground" href={`/${language}`}>
              {switchData("العودة للرئيسية", "Back to Home")}
            </RefreshLink>
          </div>

          {/* Additional contact methods */}
          <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 max-w-2xl mx-auto">
            <h3 className="font-semibold text-dark-navy mb-4">
              {switchData("معلومات إضافية", "Additional Information")}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-gray">
              <div>
                <strong>{switchData("ساعات العمل:", "Business Hours:")}</strong>
                <br />
                {switchData("الأحد - الخميس: 9 ص - 6 م", "Sunday - Thursday: 9 AM - 6 PM")}
              </div>
              <div>
                <strong>{switchData("المنطقة الزمنية:", "Time Zone:")}</strong>
                <br />
                {switchData("توقيت القاهرة (GMT+2)", "Cairo Time (GMT+2)")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
