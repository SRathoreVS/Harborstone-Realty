import { useEffect, useState } from "react";
import listing1 from "@/assets/listings1.jpg";
import listing2 from "@/assets/listings2.jpg";
import listing3 from "@/assets/listings3.jpg";
import listing4 from "@/assets/listings4.jpg";
import listing5 from "@/assets/listings5.jpg";
import listing6 from "@/assets/listings6.jpg";
import listing7 from "@/assets/listings7.jpg";
import ListingCard from "./ListingCard";

/* ---------------- DATA ---------------- */
const listings = [
  {
    id: 1,
    price: "$850,000",
    title: "Modern Family House",
    location: "Los Angeles, CA",
    meta: "4 Beds · 3 Baths · 2,400 sqft",
    image: listing1,
  },
  {
    id: 2,
    price: "$620,000",
    title: "Luxury City Apartment",
    location: "New York, NY",
    meta: "3 Beds · 2 Baths · 1,800 sqft",
    image: listing2,
  },
  {
    id: 3,
    price: "$740,000",
    title: "Cozy Suburban Villa",
    location: "Austin, TX",
    meta: "4 Beds · 3 Baths · 2,100 sqft",
    image: listing3,
  },
  {
    id: 4,
    price: "$910,000",
    title: "Beachside Residence",
    location: "Malibu, CA",
    meta: "5 Beds · 4 Baths · 3,200 sqft",
    image: listing4,
  },
  {
    id: 5,
    price: "$560,000",
    title: "Downtown Condo",
    location: "Chicago, IL",
    meta: "2 Beds · 2 Baths · 1,400 sqft",
    image: listing5,
  },
  {
    id: 6,
    price: "$680,000",
    title: "Modern Loft",
    location: "Seattle, WA",
    meta: "3 Beds · 2 Baths · 1,900 sqft",
    image: listing6,
  },
  {
    id: 7,
    price: "$790,000",
    title: "Hilltop Villa",
    location: "Denver, CO",
    meta: "4 Beds · 3 Baths · 2,300 sqft",
    image: listing7,
  },
];

/* ---------------- HELPERS ---------------- */
function getPaginationPages(current: number, total: number) {
  const pages: (number | string)[] = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);

  if (current > 3) pages.push("…");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("…");

  pages.push(total);
  return pages;
}

/* ---------------- COMPONENT ---------------- */
export default function FeaturedListings() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  /* -------- RESPONSIVE CARDS PER PAGE -------- */
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 768) setCardsPerPage(1);
      else if (w < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const totalPages = Math.ceil(listings.length / cardsPerPage);
  const start = (currentPage - 1) * cardsPerPage;
  const visibleListings = listings.slice(start, start + cardsPerPage);
  const pages = getPaginationPages(currentPage, totalPages);

  return (
    <section style={{ background: "#fff", padding: "96px 0" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 6%" }}>
        {/* HEADER */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            style={{ fontSize: "40px", fontWeight: 600, marginBottom: "16px" }}
          >
            Featured Listings
          </h2>
          <p style={{ maxWidth: "420px", color: "#6b6b6b", lineHeight: 1.6 }}>
            Explore our handpicked properties curated for quality, comfort, and
            location.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cardsPerPage}, 1fr)`,
            gap: "32px",
          }}
        >
          {visibleListings.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>

        {/* PAGINATION */}
        <div
          style={{
            marginTop: "56px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {/* PREV */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #e6e6e6",
              background: currentPage === 1 ? "#f3f3f1" : "#fff",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
            }}
          >
            ←
          </button>

          {/* PAGE NUMBERS + ELLIPSIS */}
          {pages.map((p, i) =>
            p === "…" ? (
              <span key={i} style={{ padding: "0 6px", color: "#6b6b6b" }}>
                …
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p as number)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: "1px solid #e6e6e6",
                  background: currentPage === p ? "#111" : "#fff",
                  color: currentPage === p ? "#fff" : "#111",
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ),
          )}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #e6e6e6",
              background: currentPage === totalPages ? "#f3f3f1" : "#fff",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* DESKTOP HOVER EFFECTS */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          .listing-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          }

          .listing-card:hover .listing-image {
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
