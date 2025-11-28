import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Car Rental Overview | TailAdmin - Car Rental Dashboard",
  description: "Overview dashboard for car rental management system",
};

export default function CarRentalOverview() {
  return (
    <div className="space-y-6">
      <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
        <div className="mb-6">
          <h2 className="text-title-md2 font-bold text-black dark:text-white">
            Car Rental Dashboard
          </h2>
          <p className="text-regular font-medium text-body-color">
            Welcome to your comprehensive car rental management system
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center gap-4">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg className="h-6 w-6 fill-primary dark:fill-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-black dark:text-white">
                  Fleet Management
                </h3>
                <p className="text-sm font-medium">Manage your vehicle fleet</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center gap-4">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg className="h-6 w-6 fill-primary dark:fill-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-black dark:text-white">
                  Booking Management
                </h3>
                <p className="text-sm font-medium">Handle reservations & rentals</p>
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center gap-4">
              <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                <svg className="h-6 w-6 fill-primary dark:fill-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-black dark:text-white">
                  Customer Management
                </h3>
                <p className="text-sm font-medium">Manage customers & car assignments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <h4 className="text-title-md font-bold text-black dark:text-white mb-4">
              Quick Actions
            </h4>
            <div className="space-y-3">
              <button className="w-full rounded bg-primary px-4 py-2 text-white hover:bg-opacity-90">
                Add New Vehicle
              </button>
              <button className="w-full rounded bg-secondary px-4 py-2 text-white hover:bg-opacity-90">
                Create Booking
              </button>
              <button className="w-full rounded bg-success px-4 py-2 text-white hover:bg-opacity-90">
                Add Customer
              </button>
            </div>
          </div>

          <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
            <h4 className="text-title-md font-bold text-black dark:text-white mb-4">
              System Status
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Fleet Status</span>
                <span className="text-sm font-medium text-success">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Booking System</span>
                <span className="text-sm font-medium text-success">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Customer Portal</span>
                <span className="text-sm font-medium text-success">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
