import Link from "next/link";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Sites", href: "/sites" },
  { label: "K-Beauty", href: "/korean-dopamine-shopping" },
  { label: "Lifestyle", href: "/dopamine-lifestyle" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

type FooterProps = {
  showAffiliateDisclosure?: boolean;
};

export function Footer({ showAffiliateDisclosure = true }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-lg font-semibold">Dopamine Sites</h2>
            <p className="mt-2 max-w-md text-sm text-zinc-700 dark:text-zinc-400">
              A curated directory of websites and shopping destinations that deliver instant delight.
            </p>
            <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {link.label}
                </Link>
              ))}
              {showAffiliateDisclosure && (
                <Link
                  href="/affiliate-disclosure"
                  className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Affiliate Disclosure
                </Link>
              )}
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Get the weekly dopamine drop</h3>
            <div className="mt-3">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-400">
          © {new Date().getFullYear()} Dopamine Sites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
