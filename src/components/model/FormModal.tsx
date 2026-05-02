"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Phone, CheckCircle, X, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { StepIndicator } from "../StepIndicator";
import { CustomInput } from "../ui/CustomInput";
import { ACHIEVE_OPTIONS, FEATURES_OPTIONS, LAUNCH_OPTIONS, REVENUE_OPTIONS, SELL_OPTIONS } from "@/constants/multiStepData";
import { slideVariants } from "@/lib/motion";
import { CustomSelect } from "../ui/CustomSelect";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  workEmail: string;
  phone: string;
  storeName: string;
  storeUrl: string;
  whatDoYouSell: string;
  achieve: string;
  launchSoon: string;
  features: string;
  monthlyRevenue: string;
}

interface ModalProps {
  onClose: () => void;
}

export function FormModal({ onClose }: ModalProps) {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "", workEmail: "", phone: "",
    storeName: "", storeUrl: "", whatDoYouSell: "",
    achieve: "", launchSoon: "", features: "", monthlyRevenue: "",
  });

  // Lock scroll when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = originalStyle; };
  }, []);

  const set = (field: keyof FormData) => (v: string) => setForm((p) => ({ ...p, [field]: v }));

  const canNext = () => {
    if (step === 1) return form.fullName.trim() && form.workEmail.trim();
    if (step === 2) return form.storeName.trim() && form.storeUrl.trim();
    if (step === 3) return form.achieve && form.launchSoon;
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
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) throw new Error("Failed");
        setDone(true);
      } catch (err) {
        alert("Submission failed. Please try again.");
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
    { icon: <CheckCircle size={14} />, text: "No credit card required" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal shell */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative z-10 w-full max-w-5xl h-full sm:h-auto sm:max-h-[95vh] md:max-h-[90vh] flex flex-col"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:-top-[46px] sm:right-[3px] z-[80] w-[38px] h-[38px]  rounded-full bg-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl border border-gray-100"
        >
          <X size={18} className="text-[#FF4D4D]" strokeWidth={3} />
        </button>

        <div className="w-full h-full bg-white sm:bg-primary sm:rounded-[32px] shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* ── Left panel (Desktop Only) ── */}
          <div className="hidden lg:flex flex-col justify-between w-[350px] p-12 short:p-8 flex-shrink-0 bg-primary-dark/20 border-r border-white/5">
            <div className="space-y-8">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-light/60">
                Strategy Call
              </p>
              <h2 className="text-4xl font-black text-white leading-[1.1]">
                Ready to launch your app?
              </h2>
              <p className="text-primary-light/80 text-lg leading-relaxed">
                Tell us about your store and we'll put together a custom mobile growth plan — completely free.
              </p>
            </div>
            <div className="space-y-5">
              {TRUST.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-4 text-white/70 text-sm font-normal">
                  <span className="text-secondary">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right panel: form card ── */}
          <div className="flex-1 bg-white flex flex-col h-full overflow-hidden">

            {/* FIXED HEADER */}
            {!done && (
              <div className="flex-none p-6 md:p-10 pb-4 md:pb-6 short:p-5 short:pb-3 border-b border-gray-50 bg-white z-20">
                <div className="lg:hidden space-y-1 mb-6">
                  <p className="text-[10px] font-semibold tracking-widest text-secondary uppercase">Strategy Call</p>
                  <h2 className="text-2xl font-black text-gray-900 leading-tight">Launch your app</h2>
                </div>
                <StepIndicator current={step} />
              </div>
            )}

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 pt-4 md:pt-6 short:p-5 short:pt-3 overscroll-contain custom-scrollbar touch-pan-y" style={{ WebkitOverflowScrolling: "touch" }}>
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center px-4 py-12 md:py-20 short:py-8"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                      className="relative mb-10 short:mb-6"
                    >
                      <div className="absolute inset-0 bg-green-400 blur-3xl opacity-20 rounded-full animate-pulse" />
                      <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center shadow-[0_20px_50px_rgba(34,197,94,0.3)] border-8 border-white">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                        >
                          <CheckCircle2 size={48} className="text-white md:hidden" />
                          <CheckCircle2 size={64} className="text-white hidden md:block" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <div className="space-y-6 max-w-md">
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                          You're all <span className="text-secondary">set!</span>
                        </h3>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <p className="text-gray-500 text-lg leading-relaxed">
                          We've received your details. Our team will reach out within <span className="font-bold text-gray-900">24 hours</span> to schedule your free strategy call.
                        </p>
                      </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-12">
                      <button
                        onClick={onClose}
                        className="group relative inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-2xl hover:opacity-80 transition-all active:scale-95 overflow-hidden"
                      >
                        <span className="relative">Close & Return</span>
                        <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  </motion.div>
                ) : (
                  <div className="h-full">
                    <AnimatePresence mode="wait" custom={dir}>
                      {step === 1 && (
                        <motion.div key="s1" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-6">
                          <div className="space-y-1">
                            <h3 className="text-xl font-black text-gray-900">Tell us about yourself</h3>
                            <p className="text-gray-400 text-sm">We'll prepare a tailored plan for you.</p>
                          </div>
                          <div className="space-y-5 pb-4">
                            <CustomInput label="Full Name" placeholder="Sarah Johnson" value={form.fullName} onChange={set("fullName")} required />
                            <CustomInput label="Work Email" placeholder="sarah@yourstore.com" value={form.workEmail} onChange={set("workEmail")} type="email" required />
                            <CustomInput label="Phone (optional)" placeholder="+1 555 000 000" value={form.phone} onChange={set("phone")} type="tel" />
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div key="s2" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-6">
                          <div className="space-y-1">
                            <h3 className="text-xl font-black text-gray-900">Store Details</h3>
                            <p className="text-gray-400 text-sm">Tell us about your brand.</p>
                          </div>
                          <div className="space-y-5 pb-4">
                            <CustomInput label="Store Name" placeholder="Lumina Beauty" value={form.storeName} onChange={set("storeName")} required />
                            <CustomInput label="Store URL" placeholder="lumina.myshopify.com" value={form.storeUrl} onChange={set("storeUrl")} required />
                            <CustomSelect label="What do you sell?" options={SELL_OPTIONS} value={form.whatDoYouSell} onChange={set("whatDoYouSell")} required />
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div key="s3" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-6">
                          <div className="space-y-1">
                            <h3 className="text-xl font-black text-gray-900">Your Goals</h3>
                            <p className="text-gray-400 text-sm">Help us understand your vision.</p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-4">
                            <CustomSelect label="Primary Goal" options={ACHIEVE_OPTIONS} value={form.achieve} onChange={set("achieve")} required />
                            <CustomSelect label="Timeline" options={LAUNCH_OPTIONS} value={form.launchSoon} onChange={set("launchSoon")} required />
                            <CustomSelect label="Features" options={FEATURES_OPTIONS} value={form.features} onChange={set("features")} />
                            <CustomSelect label="Revenue" options={REVENUE_OPTIONS} value={form.monthlyRevenue} onChange={set("monthlyRevenue")} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* FIXED FOOTER */}
            {!done && (
              <div className="flex-none p-6 md:p-10 pt-4 md:pt-6 short:p-5 short:pt-3 border-t border-gray-50 bg-white z-20">
                <div className="flex items-center justify-between">
                  {step > 1 ? (
                    <button onClick={back} className="text-sm text-gray-400 hover:text-gray-900 transition-colors font-bold flex items-center gap-2 group">
                      <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                      Back
                    </button>
                  ) : <div />}

                  <motion.button
                    whileHover={{ scale: canNext() && !loading ? 1.02 : 1 }}
                    whileTap={{ scale: canNext() && !loading ? 0.98 : 1 }}
                    onClick={next}
                    disabled={!canNext() || loading}
                    className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-black transition-all duration-300 ${loading
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : canNext()
                        ? "bg-secondary text-white shadow-xl shadow-purple-100 hover:opacity-90"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                  >
                    {loading ? "Submitting..." : step === 3 ? "Get My Plan" : "Continue"}
                    {!loading && <ArrowRight size={18} />}
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}