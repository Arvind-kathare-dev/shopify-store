import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const STEPS = [
  { id: 1, label: "About You" },
  { id: 2, label: "Your Store" },
  { id: 3, label: "Your Goals" },
];


export function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-start gap-0 mb-8">
      {STEPS.map((step, i) => {
        const done = current > step.id;
        const active = current === step.id;
        return (
          <div key={step.id} className="flex items-start flex-1">
            <div className="flex flex-col items-center">
              <motion.div
                animate={
                  done
                    ? { backgroundColor: "#22c55e", borderColor: "#22c55e", scale: 1 }
                    : active
                    ? { backgroundColor: "#7c3aed", borderColor: "#7c3aed", scale: 1.05 }
                    : { backgroundColor: "#ffffff", borderColor: "#c4b5fd", scale: 1 }
                }
                transition={{ duration: 0.3 }}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckCircle size={16} className="text-white" strokeWidth={2.5} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="num"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-xs font-bold ${active ? "text-white" : "text-purple-400"}`}
                    >
                      {step.id}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
              <span className={`text-[10px] mt-1.5 font-medium whitespace-nowrap ${active || done ? "text-purple-700" : "text-gray-400"}`}>
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex-1 h-px mt-4 mx-2 bg-gray-200 relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-green-400"
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