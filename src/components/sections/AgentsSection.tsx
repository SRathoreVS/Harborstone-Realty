import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import agent1 from "@/assets/agent1.jpg";
import agent2 from "@/assets/agent2.jpg";
import agent3 from "@/assets/agent3.jpg";
import agent4 from "@/assets/agent4.jpg";

/* ---------------- DATA ---------------- */
const AGENTS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Real Estate Consultant",
    location: "Los Angeles, CA",
    experience: "8+ Years Experience",
    image: agent1,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Luxury Property Advisor",
    location: "New York, NY",
    experience: "10+ Years Experience",
    image: agent2,
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Residential Property Expert",
    location: "Austin, TX",
    experience: "6+ Years Experience",
    image: agent3,
  },
  {
    id: 4,
    name: "Daniel White",
    role: "Investment Property Specialist",
    location: "Malibu, CA",
    experience: "9+ Years Experience",
    image: agent4,
  },
];

export default function AgentsSection() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* Touch swipe */
  const [startX, setStartX] = useState<number | null>(null);

  /* Detect screen */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTouchEnd = (endX: number) => {
    if (startX === null) return;
    const diff = startX - endX;
    if (diff > 50 && active < AGENTS.length - 1) setActive(active + 1);
    if (diff < -50 && active > 0) setActive(active - 1);
    setStartX(null);
  };

  return (
    <section style={{ background: "#f3f3f1", padding: "96px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 6%" }}>
        {/* HEADER */}
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 40, fontWeight: 600, marginBottom: 16 }}>
            Meet Our Agents
          </h2>
          <p style={{ maxWidth: 480, color: "#6b6b6b", lineHeight: 1.6 }}>
            Our experienced agents help you buy, sell, and invest with
            confidence.
          </p>
        </div>

        {/* GRID (DESKTOP / TABLET) */}
        {!isMobile && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 32,
            }}
          >
            {AGENTS.map((agent) => (
              <AgentCard key={agent.id} agent={agent} navigate={navigate} />
            ))}
          </div>
        )}

        {/* CAROUSEL (MOBILE) */}
        {isMobile && (
          <>
            <div
              style={{ overflow: "hidden" }}
              onTouchStart={(e) => setStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => handleTouchEnd(e.changedTouches[0].clientX)}
            >
              <div
                style={{
                  display: "flex",
                  width: `${AGENTS.length * 100}%`,
                  transform: `translateX(-${active * 100}%)`,
                  transition: "transform 0.35s ease",
                }}
              >
                {AGENTS.map((agent) => (
                  <div key={agent.id} style={{ width: "100%", flexShrink: 0 }}>
                    <AgentCard agent={agent} navigate={navigate} />
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
              {AGENTS.map((agent, index) => (
                <button
                  key={agent.id}
                  onClick={() => setActive(index)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "none",
                    background: active === index ? "#111" : "#cfcfcf",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1200px) {
          section div[style*="repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 72px 0;
          }

          h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- CARD ---------------- */
function AgentCard({ agent, navigate }: { agent: any; navigate: any }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #e6e6e6",
      }}
    >
      {/* IMAGE */}
      <div
        style={{
          height: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={agent.image}
          alt={agent.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: 24 }}>
        <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>
          {agent.name}
        </p>

        <p style={{ fontSize: 14, color: "#6b6b6b", marginBottom: 12 }}>
          {agent.role}
        </p>

        <p style={{ fontSize: 14, marginBottom: 6 }}>📍 {agent.location}</p>

        <p style={{ fontSize: 14, color: "#6b6b6b", marginBottom: 20 }}>
          {agent.experience}
        </p>

        <button
          onClick={() => navigate(`/agents/${agent.id}`)}
          style={{
            width: "100%",
            padding: "12px 16px",
            background: "#111",
            color: "#fff",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
