import { useState, useEffect } from "react";

/* ---------------- DATA ---------------- */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Jonathan Miller",
    role: "Home Buyer",
    location: "San Diego, CA",
    message:
      "Harborstone Realty made the entire buying process seamless. Their attention to detail and market knowledge is unmatched.",
  },
  {
    id: 2,
    name: "Amanda Wilson",
    role: "Property Investor",
    location: "Austin, TX",
    message:
      "Professional, transparent, and extremely helpful. I’ve worked with many agencies, but this experience truly stood out from the rest.",
  },
  {
    id: 3,
    name: "Robert Thompson",
    role: "Home Seller",
    location: "New York, NY",
    message:
      "From pricing strategy to closing, everything was handled perfectly. Highly recommended for serious buyers and sellers.",
  },
];

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "96px 0",
        overflowX: "hidden", // 🔒 HARD STOP horizontal scroll
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 6%",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 40, fontWeight: 600, marginBottom: 16 }}>
            What Our Clients Say
          </h2>
          <p
            style={{
              maxWidth: 520,
              color: "#6b6b6b",
              lineHeight: 1.6,
            }}
          >
            Trusted by homeowners, investors, and families across the United
            States.
          </p>
        </div>

        {/* DESKTOP GRID */}
        {!isMobile && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {TESTIMONIALS.map(renderCard)}
          </div>
        )}

        {/* MOBILE CAROUSEL */}
        {isMobile && (
          <>
            <div
              style={{
                overflow: "hidden",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: `${TESTIMONIALS.length * 100}%`,
                  transform: `translateX(-${active * 100}%)`,
                  transition: "transform 0.4s ease",
                }}
              >
                {TESTIMONIALS.map((t) => (
                  <div
                    key={t.id}
                    style={{
                      width: "100%",
                      minWidth: 0, // 🔥 MOST IMPORTANT FIX
                      flexShrink: 0,
                      paddingRight: 16,
                      boxSizing: "border-box",
                    }}
                  >
                    {renderCard(t)}
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                marginTop: 24,
              }}
            >
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "none",
                    background: active === i ? "#111" : "#cfcfcf",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */
function renderCard(item: any) {
  return (
    <div
      style={{
        background: "#f9f9f8",
        borderRadius: 16,
        padding: 28,
        border: "1px solid #e6e6e6",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.7,
          marginBottom: 24,
          color: "#333",

          /* 🔥 TEXT WRAPPING FIXES */
          whiteSpace: "normal",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
          maxWidth: "100%",
        }}
      >
        “{item.message}”
      </p>

      <div>
        <p style={{ fontWeight: 600 }}>{item.name}</p>
        <p style={{ fontSize: 14, color: "#6b6b6b" }}>
          {item.role} · {item.location}
        </p>
      </div>
    </div>
  );
}
