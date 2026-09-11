import {
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi";

const values = [
  {
    icon: HiOutlineEye,
    title: "Clarity over clutter",
    description: "Every screen shows what needs doing next, nothing else.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Fast by default",
    description: "Capturing a task should take less time than thinking of it.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Your list, your data",
    description: "We don't sell attention or sell your data. Ever.",
  },
  {
    icon: HiOutlineHeart,
    title: "Built for real days",
    description: "Plans change. mrtodo bends without punishing you for it.",
  },
];

export default function MrTodoAbout() {
  return (
    <div className="bg-slate-900">
      {/* Intro */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <p className="text-sm font-medium text-emerald-400 mb-4">
            About Mrtodo
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-100 tracking-tight leading-[1.1] max-w-2xl">
            We got tired of to-do apps that needed their own to-do list
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
            mrtodo started as a shared list between two people who kept losing
            track of things in Slack threads and sticky notes. Three years
            later, it's the same idea — just for more people.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
            <h2 className="text-sm font-medium text-slate-500 uppercase tracking-wide md:sticky md:top-24 self-start">
              Our story
            </h2>
            <div className="space-y-5 text-slate-400 leading-relaxed max-w-2xl">
              <p>
                We tried every productivity app out there and kept landing on
                the same problem: they were built to manage a system, not a day.
                Boards, workflows, tags upon tags — by the time you'd set it up,
                you'd forgotten why you opened the app.
              </p>
              <p>
                So we built the version we actually wanted to use. Type a task,
                see it, check it off. Everything else — sorting, timers, weekly
                reviews — is there when you want it and out of the way when you
                don't.
              </p>
              <p>
                Today mrtodo is used by people running households, teams, and
                side projects who'd rather spend their time doing the work than
                managing the list of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 tracking-tight max-w-lg">
            What we optimize for
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-slate-900 p-6 flex gap-4">
                  <Icon className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-base font-medium text-slate-100">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
