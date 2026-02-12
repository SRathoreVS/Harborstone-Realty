import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import heroImage from "@/assets/hero.jpg";

/* ---------------- Typing Placeholder Hook ---------------- */
function useTypingPlaceholder(texts: string[], speed = 70, delay = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let char = 0;
    const current = texts[index];

    const interval = setInterval(() => {
      setText(current.slice(0, char + 1));
      char++;
      if (char === current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
          setText("");
        }, delay);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [index]);

  return text;
}

export default function Hero() {
  const [mode, setMode] = useState<"buy" | "rent">("buy");

  const location = useTypingPlaceholder([
    "New York, USA",
    "Los Angeles, CA",
    "Austin, TX",
  ]);
  const start = useTypingPlaceholder(["Select start date", "Today"]);
  const end = useTypingPlaceholder(["Select end date", "Next week"]);

  return (
    <section className="hero">
      {/* IMAGE */}
      <div className="hero-image">
        <img src={heroImage} alt="Property" />
      </div>

      {/* CONTENT */}
      <div className="hero-content">
        <h1 className="hero-title">
          Easiest way to find
          <br />
          your dream place
        </h1>

        <p className="hero-subtitle">
          This is where you can find a dream place for you of various types, all
          over the world at affordable prices.
        </p>

        {/* Buy / Rent */}
        <div className="mode-toggle">
          <button
            className={mode === "buy" ? "active" : ""}
            onClick={() => setMode("buy")}
          >
            Buy
          </button>
          <button
            className={mode === "rent" ? "active" : ""}
            onClick={() => setMode("rent")}
          >
            Rent
          </button>
        </div>

        {/* Search */}
        <div className="search-card">
          <div className="field">
            <label>Location</label>
            <input placeholder={location} />
          </div>

          <div className="field">
            <label>Start</label>
            <input placeholder={start} />
          </div>

          <div className="field">
            <label>End</label>
            <input placeholder={end} />
          </div>

          <button className="search-btn" aria-label="Search">
            <MagnifyingGlassIcon width={20} height={20} />
          </button>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat">
            <strong>200</strong>
            <span>Award Winning</span>
          </div>
          <div className="stat">
            <strong>500+</strong>
            <span>Happy Customer</span>
          </div>
          <div className="stat">
            <strong>100+</strong>
            <span>Property Ready</span>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* ===== ROOT ===== */
        .hero {
          position: relative;
          background: #f3f3f1;
          overflow: hidden;
        }

        /* ===== IMAGE ===== */
        .hero-image {
          position: absolute;
          top: 140px;
          right: 0;
          width: 48%;
          height: 640px;
          z-index: 1;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
          border-radius: 28px 0 0 28px;
        }

        /* ===== CONTENT ===== */
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1440px;
          margin: 0 auto;
          padding: 160px 6% 120px;
        }

        .hero-title {
          font-size: 64px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          max-width: 560px;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          max-width: 420px;
          color: #6b6b6b;
          margin-bottom: 40px;
        }

        /* ===== MODE ===== */
        .mode-toggle {
          display: inline-flex;
          background: #fff;
          border: 1px solid #e6e6e6;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 28px;
        }

        .mode-toggle button {
          padding: 14px 28px;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .mode-toggle .active {
          background: #111;
          color: #fff;
        }

        /* ===== SEARCH ===== */
        .search-card {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1px solid #e6e6e6;
          border-radius: 12px;
          padding: 20px 24px;
          max-width: 760px;
          gap: 20px;
          position: relative;
        }

        .search-card::before,
        .search-card::after {
          content: "";
          position: absolute;
          top: 24px;
          bottom: 24px;
          width: 1px;
          background: #e6e6e6;
        }

        .search-card::before {
          left: 33%;
        }

        .search-card::after {
          left: 66%;
        }

        .field {
          flex: 1;
        }

        .field label {
          font-size: 12px;
          color: #6b6b6b;
        }

        .field input {
          border: none;
          outline: none;
          font-size: 14px;
          font-weight: 500;
          width: 100%;
        }

        .search-btn {
          width: 48px;
          height: 48px;
          background: #111;
          color: #fff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .search-btn:hover {
          background: #000;
        }

        /* ===== STATS ===== */
        .stats {
          display: flex;
          gap: 80px;
          margin-top: 64px;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat strong {
          font-size: 32px;
          font-weight: 600;
        }

        .stat span {
          margin-top: 6px;
          font-size: 14px;
          color: #6b6b6b;
        }

        /* ===== LAPTOP & BELOW ===== */
        @media (max-width: 1279px) {
          .hero-image {
            position: relative;
            top: 0;
            width: 100%;
            height: 420px;
            margin-top: 24px;
          }

          .hero-image img {
            border-radius: 16px;
            object-position: center;
          }

          .hero-content {
            padding-top: 120px;
          }
        }

        /* ===== TABLET ===== */
        @media (max-width: 1023px) {
          .hero-content {
            padding-top: 96px;
          }

          .hero-title {
            font-size: 48px;
          }

          .stats {
            gap: 40px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 72px;
          }

          .hero-title {
            font-size: 36px;
          }

          .search-card {
            flex-direction: column;
            align-items: stretch;
          }

          .search-card::before,
          .search-card::after {
            display: none;
          }

          .search-btn {
            width: 100%;
            margin-top: 12px;
            height: 52px;
            border-radius: 12px;
          }

          .stats {
            flex-direction: column;
            gap: 24px;
          }
        }

        /* ===== SMALL MOBILE ===== */
        @media (max-width: 375px) {
          .hero-content {
            padding-top: 64px;
          }
        }
      `}</style>
    </section>
  );
}
