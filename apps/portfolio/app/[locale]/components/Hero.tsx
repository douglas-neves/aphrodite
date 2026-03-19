import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[870px] flex flex-col justify-center overflow-hidden">
      {/* Background image — right side */}
      <div className="absolute top-20 right-0 w-1/2 h-full opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 80% 40%, #ff003c 0%, #3b0010 50%, transparent 80%)",
          }}
        />
      </div>

      {/* Dot grid overlay from Stitch */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,0,60,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Status badge */}
        <div className="inline-block bg-[#ff003c] text-white font-mono text-xs font-bold px-3 py-1 mb-6 tracking-widest">
          {t("status")}
        </div>

        {/* Title */}
        <h1 className="font-display text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-8 uppercase">
          {t("line1")}
          <br />
          <span className="text-[#ff003c]">{t("line2")}</span>
        </h1>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: bio box with thick red left border */}
          <div className="md:col-span-5 bg-[#1a1919] p-8 border-l-8 border-[#ff003c]">
            <p className="text-lg text-[#adaaaa] leading-relaxed mb-6">
              {t("bio")}
            </p>
            <div className="flex gap-4">
              <span className="font-mono text-xs text-[#00eefc] font-bold tracking-tighter uppercase">
                {t("tag1")}
              </span>
              <span className="font-mono text-xs text-[#00eefc] font-bold tracking-tighter uppercase">
                {t("tag2")}
              </span>
            </div>
          </div>

          {/* Right: coords + version */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <div className="h-px bg-[#ff003c] opacity-30 w-full" />
            <div className="flex justify-between items-end">
              <span className="font-mono text-[10px] text-white/40 tracking-[0.5em]">
                {t("coords")}
              </span>
              <span className="text-[#ff003c] font-display font-black text-2xl tracking-tighter">
                {t("version")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
