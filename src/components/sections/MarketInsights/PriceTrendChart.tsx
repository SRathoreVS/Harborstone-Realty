import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import type { Mode } from "./mockData";

interface Props {
  city: string;
  prices: number[];
  mode: Mode;
}

export default function PriceTrendChart({ city, prices, mode }: Props) {
  const options: Highcharts.Options = {
    title: { text: "" },
    xAxis: {
      categories: ["2019", "2020", "2021", "2022", "2023"],
    },
    yAxis: {
      title: {
        text: mode === "buy" ? "Price (₹ in thousands)" : "Rent (₹)",
      },
    },
    series: [
      {
        type: "line",
        name: city,
        data: prices,
        color: "#111",
      },
    ],
    credits: { enabled: false },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
