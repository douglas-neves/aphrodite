import { useTranslations } from "next-intl";

export default function AcademicCore() {
  const t = useTranslations("academic");
  const education = t.raw("education") as Array<{
    institution: string;
    course: string;
    period: string;
    tag: string;
  }>;
  const certifications = t.raw("certifications") as string[];

  return (
    <section id="education" className="bg-[#0e0e0e] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display font-black text-4xl uppercase mb-2">
            {t("title1")}<span className="text-[#ff003c]">{t("title2")}</span>
          </h2>
          <div className="w-full h-px bg-[#ff003c] mb-12 opacity-40" />

          <div className="flex flex-col gap-4">
            {education.map((edu) => (
              <div key={edu.institution} className="bg-[#131313] p-6 border-l-2 border-[#ff003c]">
                <span className="font-mono-label text-[#ff003c] block mb-1">{edu.institution}</span>
                <span className="font-display font-semibold text-white block mb-1">{edu.course}</span>
                <span className="font-mono-label text-[#adaaaa]">{edu.period} — {edu.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display font-black text-4xl uppercase mb-2">
            {t("certTitle1")}<span className="text-[#ff003c]">{t("certTitle2")}</span>
          </h2>
          <div className="w-full h-px bg-[#ff003c] mb-12 opacity-40" />

          <ul className="flex flex-col gap-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start gap-3">
                <span className="text-[#ff003c] mt-1">▸</span>
                <span className="font-mono-label text-[#adaaaa] leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
