import { useTranslations } from "next-intl";

export default function SystemOverview() {
  const t = useTranslations("overview");

  return (
    <section id="overview" className="bg-[#131313] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-tight">
            {t("title1")}
            <br />
            <span className="text-[#ff003c]">{t("title2")}</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-[#1a1919] p-8 relative">
            <span className="font-mono-label text-[#ff003c] absolute top-4 right-4">
              {t("decal")}
            </span>
            <p className="text-[#e5e2e1] leading-relaxed text-lg">
              {t.rich("bio", {
                highlight: (chunks) => (
                  <span className="text-[#ff003c] font-semibold">{chunks}</span>
                ),
              })}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#131313] p-6 border-l-2 border-[#ff003c]">
              <h4 className="font-mono-label text-[#ff003c] mb-3">{t("card1Title")}</h4>
              <p className="text-[#adaaaa] text-sm leading-relaxed">{t("card1Text")}</p>
            </div>
            <div className="bg-[#131313] p-6 border-l-2 border-[#ff003c]">
              <h4 className="font-mono-label text-[#ff003c] mb-3">{t("card2Title")}</h4>
              <p className="text-[#adaaaa] text-sm leading-relaxed">{t("card2Text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
