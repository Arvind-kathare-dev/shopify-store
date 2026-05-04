"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Phone, CheckCircle, ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import { CustomInput } from "@/components/ui/CustomInput";
import { StepIndicator } from "@/components/StepIndicator";
import { slideVariants } from "@/lib/motion";
import { ACHIEVE_OPTIONS, FEATURES_OPTIONS, LAUNCH_OPTIONS, REVENUE_OPTIONS, SELL_OPTIONS } from "@/constants/multiStepData";
import { CustomSelect } from "@/components/ui/CustomSelect";

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

export default function CTAFormAdvanced() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
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
    setLoading(false);
    setForm({
      fullName: "", workEmail: "", phone: "",
      storeName: "", storeUrl: "", whatDoYouSell: "",
      achieve: "", launchSoon: "", features: "", monthlyRevenue: "",
    });
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
    { icon: <Check size={14} />, text: "No credit card required" },
  ];

  return (
    <section id="form" className="w-full scroll-mt-20 px-4 py-16 md:py-24 bg-primary overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">

        {/* Left panel (Desktop Only) */}
        <div className="hidden md:flex flex-col gap-10 justify-between max-w-[400px]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-6"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-light/70">Strategy Call</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Ready to launch your mobile app?
            </h2>
            <p className="text-primary-light/90 text-lg leading-relaxed">
              Tell us about your store and we'll put together a custom mobile growth plan — completely free.
            </p>
          </motion.div>
          <div className="flex flex-col gap-4">
            {TRUST.map(({ icon, text }) => (
              <div key={text} className="flex w-fit items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/10">
                <span className="text-secondary">{icon}</span>
                <span className="text-white text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel: form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="flex-1 w-full max-w-[700px] bg-white rounded-[32px] p-6 md:p-12 shadow-2xl flex flex-col min-h-[500px]"
        >
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center flex-1 text-center px-4 py-12"
              >
                {/* Success Icon with Glow & Animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  className="relative mb-10"
                >
                  <div className="absolute inset-0 bg-green-400 blur-3xl opacity-20 rounded-full animate-pulse" />
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center shadow-[0_20px_50px_rgba(34,197,94,0.3)] border-8 border-white">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <CheckCircle size={48} className="text-white md:hidden" />
                      <CheckCircle size={64} className="text-white hidden md:block" />
                    </motion.div>
                  </div>

                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: Math.sin(i * 45) * 60,
                        y: Math.cos(i * 45) * 60
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut"
                      }}
                      className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-secondary" : "bg-green-400"
                        }`}
                    />
                  ))}
                </motion.div>

                {/* Text Content with Staggered Entry */}
                <div className="space-y-6 max-w-md">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                      You're all <span className="text-secondary">set!</span>
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-gray-500 text-lg leading-relaxed">
                      We've received your details. Our team will reach out within <span className="font-bold text-gray-900">24 hours</span> to schedule your free strategy call.
                    </p>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-12"
                >
                  <button
                    onClick={resetForm}
                    className="group relative inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg shadow-2xl hover:bg-secondary/80 transition-all active:scale-95 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative">Start New Request</span>
                    <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-8 md:gap-12 flex-1">
                {/* Mobile Header */}
                <div className="md:hidden space-y-1">
                  <p className="text-[10px] font-bold tracking-widest text-secondary uppercase">Strategy Call</p>
                  <h2 className="text-2xl font-black text-gray-900 leading-tight">Launch your app</h2>
                </div>

                <StepIndicator current={step} />

                <div className="flex-1 relative">
                  <AnimatePresence mode="wait" custom={dir}>
                    {step === 1 && (
                      <motion.div key="s1" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-5">
                        <div className="space-y-1">
                          <h3 className="text-xl font-black text-gray-900">Tell us about yourself</h3>
                          <p className="text-gray-400 text-sm">We'll use this to prepare a tailored plan.</p>
                        </div>
                        <CustomInput label="Full Name" placeholder="Sarah Johnson" value={form.fullName} onChange={set("fullName")} required />
                        <CustomInput label="Work Email" placeholder="sarah@yourstore.com" value={form.workEmail} onChange={set("workEmail")} type="email" required />
                        <CustomInput label="Phone (optional)" placeholder="+1 555 000 0000" value={form.phone} onChange={set("phone")} type="tel" />
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="s2" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-5">
                        <div className="space-y-1">
                          <h3 className="text-xl font-black text-gray-900">Your Store Details</h3>
                          <p className="text-gray-400 text-sm">Tell us about your business.</p>
                        </div>
                        <CustomInput label="Store Name" placeholder="Lumina Beauty" value={form.storeName} onChange={set("storeName")} required />
                        <CustomInput label="Store URL" placeholder="lumina.myshopify.com" value={form.storeUrl} onChange={set("storeUrl")} required />
                        <CustomSelect label="What do you sell?" options={SELL_OPTIONS} value={form.whatDoYouSell} onChange={set("whatDoYouSell")} required />
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="s3" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-5">
                        <div className="space-y-1">
                          <h3 className="text-xl font-black text-gray-900">Your Goals</h3>
                          <p className="text-gray-400 text-sm">Help us understand your vision.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <CustomSelect label="Primary Goal" options={ACHIEVE_OPTIONS} value={form.achieve} onChange={set("achieve")} required />
                          <CustomSelect label="Launch Timeline" options={LAUNCH_OPTIONS} value={form.launchSoon} onChange={set("launchSoon")} required />
                          <CustomSelect label="Priority Features" options={FEATURES_OPTIONS} value={form.features} onChange={set("features")} />
                          <CustomSelect label="Monthly Revenue" options={REVENUE_OPTIONS} value={form.monthlyRevenue} onChange={set("monthlyRevenue")} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-gray-50 mt-auto">
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
                      ? "bg-secondary/80 text-white cursor-not-allowed"
                      : canNext()
                        ? "bg-secondary text-white shadow-xl shadow-purple-100 hover:opacity-90"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        {step === 3 ? "Launch Plan" : "Continue"}
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}