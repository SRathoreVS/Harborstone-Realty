import { type Filters, type Mode } from "@/pages/Listings";
import { useMemo } from "react";

/* ---- MOCK LOCATION DATA (replace later with API) ---- */
const STATE_CITY_MAP: Record<string, string[]> = {
  California: ["Los Angeles", "San Diego", "San Francisco"],
  Texas: ["Austin", "Dallas", "Houston"],
  "New York": ["New York City", "Buffalo"],
  Illinois: ["Chicago"],
};

interface Props {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export default function ListingsFilters({ filters, onChange }: Props) {
  const cities = useMemo(
    () => STATE_CITY_MAP[filters.state] || [],
    [filters.state],
  );

  const update = (patch: Partial<Filters>) =>
    onChange({ ...filters, ...patch });

  return (
    <div
      style={{
        marginBottom: 48,
        padding: 24,
        border: "1px solid #e6e6e6",
        borderRadius: 16,
        background: "#fff",
      }}
    >
      {/* MODE TOGGLE */}
      <div style={{ marginBottom: 24, display: "flex", gap: 12 }}>
        {(["buy", "rent"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => update({ mode: m })}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "1px solid #e6e6e6",
              background: filters.mode === m ? "#111" : "#fff",
              color: filters.mode === m ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            {m === "buy" ? "Buy" : "Rent"}
          </button>
        ))}
      </div>

      {/* FILTER GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: 16,
        }}
      >
        {/* STATE */}
        <select
          value={filters.state}
          onChange={(e) => update({ state: e.target.value, city: "" })}
        >
          <option value="">All States</option>
          {Object.keys(STATE_CITY_MAP).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        {/* CITY */}
        <select
          value={filters.city}
          onChange={(e) => update({ city: e.target.value })}
          disabled={!filters.state}
        >
          <option value="">All Cities</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* BEDROOMS */}
        <select
          value={filters.bedrooms ?? ""}
          onChange={(e) =>
            update({
              bedrooms: e.target.value ? Number(e.target.value) : null,
            })
          }
        >
          <option value="">Any Beds</option>
          <option value="1">1+ Beds</option>
          <option value="2">2+ Beds</option>
          <option value="3">3+ Beds</option>
          <option value="4">4+ Beds</option>
        </select>

        {/* MIN PRICE */}
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => update({ minPrice: Number(e.target.value) })}
        />

        {/* MAX PRICE */}
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => update({ maxPrice: Number(e.target.value) })}
        />

        {/* SORT */}
        <select
          value={filters.sort}
          onChange={(e) => update({ sort: e.target.value as Filters["sort"] })}
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>
      </div>

      {/* MOBILE STACK */}
      <style>{`
        select,
        input {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #e6e6e6;
          font-size: 14px;
        }

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
