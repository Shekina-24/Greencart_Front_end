import MarketingHome from "@/components/MarketingHome";
import type { AnalyticsSummary } from "@/lib/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8000";
const API_PREFIX = "/api/v1";

interface AnalyticsSummaryRead {
  period_start: string;
  period_end: string;
  total_orders: number;
  total_revenue_cents: number;
  total_items_sold: number;
  average_order_value_cents: number;
  top_products: Array<{
    product_id: number | null;
    units: number;
    revenue_cents: number;
  }>;
}

async function getAnalyticsSummary(): Promise<AnalyticsSummary | null> {
  try {
    const response = await fetch(`${API_BASE}${API_PREFIX}/analytics/summary`, {
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as AnalyticsSummaryRead;
    return {
      periodStart: data.period_start,
      periodEnd: data.period_end,
      totalOrders: data.total_orders,
      totalRevenueCents: data.total_revenue_cents,
      totalItemsSold: data.total_items_sold,
      averageOrderValueCents: data.average_order_value_cents,
      topProducts: data.top_products.map((product) => ({
        productId: product.product_id,
        units: product.units,
        revenueCents: product.revenue_cents
      }))
    };
  } catch (error) {
    console.error("[Landing] Unable to fetch analytics summary", error);
    return null;
  }
}

export default async function Page() {
  const analyticsSummary = await getAnalyticsSummary();
  return <MarketingHome analyticsSummary={analyticsSummary} />;
}
