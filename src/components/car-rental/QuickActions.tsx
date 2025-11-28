"use client";
import React from "react";
import ComponentCard from "../common/ComponentCard";
import { AlertIcon, TimeIcon, DollarLineIcon, CheckCircleIcon } from "@/icons";

const QuickActions = () => {
  const actions = [
    {
      title: "Approve Bookings",
      description: "24 pending requests",
      icon: <CheckCircleIcon className="size-6" />,
      color: "green",
      action: "Approve",
    },
    {
      title: "Assign Cars",
      description: "12 bookings awaiting",
      icon: <TimeIcon className="size-6" />,
      color: "blue",
      action: "Assign",
    },
    {
      title: "Generate Report",
      description: "Monthly summary",
      icon: <DollarLineIcon className="size-6" />,
      color: "purple",
      action: "Generate",
    },
    {
      title: "Maintenance Alerts",
      description: "5 cars due service",
      icon: <AlertIcon className="size-6" />,
      color: "amber",
      action: "View",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; button: string }> = {
      green: {
        bg: "bg-green-100 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        button: "bg-green-500 hover:bg-green-600",
      },
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        button: "bg-blue-500 hover:bg-blue-600",
      },
      purple: {
        bg: "bg-purple-100 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        button: "bg-purple-500 hover:bg-purple-600",
      },
      amber: {
        bg: "bg-amber-100 dark:bg-amber-900/20",
        text: "text-amber-600 dark:text-amber-400",
        button: "bg-amber-500 hover:bg-amber-600",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <ComponentCard title="Quick Actions">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action, index) => {
          const colorClasses = getColorClasses(action.color);
          return (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.03]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-lg ${colorClasses.bg} ${colorClasses.text}`}
                >
                  {action.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white/90">
                    {action.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {action.description}
                  </p>
                </div>
              </div>
              <button
                className={`px-4 py-2 text-white rounded-lg transition-colors ${colorClasses.button}`}
              >
                {action.action}
              </button>
            </div>
          );
        })}
      </div>
    </ComponentCard>
  );
};

export default QuickActions;

