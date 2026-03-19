import { useTranslations } from "next-intl";

const backend = [
  {
    id: "BE_01", label: "RUNTIME", name: "Node.js",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#539e43" d="M64 4L8 36v56l56 32 56-32V36z"/>
        <path fill="#fff" d="M45 89.5V49.7l19-11 19 11v28.1l-10 5.8V55.4l-9-5.2-9 5.2v39.5z"/>
      </svg>
    ),
  },
  {
    id: "BE_02", label: "LANG", name: "PHP",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <ellipse cx="64" cy="64" rx="62" ry="33" fill="#8993be"/>
        <text x="64" y="72" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="bold" fontFamily="monospace">php</text>
      </svg>
    ),
  },
  {
    id: "BE_03", label: "LANG", name: "Go",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <rect width="128" height="128" fill="#00add8"/>
        <text x="64" y="82" textAnchor="middle" fill="#fff" fontSize="60" fontWeight="bold" fontFamily="Arial">Go</text>
      </svg>
    ),
  },
  {
    id: "BE_04", label: "LANG", name: "Python",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#3776ab" d="M63.9 2.3c-29.4 0-27.6 12.8-27.6 12.8l.03 13.2h28.1v4H24.2S5.6 30.1 5.6 59.8s16.3 28.7 16.3 28.7h9.7v-13.8s-.5-16.3 16-16.3h27.5s15.5.3 15.5-15V18c0 0 2.4-15.7-26.7-15.7zm-15.3 9c2.8 0 5 2.3 5 5s-2.2 5-5 5-5-2.3-5-5 2.2-5 5-5z"/>
        <path fill="#ffd43b" d="M64.1 125.7c29.4 0 27.6-12.8 27.6-12.8l-.03-13.2H63.6v-4h40.1s18.6 2.2 18.6-27.5-16.3-28.7-16.3-28.7h-9.7v13.8s.5 16.3-16 16.3H52.8s-15.5-.3-15.5 15v26.4s-2.4 15.7 26.8 15.7zm15.3-9c-2.8 0-5-2.3-5-5s2.2-5 5-5 5 2.3 5 5-2.2 5-5 5z"/>
      </svg>
    ),
  },
];

