import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Seo from "@/seo/Seo";

import listing1 from "@/assets/listings1.jpg";
import listing2 from "@/assets/listings2.jpg";
import listing3 from "@/assets/listings3.jpg";
import listing4 from "@/assets/listings4.jpg";
import listing5 from "@/assets/listings5.jpg";
import listing6 from "@/assets/listings6.jpg";
import listing7 from "@/assets/listings7.jpg";
import {
  useProperty,
  useSimilarProperties,
  useTotalProperties,
} from "@/hooks/useProperties";

/* ---------------- DATA ---------------- */
const PROPERTIES = [
  {
    id: 1,
    title: "Modern Family House",
    price: "$850,000",
    location: "Los Angeles, CA",
    description:
      "A modern family house offering open living spaces, premium finishes, and excellent natural lighting.",
    images: [listing1, listing2, listing3],
    agent: { name: "Sarah Johnson", city: "Los Angeles, CA" },
  },
  {
    id: 2,
    title: "Luxury City Apartment",
    price: "$620,000",
    location: "New York, NY",
    description:
      "A luxury apartment in the heart of the city with panoramic views and contemporary interiors.",
    images: [listing2, listing3, listing4],
    agent: { name: "Michael Brown", city: "New York, NY" },
  },
  {
    id: 3,
    title: "Cozy Suburban Villa",
    price: "$740,000",
    location: "Austin, TX",
    description:
      "A cozy villa located in a quiet suburban neighborhood, perfect for families.",
    images: [listing3, listing4, listing5],
    agent: { name: "Emily Davis", city: "Austin, TX" },
  },
  {
    id: 4,
    title: "Beachside Residence",
    price: "$910,000",
    location: "Malibu, CA",
    description:
      "A stunning beachside residence with ocean views and premium outdoor spaces.",
    images: [listing4, listing5, listing6],
    agent: { name: "Daniel White", city: "Malibu, CA" },
  },
  {
    id: 5,
    title: "Downtown Condo",
    price: "$560,000",
    location: "Chicago, IL",
    description:
      "A modern downtown condo close to business districts and lifestyle amenities.",
    images: [listing5, listing6, listing7],
    agent: { name: "Olivia Green", city: "Chicago, IL" },
  },
  {
    id: 6,
    title: "Modern Loft",
    price: "$680,000",
    location: "Seattle, WA",
    description:
      "A stylish loft with contemporary design and open-plan interiors.",
    images: [listing6, listing7, listing1],
    agent: { name: "James Wilson", city: "Seattle, WA" },
  },
  {
    id: 7,
    title: "Hilltop Villa",
    price: "$790,000",
    location: "Denver, CO",
    description:
      "A hilltop villa offering scenic views and spacious modern living.",
    images: [listing7, listing1, listing2],
    agent: { name: "Sophia Martinez", city: "Denver, CO" },
  },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const propertyId = Number(id);
  const property = useProperty(propertyId);
  const similar = useSimilarProperties(propertyId);
  const total = useTotalProperties();

  const [activeImage, setActiveImage] = useState(0);
  const [pageState, setPageState] = useState<"enter" | "exit">("enter");

  /* RESET ON ROUTE CHANGE */
  useEffect(() => {
    setActiveImage(0);
    setPageState("enter");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [propertyId]);

  if (!property) return null;

  /* ANIMATED NAVIGATION */
  const animatedNavigate = (path: string) => {
    setPageState("exit");
    setTimeout(() => navigate(path), 300);
  };

  return (
    <section
      style={{
        background: "#ffffff",
        paddingTop: 140, // navbar offset
        paddingBottom: 96,
        opacity: pageState === "enter" ? 1 : 0,
        transform: pageState === "enter" ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      <Seo
        title={`${property.title} in ${property.location} | Harborstone Realty`}
        description={property.description}
        image={property.images[0]}
        url={`https://harborstone-realty.com/property/${property.id}`}
      />

      {/* BACK / NEXT BUTTONS */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 0,
          right: 0,
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            padding: "0 6%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() =>
              propertyId === 1
                ? animatedNavigate("/")
                : animatedNavigate(`/property/${propertyId - 1}`)
            }
            style={navButton}
          >
            ← Back
          </button>

          <button
            onClick={() =>
              propertyId < PROPERTIES.length &&
              animatedNavigate(`/property/${propertyId + 1}`)
            }
            disabled={propertyId === PROPERTIES.length}
            style={{
              ...navButton,
              opacity: propertyId === PROPERTIES.length ? 0.4 : 1,
              cursor:
                propertyId === PROPERTIES.length ? "not-allowed" : "pointer",
            }}
          >
            Next →
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 6%" }}>
        {/* IMAGE CAROUSEL */}
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              height: 520,
              borderRadius: 20,
              overflow: "hidden",
              marginBottom: 16,
            }}
          >
            <img
              src={property.images[activeImage]}
              alt={property.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              overflowX: "auto",
              paddingBottom: 8,
            }}
          >
            {property.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setActiveImage(idx)}
                style={{
                  width: 96,
                  height: 64,
                  objectFit: "cover",
                  borderRadius: 8,
                  cursor: "pointer",
                  border:
                    idx === activeImage
                      ? "2px solid #111"
                      : "1px solid #e6e6e6",
                  opacity: idx === activeImage ? 1 : 0.6,
                }}
              />
            ))}
          </div>
        </div>

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div>
            <h1 style={{ fontSize: 40 }}>{property.title}</h1>
            <p style={{ color: "#6b6b6b" }}>{property.location}</p>
          </div>
          <p style={{ fontSize: 32, fontWeight: 600 }}>{property.price}</p>
        </div>

        {/* DESCRIPTION + AGENT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 48,
            marginBottom: 96,
          }}
        >
          <div>
            <h2 style={{ marginBottom: 16 }}>Property Description</h2>
            <p style={{ color: "#6b6b6b", lineHeight: 1.7 }}>
              {property.description}
            </p>
          </div>

          <div style={agentCard}>
            <h3>Contact Agent</h3>
            <p style={{ fontWeight: 600 }}>{property.agent.name}</p>
            <p style={{ color: "#6b6b6b", marginBottom: 20 }}>
              {property.agent.city}
            </p>

            <button style={primaryButton}>Book Consultation</button>
            <button style={secondaryButton}>Call Agent</button>
          </div>
        </div>

        {/* SIMILAR PROPERTIES */}
        <h2 style={{ marginBottom: 32 }}>Similar Properties</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {similar.map((p) => (
            <div
              key={p.id}
              onClick={() => animatedNavigate(`/property/${p.id}`)}
              style={propertyCard}
            >
              <img
                src={p.images[0]}
                alt={p.title}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <div style={{ padding: 20 }}>
                <p style={{ fontWeight: 600 }}>{p.price}</p>
                <p>{p.title}</p>
                <p style={{ color: "#6b6b6b" }}>{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns: 2fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- SHARED STYLES ---------------- */
const navButton = {
  padding: "10px 18px",
  borderRadius: 999,
  border: "1px solid #e6e6e6",
  background: "#ffffff",
};

const agentCard = {
  border: "1px solid #e6e6e6",
  borderRadius: 16,
  padding: 24,
};

const primaryButton = {
  width: "100%",
  padding: 14,
  background: "#111",
  color: "#fff",
  borderRadius: 8,
  border: "none",
  marginBottom: 12,
};

const secondaryButton = {
  width: "100%",
  padding: 14,
  borderRadius: 8,
  border: "1px solid #e6e6e6",
  background: "#fff",
};

const propertyCard = {
  border: "1px solid #e6e6e6",
  borderRadius: 16,
  overflow: "hidden",
  cursor: "pointer",
};
