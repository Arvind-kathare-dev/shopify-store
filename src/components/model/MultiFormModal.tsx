"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Phone, CheckCircle, X, ChevronDown, ArrowBigRight, ArrowRight, ArrowLeft } from "lucide-react";
import { StepIndicator } from "../StepIndicator";
import { CustomInput } from "../ui/CustomInput";
import { ACHIEVE_OPTIONS, FEATURES_OPTIONS, LAUNCH_OPTIONS, REVENUE_OPTIONS, SELL_OPTIONS } from "@/constants/multiStepData";
import { slideVariants } from "@/lib/motion";
import { CustomSelect } from "../ui/CustomSelect";
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

// ─── Modal ────────────────────────────────────────────────────────────────────
interface ModalProps {
  onClose: () => void;
}

export function FormModal({ onClose }: ModalProps) {
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

  const validateStep = () => {
    let schema:any;

    if (step === 1) {
      schema = formSchema.pick({
        fullName: true,
        workEmail: true,
        phone: true,
      });
    }

    if (step === 2) {
      schema = formSchema.pick({
        storeName: true,
        storeUrl: true,
        whatDoYouSell: true,
      });
    }

    if (step === 3) {
      schema = formSchema.pick({
        achieve: true,
        launchSoon: true,
        features: true,
        monthlyRevenue: true,
      });
    }

    const result = schema.safeParse(form);

    if (result.success) {
      setErrors({});
      return true;
    }

    const fieldErrors: Record<string, string> = {};

    Object?.entries(result.error.flatten().fieldErrors).forEach(
      ([key, value]:any) => {
        if (value?.[0]) fieldErrors[key] = value[0];
      }
    );

    setErrors(fieldErrors);
    return false;
  };

  const canNext = () => {
    if (step === 1) return form.fullName.trim() && form.workEmail.trim();
    if (step === 2) return form.storeName.trim() && form.storeUrl.trim();
    if (step === 3) return form.achieve && form.launchSoon;
    return false;
  };

  const next = async () => {
    if (!validateStep()) return;

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
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal shell */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[1240px] 
                     overflow-visible bg-primary rounded-2xl sm:rounded-3xl will-change-transform shadow-2xl 
                     flex flex-col lg:flex-row p-4 sm:p-6 md:p-8 max-h-[90vh] sm:max-h-[85vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-10 sm:-top-12 right-2 sm:right-3 w-9 h-9 sm:w-10 sm:h-10 
                       rounded-full bg-white shadow-lg flex items-center justify-center 
                       hover:bg-gray-50 transition z-20"
          >
            <X size={18} className="text-red-500" />
          </button>

          {/* ── Left panel ── */}
          <div className="hidden lg:flex flex-col justify-between max-w-[341px] max-h-[465px] flex-shrink-0 pr-6">
            <div className="flex flex-col gap-[17px]">
              <p className="text-sm font-normal tracking-tight text-primary-light uppercase">
                Free Strategy Call
              </p>
              <h2 className="text-[40px] leading-[55px] font-bold text-white">
                Ready to launch your mobile app?
              </h2>
              <p className="text-primary-light text-base">
                Tell us about your store and we'll put together a custom mobile growth plan — completely free, no commitment.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {TRUST.map(({ icon, text }) => (
                <div key={text} className="flex w-fit text-sm text-white items-center gap-2.5 bg-primary-dark rounded-[15px] px-[19px] py-[17px]">
                  <span className="text-purple-300">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile header - visible only on mobile/tablet */}
          <div className="lg:hidden mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm font-normal tracking-tight text-primary-light uppercase mb-2">
              Free Strategy Call
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to launch your mobile app?
            </h2>
          </div>

          {/* ── Right panel: form card ── */}
          <div className="flex-1 w-full lg:max-w-[715px] bg-white rounded-xl sm:rounded-2xl 
                          p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col overflow-hidden relative 
                          lg:m-3 max-h-full">
            <AnimatePresence mode="wait">
              {done ? (
                /* Success */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center flex-1 text-center gap-3 sm:gap-4 py-6 sm:py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, delay: 0.1 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-100 flex items-center justify-center"
                  >
                    <CheckCircle size={28} className="sm:w-8 sm:h-8 text-purple-600" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">You're all set!</h3>
                  <p className="text-gray-500 text-xs sm:text-sm max-w-[240px] px-4">
                    We'll reach out within 24 hours to schedule your free strategy call.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 bg-purple-600 text-white text-sm font-semibold px-5 sm:px-6 py-2 sm:py-2.5 
                               rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex flex-col flex-1 overflow-hidden"
                >
                  <StepIndicator current={step} />

                  {/* Scrollable step content */}
                  <div 
                    className="flex-1 overflow-y-auto overflow-x-hidden px-1 pt-4 sm:pt-5 
                               scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" 
                    style={{ 
                      maxHeight: 'calc(100% - 140px)',
                      minHeight: '280px'
                    }}
                  >
                    <AnimatePresence mode="wait" custom={dir}>
                      {step === 1 && (
                        <motion.div 
                          key="s1" 
                          custom={dir} 
                          variants={slideVariants(dir)} 
                          initial="initial" 
                          animate="animate" 
                          exit="exit" 
                          className="flex flex-col gap-3 sm:gap-4"
                        >
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Tell us about yourself</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">
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

                      {step === 2 && (
                        <motion.div 
                          key="s2" 
                          custom={dir} 
                          variants={slideVariants(dir)} 
                          initial="initial" 
                          animate="animate" 
                          exit="exit" 
                          className="flex flex-col gap-3 sm:gap-4"
                        >
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">Tell us about your Store</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">
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

                      {step === 3 && (
                        <motion.div 
                          key="s3" 
                          custom={dir} 
                          variants={slideVariants(dir)} 
                          initial="initial" 
                          animate="animate" 
                          exit="exit" 
                          className="flex flex-col gap-3 sm:gap-4"
                        >
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">What are your goals?</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">
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
                            required
                          />
                          <CustomSelect 
                            label="What is your monthly revenue?" 
                            options={REVENUE_OPTIONS} 
                            value={form.monthlyRevenue} 
                            onChange={set("monthlyRevenue")}
                            error={errors.monthlyRevenue}
                            required
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 flex-shrink-0">
                    {step > 1 ? (
                      <button 
                        onClick={back} 
                        className="text-xs sm:text-sm text-gray-400 hover:text-gray-600 transition-colors 
                                   font-medium flex items-center gap-1.5 sm:gap-2"
                      >
                        <ArrowLeft size={18} className="sm:w-5 sm:h-5"/>
                        Back
                      </button>
                    ) : <div />}

                    <motion.button
                      whileHover={{ scale: canNext() && !loading ? 1.03 : 1 }}
                      whileTap={{ scale: canNext() && !loading ? 0.97 : 1 }}
                      onClick={next}
                      disabled={!canNext() || loading}
                      className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 
                                  rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        loading
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : canNext()
                          ? "bg-secondary hover:opacity-80 text-white shadow-lg shadow-purple-200"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {loading ? "Submitting..." : "Continue"}
                      {!loading && <ArrowRight size={18} className="sm:w-5 sm:h-5" />}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile trust badges - visible only on mobile/tablet */}
          <div className="lg:hidden mt-4 flex flex-col gap-2">
            {TRUST.map(({ icon, text }) => (
              <div 
                key={text} 
                className="flex w-full text-xs sm:text-sm text-white items-center gap-2 
                           bg-primary-dark rounded-xl px-3 sm:px-4 py-2.5 sm:py-3"
              >
                <span className="text-purple-300 flex-shrink-0">{icon}</span>
                <span className="flex-1">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}