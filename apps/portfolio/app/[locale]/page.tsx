import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SystemOverview from "./components/SystemOverview";
import MainStack from "./components/MainStack";
import AbilitiesMatrix from "./components/AbilitiesMatrix";
import BackendCloud from "./components/BackendCloud";
import MissionLogs from "./components/MissionLogs";
import AcademicCore from "./components/AcademicCore";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Douglas Neves",
  jobTitle: "Senior Frontend Engineer",
  url: "https://douglasneves.dev",
  email: "neves.douglas@outlook.com",
  sameAs: [
    "https://github.com/douglas-neves/",
    "https://www.linkedin.com/in/nevesdouglas",
  ],
  knowsAbout: [
    "React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript",
    "React Native", "Web Components", "Design Systems", "Microfrontends",
    "Node.js", "AWS", "Docker", "GraphQL", "Tailwind CSS",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "FATEC — Faculdade de Tecnologia" },
    { "@type": "EducationalOrganization", name: "SENAC" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Seguros Unimed",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressCountry: "BR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <Hero />
      <SystemOverview />
      <MainStack />
      <AbilitiesMatrix />
      <BackendCloud />
      <MissionLogs />
      <AcademicCore />
      <CTA />
      <Footer />
    </>
  );
}
