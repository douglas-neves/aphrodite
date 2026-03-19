import { useTranslations } from "next-intl";

export default function MissionLogs() {
  const t = useTranslations("missions");
  const jobs = t.raw("jobs") as Array<{
    company: string;
    period: string;
    role: string;
    description: string;
    tags: string[];
  }>;

  return (
    <section id="career" className="bg-[#131313] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="font-display font-black text-4xl uppercase">
            {t("title1")}<span className="text-[#ff003c]">{t("title2")}</span>
          </h2>
          <span className="font-mono-label text-[#adaaaa] hidden md:block">
            {t("subtitle")}
          </span>
        </div>
        <div className="w-full h-px bg-[#ff003c] mb-16 opacity-40" />

        <div className="flex flex-col gap-0">
          {jobs.map((m, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[220px_1fr] border-b border-[#262626] group"
            >
              <div className="bg-[#0e0e0e] p-6 border-r border-[#262626] group-hover:bg-[#131313] transition-colors">
                <span className="font-mono-label text-[#ff003c] block mb-1">{m.company}</span>
                <span className="font-mono-label text-[#adaaaa]">{m.period}</span>
              </div>
              <div className="p-6 bg-[#1a1919] group-hover:bg-[#201f1f] transition-colors">
                <h3 className="font-display font-bold text-white text-lg mb-3">{m.role}</h3>
                <p className="text-[#adaaaa] text-sm leading-relaxed mb-4">{m.description}</p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span key={tag} className="font-mono-label text-[#ff003c] bg-[#ff003c12] px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
