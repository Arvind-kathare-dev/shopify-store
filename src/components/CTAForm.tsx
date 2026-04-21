// sections/CTAFormAdvanced.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Phone, ShieldCheck, Check, CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { CustomInput } from "@/components/ui/CustomInput";
import { StepIndicator } from "@/components/StepIndicator";
import { slideVariants } from "@/lib/motion";
import { ACHIEVE_OPTIONS, FEATURES_OPTIONS, LAUNCH_OPTIONS, REVENUE_OPTIONS, SELL_OPTIONS } from "@/constants/multiStepData";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { formSchema } from "@/lib/validation";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  // Step 1
  fullName: string;
  workEmail: string;
  phone: string;
  // Step 2
  storeName: string;
  storeUrl: string;
  whatDoYouSell: string;
  // Step 3
  achieve: string;
  launchSoon: string;
  features: string;
  monthlyRevenue: string;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CTAForm() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  
  const [form, setForm] = useState<FormData>({
    fullName: "", workEmail: "", phone: "",
    storeName: "", storeUrl: "", whatDoYouSell: "",
    achieve: "", launchSoon: "", features: "", monthlyRevenue: "",
  });

  const set = (field: keyof FormData) => (v: string) => setForm((p) => ({ ...p, [field]: v }));

  const canNext = () => {
    if (step === 1) return form.fullName.trim() && form.workEmail.trim();
    if (step === 2) return form.storeName.trim() && form.storeUrl.trim();
    if (step === 3) return form.achieve && form.launchSoon;
    return false;
  };

  const resetForm = () => {
    setStep(1);
    setDir(1);
    setDone(false);
    setErrors({});
    setLoading(false);

    setForm({
      fullName: "",
      workEmail: "",
      phone: "",
      storeName: "",
      storeUrl: "",
      whatDoYouSell: "",
      achieve: "",
      launchSoon: "",
      features: "",
      monthlyRevenue: "",
    });
  };

  const validateStep = () => {
    const result = formSchema.safeParse(form);

    if (result.success) {
      setErrors({});
      return true;
    }

    const fieldErrors: Record<string, string> = {};

    Object.entries(result.error.flatten().fieldErrors).forEach(
      ([key, value]) => {
        if (value?.[0]) fieldErrors[key] = value[0];
      }
    );

    setErrors(fieldErrors);
    return false;
  };

  const next = async () => {
    if (!canNext()) return;

    if (step === 3) {
      try {
        setLoading(true);

        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (!res.ok) {
          alert(data.error || "Submission failed");
          return;
        }

        setDone(true);
      } catch (err) {
        alert("Network error");
      } finally {
        setLoading(false);
      }

      return;
    }

    setDir(1);
    setStep((s) => s + 1);
  };
  
  const back = () => { setDir(-1); setStep((s) => s - 1); };

  const TRUST = [
    { icon: <Lock size={14} />, text: "Your data is private and never shared" },
    { icon: <Phone size={14} />, text: "We'll reach out within 24 hours" },
    { icon: <span className="text-xs">✓</span>, text: "No credit card required" },
  ];

  return (
    <section className="w-full min-h-screen lg:min-h-[600px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[73px] 
                        py-8 sm:py-12 md:py-16 lg:py-20 xl:py-[90px] bg-primary 
                        flex justify-center items-center">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 w-full max-w-7xl bg-primary overflow-hidden 
                   flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16"
      >
        {/* ── Left Panel (Desktop) ── */}
        <div className="hidden lg:flex flex-col justify-between gap-8 lg:gap-10 
                        max-w-[280px] xl:max-w-[341px] flex-shrink-0">
          {/* Header Content */}
          <div className="flex flex-col gap-4 lg:gap-[17px]">
            <p className="font-normal text-xs lg:text-sm leading-none tracking-[0.1em] 
                          uppercase text-primary-light">
              Free Strategy Call
            </p>
            <h2 className="font-bold text-3xl lg:text-[36px] xl:text-[40px] 
                           leading-tight lg:leading-[48px] xl:leading-[55px] 
                           tracking-normal text-white">
              Ready to launch your mobile app?
            </h2>
            <p className="text-primary-light font-normal text-sm lg:text-base 
                          leading-relaxed lg:leading-[25px] tracking-normal">
              Tell us about your store and we'll put together a custom mobile growth plan — 
              completely free, no commitment.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col gap-2.5 lg:gap-3">
            {TRUST.map(({ icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="w-fit flex font-sans font-normal text-xs lg:text-sm 
                           leading-none tracking-normal text-white items-center 
                           gap-2 lg:gap-[11px] bg-primary-dark rounded-xl lg:rounded-[15px] 
                           px-4 lg:px-[19px] py-3 lg:py-[17px] 
                           hover:bg-primary-dark/80 transition-colors duration-200"
              >
                <span className="text-purple-300 flex-shrink-0">{icon}</span>
                <span className="whitespace-nowrap">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Header (Visible on Mobile/Tablet) */}
        <div className="lg:hidden mb-4 sm:mb-6">
          <p className="font-normal text-xs sm:text-sm leading-none tracking-[0.1em] 
                        uppercase text-primary-light mb-2">
            Free Strategy Call
          </p>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl 
                         leading-tight text-white mb-3">
            Ready to launch your mobile app?
          </h2>
          <p className="text-primary-light font-normal text-sm sm:text-base 
                        leading-relaxed max-w-2xl">
            Tell us about your store and we'll put together a custom mobile growth plan — 
            completely free, no commitment.
          </p>
        </div>

        {/* ── Right Panel: Form Card ── */}
        <div className="flex-1 w-full lg:max-w-[600px] xl:max-w-[715px] 
                        bg-white rounded-xl sm:rounded-2xl 
                        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[42px] 
                        py-5 sm:py-6 md:py-8 lg:py-[35px] 
                        flex flex-col overflow-hidden relative 
                        shadow-xl lg:shadow-2xl">
          <AnimatePresence mode="wait">
            {done ? (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center flex-1 
                           text-center gap-3 sm:gap-4 py-8 sm:py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-100 
                             flex items-center justify-center"
                >
                  <Check size={28} className="sm:w-8 sm:h-8 text-purple-600" />
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg sm:text-xl font-bold text-gray-900"
                >
                  You're all set!
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-500 text-sm sm:text-base max-w-[280px] px-4"
                >
                  We'll reach out within 24 hours to schedule your free strategy call.
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetForm}
                  className="mt-2 sm:mt-4 bg-purple-600 text-white text-sm sm:text-base 
                             font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
                             hover:bg-purple-700 transition-colors duration-200 
                             shadow-lg hover:shadow-xl"
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              /* ── Form State ── */
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col flex-1 min-h-0"
              >
                {/* Step Indicator */}
                <div className="mb-6 sm:mb-8 lg:mb-[47px]">
                  <StepIndicator current={step} />
                </div>

                {/* Scrollable Step Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden 
                                scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 
                                pr-1 sm:pr-2"
                     style={{ maxHeight: 'calc(100vh - 400px)', minHeight: '300px' }}
                >
                  <AnimatePresence mode="wait" custom={dir}>
                    {/* ── Step 1: Personal Info ── */}
                    {step === 1 && (
                      <motion.div
                        key="s1"
                        custom={dir}
                        variants={slideVariants(dir)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col gap-5 sm:gap-6 lg:gap-[37px] pb-4"
                      >
                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-gray-900">
                            Tell us about yourself
                          </h3>
                          <p className="text-neutral text-xs sm:text-[13px] leading-relaxed">
                            We'll use this to prepare a tailored plan before we speak.
                          </p>
                        </div>
                        
                        <CustomInput
                          label="Full Name"
                          placeholder="Sarah Johnson"
                          value={form.fullName}
                          onChange={set("fullName")}
                          required
                          error={errors.fullName}
                        />
                        
                        <CustomInput
                          label="Work Email"
                          placeholder="Sarah@yourstore.com"
                          value={form.workEmail}
                          onChange={set("workEmail")}
                          type="email"
                          required
                          error={errors.workEmail}
                        />
                        
                        <CustomInput
                          label="Phone (optional)"
                          placeholder="+1 555 000 0000"
                          value={form.phone}
                          onChange={set("phone")}
                          type="tel"
                          error={errors.phone}
                        />
                      </motion.div>
                    )}

                    {/* ── Step 2: Store Info ── */}
                    {step === 2 && (
                      <motion.div
                        key="s2"
                        custom={dir}
                        variants={slideVariants(dir)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col gap-4 sm:gap-5 lg:gap-6 pb-4"
                      >
                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                            Tell us about your Store
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            We'll use this to understand your business and tailor your app experience.
                          </p>
                        </div>
                        
                        <CustomInput
                          label="Store Name"
                          placeholder="Your Store Name"
                          value={form.storeName}
                          onChange={set("storeName")}
                          required
                          error={errors.storeName}
                        />
                        
                        <CustomInput
                          label="Store URL"
                          placeholder="https://yourstore.myshopify.com"
                          value={form.storeUrl}
                          onChange={set("storeUrl")}
                          required
                          error={errors.storeUrl}
                        />
                        
                        <CustomSelect
                          label="What do you Sell?"
                          options={SELL_OPTIONS}
                          value={form.whatDoYouSell}
                          onChange={set("whatDoYouSell")}
                          required
                          error={errors.whatDoYouSell}
                        />
                      </motion.div>
                    )}

                    {/* ── Step 3: Goals ── */}
                    {step === 3 && (
                      <motion.div
                        key="s3"
                        custom={dir}
                        variants={slideVariants(dir)}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col gap-4 sm:gap-5 lg:gap-6 pb-4"
                      >
                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                            What are your goals?
                          </h3>
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                            Help us understand what success looks like for you.
                          </p>
                        </div>
                        
                        <CustomSelect
                          label="What do you want to achieve with your mobile app?"
                          options={ACHIEVE_OPTIONS}
                          value={form.achieve}
                          onChange={set("achieve")}
                          required
                          error={errors.achieve}
                        />
                        
                        <CustomSelect
                          label="How soon do you want to launch?"
                          options={LAUNCH_OPTIONS}
                          value={form.launchSoon}
                          onChange={set("launchSoon")}
                          required
                          error={errors.launchSoon}
                        />
                        
                        <CustomSelect
                          label="What features are most important to you?"
                          options={FEATURES_OPTIONS}
                          value={form.features}
                          onChange={set("features")}
                          error={errors.features}
                        />
                        
                        <CustomSelect
                          label="What is your monthly revenue?"
                          options={REVENUE_OPTIONS}
                          value={form.monthlyRevenue}
                          onChange={set("monthlyRevenue")}
                          error={errors.monthlyRevenue}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ── Action Buttons ── */}
                <div className="flex items-center justify-between 
                                mt-4 sm:mt-6 pt-4 sm:pt-5 
                                border-t border-gray-100 flex-shrink-0">
                  {step > 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.05, x: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={back}
                      className="text-xs sm:text-sm text-gray-400 hover:text-gray-600 
                                 transition-colors duration-200 font-medium 
                                 flex items-center gap-1.5 sm:gap-2"
                    >
                      <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
                      Back
                    </motion.button>
                  ) : (
                    <div />
                  )}

                  <motion.button
                    whileHover={{ scale: canNext() && !loading ? 1.05 : 1 }}
                    whileTap={{ scale: canNext() && !loading ? 0.95 : 1 }}
                    onClick={next}
                    disabled={!canNext() || loading}
                    className={`
                      flex items-center gap-1.5 sm:gap-2 
                      px-5 sm:px-6 lg:px-8 
                      py-2.5 sm:py-3 
                      rounded-full 
                      text-xs sm:text-sm lg:text-base 
                      font-semibold 
                      transition-all duration-200 
                      ${
                        loading
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : canNext()
                          ? "bg-secondary hover:opacity-90 text-white shadow-lg shadow-purple-200 hover:shadow-xl"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }
                    `}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 sm:h-5 sm:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Continue</span>
                        <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Trust Badges (Visible on Mobile/Tablet) */}
        <div className="lg:hidden flex flex-col gap-2 sm:gap-2.5 mt-4 sm:mt-6">
          {TRUST.map(({ icon, text }) => (
            <div
              key={text}
              className="flex w-full text-xs sm:text-sm text-white items-center 
                         gap-2 sm:gap-2.5 bg-primary-dark rounded-xl 
                         px-3 sm:px-4 py-2.5 sm:py-3 
                         hover:bg-primary-dark/80 transition-colors duration-200"
            >
              <span className="text-purple-300 flex-shrink-0">{icon}</span>
              <span className="flex-1">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}