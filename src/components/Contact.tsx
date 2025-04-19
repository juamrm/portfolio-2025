import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactIcons = () => {
  return (
    <div className="flex items-center gap-6">
      <a
        href="mailto:juliana.amrm@gmail.com"
        className="w-12 h-12 rounded-full bg-[#f8f8f8] flex items-center justify-center hover:bg-app-secondary/10 transition-all duration-300 group"
        aria-label="Send email"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-app-secondary transform group-hover:scale-110 transition-transform duration-300"
        >
          <path
            d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href="https://wa.me/34635800212"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#f8f8f8] flex items-center justify-center hover:bg-app-secondary/10 transition-all duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-app-secondary transform group-hover:scale-110 transition-transform duration-300"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 13.7 2.43 15.3 3.18 16.7L2 22L7.3 20.82C8.7 21.57 10.3 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C10.5 20 9 19.6 7.7 18.9L7.4 18.7L4.3 19.4L5 16.3L4.8 16C4.1 14.7 3.7 13.2 3.7 11.7C3.7 7.4 7.4 3.7 11.7 3.7C16 3.7 19.7 7.4 19.7 11.7C20 16 16.3 20 12 20ZM16.5 14.2C16.2 14.1 15 13.5 14.7 13.4C14.4 13.3 14.2 13.3 14 13.6C13.8 13.9 13.3 14.4 13.1 14.6C12.9 14.8 12.7 14.9 12.4 14.7C12.1 14.5 11.3 14.2 10.4 13.4C9.7 12.7 9.2 11.9 9 11.6C8.8 11.3 9 11.1 9.2 10.9C9.4 10.7 9.6 10.4 9.7 10.2C9.8 10 9.9 9.8 9.8 9.6C9.7 9.4 9.2 8.2 9 7.6C8.8 7 8.5 7.1 8.3 7.1H7.7C7.5 7.1 7.1 7.2 6.8 7.5C6.5 7.8 5.9 8.4 5.9 9.6C5.9 10.8 6.7 12 6.9 12.2C7.1 12.4 9.2 15.5 12.3 16.5C13 16.8 13.5 17 13.9 17.1C14.6 17.3 15.2 17.3 15.7 17.2C16.2 17.1 17.2 16.5 17.4 15.8C17.6 15.1 17.6 14.5 17.5 14.4C17.4 14.3 17.2 14.3 16.5 14.2Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};

export const Contact = (): JSX.Element => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.errors.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Juliana",
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <section id="contact" className="w-full mb-8 md:mb-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-dm-sans text-2xl md:text-3xl text-main-black tracking-tight leading-tight mb-4">
              {t("contact.cta.title")}
            </h2>
            <p className="font-dm-sans text-base md:text-lg text-main-gray mb-12">
              {t("contact.cta.description")}
            </p>

            <ContactIcons />
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#f8f8f8] p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-dm-sans text-sm text-main-black mb-2"
                >
                  {t("contact.form.name.label")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white border transition-colors duration-200 font-dm-sans ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-200 focus:border-app-secondary focus:ring-1 focus:ring-app-secondary"
                  }`}
                  placeholder={t("contact.form.name.placeholder")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-dm-sans text-sm text-main-black mb-2"
                >
                  {t("contact.form.email.label")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-white border transition-colors duration-200 font-dm-sans ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-200 focus:border-app-secondary focus:ring-1 focus:ring-app-secondary"
                  }`}
                  placeholder={t("contact.form.email.placeholder")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-dm-sans text-sm text-main-black mb-2"
                >
                  {t("contact.form.message.label")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-white border transition-colors duration-200 font-dm-sans resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-200 focus:border-app-secondary focus:ring-1 focus:ring-app-secondary"
                  }`}
                  placeholder={t("contact.form.message.placeholder")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl">
                  {t("contact.form.successMessage")}
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl">
                  {t("contact.form.errorMessage")}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-main-black text-white font-dm-sans py-4 px-8 rounded-xl transition-all duration-200 ${
                  isSubmitting
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:bg-app-secondary"
                }`}
              >
                {isSubmitting
                  ? t("contact.form.submitting")
                  : t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
