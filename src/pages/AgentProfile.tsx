import { useParams } from "react-router-dom";
import agent1 from "@/assets/agent1.jpg";
import agent2 from "@/assets/agent2.jpg";
import agent3 from "@/assets/agent3.jpg";
import agent4 from "@/assets/agent4.jpg";

const AGENTS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Real Estate Consultant",
    location: "Los Angeles, CA",
    experience: "8+ Years Experience",
    image: agent1,
    bio: "Sarah specializes in residential properties and has helped over 300 families find their dream homes.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Luxury Property Advisor",
    location: "New York, NY",
    experience: "10+ Years Experience",
    image: agent2,
    bio: "Michael focuses on high-end luxury real estate and investment properties.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Residential Property Expert",
    location: "Austin, TX",
    experience: "6+ Years Experience",
    image: agent3,
    bio: "Emily is known for her deep knowledge of suburban and family-friendly neighborhoods.",
  },
  {
    id: 4,
    name: "Daniel White",
    role: "Investment Property Specialist",
    location: "Malibu, CA",
    experience: "9+ Years Experience",
    image: agent4,
    bio: "Daniel helps investors maximize ROI through smart property acquisitions.",
  },
];

export default function AgentProfile() {
  const { id } = useParams();
  const agent = AGENTS.find((a) => a.id === Number(id));

  if (!agent) return null;

  return (
    <section style={{ background: "#fff", padding: "120px 0" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 6%",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 48,
        }}
      >
        {/* IMAGE */}
        <img
          src={agent.image}
          alt={agent.name}
          style={{
            width: "100%",
            borderRadius: 16,
            objectFit: "cover",
          }}
        />

        {/* CONTENT */}
        <div>
          <h1 style={{ fontSize: 36, marginBottom: 12 }}>{agent.name}</h1>
          <p style={{ color: "#6b6b6b", marginBottom: 8 }}>{agent.role}</p>
          <p style={{ marginBottom: 16 }}>
            📍 {agent.location} · {agent.experience}
          </p>

          <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 32 }}>
            {agent.bio}
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              style={{
                padding: "14px 24px",
                background: "#111",
                color: "#fff",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
              }}
            >
              Book Consultation
            </button>

            <button
              style={{
                padding: "14px 24px",
                background: "#fff",
                border: "1px solid #e6e6e6",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Contact Agent
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <style>{`
        @media (max-width: 768px) {
          section div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
