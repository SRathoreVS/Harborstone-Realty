export default function About() {
  return (
    <section style={{ background: "#ffffff" }}>
      {/* HERO */}
      <div
        style={{
          padding: "160px 6% 96px",
          maxWidth: 1440,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 56,
            fontWeight: 600,
            maxWidth: 720,
            marginBottom: 24,
          }}
        >
          Building smarter real estate decisions
        </h1>

        <p
          style={{
            fontSize: 18,
            maxWidth: 560,
            color: "#6b6b6b",
            lineHeight: 1.7,
          }}
        >
          Harborstone Realty helps buyers, renters, and investors make confident
          property decisions through data, transparency, and expert guidance.
        </p>
      </div>

      {/* STORY */}
      <div
        style={{
          background: "#f3f3f1",
          padding: "96px 6%",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, marginBottom: 24 }}>Our story</h2>

          <p
            style={{
              maxWidth: 760,
              lineHeight: 1.8,
              color: "#4b4b4b",
            }}
          >
            Founded with a belief that real estate decisions should be driven by
            clarity — not confusion — Harborstone Realty combines local
            expertise with modern analytics to simplify buying, renting, and
            investing.
            <br />
            <br />
            We focus on long-term value, transparent insights, and user-first
            design so every decision feels informed and confident.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div
        style={{
          padding: "96px 6%",
          maxWidth: 1440,
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: 36, marginBottom: 48 }}>What drives us</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {[
            {
              title: "Data-first decisions",
              text: "Every insight we present is backed by market data and real trends.",
            },
            {
              title: "Client transparency",
              text: "Clear pricing, honest comparisons, and no hidden assumptions.",
            },
            {
              title: "Long-term value",
              text: "We prioritize sustainable growth over short-term wins.",
            },
          ].map((v, i) => (
            <div
              key={i}
              style={{
                background: "#f9f9f8",
                padding: 32,
                borderRadius: 20,
                border: "1px solid #e6e6e6",
              }}
            >
              <h4 style={{ fontSize: 18, marginBottom: 12 }}>{v.title}</h4>
              <p style={{ color: "#6b6b6b", lineHeight: 1.6 }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "96px 6%",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
          }}
        >
          {[
            ["500+", "Properties analyzed"],
            ["20+", "Cities covered"],
            ["95%", "Client satisfaction"],
          ].map(([num, label], i) => (
            <div key={i}>
              <p style={{ fontSize: 40, fontWeight: 600 }}>{num}</p>
              <p style={{ color: "#cfcfcf" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div
        style={{
          padding: "96px 6%",
          maxWidth: 1440,
          margin: "0 auto",
        }}
      >
        <h2 style={{ fontSize: 36, marginBottom: 24 }}>Our approach</h2>

        <p
          style={{
            maxWidth: 720,
            color: "#4b4b4b",
            lineHeight: 1.8,
          }}
        >
          We believe technology should empower people — not replace human
          judgment. Our platform is designed to support buyers, renters, and
          investors with actionable insights, while our experts provide the
          context that numbers alone cannot.
        </p>
      </div>

      {/* CTA */}
      <div
        style={{
          background: "#f3f3f1",
          padding: "96px 6%",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: 32, marginBottom: 16 }}>
          Ready to explore opportunities?
        </h3>

        <p style={{ color: "#6b6b6b", marginBottom: 32 }}>
          Discover listings, analyze investments, or connect with experts.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <a
            href="/listings"
            style={{
              padding: "14px 28px",
              background: "#111",
              color: "#fff",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            View Listings
          </a>

          <a
            href="/contact"
            style={{
              padding: "14px 28px",
              border: "1px solid #111",
              borderRadius: 10,
              textDecoration: "none",
              color: "#111",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1024px) {
          h1 { font-size: 44px !important; }
          h2 { font-size: 32px !important; }
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          section > div {
            padding-left: 6% !important;
            padding-right: 6% !important;
          }
        }
      `}</style>
    </section>
  );
}
