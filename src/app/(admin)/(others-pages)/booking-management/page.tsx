import type { Metadata } from "next";
import BookingManagement from "@/components/car-rental/BookingManagement";

export const metadata: Metadata = {
  title: "Booking Management | TailAdmin - Car Rental Dashboard",
  description: "Manage bookings, approve reservations, and track rental status",
};

export default function BookingManagementPage() {
  return (
    <div className="space-y-6">
      <BookingManagement />
    </div>
  );
}
