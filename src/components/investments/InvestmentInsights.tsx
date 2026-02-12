const INSIGHTS = [
  {
    id: 1,
    title: "Top Performing Market",
    message:
      "Austin, TX properties are showing the highest ROI driven by strong rental demand and consistent appreciation.",
    type: "positive",
  },
  {
    id: 2,
    title: "Stable Long-Term Investment",
    message:
      "Los Angeles properties demonstrate steady appreciation, making them ideal for long-term capital growth.",
    type: "neutral",
  },
  {
    id: 3,
    title: "Lower Yield Alert",
    message:
      "New York City rentals show lower cash flow margins due to high acquisition costs.",
    type: "warning",
  },
];

export default function InvestmentInsights() {
  return (
    <div
      style={{
        marginTop: 32,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
      }}
    >
      {INSIGHTS.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: 28,
            border: "1px solid #e6e6e6",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: 999,
              fontSize: 12,
              marginBottom: 16,
              background:
                item.type === "positive"
                  ? "#dcfce7"
                  : item.type === "warning"
                    ? "#fef3c7"
                    : "#e5e7eb",
              color:
                item.type === "positive"
                  ? "#166534"
                  : item.type === "warning"
                    ? "#92400e"
                    : "#374151",
            }}
          >
            {item.type.toUpperCase()}
          </span>

          <h4 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12 }}>
            {item.title}
          </h4>

          <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.6 }}>
            {item.message}
          </p>
        </div>
      ))}

      {/* Responsive */}
      <style>{`
        /* Large Desktop (default: 3 columns) */

        /* Small Desktop / Large Tablet */
        @media (max-width: 1200px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Tablet */
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        /* Large Mobile */
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 18px !important;
          }
        }

        /* Medium Mobile */
        @media (max-width: 576px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        /* Small Mobile */
        @media (max-width: 375px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}
