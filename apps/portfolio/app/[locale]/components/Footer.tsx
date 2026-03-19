import { useTranslations } from "next-intl";

const links = [
  { label: "GITHUB", href: "https://github.com/douglas-neves/" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/nevesdouglas" },
  { label: "EMAIL", href: "mailto:neves.douglas@outlook.com" },
  { label: "SOURCE_CODE", href: "https://github.com/douglas-neves/" },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#262626] py-8 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono-label text-[#adaaaa]">{t("copy")}</span>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono-label text-[#adaaaa] hover:text-[#ff003c] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="font-mono-label text-[#ff003c]">{t("stable")}</span>
      </div>
    </footer>
  );
}