const cloud = [
  {
    id: "CL_01", label: "PLATFORM", name: "AWS",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <path fill="#252f3e" d="M0 0h128v128H0z"/>
        <path fill="#ff9900" d="M38.4 65.4c0 1.7.2 3.1.5 4 .4 1 .9 2 1.6 3.1.3.4.4.9.4 1.3 0 .6-.4 1.2-1.1 1.8l-3.7 2.5c-.5.3-1 .5-1.5.5-.6 0-1.2-.3-1.7-.8-1-1.1-1.8-2.2-2.5-3.3-2.1 2.5-4.8 3.7-8 3.7-2.3 0-4.1-.7-5.4-2s-2-3.1-2-5.3c0-2.3.8-4.2 2.5-5.6s3.9-2.1 6.7-2.1c.9 0 1.9.1 2.9.2s2 .4 3.1.6v-2c0-2.1-.4-3.5-1.3-4.4-.9-.9-2.4-1.3-4.5-1.3-1 0-2 .1-3 .4s-2 .6-3 1.1c-.4.2-.8.4-1 .4-.6 0-.9-.4-.9-1.3v-2c0-.7.1-1.2.3-1.5.2-.3.6-.6 1.2-.9 1-.5 2.2-.9 3.6-1.2s2.9-.5 4.5-.5c3.4 0 5.9.8 7.5 2.3 1.5 1.5 2.3 3.8 2.3 6.9v9.1zm-11 4.1c.9 0 1.8-.2 2.8-.5s1.9-1 2.6-2c.4-.5.7-1.1.9-1.8s.3-1.5.3-2.5v-1.2c-.8-.2-1.6-.3-2.5-.4s-1.7-.1-2.5-.1c-1.8 0-3.1.4-4 1.1-.9.7-1.3 1.8-1.3 3.1 0 1.3.3 2.2.9 2.8.7.4 1.6.5 2.8.5zm21.6 2.9c-.7 0-1.1-.1-1.4-.4-.3-.2-.6-.7-.8-1.4L41 44.2c-.2-.7-.3-1.2-.3-1.5 0-.6.3-.9.9-.9h3.6c.7 0 1.2.1 1.4.4.3.2.5.7.7 1.4l5.4 21.3 5-21.3c.2-.7.4-1.2.7-1.4.3-.2.8-.4 1.5-.4h2.9c.7 0 1.2.1 1.5.4.3.2.6.7.7 1.4l5.1 21.6 5.5-21.6c.2-.7.5-1.2.7-1.4.3-.2.7-.4 1.4-.4h3.4c.6 0 .9.3.9.9 0 .2 0 .4-.1.6l-.2.9-7.2 26.4c-.2.7-.5 1.2-.8 1.4-.3.2-.8.4-1.4.4h-3.1c-.7 0-1.2-.1-1.5-.4-.3-.2-.6-.7-.7-1.5l-5-20.7-4.9 20.6c-.2.8-.4 1.3-.7 1.5-.3.2-.8.4-1.5.4h-3.1zm38.5.8c-1.9 0-3.8-.2-5.6-.7s-3.2-1-4.2-1.7c-.6-.3-.9-.7-1.1-1s-.2-.8-.2-1.2v-2.1c0-.9.3-1.3.9-1.3.2 0 .5.1.7.2.2.1.6.3 1.1.5.8.3 1.6.6 2.5.8s2 .3 3.1.3c1.6 0 2.9-.3 3.8-.9.9-.6 1.4-1.4 1.4-2.5 0-.7-.2-1.3-.7-1.8s-1.4-1-2.7-1.4l-3.9-1.2c-2-.6-3.4-1.5-4.3-2.7-.9-1.2-1.4-2.5-1.4-3.9 0-1.1.2-2.1.7-3s1.1-1.6 1.9-2.2c.8-.6 1.7-1.1 2.8-1.4 1.1-.3 2.2-.5 3.4-.5.6 0 1.2.03 1.8.1.6.1 1.2.2 1.8.3.5.1 1.1.3 1.6.5s.9.4 1.2.5c.4.2.7.5.9.7.2.3.3.6.3 1.1v1.9c0 .9-.3 1.3-.9 1.3-.3 0-.8-.2-1.4-.5-1.9-.9-4-1.3-6.3-1.3-1.5 0-2.6.3-3.4.8-.8.5-1.2 1.3-1.2 2.3 0 .7.3 1.4.8 1.9.5.5 1.5 1 2.9 1.4l3.8 1.2c1.9.6 3.3 1.5 4.2 2.5.9 1.1 1.3 2.3 1.3 3.7 0 1.1-.2 2.2-.7 3.1-.4.9-1.1 1.7-1.9 2.4-.8.6-1.8 1.1-3 1.5-1.2.3-2.4.5-3.7.5z"/>
      </svg>
    ),
  },
  {
    id: "CL_02", label: "STORAGE", name: "S3",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <rect width="128" height="128" fill="#7aa116"/>
        <path fill="#fff" d="M64 20L30 36v56l34 16 34-16V36z" opacity=".3"/>
        <path fill="#fff" d="M64 20L30 36l34 16 34-16z"/>
        <path fill="#fff" d="M30 36v56l34 16V52z" opacity=".7"/>
        <path fill="#fff" d="M98 36v56L64 108V52z"/>
        <text x="64" y="72" textAnchor="middle" fill="#7aa116" fontSize="18" fontWeight="900" fontFamily="Arial">S3</text>
      </svg>
    ),
  },
  {
    id: "CL_03", label: "CDN", name: "CloudFront",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <rect width="128" height="128" fill="#8c4fff"/>
        <circle cx="64" cy="64" r="30" fill="none" stroke="#fff" strokeWidth="5"/>
        <ellipse cx="64" cy="64" rx="15" ry="30" fill="none" stroke="#fff" strokeWidth="4"/>
        <line x1="34" y1="64" x2="94" y2="64" stroke="#fff" strokeWidth="4"/>
        <line x1="64" y1="34" x2="64" y2="94" stroke="#fff" strokeWidth="4"/>
      </svg>
    ),
  },
  {
    id: "CL_04", label: "SERVERLESS", name: "Lambda",
    svg: (
      <svg viewBox="0 0 128 128" className="w-10 h-10">
        <rect width="128" height="128" fill="#ff9900"/>
        <text x="64" y="84" textAnchor="middle" fill="#fff" fontSize="72" fontWeight="bold" fontFamily="serif">λ</text>
      </svg>
    ),
  },
];


export default function BackendCloud() {
  const t = useTranslations("backendCloud");

  const Panel = ({
    items,
    accentColor,
    label,
    borderClass,
  }: {
    items: typeof backend;
    accentColor: string;
    label: string;
    borderClass: string;
  }) => (
    <div className={borderClass}>
      <div className="px-6 py-3 border-b border-[#262626] flex items-center gap-3">
        <span className={`w-2 h-2 inline-block`} style={{ background: accentColor }} />
        <span className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: accentColor }}>
          {label}
        </span>
      </div>
      <div className="grid grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-5 border-r border-b border-[#262626] group hover:bg-[#1a1919] transition-colors"
          >
            <span className="font-mono text-[10px] font-bold tracking-widest block mb-3" style={{ color: accentColor }}>
              {item.id} · {item.label}
            </span>
            <div className="mb-3 opacity-90 group-hover:opacity-100 transition-opacity">
              {item.svg}
            </div>
            <span className="font-display font-black text-base text-white group-hover:text-white/90 uppercase tracking-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="backend" className="bg-[#0e0e0e] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-black text-4xl uppercase mb-2">
          {t("title1")}<span className="text-[#ff003c]">{t("title2")}</span>
        </h2>
        <div className="w-full h-px bg-[#ff003c] mb-16 opacity-40" />

        <div className="grid md:grid-cols-2 border border-[#262626]">
          <Panel
            items={backend}
            accentColor="#ff003c"
            label={t("backendLabel")}
            borderClass="border-r border-[#262626]"
          />
          <Panel
            items={cloud}
            accentColor="#ff9900"
            label={t("cloudLabel")}
            borderClass=""
          />
        </div>
      </div>
    </section>
  );
}
