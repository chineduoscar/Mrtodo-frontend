import {
  HiOutlineLightningBolt,
  HiOutlineAdjustments,
  HiOutlineClock,
  HiOutlineChartBar,
} from "react-icons/hi";

const steps = [
  {
    number: "01",
    icon: HiOutlineLightningBolt,
    title: "Capture without breaking stride",
    description:
      "Drop a task the moment you think of it. No forms, no friction.",
  },
  {
    number: "02",
    icon: HiOutlineAdjustments,
    title: "Sort what actually matters",
    description:
      "Group by project, tag by urgency, or let mrtodo surface what's due first.",
  },
  {
    number: "03",
    icon: HiOutlineClock,
    title: "Work in focused blocks",
    description:
      "Start a timer, mute everything else, keep one thing in front of you.",
  },
  {
    number: "04",
    icon: HiOutlineChartBar,
    title: "See where your time went",
    description: "A simple weekly view of what got done and what got pushed.",
  },
];

export default function MrTodoProductivity() {
  return (
    <section className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 tracking-tight">
            Built around how work actually gets done
          </h2>
          <p className="mt-3 text-slate-400 leading-relaxed">
            Four things that move a task from idea to done.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-slate-900 p-6 flex gap-4">
                <Icon className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-mono text-slate-600">
                      {step.number}
                    </span>
                    <h3 className="text-base font-medium text-slate-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
