import { useTranslations } from "next-intl";

const abilities = [
  "Web Components", "Tailwind", "Docker",    "GraphQL",
  "CI/CD",          "Angular",  "Microfrontends", "Storybook",
  "Playwright",     "Jest",     "Figma",     "Agile / Scrum",
];

export default function AbilitiesMatrix() {
  const t = useTranslations("abilities");

  return (
    <section className="bg-[#0e0e0e] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-black text-4xl uppercase mb-2">
          {t("title1")}<span className="text-[#ff003c]">{t("title2")}</span>
        </h2>
        <div className="w-full h-px bg-[#ff003c] mb-16 opacity-40" />

        <div className="grid grid-cols-3 md:grid-cols-6 border-l border-t border-[#262626]">
          {abilities.map((ability, i) => (
            <div
              key={ability}
              className="border-r border-b border-[#262626] p-6 group hover:bg-[#131313] transition-colors"
            >
              <span className="font-mono-label text-[#ff003c] block mb-2">
                CORE_ST_{String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display font-semibold text-white text-sm group-hover:text-[#ff003c] transition-colors">
                {ability}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
