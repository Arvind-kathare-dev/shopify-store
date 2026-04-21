import { Phone } from "lucide-react";
import Link from "next/link";

export function Footer2() {
  return (
    <footer className="bg-background py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* BRAND */}
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-foreground">
              Shopify<span className="text-black">store</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral">
             We build native mobile apps with built-in CRO
            </p>
          </div>

          {/* POLICY */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Privacy Policy
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* HELP */}
          <div className="text-center sm:text-left">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Help
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h3>
            <div className="flex items-center gap-2 text-sm text-neutral">
              <Phone size={14} className="text-secondary" />
              <span>+1 (555) 027-128</span>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 pt-6 border-t border-border flex items-center flex-col sm:flex-row  justify-center gap-3 text-xs text-muted-foreground text-center sm:text-left">
          <p>© 2026 Shopifystore. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}