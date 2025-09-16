import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactImg from "@/assets/images/cta.webp";
import ContactImgSVG from "@/assets/images/Book_a_call.svg?url";
import LeftArrow from "@/assets/icons/LeftArrow.svg";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const fadeIn = (dir: "left" | "right" | "up" | "down" = "up", delay = 0) => {
  const delta =
    dir === "left" ? -24 : dir === "right" ? 24 : dir === "up" ? 24 : -24;
  const axis = dir === "left" || dir === "right" ? { x: delta } : { y: delta };
  return {
    initial: { opacity: 0, ...axis },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut", delay },
  };
};

const Contact: React.FC = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const emailRegex = useMemo(
    () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    []
  );
  const phoneRegex = useMemo(() => /^[+()\-\s\d]{6,20}$/g, []);

  function validate(v: FormValues) {
    const e: Partial<Record<keyof FormValues, string>> = {};
    if (!v.firstName.trim()) e.firstName = "First name is required.";
    else if (v.firstName.trim().length < 2)
      e.firstName = "First name must be at least 2 characters.";
    if (!v.lastName.trim()) e.lastName = "Last name is required.";
    else if (v.lastName.trim().length < 2)
      e.lastName = "Last name must be at least 2 characters.";
    if (!v.email.trim()) e.email = "Email is required.";
    else if (!emailRegex.test(v.email))
      e.email = "Enter a valid email address.";
    if (!v.message.trim()) e.message = "Please write a message.";
    else if (v.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    // optional phone (validate only if provided)
    if (v.phone && !phoneRegex.test(v.phone))
      e.phone = "Enter a valid phone number.";
    return e;
  }

  function onChange<K extends keyof FormValues>(key: K) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues((prev) => ({ ...prev, [key]: value }));
      if (errors[key]) {
        const next = { ...errors };
        delete next[key];
        setErrors(next);
      }
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatusMsg({ type: null, text: "" });

    const vErrors = validate(values);
    setErrors(vErrors);
    if (Object.keys(vErrors).length > 0) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatusMsg({
        type: "error",
        text: "Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your environment.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const templateParams = {
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        phone: values.phone,
        message: values.message,
      } as Record<string, unknown>;

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatusMsg({
        type: "success",
        text: "Message sent! We'll get back to you shortly.",
      });
      setValues(initialValues);
    } catch (err: any) {
      setStatusMsg({
        type: "error",
        text:
          err?.text ||
          err?.message ||
          "Something went wrong while sending your message. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="contact"
      className="py-[140px] px-4 md:px-10 flex lg:flex-row flex-col items-center justify-center gap-y-10 gap-x-8"
    >
      {/* Left panel */}
      <motion.div
        className="bg-[#F7F7F7] w-full md:w-[724px] rounded-[20px] py-[30px] px-4 md:px-[40px] gap-x-[23px]"
        {...fadeIn("left", 0)}
      >
        <div>
          <img className="md:px-24" src={ContactImgSVG} alt="Book a call" />
        </div>
        <h2 className="text-desc mt-4 md:mt-0 font-bold text-[20px] md:text-[36px]">
          Ready to Start?
        </h2>
        <p className="text-[#2B2B2B] pt-[12px] pb-[23px] text-[14px] md:text-[20px] ">
          We collaborate with leading global law firms to deliver investment,
          financing, and advisory solutions across the Web3 and capital markets
          landscape.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#B7995B] md:w-fit rounded-[12px] justify-between w-full text-[16px] md:text-xl font-semibold flex gap-x-3 px-[14px] md:px-[26px] py-[10px] md:py-[14px] text-white"
        >
          Arrange a Strategy Session
          <LeftArrow />
        </motion.button>
      </motion.div>

      {/* Right panel (form) */}
      <motion.div
        className="bg-[#F7F7F7] w-full lg:w-[538px] rounded-[20px] py-[30px] px-[16px] md:px-[40px] gap-x-[23px]"
        {...fadeIn("right", 0.1)}
      >
        <h2 className="text-desc font-bold text-[28px] md:text-[36px]">
          Send Message
        </h2>
        <p className="text-[#2B2B2B] pt-[12px] pb-[23px] text-[16px] md:text-[20px] ">
          We partner with top global law firms across investment, financing, and
          advisory. Work with us
        </p>

        {/* Animated status banner */}
        <AnimatePresence>
          {statusMsg.type && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className={
                "mb-4 rounded-[12px] px-4 py-3 text-sm md:text-base " +
                (statusMsg.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200")
              }
            >
              {statusMsg.text}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="flex md:flex-row flex-col w-full justify-between gap-5">
            <div className="space-y-2 w-full">
              <label
                className="text-[16px] md:text-[20px] text-desc font-medium"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className={
                  "px-[26px] py-[14px] w-full rounded-[12px] border transition-shadow focus:shadow-sm " +
                  (errors.firstName
                    ? "border-red-400 focus:outline-red-500"
                    : "border-[#E6E6E6] focus:outline-primary/40")
                }
                type="text"
                value={values.firstName}
                onChange={onChange("firstName")}
                required
                aria-invalid={!!errors.firstName}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
              />
              {errors.firstName && (
                <p
                  id="firstName-error"
                  role="alert"
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.firstName}
                </p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <label
                className="text-[16px] md:text-[20px] text-desc font-medium"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className={
                  "px-[26px] py-[14px] w-full rounded-[12px] border transition-shadow focus:shadow-sm " +
                  (errors.lastName
                    ? "border-red-400 focus:outline-red-500"
                    : "border-[#E6E6E6] focus:outline-primary/40")
                }
                type="text"
                value={values.lastName}
                onChange={onChange("lastName")}
                required
                aria-invalid={!!errors.lastName}
                aria-describedby={
                  errors.lastName ? "lastName-error" : undefined
                }
              />
              {errors.lastName && (
                <p
                  id="lastName-error"
                  role="alert"
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div className="flex md:flex-row flex-col w-full justify-between gap-5">
            <div className="space-y-2 w-full">
              <label
                className="text-[16px] md:text-[20px] text-desc font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="E-mail Address"
                className={
                  "px-[26px] py-[14px] w-full rounded-[12px] border transition-shadow focus:shadow-sm " +
                  (errors.email
                    ? "border-red-400 focus:outline-red-500"
                    : "border-[#E6E6E6] focus:outline-primary/40")
                }
                type="email"
                value={values.email}
                onChange={onChange("email")}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2 w-full">
              <label
                className="text-[16px] md:text-[20px] text-desc font-medium"
                htmlFor="phone"
              >
                Telephone Number
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="e.g +87 762 77652"
                className={
                  "px-[26px] py-[14px] w-full rounded-[12px] border transition-shadow focus:shadow-sm " +
                  (errors.phone
                    ? "border-red-400 focus:outline-red-500"
                    : "border-[#E6E6E6] focus:outline-primary/40")
                }
                type="tel"
                value={values.phone}
                onChange={onChange("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                autoComplete="tel"
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  role="alert"
                  className="text-red-600 text-sm mt-1"
                >
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              className="text-[16px] md:text-[20px] text-desc font-medium"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={
                "px-[26px] w-full h=[132px] md:h-[132px] py-[14px] rounded-[12px] border transition-shadow focus:shadow-sm " +
                (errors.message
                  ? "border-red-400 focus:outline-red-500"
                  : "border-[#E6E6E6] focus:outline-primary/40")
              }
              value={values.message}
              onChange={onChange("message")}
              required
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p
                id="message-error"
                role="alert"
                className="text-red-600 text-sm mt-1"
              >
                {errors.message}
              </p>
            )}
          </div>

          <div className="mt-[30px]">
            <motion.button
              className="bg-primary py-[12px] md:py-[18px] font-bold text-[16px] md:text-2xl w-full text-center rounded-full text-white disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting && (
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeOpacity="0.25"
                    strokeWidth="4"
                  />
                  <path
                    d="M22 12a10 10 0 0 0-10-10"
                    stroke="white"
                    strokeWidth="4"
                  />
                </svg>
              )}
              {isSubmitting ? "Sending…" : "Send Message"}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
