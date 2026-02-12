import { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

/* ---------------- DATA ---------------- */
const MARKET_DATA: any = {
  Texas: {
    Austin: { buy: [320, 340, 360], rent: [1800, 1900, 2000] },
    Dallas: { buy: [300, 310, 330], rent: [1700, 1750, 1800] },
  },
  California: {
    "Los Angeles": { buy: [500, 520, 540], rent: [2800, 2900, 3000] },
    "San Diego": { buy: [480, 500, 520], rent: [2600, 2700, 2800] },
  },
};

export default function MarketInsights() {
  const states = Object.keys(MARKET_DATA);

  const [mode, setMode] = useState<"buy" | "rent">("buy");
  const [state, setState] = useState(states[0]);
  const [city, setCity] = useState(Object.keys(MARKET_DATA[states[0]])[0]);

  /* 🔑 Reset city when state changes */
  useEffect(() => {
    const cities = Object.keys(MARKET_DATA[state]);
    setCity(cities[0]);
  }, [state]);

  const prices = MARKET_DATA[state]?.[city]?.[mode] ?? [];

  const chartOptions = {
    title: { text: `${mode.toUpperCase()} Trend – ${city}` },
    xAxis: { categories: ["2022", "2023", "2024"] },
    series: [
      {
        name: city,
        data: prices,
      },
    ],
    accessibility: { enabled: false },
  };

  return (
    <section style={{ padding: "96px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 6%" }}>
        <h2 style={{ marginBottom: 24 }}>Market Insights</h2>

        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            {states.map((s) => (
              <option key={`state-${s}`} value={s}>
                {s}
              </option>
            ))}
          </select>

          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {Object.keys(MARKET_DATA[state]).map((c) => (
              <option key={`city-${c}`} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button onClick={() => setMode("buy")}>Buy</button>
          <button onClick={() => setMode("rent")}>Rent</button>
        </div>

        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
    </section>
  );
}
