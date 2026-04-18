// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Lock, Phone, CheckCircle, X, ChevronDown } from "lucide-react";

// // ─── Types ────────────────────────────────────────────────────────────────────
// interface FormData {
//   // Step 1
//   fullName: string;
//   workEmail: string;
//   phone: string;
//   // Step 2
//   storeName: string;
//   storeUrl: string;
//   whatDoYouSell: string;
//   // Step 3
//   achieve: string;
//   launchSoon: string;
//   features: string;
//   monthlyRevenue: string;
// }

// const STEPS = [
//   { id: 1, label: "About You" },
//   { id: 2, label: "Your Store" },
//   { id: 3, label: "Your Goals" },
// ];

// const SELL_OPTIONS = ["Fashion & Apparel", "Electronics", "Beauty & Skincare", "Home & Living", "Sports & Fitness", "Other"];
// const ACHIEVE_OPTIONS = ["Increase Mobile Revenue", "Reduce Cart Abandonment", "Grow Repeat Customers", "Launch Mobile-First Brand"];
// const LAUNCH_OPTIONS = ["ASAP", "Within 1 month", "1–3 months", "3–6 months", "Just exploring"];
// const FEATURES_OPTIONS = ["Push Notifications", "Personalization", "CRO Suite", "Analytics Dashboard", "Custom Branding"];
// const REVENUE_OPTIONS = ["Under $10K/mo", "$10K–$50K/mo", "$50K–$200K/mo", "$200K+/mo"];

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function StepIndicator({ current }: { current: number }) {
//   return (
//     <div className="flex items-start gap-0 mb-8">
//       {STEPS.map((step, i) => {
//         const done = current > step.id;
//         const active = current === step.id;
//         return (
//           <div key={step.id} className="flex items-start flex-1">
//             <div className="flex flex-col items-center">
//               <motion.div
//                 animate={
//                   done
//                     ? { backgroundColor: "#22c55e", borderColor: "#22c55e", scale: 1 }
//                     : active
//                     ? { backgroundColor: "#7c3aed", borderColor: "#7c3aed", scale: 1.05 }
//                     : { backgroundColor: "#ffffff", borderColor: "#c4b5fd", scale: 1 }
//                 }
//                 transition={{ duration: 0.3 }}
//                 className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
//               >
//                 <AnimatePresence mode="wait">
//                   {done ? (
//                     <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
//                       <CheckCircle size={16} className="text-white" strokeWidth={2.5} />
//                     </motion.span>
//                   ) : (
//                     <motion.span
//                       key="num"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className={`text-xs font-bold ${active ? "text-white" : "text-purple-400"}`}
//                     >
//                       {step.id}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//               <span className={`text-[10px] mt-1.5 font-medium whitespace-nowrap ${active || done ? "text-purple-700" : "text-gray-400"}`}>
//                 {step.label}
//               </span>
//             </div>
//             {i < STEPS.length - 1 && (
//               <div className="flex-1 h-px mt-4 mx-2 bg-gray-200 relative overflow-hidden">
//                 <motion.div
//                   className="absolute inset-y-0 left-0 bg-green-400"
//                   animate={{ width: done ? "100%" : "0%" }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                 />
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// function InputField({
//   label, placeholder, value, onChange, type = "text", required,
// }: {
//   label: string; placeholder: string; value: string;
//   onChange: (v: string) => void; type?: string; required?: boolean;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-800 mb-1.5">
//         {label}{required && <span className="text-purple-500">*</span>}
//       </label>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full bg-[#f5f3ff] border-0 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
//       />
//     </div>
//   );
// }

// function SelectField({
//   label, options, value, onChange, required,
// }: {
//   label: string; options: string[]; value: string;
//   onChange: (v: string) => void; required?: boolean;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-800 mb-1.5">
//         {label}{required && <span className="text-purple-500">*</span>}
//       </label>
//       <div className="relative">
//         <select
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full appearance-none bg-[#f5f3ff] border-0 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all pr-10"
//         >
//           <option value="">Select</option>
//           {options.map((o) => (
//             <option key={o} value={o}>{o}</option>
//           ))}
//         </select>
//         <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
//       </div>
//     </div>
//   );
// }

// const slideVariants = (dir: number) => ({
//   initial: { x: dir * 32, opacity: 0 },
//   animate: { x: 0, opacity: 1, transition: { duration: 0.32, ease: [0.25, 0.1, 0.25, 1] as number[] } },
//   exit: { x: dir * -32, opacity: 0, transition: { duration: 0.2 } },
// });

// // ─── Modal ────────────────────────────────────────────────────────────────────
// interface ModalProps {
//   onClose: () => void;
// }

// function FormModal({ onClose }: ModalProps) {
//   const [step, setStep] = useState(1);
//   const [dir, setDir] = useState(1);
//   const [done, setDone] = useState(false);
//   const [form, setForm] = useState<FormData>({
//     fullName: "", workEmail: "", phone: "",
//     storeName: "", storeUrl: "", whatDoYouSell: "",
//     achieve: "", launchSoon: "", features: "", monthlyRevenue: "",
//   });

//   const set = (field: keyof FormData) => (v: string) => setForm((p) => ({ ...p, [field]: v }));

//   const canNext = () => {
//     if (step === 1) return form.fullName.trim() && form.workEmail.trim();
//     if (step === 2) return form.storeName.trim() && form.storeUrl.trim();
//     if (step === 3) return form.achieve && form.launchSoon;
//     return false;
//   };

//   const next = () => {
//     if (!canNext()) return;
//     if (step === 3) { setDone(true); return; }
//     setDir(1); setStep((s) => s + 1);
//   };
//   const back = () => { setDir(-1); setStep((s) => s - 1); };

//   const TRUST = [
//     { icon: <Lock size={14} />, text: "Your data is private and never shared" },
//     { icon: <Phone size={14} />, text: "We'll reach out within 24 hours" },
//     { icon: <span className="text-xs">✓</span>, text: "No credit card required" },
//   ];

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal shell */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.96, y: 12 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.96, y: 12 }}
//         transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
//         className="relative z-10 w-full max-w-2xl bg-[#5b3fa6] rounded-3xl overflow-hidden shadow-2xl flex"
//         style={{ minHeight: 420 }}
//       >
//         {/* ── Left panel ── */}
//         <div className="hidden md:flex flex-col justify-between w-[260px] flex-shrink-0 p-8">
//           <div>
//             <p className="text-[10px] font-bold tracking-widest text-purple-300 uppercase mb-4">
//               Free Strategy Call
//             </p>
//             <h2 className="text-2xl font-bold text-white leading-snug mb-4">
//               Ready to launch your mobile app?
//             </h2>
//             <p className="text-purple-200 text-[13px] leading-relaxed">
//               Tell us about your store and we'll put together a custom mobile growth plan — completely free, no commitment.
//             </p>
//           </div>
//           <div className="flex flex-col gap-2 mt-8">
//             {TRUST.map(({ icon, text }) => (
//               <div key={text} className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3 py-2.5">
//                 <span className="text-purple-300 flex-shrink-0">{icon}</span>
//                 <span className="text-white text-[11px] font-medium">{text}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── Right panel: form card ── */}
//         <div className="flex-1 bg-white rounded-2xl m-3 p-7 flex flex-col overflow-hidden relative">
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-0 right-0 -translate-y-full translate-x-full mr-[-44px] mt-0 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
//             style={{ transform: "translate(calc(100% + 12px), calc(-100% - 12px))" }}
//           >
//             <X size={16} className="text-gray-500" />
//           </button>

