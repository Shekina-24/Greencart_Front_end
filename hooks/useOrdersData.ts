'use client';

import { useMemo } from "react";
import useSWR from "swr";
import { getStoredTokens } from "@/lib/auth/tokens";
import { fetchOrders } from "@/lib/services/orders";
import type { Order } from "@/lib/types";

export function useOrdersData(enabled: boolean) {
  const tokens = useMemo(() => (enabled ? getStoredTokens() : null), [enabled]);

  const { data, error, isLoading, mutate } = useSWR<Order[]>(
    tokens ? ["orders", tokens.accessToken] : null,
    async () => {
      if (!tokens) {
        throw new Error("missing-token");
      }
      const response = await fetchOrders(tokens.accessToken);
      return response.items;
    },
    {
      revalidateOnFocus: false
    }
  );

  return {
    orders: data ?? [],
    isLoading,
    error,
    mutate
  };
}
