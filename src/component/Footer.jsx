import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const columns = [
  {
    heading: "Product",
    links: [
      { label: "Home", to: "/" },
      { label: "Products", to: "/products" },
      { label: "About", to: "/about" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", to: "/privacy" },
      { label: "Terms", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2">
              <span className="text-lg font-semibold text-slate-100 tracking-tight">
                Mrtodo
              </span>
            </a>
            <p className="mt-3 text-sm text-slate-400 max-w-xs leading-relaxed">
              One place to capture tasks, sort what matters, and get things
              done.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="X"
                className="text-slate-500 hover:text-slate-200 transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="text-slate-500 hover:text-slate-200 transition-colors"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-slate-200 transition-colors"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-medium text-slate-100">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.to}
                      className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Mrtodo. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Made for people with a lot to do.
          </p>
        </div>
      </div>
    </footer>
  );
}
