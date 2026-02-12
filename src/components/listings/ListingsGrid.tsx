import { useNavigate } from "react-router-dom";

/* ---------- TYPES ---------- */
export interface Listing {
  id: number;
  title: string;
  price: number;
  state: string;
  city: string;
  beds: number;
  image: string;
}

/* ---------- PROPS ---------- */
interface Props {
  listings: Listing[];
}

/* ---------- COMPONENT ---------- */
export default function ListingsGrid({ listings }: Props) {
  const navigate = useNavigate();

  if (listings.length === 0) {
    return (
      <div
        style={{
          padding: "80px 0",
          textAlign: "center",
          color: "#6b6b6b",
        }}
      >
        No properties match your filters.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 32,
      }}
    >
      {listings.map((item) => (
        <div
          key={item.id} // ✅ UNIQUE KEY
          onClick={() => navigate(`/property/${item.id}`)}
          style={{
            border: "1px solid #e6e6e6",
            borderRadius: 16,
            overflow: "hidden",
            cursor: "pointer",
            background: "#fff",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* IMAGE */}
          <div style={{ height: 220, overflow: "hidden" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* CONTENT */}
          <div style={{ padding: 20 }}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              ${item.price.toLocaleString()}
            </p>

            <p
              style={{
                fontSize: 16,
                marginBottom: 6,
              }}
            >
              {item.title}
            </p>

            <p
              style={{
                fontSize: 14,
                color: "#6b6b6b",
                marginBottom: 12,
              }}
            >
              {item.city}, {item.state}
            </p>

            <p style={{ fontSize: 13, color: "#6b6b6b" }}>{item.beds}+ Beds</p>
          </div>
        </div>
      ))}

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
