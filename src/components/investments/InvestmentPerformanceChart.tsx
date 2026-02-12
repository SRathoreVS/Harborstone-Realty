import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";

export default function InvestmentPerformanceChart() {
  const [mode, setMode] = useState<"cashflow" | "roi">("cashflow");

  const options: Highcharts.Options = {
    chart: {
      height: 360,
      backgroundColor: "transparent",
    },
    title: { text: undefined },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      lineColor: "#e6e6e6",
      tickColor: "#e6e6e6",
    },
    yAxis: {
      title: { text: undefined },
      gridLineColor: "#f0f0f0",
    },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: {
      valuePrefix: mode === "cashflow" ? "$" : "",
      valueSuffix: mode === "roi" ? "%" : "",
    },
    series: [
      {
        type: "line",
        name: mode === "cashflow" ? "Cash Flow" : "ROI",
        data:
          mode === "cashflow"
            ? [12000, 13500, 14200, 16000, 17400, 18420]
            : [8.2, 9.1, 10.4, 11.6, 13.2, 14.8],
        color: "#111",
        marker: { radius: 4 },
      },
    ],
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: 32,
        border: "1px solid #e6e6e6",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 600 }}>
            Investment Performance
          </h3>
          <p style={{ fontSize: 14, color: "#6b6b6b" }}>
            Monthly trend analysis
          </p>
        </div>

        {/* Toggle */}
        <div
          style={{
            display: "flex",
            border: "1px solid #e6e6e6",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => setMode("cashflow")}
            style={{
              padding: "10px 16px",
              border: "none",
              background: mode === "cashflow" ? "#111" : "transparent",
              color: mode === "cashflow" ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            Cash Flow
          </button>
          <button
            onClick={() => setMode("roi")}
            style={{
              padding: "10px 16px",
              border: "none",
              background: mode === "roi" ? "#111" : "transparent",
              color: mode === "roi" ? "#fff" : "#111",
              cursor: "pointer",
            }}
          >
            ROI
          </button>
        </div>
      </div>

      {/* Chart */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
