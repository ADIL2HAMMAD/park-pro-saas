"use client";
import React from "react";
import dynamic from "next/dynamic";
import ComponentCard from "../common/ComponentCard";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const FleetUtilizationChart = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      fontFamily: "Inter, sans-serif",
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    labels: ["In Use", "Available", "Maintenance"],
    colors: ["#3B82F6", "#10B981", "#F59E0B"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#64748B",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Cars",
              fontSize: "14px",
              color: "#64748B",
              formatter: () => "156",
            },
          },
        },
      },
    },
    tooltip: {
      theme: "light",
      y: {
        formatter: (value) => `${value} cars`,
      },
    },
  };

  const series = [68, 72, 16]; // In Use, Available, Maintenance

  return (
    <ComponentCard title="Fleet Utilization">
      <div>
        <Chart options={chartOptions} series={series} type="donut" height={300} />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">In Use</p>
          <p className="text-xl font-bold text-blue-600 dark:text-blue-400">68</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Available</p>
          <p className="text-xl font-bold text-green-600 dark:text-green-400">72</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Maintenance</p>
          <p className="text-xl font-bold text-amber-600 dark:text-amber-400">16</p>
        </div>
      </div>
    </ComponentCard>
  );
};

export default FleetUtilizationChart;

