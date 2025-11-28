"use client";
import React, { useState, useMemo } from "react";
import ComponentCard from "../common/ComponentCard";
import {
  Check,
  X,
  Clock,
  Edit,
  Eye,
  Plus,
  Filter,
  Search,
  Calendar,
  User,
  Car,
  DollarSign,
  Phone,
  Mail
} from "lucide-react";
import Drawer from "../ui/drawer/Drawer";

interface Booking {
  id: string;
  bookingId: string;
  customer: string;
  car: string;
  startDate: string;
  endDate: string;
  status: "Active" | "Pending" | "Completed" | "Cancelled";
  amount: string;
  email: string;
  phone: string;
  duration: number; // days
  totalAmount: number;
  notes?: string;
}

interface FilterState {
  search: string;
  status: string;
  dateRange: {
    start: string;
    end: string;
  };
}

const BookingManagement = () => {
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [isViewDrawerOpen, setIsViewDrawerOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    status: "",
    dateRange: { start: "", end: "" }
  });

  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "1",
      bookingId: "BK-2025-001",
      customer: "John Smith",
      car: "Tesla Model 3",
      startDate: "Nov 28, 2025",
      endDate: "Dec 2, 2025",
      status: "Active",
      amount: "$450",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      duration: 5,
      totalAmount: 450,
      notes: "Customer requested express pickup service"
    },
    {
      id: "2",
      bookingId: "BK-2025-002",
      customer: "Sarah Johnson",
      car: "BMW X5",
      startDate: "Nov 30, 2025",
      endDate: "Dec 5, 2025",
      status: "Pending",
      amount: "$680",
      email: "sarah.j@email.com",
      phone: "+1 (555) 234-5678",
      duration: 6,
      totalAmount: 680,
      notes: "Corporate booking - invoice required"
    },
    {
      id: "3",
      bookingId: "BK-2025-003",
      customer: "Michael Brown",
      car: "Mercedes C-Class",
      startDate: "Nov 20, 2025",
      endDate: "Nov 27, 2025",
      status: "Completed",
      amount: "$540",
      email: "m.brown@email.com",
      phone: "+1 (555) 345-6789",
      duration: 7,
      totalAmount: 540
    },
    {
      id: "4",
      bookingId: "BK-2025-004",
      customer: "Emily Davis",
      car: "Audi Q7",
      startDate: "Dec 1, 2025",
      endDate: "Dec 7, 2025",
      status: "Pending",
      amount: "$720",
      email: "emily.davis@email.com",
      phone: "+1 (555) 456-7890",
      duration: 7,
      totalAmount: 720,
      notes: "Weekend special rate applied"
    },
    {
      id: "5",
      bookingId: "BK-2025-005",
      customer: "David Wilson",
      car: "Toyota Camry",
      startDate: "Nov 15, 2025",
      endDate: "Nov 18, 2025",
      status: "Cancelled",
      amount: "$280",
      email: "d.wilson@email.com",
      phone: "+1 (555) 567-8901",
      duration: 4,
      totalAmount: 280,
      notes: "Cancelled due to emergency - refund processed"
    },
  ]);

  // Filter bookings based on search and filters
  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      const matchesSearch = !filters.search ||
        booking.customer.toLowerCase().includes(filters.search.toLowerCase()) ||
        booking.bookingId.toLowerCase().includes(filters.search.toLowerCase()) ||
        booking.car.toLowerCase().includes(filters.search.toLowerCase());

      const matchesStatus = !filters.status || booking.status === filters.status;

      return matchesSearch && matchesStatus;
    });
  }, [bookings, filters]);

  const handleFilterChange = (key: string, value: string) => {
    if (key.includes('.')) {
      const [parent, child] = key.split('.');
      setFilters(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof FilterState] as any,
          [child]: value
        }
      }));
    } else {
      setFilters(prev => ({ ...prev, [key]: value }));
    }
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      status: "",
      dateRange: { start: "", end: "" }
    });
  };

  const handleViewBooking = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsViewDrawerOpen(true);
  };

  const handleApproveBooking = (id: string) => {
    setBookings(prev => prev.map(booking =>
      booking.id === id ? { ...booking, status: "Active" as const } : booking
    ));
  };

  const handleCancelBooking = (id: string) => {
    setBookings(prev => prev.map(booking =>
      booking.id === id ? { ...booking, status: "Cancelled" as const } : booking
    ));
  };

  const getStatusBadgeClass = (status: Booking["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
      case "Pending":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400";
      case "Completed":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400";
      case "Cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "";
    }
  };

  return (
    <ComponentCard title="Booking Management">
      {/* Search and Filter Bar */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer, booking ID, or car..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                isFilterOpen || filters.status
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button
              onClick={() => setIsAddDrawerOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Booking
            </button>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {isFilterOpen && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              {/* Date Range Filters */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Start Date From
                </label>
                <input
                  type="date"
                  value={filters.dateRange.start}
                  onChange={(e) => handleFilterChange('dateRange.start', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Start Date To
                </label>
                <input
                  type="date"
                  value={filters.dateRange.end}
                  onChange={(e) => handleFilterChange('dateRange.end', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                />
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {filteredBookings.length} of {bookings.length} bookings
              </span>
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <X className="w-3 h-3" />
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block overflow-x-auto">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No bookings found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or create a new booking to get started.
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Booking Details
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Customer
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Vehicle
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Duration
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                >
                  <td className="py-4 px-4">
                    <div>
                      <div className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {booking.bookingId}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {booking.startDate} → {booking.endDate}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800 dark:text-white/90">
                          {booking.customer}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {booking.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-800 dark:text-white/90">
                        {booking.car}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {booking.duration} days
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                        {booking.amount}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-col gap-1">
                      {/* View Button - Always Available */}
                      <button
                        onClick={() => handleViewBooking(booking)}
                        className="px-3 py-1.5 text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 rounded-md transition-colors flex items-center gap-1"
                      >
                        <Eye className="w-3 h-3" />
                        View
                      </button>

                      {/* Conditional Action Buttons */}
                      {booking.status === "Pending" && (
                        <div className="flex gap-1">
                          <button
                            onClick={() => handleApproveBooking(booking.id)}
                            className="px-2 py-1 text-xs text-green-600 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/30 rounded-md transition-colors flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleCancelBooking(booking.id)}
                            className="px-2 py-1 text-xs text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 rounded-md transition-colors flex items-center gap-1"
                          >
                            <X className="w-3 h-3" />
                            Cancel
                          </button>
                        </div>
                      )}

                      {booking.status === "Active" && (
                        <button
                          className="px-3 py-1.5 text-xs text-orange-600 bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 rounded-md transition-colors flex items-center gap-1"
                        >
                          <Clock className="w-3 h-3" />
                          Extend
                        </button>
                      )}

                      {(booking.status === "Completed" || booking.status === "Cancelled") && (
                        <button
                          className="px-3 py-1.5 text-xs text-gray-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900/20 dark:hover:bg-gray-900/30 rounded-md transition-colors flex items-center gap-1"
                        >
                          <Edit className="w-3 h-3" />
                          Edit
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="lg:hidden">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No bookings found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your filters or create a new booking to get started.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4"
              >
                {/* Header with Booking ID and Status */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {booking.bookingId}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {booking.startDate} → {booking.endDate}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {booking.customer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {booking.email}
                    </p>
                  </div>
                </div>

                {/* Booking Details Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-900 dark:text-white truncate">
                      {booking.car}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {booking.duration} days
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-gray-900 dark:text-white font-medium">
                      {booking.amount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400 text-xs">
                      {booking.phone}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  {/* View Button - Always Available */}
                  <button
                    onClick={() => handleViewBooking(booking)}
                    className="px-4 py-2 text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 rounded-lg transition-colors flex items-center gap-2 min-w-0 flex-1 justify-center"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>

                  {/* Conditional Action Buttons */}
                  {booking.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleApproveBooking(booking.id)}
                        className="px-4 py-2 text-sm text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors flex items-center gap-2 min-w-0 flex-1 justify-center"
                      >
                        <Check className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors flex items-center gap-2 min-w-0 flex-1 justify-center"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </>
                  )}

                  {booking.status === "Active" && (
                    <button
                      className="px-4 py-2 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors flex items-center gap-2 min-w-0 flex-1 justify-center"
                    >
                      <Clock className="w-4 h-4" />
                      Extend Booking
                    </button>
                  )}

                  {(booking.status === "Completed" || booking.status === "Cancelled") && (
                    <button
                      className="px-4 py-2 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 rounded-lg transition-colors flex items-center gap-2 min-w-0 flex-1 justify-center"
                    >
                      <Edit className="w-4 h-4" />
                      Edit Booking
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add Booking Drawer */}
      <Drawer
        isOpen={isAddDrawerOpen}
        onClose={() => setIsAddDrawerOpen(false)}
        title="Create New Booking"
        size="lg"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-4 h-4" />
                Customer Name *
              </label>
              <input
                type="text"
                placeholder="Enter customer name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Mail className="w-4 h-4" />
                Email *
              </label>
              <input
                type="email"
                placeholder="customer@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Car className="w-4 h-4" />
                Vehicle *
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select vehicle</option>
                <option value="Tesla Model 3">Tesla Model 3 - $120/day</option>
                <option value="BMW X5">BMW X5 - $95/day</option>
                <option value="Mercedes C-Class">Mercedes C-Class - $85/day</option>
                <option value="Toyota Camry">Toyota Camry - $70/day</option>
                <option value="Honda CR-V">Honda CR-V - $75/day</option>
                <option value="Audi Q7">Audi Q7 - $110/day</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Calendar className="w-4 h-4" />
                Start Date *
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Calendar className="w-4 h-4" />
                End Date *
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <DollarSign className="w-4 h-4" />
              Total Amount *
            </label>
            <input
              type="number"
              placeholder="Calculate based on duration and daily rate"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Notes (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Add any special requirements or notes"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
            >
              Create Booking
            </button>
            <button
              type="button"
              onClick={() => setIsAddDrawerOpen(false)}
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </Drawer>

      {/* View Booking Drawer */}
      <Drawer
        isOpen={isViewDrawerOpen}
        onClose={() => {
          setIsViewDrawerOpen(false);
          setSelectedBooking(null);
        }}
        title="Booking Details"
        size="lg"
      >
        {selectedBooking && (
          <div className="space-y-6">
            {/* Booking Header */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {selectedBooking.bookingId}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedBooking.startDate} → {selectedBooking.endDate}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(selectedBooking.status)}`}>
                  {selectedBooking.status}
                </span>
              </div>
            </div>

            {/* Customer Information */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</label>
                  <p className="text-gray-900 dark:text-white">{selectedBooking.customer}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                  <p className="text-gray-900 dark:text-white">{selectedBooking.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</label>
                  <p className="text-gray-900 dark:text-white">{selectedBooking.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</label>
                  <p className="text-gray-900 dark:text-white">{selectedBooking.duration} days</p>
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Car className="w-5 h-5" />
                Vehicle Information
              </h4>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 dark:text-white">{selectedBooking.car}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Premium vehicle rental</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Payment Information
              </h4>
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Amount</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{selectedBooking.amount}</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            {selectedBooking.notes && (
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Notes</h4>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300">{selectedBooking.notes}</p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              {selectedBooking.status === "Pending" && (
                <>
                  <button
                    onClick={() => {
                      handleApproveBooking(selectedBooking.id);
                      setIsViewDrawerOpen(false);
                    }}
                    className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Approve Booking
                  </button>
                  <button
                    onClick={() => {
                      handleCancelBooking(selectedBooking.id);
                      setIsViewDrawerOpen(false);
                    }}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Cancel Booking
                  </button>
                </>
              )}
              <button
                onClick={() => setIsViewDrawerOpen(false)}
                className="px-6 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </ComponentCard>
  );
};

export default BookingManagement;

