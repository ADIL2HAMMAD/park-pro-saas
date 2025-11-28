import type { Metadata } from "next";
import { CarRentalMetrics } from "@/components/car-rental/CarRentalMetrics";
import React from "react";

export const metadata: Metadata = {
  title: "Metrics Overview | Smart Car Rental Dashboard",
  description: "View key performance indicators and metrics for your car rental business",
};

export default function MetricsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Metrics Overview
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track your key performance indicators and business metrics in real-time
        </p>
      </div>

      {/* KPI Metrics */}
      <CarRentalMetrics />

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Performance */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Weekly Performance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Monday</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">75%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Tuesday</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "85%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">85%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Wednesday</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "92%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">92%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Thursday</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "88%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">88%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400">Friday</span>
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "95%" }}></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">95%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Targets */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Monthly Targets
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Revenue Goal</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$100,000</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: "98.45%" }}></div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">98.45% achieved</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Booking Target</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">3,000</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "94.9%" }}></div>
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">94.9% achieved</p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Fleet Utilization</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">85%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: "80%" }}></div>
              </div>
              <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">80% achieved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            This Month vs Last Month
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">+18.5%</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">Revenue increase</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Average Booking Value
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">$346</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">+12% from last month</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Customer Satisfaction
          </h4>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">4.8/5.0</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-1">Excellent rating</p>
        </div>
      </div>
    </div>
  );
}

