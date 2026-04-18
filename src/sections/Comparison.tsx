// sections/Comparison.tsx
"use client";

import Container from "@/components/Container";
import { Check, X } from "lucide-react";

const features = [
  "True Native App",
  "Built-in CRO Features",
  "Personalization Engine",
  "Time to Launch",
  "No Developer Needed",
];

export default function Comparison() {
  return (
    <section className="py-24 bg-[#F7F7FB]">
      <Container>
        
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
            How we compare
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Shopifystore vs{" "}
            <span className="text-purple-500">everything else</span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-4 gap-6 items-stretch">

          {/* LEFT FEATURE LIST */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-2xl p-6 flex flex-col justify-center">
            <p className="text-sm font-medium mb-6">Features Details</p>

            <div className="space-y-5 text-sm">
              {features.map((f, i) => (
                <p key={i}>{f}</p>
              ))}
            </div>
          </div>

          {/* WEBVIEW BUILDERS */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-xs font-medium text-gray-400 mb-6 uppercase">
              Webview Builders
            </h3>

            <div className="space-y-5">
              <Check className="mx-auto text-gray-400" size={18} />
              <Check className="mx-auto text-gray-400" size={18} />
              <Check className="mx-auto text-gray-400" size={18} />
              <p className="text-sm text-gray-500">2–4 weeks</p>
              <Check className="mx-auto text-gray-400" size={18} />
            </div>
          </div>

          {/* CUSTOM DEV */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-xs font-medium text-gray-400 mb-6 uppercase">
              Custom Dev
            </h3>

            <div className="space-y-5">
              <Check className="mx-auto text-gray-400" size={18} />
              <X className="mx-auto text-gray-300" size={18} />
              <p className="text-sm text-gray-500">Custom build</p>
              <p className="text-sm text-gray-500">3–6 months</p>
              <X className="mx-auto text-gray-300" size={18} />
            </div>
          </div>

          {/* SHOPIFYSTORE (Highlighted) */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-md border border-purple-100">
            <h3 className="text-xs font-medium text-purple-500 mb-6 uppercase">
              Shopifystore
            </h3>

            <div className="space-y-5">
              <Check className="mx-auto text-purple-500" size={18} />
              <p className="text-sm text-purple-500">14 features</p>
              <p className="text-sm text-purple-500">Included</p>
              <p className="text-sm text-purple-500">7–14 days</p>
              <Check className="mx-auto text-purple-500" size={18} />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}