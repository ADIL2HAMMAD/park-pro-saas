import type { Metadata } from "next";
import QuickActions from "@/components/car-rental/QuickActions";
import React from "react";

export const metadata: Metadata = {
  title: "Quick Actions | Smart Car Rental Dashboard",
  description: "Perform quick actions and manage daily tasks",
};

export default function QuickActionsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Quick Actions
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Perform common tasks quickly and efficiently
        </p>
      </div>

      {/* Quick Actions Component */}
      <QuickActions />

      {/* Recent Actions */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Actions
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Booking BK-2025-156 approved
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 text-xl">🚗</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Tesla Model 3 assigned to booking BK-2025-155
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-400 text-xl">📊</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Monthly report generated
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
            <div className="flex-shrink-0 w-10 h-10 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center">
              <span className="text-amber-600 dark:text-amber-400 text-xl">⚠️</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Maintenance scheduled for BMW X5
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Pending Tasks
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Review 5 new booking requests
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Due today</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 rounded-full text-xs font-medium">
              High Priority
            </span>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Assign vehicles to 3 confirmed bookings
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Due today</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 rounded-full text-xs font-medium">
              Medium
            </span>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Follow up on overdue payments
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Due tomorrow</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-full text-xs font-medium">
              Low
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

