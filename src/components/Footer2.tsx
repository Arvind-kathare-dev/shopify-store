import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export function Footer2() {
  return (
    <footer className="bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-[22px] font-bold tracking-tight text-foreground">
              Shopify<span className="text-black">store</span>
            </div>
            <p className="mt-2 text-[13px] text-neutral">High-converting mobile apps. CRO built-in.</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Privacy Policy</div>
            <ul className="mt-3 space-y-2 text-sm ">
              <li><Link href="#" className="hover:text-foreground">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Help</div>
            <ul className="mt-3 space-y-2 text-sm ">
              <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-foreground">Enter your email</div>
            <form className="mt-3 flex items-center gap-2 rounded-full border border-border p-1.5">
              <input
                type="email"
                placeholder="you@store.com"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-full bg-secondary px-4 py-3 text-xs font-semibold text-white"
              >
                Join Community <ArrowRight className="h-3 w-3" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© 2026 Shopifystore. All rights reserved.</div>
          <div className="flex items-center gap-2"> <Phone size={15} className="text-secondary"/> +1 (555) 027-128</div>
        </div>
      </div>
    </footer>
  );
}