//           <AnimatePresence mode="wait">
//             {done ? (
//               /* Success */
//               <motion.div
//                 key="success"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="flex flex-col items-center justify-center flex-1 text-center gap-4 py-8"
//               >
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: "spring", stiffness: 260, delay: 0.1 }}
//                   className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center"
//                 >
//                   <CheckCircle size={32} className="text-purple-600" />
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-gray-900">You're all set!</h3>
//                 <p className="text-gray-500 text-sm max-w-[240px]">
//                   We'll reach out within 24 hours to schedule your free strategy call.
//                 </p>
//                 <button
//                   onClick={onClose}
//                   className="mt-2 bg-purple-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             ) : (
//               <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col flex-1">
//                 <StepIndicator current={step} />

//                 {/* Scrollable step content */}
//                 <div className="flex-1 overflow-y-auto pr-1" style={{ maxHeight: 320 }}>
//                   <AnimatePresence mode="wait" custom={dir}>
//                     {step === 1 && (
//                       <motion.div key="s1" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4">
//                         <div>
//                           <h3 className="text-xl font-bold text-gray-900">Tell us about yourself</h3>
//                           <p className="text-gray-400 text-sm mt-1">We'll use this to prepare a tailored plan before we speak.</p>
//                         </div>
//                         <InputField label="Full Name" placeholder="Sarah Johnson" value={form.fullName} onChange={set("fullName")} required />
//                         <InputField label="Work Email" placeholder="Sarah@yourstore.com" value={form.workEmail} onChange={set("workEmail")} type="email" required />
//                         <InputField label="Phone (optional)" placeholder="+1 555 000 0000" value={form.phone} onChange={set("phone")} type="tel" />
//                       </motion.div>
//                     )}

