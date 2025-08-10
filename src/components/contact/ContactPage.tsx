"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowLeft, Send, Mail, Phone, User, MessageSquare, CheckCircle, MapPin, Clock } from "lucide-react";
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

  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="w-full btn-vooksio-primary px-8 py-4 vooksio-hover-shadow"
      isLoading={pending}
      icon={<Send className="h-5 w-5" />}
    >
      {switchData("إرسال الرسالة", "Send Message")}
    </Button>
  );
}

export const ContactPage = () => {
  const language = useLocale();
  const { switchData } = useSwitchData();
  const initialState: FormState = {
    success: false,
    message: "",
    errors: {},
  };

  const [state, formAction] = useActionState(submitContactForm, initialState);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" style={{ color: "var(--vooksio-cyan)" }} />,
      title: switchData("راسلنا", "Email Us"),
      content: "hello@vooksio.com",
      description: switchData("أرسل لنا بريداً إلكترونياً في أي وقت", "Send us an email anytime"),
    },
    {
      icon: <Clock className="w-6 h-6" style={{ color: "var(--vooksio-emerald)" }} />,
      title: switchData("وقت الاستجابة", "Response Time"),
      content: switchData("24 ساعة", "24 hours"),
      description: switchData("نرد عادة خلال يوم واحد", "We typically respond within a day"),
    },
    {
      icon: <MapPin className="w-6 h-6" style={{ color: "var(--vooksio-orange)" }} />,
      title: switchData("الموقع", "Location"),
      content: switchData("عمل عن بعد عالمياً", "Global Remote"),
      description: switchData("نعمل مع عملاء من جميع أنحاء العالم", "Working with clients worldwide"),
    },
  ];

  // Show success message if form was submitted successfully
  if (state.success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-input-background via-white to-input-background flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-gradient-to-r from-[var(--vooksio-emerald)] to-[var(--vooksio-cyan)] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-dark-navy">{switchData("تم إرسال الرسالة!", "Message Sent!")}</h1>
          <p className="text-muted-gray leading-relaxed">
            {switchData(
              "شكراً لتواصلك معنا! سنرد عليك خلال 24 ساعة.",
              "Thank you for reaching out! We'll get back to you within 24 hours."
            )}
          </p>
          <RefreshLink href={`/${language}`} className="text-blue-500 hover:underline" variant="outline">
            <ArrowLeft
              className={cn("h-4 w-4", {
                "rotate-180": language === "en",
              })}
            />
            {switchData("العودة للرئيسية", "Back to Home")}
          </RefreshLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-input-background via-white to-input-background">
      {/* Header */}
      <SubPageHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden vooksio-animated-bg py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[var(--vooksio-purple)] to-[var(--vooksio-cyan)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--vooksio-emerald)] to-[var(--vooksio-orange)] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-dark-navy">
                {switchData("تواصل معنا", "Get in Touch")}
              </h1>
              <p className="text-xl lg:text-2xl text-muted-gray max-w-3xl mx-auto">
                {switchData(
                  "مستعد لإحياء أفكارك؟ دعنا نناقش مشروعك.",
                  "Ready to bring your ideas to life? Let's discuss your project."
                )}
              </p>
            </div>
            <p className="text-lg text-muted-gray max-w-4xl mx-auto leading-relaxed">
              {switchData(
                "سواء كنت تحتاج إلى تطوير البرمجيات أو التعليم التقني أو استشارات المنتجات، نحن هنا لمساعدتك على النجاح.",
                "Whether you need software development, technical education, or product consulting, we're here to help you succeed."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="vooksio-card p-6 rounded-xl text-center">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="font-semibold text-dark-navy mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-dark-navy mb-2">{info.content}</p>
                <p className="text-sm text-muted-gray">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="vooksio-card rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-navy mb-4">
                {switchData("أرسل لنا رسالة", "Send us a Message")}
              </h2>
              <p className="text-muted-gray">
                {switchData(
                  "املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن.",
                  "Fill out the form below and we'll get back to you as soon as possible."
                )}
              </p>
            </div>

            {/* Show error message if submission failed */}
            {!state.success && state.message && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{state.message}</p>
              </div>
            )}

            <form action={formAction} className="space-y-6">
              {/* Hidden field for language */}
              <input type="hidden" name="language" value={language} />

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2 rtl:space-x-reverse">
                    <User className="w-4 h-4" style={{ color: "var(--vooksio-purple)" }} />
                    <span>{switchData("الاسم الكامل", "Full Name")}</span>
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={switchData("أدخل اسمك الكامل", "Enter your full name")}
                    className={`h-12 ${
                      state.errors?.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[var(--vooksio-purple)]/20 focus-visible:ring-[var(--vooksio-purple)]"
                    }`}
                  />
                  {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name[0]}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Mail className="w-4 h-4" style={{ color: "var(--vooksio-cyan)" }} />
                    <span>{switchData("البريد الإلكتروني", "Email Address")}</span>
                    <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={switchData("أدخل بريدك الإلكتروني", "Enter your email address")}
                    className={`h-12 ${
                      state.errors?.email
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-[var(--vooksio-cyan)]/20 focus-visible:ring-[var(--vooksio-cyan)]"
                    }`}
                  />
                  {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email[0]}</p>}
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Phone className="w-4 h-4" style={{ color: "var(--vooksio-emerald)" }} />
                  <span>{switchData("رقم الهاتف", "Phone Number")}</span>
                  <span className="text-muted-gray text-sm">({switchData("اختياري", "Optional")})</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={switchData("أدخل رقم هاتفك", "Enter your phone number")}
                  className="h-12 border-[var(--vooksio-emerald)]/20 focus-visible:ring-[var(--vooksio-emerald)]"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center space-x-2 rtl:space-x-reverse">
                  <MessageSquare className="w-4 h-4" style={{ color: "var(--vooksio-orange)" }} />
                  <span>{switchData("الرسالة", "Message")}</span>
                  <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder={switchData(
                    "أخبرنا عن مشروعك أو أهدافك أو أي أسئلة لديك...",
                    "Tell us about your project, goals, or any questions you have..."
                  )}
                  rows={6}
                  className={`resize-none ${
                    state.errors?.message
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-[var(--vooksio-orange)]/20 focus-visible:ring-[var(--vooksio-orange)]"
                  }`}
                />
                {state.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message[0]}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--vooksio-purple)]/5 to-[var(--vooksio-cyan)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-navy mb-8">
            {switchData("تفضل المراسلة مباشرة؟", "Prefer to Email Directly?")}
          </h2>
          <p className="text-muted-gray mb-8 max-w-2xl mx-auto">
            {switchData(
              "يمكنك أيضاً التواصل معنا مباشرة عبر بريدنا الإلكتروني. نرد عادة خلال 24 ساعة.",
              "You can also reach us directly at our email address. We typically respond within 24 hours."
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
        </div>
      </section>
    </div>
  );
};
