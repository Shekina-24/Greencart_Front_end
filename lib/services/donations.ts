import { apiFetch } from "@/lib/api";

export interface Donation {
  id: number;
  title: string;
  description?: string;
  quantity: number;
  unit?: string;
  pickup_location?: string;
  status: string;
  producer_id: number;
  reserved_by_id?: number;
  created_at: string;
}

export const fetchDonations = () =>
  apiFetch<Donation[]>("/donations");

export const createDonation = (payload: Partial<Donation>, token: string) =>
  apiFetch<Donation>("/donations", {
    method: "POST",
    authToken: token,
    body: JSON.stringify(payload),
  });

export const reserveDonation = (donationId: number, token: string) =>
  apiFetch<Donation>(`/donations/${donationId}/reserve`, {
    method: "POST",
    authToken: token,
  });