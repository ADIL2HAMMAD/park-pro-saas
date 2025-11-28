"use client";
import React from "react";
import dynamic from "next/dynamic";
import ComponentCard from "../common/ComponentCard";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueChart = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#8B5CF6", "#3B82F6"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: "#64748B",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#64748B",
        },
        formatter: (value) => `$${value}k`,
      },
    },
    grid: {
      borderColor: "#E2E8F0",
      strokeDashArray: 4,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: "#64748B",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
      },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (value) => `$${value}k`,
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [45, 52, 48, 65, 72, 68, 85, 90, 88, 95, 98, 105],
    },
    {
      name: "Bookings",
      data: [35, 41, 38, 51, 58, 55, 68, 72, 70, 75, 78, 82],
    },
  ];

  return (
    <ComponentCard title="Revenue & Payments">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
          <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            $98,450
          </h3>
          <p className="text-xs text-green-600 dark:text-green-400">+23.7% from last month</p>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-400">Pending Payments</p>
          <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            $12,340
          </h3>
          <p className="text-xs text-amber-600 dark:text-amber-400">8 pending invoices</p>
        </div>
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
          <p className="text-sm text-gray-600 dark:text-gray-400">Collected</p>
          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
            $86,110
          </h3>
          <p className="text-xs text-green-600 dark:text-green-400">87.5% collection rate</p>
        </div>
      </div>

      <div>
        <Chart options={chartOptions} series={series} type="area" height={350} />
      </div>
    </ComponentCard>
  );
};

export default RevenueChart;

