import Image from "next/image";

export default function Home() {
  const zoomLink = "https://zoom.us/j/349786148?pwd=008895";

  const bullets = [
    "Share openly about menopause & life transitions",
    "Support one another with love and understanding",
    "Strengthen memory, emotional balance & peace",
    "Embrace this new chapter with confidence",
  ];

  const closingLines = [
    "Come as you are.",
    "Leave feeling supported.",
    "Step into your power.",
  ];

  return (
    <div className="min-h-screen w-full bg-white flex items-start justify-center py-4 px-3 sm:py-8 sm:px-4">
      {/* ═══ FLYER ═══ */}
      <main
        className="relative w-full max-w-[794px] overflow-hidden rounded-md shadow-2xl bg-cover bg-center bg-no-repeat flyer-frame"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      >
        {/* inner decorative frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 sm:inset-5 rounded-sm"
        />

        {/* sparkles */}
        {[
          "top-[18%] left-[6%]",
          "top-[22%] right-[7%]",
          "top-[45%] left-[4%]",
          "top-[52%] right-[5%]",
          "top-[68%] left-[8%]",
          "top-[75%] right-[6%]",
          "bottom-[20%] left-[12%]",
          "bottom-[16%] right-[14%]",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} z-[3] pointer-events-none text-[#f4c2d4] text-sm sm:text-base sparkle`}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            ✦
          </span>
        ))}

        {/* ═══ CONTENT ═══ */}
        <div className="relative z-10 flex flex-col items-center w-full h-full px-5 pt-6 pb-6 sm:px-10 sm:pt-8 sm:pb-8">
          {/* LOGO */}
          <div className="flex justify-center w-full mb-3 float-anim">
            <Image
              src="/logo.png"
              alt="Menopause Anonymous"
              width={360}
              height={360}
              priority
              className="w-[60%] max-w-[240px] sm:max-w-[340px] h-auto"
              style={{
                filter: "drop-shadow(0 6px 24px rgba(139,26,74,0.15))",
              }}
            />
          </div>

          {/* TAGLINE */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 w-full">
            <span className="text-[#c2185b] text-sm sm:text-base">♥</span>
            <h2 className="font-script text-[#7b1040] text-center text-lg sm:text-2xl md:text-[1.7rem] leading-tight m-0">
              Women Supporting Women Through Change
            </h2>
            <span className="text-[#c2185b] text-sm sm:text-base">♥</span>
          </div>

          {/* SUNDAY HEALING CIRCLE */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-sm mb-4 rose-divider">
            <span className="text-[#c2185b] text-xs sm:text-sm">♥</span>
            <h1 className="font-serif font-bold text-[#7b1040] text-center text-[0.78rem] sm:text-base md:text-[1.05rem] tracking-[0.18em] sm:tracking-[0.22em] whitespace-nowrap m-0">
              SUNDAY HEALING CIRCLE
            </h1>
            <span className="text-[#c2185b] text-xs sm:text-sm">♥</span>
          </div>

          {/* AFFIRMATIONS */}
          <div className="text-center mb-5">
            <p className="font-serif text-[#5a0c2e] text-base sm:text-lg md:text-xl leading-snug m-0">
              You are not alone.
            </p>
            <p className="font-serif text-[#5a0c2e] text-base sm:text-lg md:text-xl leading-snug m-0">
              You are not &ldquo;losing it.&rdquo;
            </p>
            <p className="font-serif font-medium text-[#7b1040] text-base sm:text-lg md:text-[1.3rem] leading-snug m-0">
              You are <em className="italic font-semibold">becoming.</em>
            </p>
          </div>

          {/* INTRO LINE */}
          <div className="w-full flex items-start gap-2 mb-3">
            <span className="text-[#c9956a] text-sm mt-1">✦</span>
            <p className="font-serif text-[#5a0c2e] text-[0.9rem] sm:text-base leading-snug m-0">
              Join us for a safe, supportive space where women gather to:
            </p>
          </div>

          {/* BULLETS */}
          <ul className="w-full space-y-2 mb-6 pl-1 sm:pl-2">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3">
                <span
                  className="text-[#c2185b] text-base sm:text-lg shrink-0 mt-0.5 heart-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  ♥
                </span>
                <span className="font-serif text-[#5a0c2e] text-[0.88rem] sm:text-base leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* MEETING DETAILS + CLOSING — stack on mobile, grid on sm+ */}
          <div className="w-full flex flex-col sm:grid sm:grid-cols-2 gap-5 mb-6">
            {/* meeting details */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg">📋</span>
                <p className="font-serif font-bold text-[#7b1040] text-[0.7rem] sm:text-xs tracking-[0.2em] m-0">
                  MEETING DETAILS
                </p>
                <span className="text-[#c9956a] text-sm">✦</span>
              </div>

              <div className="flex items-start gap-2 pl-1">
                <span className="text-base sm:text-lg">📅</span>
                <div>
                  <p className="font-serif font-medium text-[#5a0c2e] text-[0.9rem] sm:text-[0.95rem] m-0 leading-tight">
                    Every Sunday
                  </p>
                  <div className="font-serif font-medium text-[#5a0c2e] text-[0.9rem] sm:text-[0.95rem] flex items-center gap-2 leading-tight">
                    <span className="text-sm">🕓</span>
                    <span>4:00 PM (Central Time)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/55 rounded-xl px-3 py-2.5 sm:px-3.5 mt-1.5 space-y-1 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <p className="font-serif text-[#5a0c2e] text-[0.8rem] sm:text-[0.85rem] m-0">
                    Meeting ID:{" "}
                    <strong className="text-[#7b1040] font-bold tracking-wider">
                      349 786 148
                    </strong>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔑</span>
                  <p className="font-serif text-[#5a0c2e] text-[0.8rem] sm:text-[0.85rem] m-0">
                    Password:{" "}
                    <strong className="text-[#7b1040] font-bold">008895</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* closing message */}
            <div className="flex flex-col items-center justify-center text-center">
              {closingLines.map((line, i) => (
                <p
                  key={i}
                  className="font-script text-[#7b1040] text-lg sm:text-xl md:text-[1.5rem] leading-[1.5] m-0"
                  style={{ textShadow: "0 1px 4px rgba(123,16,64,0.1)" }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* ZOOM BUTTON */}
          <div className="w-full flex flex-col items-center gap-3 mt-auto">
            <div className="flex items-center justify-center gap-3 w-full max-w-xs rose-divider">
              <span className="font-script text-[#7b1040] text-base sm:text-[1.05rem] whitespace-nowrap px-2">
                ✦ Join Us Online ✦
              </span>
            </div>

            <a
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="zoom-btn flex items-center justify-center gap-2 w-full max-w-md rounded-full py-2.5 px-4 sm:py-3 sm:px-8 font-bold text-white text-[0.85rem] sm:text-[0.98rem] tracking-wide no-underline border-2 border-white/30 relative overflow-hidden transition-transform hover:scale-[1.04] active:scale-[0.97]"
              style={{
                background:
                  "linear-gradient(135deg,#e91e8c 0%,#c2185b 45%,#7b1040 100%)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="48" height="48" rx="12" fill="white" fillOpacity="0.25" />
                <path
                  d="M8 16C8 14.3431 9.34315 13 11 13H29C30.6569 13 32 14.3431 32 16V32C32 33.6569 30.6569 35 29 35H11C9.34315 35 8 33.6569 8 32V16Z"
                  fill="white"
                />
                <path d="M32 20.5L40 15V33L32 27.5V20.5Z" fill="white" />
              </svg>
              <span className="text-center leading-tight">
                Join Sunday Healing Circle on Zoom
              </span>
            </a>

            <p className="text-[#7b1040] text-[0.7rem] sm:text-[0.72rem] opacity-70 text-center m-0">
              Meeting ID: 349 786 148 &nbsp;·&nbsp; Password: 008895
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}