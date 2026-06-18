import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="text-sm text-zinc-600">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
