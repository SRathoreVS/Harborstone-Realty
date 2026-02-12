interface Props {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

export default function ListingsPagination({ page, total, onChange }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 12,
        marginTop: 48,
      }}
    >
      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        style={{
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid #e6e6e6",
          background: "#fff",
          cursor: page === 1 ? "not-allowed" : "pointer",
          opacity: page === 1 ? 0.5 : 1,
        }}
      >
        ←
      </button>

      {/* Page Numbers */}
      {Array.from({ length: total }).map((_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "1px solid #e6e6e6",
              background: page === p ? "#111" : "#fff",
              color: page === p ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            {p}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={page === total}
        onClick={() => onChange(page + 1)}
        style={{
          padding: "10px 14px",
          borderRadius: 8,
          border: "1px solid #e6e6e6",
          background: "#fff",
          cursor: page === total ? "not-allowed" : "pointer",
          opacity: page === total ? 0.5 : 1,
        }}
      >
        →
      </button>
    </div>
  );
}
