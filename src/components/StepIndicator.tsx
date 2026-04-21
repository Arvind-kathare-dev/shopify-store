import { motion, AnimatePresence } from "framer-motion";
import { Check, CheckCircle } from "lucide-react";

const STEPS = [
  { id: 1, label: "About You" },
  { id: 2, label: "Your Store" },
  { id: 3, label: "Your Goals" },
];


export function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-start gap-0">
      {STEPS.map((step, i) => {
        const done = current > step.id;
        const active = current === step.id;
        return (
          <div key={step.id} className="flex items-start flex-1  w-[382px]">
            <div className="flex flex-col items-center">
              <motion.div
                animate={
                  done
                    ? { backgroundColor: "#63C194", boxShadow: "0 0 0 2px #63C19440", scale: 1 }
                    : active
                      ? { backgroundColor: "#8E6CEF", boxShadow: "0 0 0 2px #A08CD940", scale: 1.05 }
                      : { backgroundColor: "#EBE8F4", scale: 1 }
                }
                transition={{ duration: 0.3 }}
                className="w-[36px] h-[36px] rounded-full  flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Check size={16} className="text-white" strokeWidth={2.5} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="num"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-xs font-bold ${active ? "text-white" : "text-neutral font-normal"}`}
                    >
                      {step.id}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
              <span className={`text-xs leading-none tracking-normal mt-1.5 font-medium whitespace-nowrap ${active || done ? "text-secondary" : "text-neutral"}`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex-1 mt-4 mx-2 relative">
                {/* Base dashed line */}
                <div className="absolute inset-0 border-t border-dashed border-neutral-muted" />

                {/* Animated progress */}
                <motion.div
                  className="absolute top-0 left-0 border-t border-dashed border-green-400"
                  animate={{ width: done ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}