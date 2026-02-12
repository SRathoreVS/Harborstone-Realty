import InvestmentComparisonTable from "@/components/investments/InvestmentComparisonTable";
import InvestmentInsights from "@/components/investments/InvestmentInsights";
import InvestmentPerformanceChart from "@/components/investments/InvestmentPerformanceChart";
import InvestmentsHeader from "@/components/investments/InvestmentsHeader";
import InvestmentsMetrics from "@/components/investments/MetricsCards";

export default function Investments() {
  return (
    <section
      style={{
        background: "#f5f6f8",
        minHeight: "100vh",
        padding: "96px 0",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 6%" }}>
        <InvestmentsHeader />
        <InvestmentsMetrics />
        <InvestmentPerformanceChart />
        <InvestmentComparisonTable />
        <InvestmentInsights />
      </div>
    </section>
  );
}
