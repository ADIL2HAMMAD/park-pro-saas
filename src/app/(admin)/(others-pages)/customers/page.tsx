import type { Metadata } from "next";
import CustomerManagement from "@/components/car-rental/CustomerManagement";

export const metadata: Metadata = {
  title: "Customer Management | TailAdmin - Car Rental Dashboard",
  description: "Manage customers, car assignments, and view KPIs in the car rental system",
};

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <CustomerManagement />
    </div>
  );
}
