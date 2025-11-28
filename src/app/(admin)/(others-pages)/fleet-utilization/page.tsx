import type { Metadata } from "next";
import FleetUtilizationChart from "@/components/car-rental/FleetUtilizationChart";
import React from "react";

export const metadata: Metadata = {
  title: "Fleet Utilization | Smart Car Rental Dashboard",
  description: "Monitor fleet utilization rates and optimize vehicle allocation",
};

export default function FleetUtilizationPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Fleet Utilization
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Monitor and optimize your fleet utilization rates
        </p>
      </div>

      {/* Utilization Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Overall Utilization</h3>
            <span className="text-2xl">📊</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">87.2%</p>
          <p className="text-sm text-green-600 dark:text-green-400 mt-2">+5.3% from last month</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Peak Hours</h3>
            <span className="text-2xl">⏰</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">9AM - 5PM</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Weekdays</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Rental Duration</h3>
            <span className="text-2xl">📅</span>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">4.2 days</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Per booking</p>
        </div>
      </div>

      {/* Fleet Utilization Chart Component */}
      <FleetUtilizationChart />

      {/* Utilization by Vehicle Type */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Utilization by Vehicle Type
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚗</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Sedans</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">92%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: "92%" }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">48 of 52 vehicles in use</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚙</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">SUVs</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">88%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: "88%" }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">44 of 50 vehicles in use</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Electric</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">95%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{ width: "95%" }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">38 of 40 vehicles in use</p>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏎️</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">Luxury</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">71%</span>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" style={{ width: "71%" }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10 of 14 vehicles in use</p>
          </div>
        </div>
      </div>

      {/* Hourly Utilization Pattern */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Daily Utilization Pattern
        </h3>
        <div className="grid grid-cols-12 gap-2">
          {[
            { hour: "12AM", util: 20 },
            { hour: "2AM", util: 15 },
            { hour: "4AM", util: 10 },
            { hour: "6AM", util: 35 },
            { hour: "8AM", util: 65 },
            { hour: "10AM", util: 85 },
            { hour: "12PM", util: 92 },
            { hour: "2PM", util: 88 },
            { hour: "4PM", util: 78 },
            { hour: "6PM", util: 70 },
            { hour: "8PM", util: 55 },
            { hour: "10PM", util: 35 },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="h-24 flex items-end mb-2">
                <div
                  className="w-full bg-blue-500 rounded-t"
                  style={{ height: `${item.util}%` }}
                  title={`${item.util}%`}
                ></div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">{item.hour}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