//                     {step === 2 && (
//                       <motion.div key="s2" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4">
//                         <div>
//                           <h3 className="text-xl font-bold text-gray-900">Tell us about your Store</h3>
//                           <p className="text-gray-400 text-sm mt-1">We'll use this to understand your business and tailor your app experience.</p>
//                         </div>
//                         <InputField label="Store Name" placeholder="Your Store Name" value={form.storeName} onChange={set("storeName")} required />
//                         <InputField label="Store URL" placeholder="https://yourstore.myshopify.com" value={form.storeUrl} onChange={set("storeUrl")} required />
//                         <SelectField label="What do you Sell?" options={SELL_OPTIONS} value={form.whatDoYouSell} onChange={set("whatDoYouSell")} required />
//                       </motion.div>
//                     )}

//                     {step === 3 && (
//                       <motion.div key="s3" custom={dir} variants={slideVariants(dir)} initial="initial" animate="animate" exit="exit" className="flex flex-col gap-4">
//                         <div>
//                           <h3 className="text-xl font-bold text-gray-900">What are your goals?</h3>
//                           <p className="text-gray-400 text-sm mt-1">Help us understand what success looks like for you.</p>
//                         </div>
//                         <SelectField label="What do you want to achieve with your mobile app?" options={ACHIEVE_OPTIONS} value={form.achieve} onChange={set("achieve")} required />
//                         <SelectField label="How soon do you want to launch?" options={LAUNCH_OPTIONS} value={form.launchSoon} onChange={set("launchSoon")} required />
//                         <SelectField label="What features are most important to you?" options={FEATURES_OPTIONS} value={form.features} onChange={set("features")} />
//                         <SelectField label="What is your monthly revenue?" options={REVENUE_OPTIONS} value={form.monthlyRevenue} onChange={set("monthlyRevenue")} />
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
//                   {step > 1 ? (
//                     <button onClick={back} className="text-sm text-gray-400 hover:text-gray-600 transition-colors font-medium">
//                       ← Back
//                     </button>
//                   ) : <div />}

//                   <motion.button
//                     whileHover={{ scale: canNext() ? 1.03 : 1 }}
//                     whileTap={{ scale: canNext() ? 0.97 : 1 }}
//                     onClick={next}
//                     disabled={!canNext()}
//                     className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
//                       canNext()
//                         ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-200"
//                         : "bg-gray-100 text-gray-400 cursor-not-allowed"
//                     }`}
//                   >
//                     Continue
//                     <span className="text-base leading-none">→</span>
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // ─── Page wrapper ─────────────────────────────────────────────────────────────
// export default function MultiStepFormModal() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Demo trigger (your navbar/page would call setOpen(true)) */}
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <button
//           onClick={() => setOpen(true)}
//           className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full text-sm shadow-lg transition-colors"
//         >
//           Get Started Free
//         </button>
//       </div>

//       <AnimatePresence>
//         {open && <FormModal onClose={() => setOpen(false)} />}
//       </AnimatePresence>
//     </>
//   );
// }