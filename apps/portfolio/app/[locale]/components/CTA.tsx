import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="bg-[#ff003c] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase leading-tight text-black">
          {t("line1")}
          <br />
          {t("line2")}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href="mailto:neves.douglas@outlook.com"
            className="bg-black text-white font-display font-bold text-sm px-8 py-4 tracking-widest hover:bg-[#1a1919] transition-colors text-center"
          >
            {t("propose")}
          </a>
          <a
            href="https://github.com/douglas-neves/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-black text-black font-display font-bold text-sm px-8 py-4 tracking-widest hover:bg-black hover:text-white transition-colors text-center"
          >
            {t("repo")}
          </a>
        </div>
      </div>
    </section>
  );
}
