const METRICS = [
  {
    label: "Total Investment",
    value: "$2,450,000",
    sub: "Across 8 properties",
  },
  {
    label: "Monthly Cash Flow",
    value: "$18,420",
    sub: "+12.4% vs last month",
    positive: true,
  },
  {
    label: "Average ROI",
    value: "14.8%",
    sub: "Annualized return",
  },
  {
    label: "Net Profit",
    value: "$312,600",
    sub: "+8.2% YoY",
    positive: true,
  },
];

export default function InvestmentsMetrics() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 24,
        marginBottom: 48,
      }}
    >
      {METRICS.map((item) => (
        <div
          key={item.label}
          style={{
            background: "#ffffff",
            borderRadius: 16,
            padding: 24,
            border: "1px solid #e6e6e6",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#6b6b6b",
              marginBottom: 12,
            }}
          >
            {item.label}
          </p>

          <h3
            style={{
              fontSize: 28,
              fontWeight: 600,
              marginBottom: 8,
              letterSpacing: "-0.02em",
            }}
          >
            {item.value}
          </h3>

          <p
            style={{
              fontSize: 13,
              color: item.positive ? "#1a7f37" : "#6b6b6b",
            }}
          >
            {item.sub}
          </p>
        </div>
      ))}
    </div>
  );
}
