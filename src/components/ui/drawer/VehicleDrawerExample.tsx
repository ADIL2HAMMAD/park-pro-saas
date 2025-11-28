"use client";
import React, { useState } from "react";
import VehicleDrawer from "./VehicleDrawer";

// Example usage of VehicleDrawer component
export default function VehicleDrawerExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSaveVehicle = (vehicleData: any) => {
    console.log("Vehicle saved:", vehicleData);
    // Here you would typically send the data to your API or state management
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Vehicle Drawer Example</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Open Vehicle Drawer
      </button>

      <VehicleDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSaveVehicle}
        title="Add New Vehicle"
      />
    </div>
  );
}
