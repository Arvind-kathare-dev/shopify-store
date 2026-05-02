import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

const STEPS = [
  { id: 1, label: "About You" },
  { id: 2, label: "Your Store" },
  { id: 3, label: "Your Goals" },
];

export function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-start justify-between w-full">
      {STEPS.map((step, i) => {
        const done = current > step.id;
        const active = current === step.id;
        return (
          <div key={step.id} className={`flex items-start ${i < STEPS.length - 1 ? "flex-1" : "flex-none"}`}>
            <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
              <motion.div
                animate={
                  done
                    ? { backgroundColor: "#63C194", boxShadow: "0 0 0 2px #63C19440", scale: 1 }
                    : active
                      ? { backgroundColor: "#8E6CEF", boxShadow: "0 0 0 2px #A08CD940", scale: 1.05 }
                      : { backgroundColor: "#EBE8F4", scale: 1 }
                }
                transition={{ duration: 0.3 }}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center"
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
                      className={`text-xs font-bold ${active ? "text-white" : "text-neutral"}`}
                    >
                      {step.id}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
              
              <span className={`text-[10px] md:text-xs mt-2 font-medium text-center leading-tight ${active || done ? "text-secondary" : "text-neutral"}`}>
                {step.label}
              </span>
            </div>

            {/* Connecting Line */}
            {i < STEPS.length - 1 && (
              <div className="flex-1 mt-4 mx-2 relative h-[1px]">
                {/* Base dashed line */}
                <div className="absolute inset-0 border-t border-dashed border-gray-200" />

                {/* Animated progress */}
                <motion.div
                  className="absolute top-0 left-0 border-t border-solid border-green-500"
                  animate={{ width: done ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}