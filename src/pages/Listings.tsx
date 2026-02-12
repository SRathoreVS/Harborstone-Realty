import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ListingsFilters from "@/components/listings/ListingsFilters";
import ListingsGrid from "@/components/listings/ListingsGrid";
import ListingsPagination from "@/components/listings/ListingsPagination";
import { LISTINGS } from "@/data/listings";

export type Mode = "buy" | "rent";

export interface Filters {
  mode: Mode;
  state: string;
  city: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number | null;
  sort: "price-asc" | "price-desc" | "newest";
}

const PAGE_SIZE = 6;

export default function Listings() {
  const [params] = useSearchParams();

  const [filters, setFilters] = useState<Filters>({
    mode: (params.get("mode") as Mode) || "buy",
    state: params.get("state") || "",
    city: params.get("city") || "",
    minPrice: 0,
    maxPrice: 2_000_000,
    bedrooms: null,
    sort: "newest",
  });

  const [page, setPage] = useState(1);

  /**
   * ✅ FIX: Reset page ONLY when filter values change
   * (prevents page snapping back to 1 on pagination click)
   */
  const filterKey = JSON.stringify(filters);

  useEffect(() => {
    setPage(1);
  }, [filterKey]);

  /** Filter + sort listings */
  const filtered = useMemo(() => {
    return LISTINGS.filter((l) => l.type === filters.mode)
      .filter((l) => !filters.state || l.state === filters.state)
      .filter((l) => !filters.city || l.city === filters.city)
      .filter((l) => l.price >= filters.minPrice && l.price <= filters.maxPrice)
      .filter(
        (l) => filters.bedrooms === null || l.bedrooms >= filters.bedrooms,
      )
      .sort((a, b) => {
        if (filters.sort === "price-asc") return a.price - b.price;
        if (filters.sort === "price-desc") return b.price - a.price;
        return b.createdAt - a.createdAt;
      });
  }, [filters]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const visibleForGrid = visible.map((listing) => ({
    ...listing,
    beds: listing.bedrooms, // grid expects `beds`
  }));

  return (
    <section style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 6%" }}>
        <ListingsFilters filters={filters} onChange={setFilters} />

        <ListingsGrid listings={visibleForGrid} />

        {totalPages > 1 && (
          <ListingsPagination
            page={page}
            total={totalPages}
            onChange={setPage}
          />
        )}
      </div>
    </section>
  );
}
