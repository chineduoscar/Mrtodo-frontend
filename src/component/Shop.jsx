// import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { FaChalkboard } from "react-icons/fa";
import { GiDesk } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi";

const preview = [
  { icon: FaChalkboard, name: "Wall Whiteboard", price: "$59" },
  { icon: GiDesk, name: "Standing Desk", price: "$349" },
  { icon: HiOutlineClock, name: "Focus Timer", price: "$24" },
];

export default function Shop() {
  return (
    <section className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-md">
          <p className="text-sm font-medium text-emerald-400 mb-2">
            Beyond the app
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
            We also sell the tools you plan on
          </h2>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Whiteboards, standing desks, timers, and more — for the parts of
            your day mrtodo doesn't reach.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
          {preview.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="bg-slate-900 p-6 flex items-center gap-4"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-slate-800 text-emerald-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-100">
                    {product.name}
                  </p>
                  <p className="text-sm font-mono text-slate-500 mt-0.5">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <a
          to="/products"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Shop all productivity tools
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
