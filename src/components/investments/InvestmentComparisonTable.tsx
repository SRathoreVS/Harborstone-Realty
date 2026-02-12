const DATA = [
  {
    id: 1,
    name: "Austin Family Home",
    city: "Austin, TX",
    price: 520000,
    cashFlow: 18420,
    roi: 14.8,
    appreciation: 6.2,
  },
  {
    id: 2,
    name: "NYC Rental Apartment",
    city: "New York, NY",
    price: 860000,
    cashFlow: 12600,
    roi: 9.4,
    appreciation: 4.8,
  },
  {
    id: 3,
    name: "LA Beach Condo",
    city: "Los Angeles, CA",
    price: 740000,
    cashFlow: 15800,
    roi: 11.2,
    appreciation: 5.6,
  },
];

export default function InvestmentComparisonTable() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: 32,
        border: "1px solid #e6e6e6",
        marginTop: 32,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, fontWeight: 600 }}>
          Property ROI Comparison
        </h3>
        <p style={{ fontSize: 14, color: "#6b6b6b" }}>
          Compare investment performance across properties
        </p>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: 720,
          }}
        >
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th style={th}>Property</th>
              <th style={th}>Location</th>
              <th style={th}>Price</th>
              <th style={th}>Annual Cash Flow</th>
              <th style={th}>ROI</th>
              <th style={th}>Appreciation</th>
            </tr>
          </thead>

          <tbody>
            {DATA.map((row) => (
              <tr key={row.id}>
                <td style={tdStrong}>{row.name}</td>
                <td style={td}>{row.city}</td>
                <td style={td}>${row.price.toLocaleString()}</td>
                <td style={td}>${row.cashFlow.toLocaleString()}</td>
                <td
                  style={{
                    ...td,
                    color: row.roi >= 12 ? "#16a34a" : "#ca8a04",
                  }}
                >
                  {row.roi}%
                </td>
                <td style={td}>{row.appreciation}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* -------- Styles -------- */
const th: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  color: "#6b6b6b",
  paddingBottom: 12,
  borderBottom: "1px solid #e6e6e6",
};

const td: React.CSSProperties = {
  padding: "14px 0",
  fontSize: 14,
  borderBottom: "1px solid #f0f0f0",
};

const tdStrong: React.CSSProperties = {
  ...td,
  fontWeight: 600,
};
