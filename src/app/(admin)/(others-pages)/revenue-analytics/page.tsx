import type { Metadata } from "next";
import RevenueChart from "@/components/car-rental/RevenueChart";
import React from "react";

export const metadata: Metadata = {
  title: "Revenue Analytics | Smart Car Rental Dashboard",
  description: "Analyze revenue trends, payments, and financial performance",
};

export default function RevenueAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Revenue Analytics
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track revenue trends and financial performance
        </p>
      </div>

      {/* Revenue Chart Component */}
      <RevenueChart />

      {/* Payment Methods */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Payment Methods
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💳</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Credit Card</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">1,845 transactions</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">$64,850</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">65.9%</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Cash</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">645 transactions</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">$21,260</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">21.6%</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Digital Wallet</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">357 transactions</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">$12,340</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">12.5%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Revenue Breakdown
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Vehicle Rentals</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$78,560</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: "79.8%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Insurance</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$12,450</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "12.6%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Add-ons</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$5,890</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: "6%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Late Fees</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$1,550</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full" style={{ width: "1.6%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Transactions
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Transaction ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Method</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">TXN-2025-4891</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">John Smith</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">$450</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Credit Card</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Nov 28, 2025</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs font-medium">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">TXN-2025-4890</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Sarah Johnson</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">$680</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Digital Wallet</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Nov 28, 2025</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 rounded-full text-xs font-medium">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">TXN-2025-4889</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Michael Brown</td>
                <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">$540</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Cash</td>
                <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">Nov 27, 2025</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs font-medium">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

