// sections/CTAFormAdvanced.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Phone, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { CustomInput } from "@/components/ui/CustomInput";
import { StepIndicator } from "@/components/StepIndicator";
import { slideVariants } from "@/lib/motion";
import { ACHIEVE_OPTIONS, FEATURES_OPTIONS, LAUNCH_OPTIONS, REVENUE_OPTIONS, SELL_OPTIONS } from "@/constants/multiStepData";
import { CustomSelect } from "@/components/ui/CustomSelect";

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
export default function CTAFormAdvanced() {
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

 

  // const next = () => {
  //   if (!canNext()) return;
  //   if (step === 3) { setDone(true); return; }
  //   setDir(1); setStep((s) => s + 1);
  // };

 const next = async () => {
  if (!canNext()) return;

  if (step === 3) {
    try {
      setLoading(true); // ✅ START loading

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
      setLoading(false); // ✅ STOP loading (VERY IMPORTANT)
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
    <div id="form" className="w-full scroll-mt-20 p-6 sm:px-8 sm:py-8  lg:py-[90px] lg:px-[73px] bg-primary  flex justify-center items-center">
     {/* Modal shell */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative max-w-[1440px] z-10 w-full justify-between  bg-primary  overflow-hidden  flex"
        style={{ minHeight: 420 }}
      >
        {/* ── Left panel ── */}
        <div className="hidden md:flex flex-col gap-[40px]  justify-between  max-w-[341px] max-h-[465px] flex-shrink-0 ">
          <div className="flex flex-col gap-[17px]">
            <p className=" font-normal text-sm leading-none tracking-[0.1em] uppercase  text-primary-light">
              Free Strategy Call
            </p>
            <h2 className="font-bold text-[40px] leading-[55px] tracking-normal text-white">
              Ready to launch your mobile app?
            </h2>
            <p className="text-primary-light font-normal text-base leading-[25px] tracking-normal">
              Tell us about your store and we'll put together a custom mobile growth plan — completely free, no commitment.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {TRUST.map(({ icon, text }) => (
              <div key={text} className="w-fit flex font-sans font-normal text-sm leading-none tracking-normal text-white items-center gap-[11px] bg-primary-dark rounded-[15px] px-[19px] py-[17px]">
                <span className="text-purple-300">{icon}</span>
                <span className="">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right panel: form card ── */}
        <div className="flex-1 max-w-[715px] bg-white rounded-2xl px-4 py-5  md:py-[35px] md:pr-[43px] md:pl-[42px] flex flex-col overflow-hidden relative">
         

          <AnimatePresence mode="wait">
            {done ? (
              /* Success */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center flex-1 text-center gap-4 py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center"
                >
                  <Check size={32} className="text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">You're all set!</h3>
                <p className="text-gray-500 text-sm max-w-[240px]">
                  We'll reach out within 24 hours to schedule your free strategy call.
                </p>
                <button
                onClick={resetForm}
                  className="mt-2 bg-purple-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-[47px] flex-1 ">
                <StepIndicator current={step} />

                {/* Scrollable step content */}
                <div className="flex-1">
                  <AnimatePresence mode="wait" custom={dir}>
                    {step === 1 && (
                      <motion.div key="s1" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-[37px]">
                        <div className="flex flex-col gap-1.5">
                          <h3 className="text-[22px] font-bold text-gray-900">Tell us about yourself</h3>
                          <p className="text-neutral text-[13px]">We'll use this to prepare a tailored plan before we speak.</p>
                        </div>
                        <CustomInput label="Full Name" placeholder="Sarah Johnson" value={form.fullName} onChange={set("fullName")} required />
                        <CustomInput label="Work Email" placeholder="Sarah@yourstore.com" value={form.workEmail} onChange={set("workEmail")} type="email" required />
                        <CustomInput label="Phone (optional)" placeholder="+1 555 000 0000" value={form.phone} onChange={set("phone")} type="tel" />
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="s2" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Tell us about your Store</h3>
                          <p className="text-gray-400 text-sm mt-1">We'll use this to understand your business and tailor your app experience.</p>
                        </div>
                        <CustomInput label="Store Name" placeholder="Your Store Name" value={form.storeName} onChange={set("storeName")} required />
                        <CustomInput label="Store URL" placeholder="https://yourstore.myshopify.com" value={form.storeUrl} onChange={set("storeUrl")} required />
                        <CustomSelect label="What do you Sell?" options={SELL_OPTIONS} value={form.whatDoYouSell} onChange={set("whatDoYouSell")} required />
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="s3" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col  gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">What are your goals?</h3>
                          <p className="text-gray-400 text-sm mt-1">Help us understand what success looks like for you.</p>
                        </div>
                        <CustomSelect label="What do you want to achieve with your mobile app?" options={ACHIEVE_OPTIONS} value={form.achieve} onChange={set("achieve")} required />
                        <CustomSelect label="How soon do you want to launch?" options={LAUNCH_OPTIONS} value={form.launchSoon} onChange={set("launchSoon")} required />
                        <CustomSelect label="What features are most important to you?" options={FEATURES_OPTIONS} value={form.features} onChange={set("features")} />
                        <CustomSelect label="What is your monthly revenue?" options={REVENUE_OPTIONS} value={form.monthlyRevenue} onChange={set("monthlyRevenue")} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                   {/* Actions */}
                <div className="flex items-center justify-between  pt-4 border-t border-gray-100">
                  {step > 1 ? (
                   <button onClick={back} className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium flex items-center gap-2">
                      <ArrowLeft size={20}/>
                       Back
                    </button>
                  ) : <div />}

                 <motion.button
  whileHover={{ scale: canNext() && !loading ? 1.03 : 1 }}
  whileTap={{ scale: canNext() && !loading ? 0.97 : 1 }}
  onClick={next}
  disabled={!canNext() || loading}
  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
    loading
      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
      : canNext()
      ? "bg-secondary hover:opacity-80 text-white shadow-lg shadow-purple-200"
      : "bg-gray-100 text-gray-400 cursor-not-allowed"
  }`}
>
  {loading ? "Submitting..." : "Continue"}

  {!loading && <ArrowRight size={20} />}
</motion.button>
                </div>
                </div>

                {/* Actions
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  {step > 1 ? (
                    <button onClick={back} className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">
                      ← Back
                    </button>
                  ) : <div />}

                  <motion.button
                    whileHover={{ scale: canNext() ? 1.03 : 1 }}
                    whileTap={{ scale: canNext() ? 0.97 : 1 }}
                    onClick={next}
                    disabled={!canNext()}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                      canNext()
                        ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Continue
                    <span className="text-base leading-none">→</span>
                  </motion.button>
                </div> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
   
  );
}