const reactSvg = (size = "w-10 h-10") => (
  <svg viewBox="0 0 128 128" className={size}>
    <g fill="#61dafb">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13-1.2-21.8-9.6-26.5-7.9-4.4-19.1-2.1-30.8 6.3-3 2.1-5.9 4.4-8.5 6.7-1.9-1.7-3.9-3.3-6-4.8C34.8 9.7 23.7 7.4 16.3 11.7c-8 4.5-11.1 13.5-9.1 26 .5 2.9 1.1 5.7 2 8.5-3 1-5.7 2-8.2 3-10.7 4-16.4 9.7-16.4 17.6 0 8 6 13.8 16.7 17.7 2.1.7 4.3 1.4 6.6 2-.4 2.1-.7 4.3-1 6.4-2 13.2 1.3 22.1 9.7 26.5 1.8 1 3.9 1.5 6.1 1.5 6.4 0 14-3.7 21.9-10.7 1.5-1.3 3-2.7 4.4-4.2 2.1 1.9 4.2 3.6 6.4 5.1C58.5 122.4 70.1 125 78 120.6c8.2-4.6 11.6-13.9 9.4-27.1-.3-1.7-.7-3.5-1.2-5.3 2.4-.7 4.6-1.5 6.7-2.3 10.8-4 16.8-9.8 16.8-17.8-.1-7.9-6.1-13.7-16.8-17.6zm-30.5 29.7c-1.7 2.9-3.5 5.5-5.5 8-3.4.3-6.8.4-10.3.4-3.4 0-6.9-.1-10.2-.4-2-2.5-3.9-5.1-5.5-8-1.6-2.8-3-5.8-4.2-8.8 1.2-3 2.6-6 4.2-8.8 1.7-2.9 3.5-5.5 5.5-8 3.4-.3 6.8-.4 10.3-.4 3.4 0 6.9.1 10.2.4 2 2.5 3.9 5.1 5.5 8 1.6 2.8 3 5.8 4.2 8.8-1.2 3-2.6 6-4.2 8.8z"/>
    </g>
  </svg>
);

const nextSvg = (size = "w-10 h-10") => (
  <svg viewBox="0 0 128 128" className={size}>
    <defs>
      <linearGradient id="nextjs-grad-ms" x1="107.7" y1="52.3" x2="80.7" y2="95" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fff"/>
        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <circle cx="64" cy="64" r="64" fill="#000"/>
    <path d="M106.6 109.8L48.4 31H31v66h13.7V49.4l52.6 71.4c3.1-2.8 6-5.9 8.6-9.2z" fill="url(#nextjs-grad-ms)"/>
    <path d="M84.7 31h13.6v66H84.7z" fill="#fff"/>
  </svg>
);

const vueSvg = (size = "w-10 h-10") => (
  <svg viewBox="0 0 128 128" className={size}>
    <path fill="#42b883" d="M78.8 10L64 35.4 49.2 10H0l64 110 64-110z"/>
    <path fill="#35495e" d="M78.8 10L64 35.4 49.2 10H25.6L64 76l38.4-66z"/>
  </svg>
);

const nuxtSvg = (size = "w-10 h-10") => (
  <svg viewBox="0 0 128 128" className={size}>
    <path d="M71.9 111.4H119c1.4 0 2.8-.4 4-1.1 1.2-.7 2.2-1.7 2.8-2.9.7-1.2 1-2.6.9-4-.1-1.4-.6-2.7-1.4-3.9L93.1 47.1c-.8-1.1-1.8-2-3-2.7-1.2-.6-2.6-1-4-1s-2.8.4-4 1c-1.2.7-2.2 1.6-3 2.7L71.9 63l-16-25.6c-.8-1.1-1.8-2.1-3-2.8-1.2-.7-2.6-1-4-1s-2.8.4-4 1c-1.2.7-2.2 1.6-3 2.8L2.6 99.4c-.8 1.1-1.3 2.5-1.4 3.9-.1 1.4.3 2.8.9 4 .7 1.2 1.6 2.2 2.8 2.9 1.2.7 2.6 1.1 4 1.1h33.4c13.2 0 22.9-5.7 29.6-16.9l16.3-27.2 8.3 13.8-13.6 22.7c-6.4 10.7-13.9 15.7-27.3 15.7z" fill="#00dc82"/>
    <path d="M41.7 101.4H8.9c-.8 0-1.6-.2-2.3-.6-.7-.4-1.3-1-1.7-1.7-.4-.7-.6-1.5-.5-2.3.1-.8.4-1.6.8-2.3L29.6 56c.4-.7 1-1.2 1.7-1.6.7-.4 1.5-.6 2.3-.6s1.6.2 2.3.6c.7.4 1.3 1 1.7 1.6l6.1 10-9.4 15.7c-5.4 9-4.9 18.2.2 27.2z" fill="#fff" opacity=".4"/>
  </svg>
);

const stack = [
  {
    name: "TYPESCRIPT",
    label: null,
    svg: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <rect width="128" height="128" fill="#3178c6"/>
        <path d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "REACT / NEXT.JS",
    label: "WEB",
    svg: (
      <div className="flex items-center gap-3">
        {reactSvg()}
        <span className="text-white/20 font-black text-lg">+</span>
        {nextSvg()}
      </div>
    ),
  },
  {
    name: "VUE.JS / NUXT.JS",
    label: "WEB",
    svg: (
      <div className="flex items-center gap-3">
        {vueSvg()}
        <span className="text-white/20 font-black text-lg">+</span>
        {nuxtSvg()}
      </div>
    ),
  },
  {
    name: "REACT NATIVE",
    label: "MOBILE",
    svg: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <g fill="#61dafb">
          <circle cx="64" cy="64" r="11.4"/>
          <ellipse cx="64" cy="64" rx="58" ry="21" fill="none" stroke="#61dafb" strokeWidth="7"/>
          <ellipse cx="64" cy="64" rx="58" ry="21" fill="none" stroke="#61dafb" strokeWidth="7" transform="rotate(60 64 64)"/>
          <ellipse cx="64" cy="64" rx="58" ry="21" fill="none" stroke="#61dafb" strokeWidth="7" transform="rotate(-60 64 64)"/>
        </g>
      </svg>
    ),
  },
];

export default function MainStack() {
  return (
    <section id="stack" className="bg-[#131313] py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-black text-4xl uppercase mb-2">
          MAIN_<span className="text-[#ff003c]">STACK</span>
        </h2>
        <div className="w-full h-px bg-[#ff003c] mb-16 opacity-40" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-4 group">
              <div className="bg-[#1a1919] p-6 w-full flex items-center justify-center group-hover:bg-[#262626] transition-colors min-h-[100px]">
                {tech.svg}
              </div>
              <div className="text-center">
                {tech.label && (
                  <span className="font-mono text-[10px] text-[#ff003c] font-bold tracking-widest block mb-1">
                    {tech.label}
                  </span>
                )}
                <span className="font-mono-label text-[#adaaaa] group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
