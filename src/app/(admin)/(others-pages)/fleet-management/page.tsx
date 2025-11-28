import type { Metadata } from "next";
import FleetManagement from "@/components/car-rental/FleetManagement";

export const metadata: Metadata = {
  title: "Fleet Management | TailAdmin - Car Rental Dashboard",
  description: "Manage your vehicle fleet, view availability, and handle maintenance",
};

export default function FleetManagementPage() {
  return (
    <div className="space-y-6">
      <FleetManagement />
    </div>
  );
}
