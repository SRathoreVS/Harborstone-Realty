export default function InvestmentsHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: 48,
        gap: 24,
      }}
    >
      {/* LEFT */}
      <div>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Investment Analytics
        </h1>

        <p
          style={{
            color: "#6b6b6b",
            fontSize: 15,
            maxWidth: 420,
            lineHeight: 1.6,
          }}
        >
          Track ROI, cash flow, and performance across your real estate
          investments.
        </p>
      </div>

      {/* RIGHT – Date Range (UI only for now) */}
      <div
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        <select
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "1px solid #e6e6e6",
            background: "#fff",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          <option>Last 6 Months</option>
          <option>Last 12 Months</option>
          <option>All Time</option>
        </select>
      </div>
    </div>
  );
}
