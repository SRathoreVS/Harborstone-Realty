import { Link } from "react-router-dom";

type ListingCardProps = {
  id: number;
  price: string;
  title: string;
  location: string;
  meta: string;
  image: string;
};

export default function ListingCard({
  id,
  price,
  title,
  location,
  meta,
  image,
}: ListingCardProps) {
  return (
    <Link
      to={`/property/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="listing-card"
        style={{
          border: "1px solid #e6e6e6",
          borderRadius: "16px",
          overflow: "hidden",
          background: "#fff",
          cursor: "pointer",
          transition: "all 0.25s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* IMAGE */}
        <div style={{ height: "220px", overflow: "hidden" }}>
          <img
            src={image}
            alt={title}
            className="listing-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.35s ease",
            }}
          />
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>
            {price}
          </p>

          <p style={{ fontSize: "16px", marginBottom: "6px" }}>{title}</p>

          <p
            style={{
              fontSize: "14px",
              color: "#6b6b6b",
              marginBottom: "12px",
            }}
          >
            {location}
          </p>

          <p style={{ fontSize: "13px", color: "#6b6b6b" }}>{meta}</p>

          {/* CTA */}
          <span
            style={{
              marginTop: "auto",
              fontSize: "14px",
              fontWeight: 500,
              color: "#111",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
