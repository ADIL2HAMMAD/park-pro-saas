"use client";
import React, { useState, useMemo } from "react";
import ComponentCard from "../common/ComponentCard";
import { Grid, List, Plus, Edit, Trash2, Filter, Search, X, Car as CarIcon } from "lucide-react";
import VehicleDrawer from "../ui/drawer/VehicleDrawer";
import Image from "next/image";

interface Car {
  id: string;
  make: string;
  model: string;
  year: string;
  color: string;
  licensePlate: string;
  vin: string;
  mileage: string;
  fuelType: string;
  transmission: string;
  seatingCapacity: string;
  dailyRate: string;
  type: "Electric" | "SUV" | "Sedan" | "Luxury";
  lastService: string;
  status: "Available" | "In Use" | "Maintenance";
  description: string;
  image: string;
}

interface FilterState {
  search: string;
  status: string;
  type: string;
  fuelType: string;
  priceRange: {
    min: string;
    max: string;
  };
}

const FleetManagement = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    status: "",
    type: "",
    fuelType: "",
    priceRange: { min: "", max: "" }
  });
  const [cars, setCars] = useState<Car[]>([
    {
      id: "1",
      make: "Tesla",
      model: "Model 3",
      year: "2023",
      color: "White",
      licensePlate: "ABC-1234",
      vin: "5YJ3E1EA7JF000001",
      mileage: "15234",
      fuelType: "electric",
      transmission: "automatic",
      seatingCapacity: "5",
      dailyRate: "120.00",
      type: "Electric",
      lastService: "Nov 15, 2025",
      status: "Available",
      description: "Latest model with autopilot features",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: "2",
      make: "BMW",
      model: "X5",
      year: "2022",
      color: "Black",
      licensePlate: "XYZ-5678",
      vin: "WBAJB1C50JB000002",
      mileage: "28456",
      fuelType: "gasoline",
      transmission: "automatic",
      seatingCapacity: "7",
      dailyRate: "95.00",
      type: "SUV",
      lastService: "Oct 28, 2025",
      status: "In Use",
      description: "Premium SUV with luxury features",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: "3",
      make: "Mercedes",
      model: "C-Class",
      year: "2023",
      color: "Silver",
      licensePlate: "DEF-9012",
      vin: "WDDGF5EB0JA000003",
      mileage: "42120",
      fuelType: "gasoline",
      transmission: "automatic",
      seatingCapacity: "5",
      dailyRate: "85.00",
      type: "Sedan",
      lastService: "Nov 10, 2025",
      status: "Available",
      description: "Elegant sedan with premium comfort",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: "4",
      make: "Audi",
      model: "Q7",
      year: "2021",
      color: "Blue",
      licensePlate: "GHI-3456",
      vin: "WA1LAAF71JD000004",
      mileage: "35890",
      fuelType: "gasoline",
      transmission: "automatic",
      seatingCapacity: "7",
      dailyRate: "110.00",
      type: "SUV",
      lastService: "Sep 22, 2025",
      status: "Maintenance",
      description: "Spacious SUV perfect for families",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: "5",
      make: "Toyota",
      model: "Camry",
      year: "2024",
      color: "Red",
      licensePlate: "JKL-7890",
      vin: "4T1C11AK8JU000005",
      mileage: "18234",
      fuelType: "hybrid",
      transmission: "automatic",
      seatingCapacity: "5",
      dailyRate: "70.00",
      type: "Sedan",
      lastService: "Nov 20, 2025",
      status: "Available",
      description: "Reliable hybrid sedan with great fuel economy",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop&auto=format",
    },
    {
      id: "6",
      make: "Honda",
      model: "CR-V",
      year: "2023",
      color: "White",
      licensePlate: "MNO-2345",
      vin: "2HKRW2H85JH000006",
      mileage: "25678",
      fuelType: "gasoline",
      transmission: "cvt",
      seatingCapacity: "5",
      dailyRate: "75.00",
      type: "SUV",
      lastService: "Nov 12, 2025",
      status: "In Use",
      description: "Compact SUV with excellent reliability",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&auto=format",
    },
  ]);

  // Filter cars based on filters
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = !filters.search ||
        car.make.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.model.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.licensePlate.toLowerCase().includes(filters.search.toLowerCase());

      const matchesStatus = !filters.status || car.status === filters.status;
      const matchesType = !filters.type || car.type === filters.type;
      const matchesFuelType = !filters.fuelType || car.fuelType === filters.fuelType;

      const price = parseFloat(car.dailyRate);
      const minPrice = filters.priceRange.min ? parseFloat(filters.priceRange.min) : 0;
      const maxPrice = filters.priceRange.max ? parseFloat(filters.priceRange.max) : Infinity;
      const matchesPrice = price >= minPrice && price <= maxPrice;

      return matchesSearch && matchesStatus && matchesType && matchesFuelType && matchesPrice;
    });
  }, [cars, filters]);

  const handleSaveVehicle = (vehicleData: any) => {
    const newVehicle: Car = {
      ...vehicleData,
      id: Date.now().toString(),
      type: vehicleData.fuelType === "electric" ? "Electric" :
           vehicleData.seatingCapacity > 5 ? "SUV" : "Sedan",
      lastService: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      image: vehicleData.image || "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop&auto=format",
    };
    setCars(prev => [newVehicle, ...prev]);
  };

  const handleEditVehicle = (car: Car) => {
    setEditingCar(car);
    setIsEditDrawerOpen(true);
  };

  const handleUpdateVehicle = (vehicleData: any) => {
    if (editingCar) {
      const updatedVehicle: Car = {
        ...vehicleData,
        id: editingCar.id,
        type: vehicleData.fuelType === "electric" ? "Electric" :
             vehicleData.seatingCapacity > 5 ? "SUV" : "Sedan",
        lastService: editingCar.lastService, // Keep original service date
        image: vehicleData.image || "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop&auto=format",
      };
      setCars(prev => prev.map(car => car.id === editingCar.id ? updatedVehicle : car));
      setEditingCar(null);
    }
  };

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
      type: "",
      fuelType: "",
      priceRange: { min: "", max: "" }
    });
  };

  const handleDeleteVehicle = (id: string) => {
    setCars(prev => prev.filter(car => car.id !== id));
  };

  const getStatusBadgeClass = (status: Car["status"]) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
      case "In Use":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400";
      case "Maintenance":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400";
      default:
        return "";
    }
  };

  return (
    <ComponentCard title="Fleet Management">
      {/* Search and Filter Bar */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by make, model, or license plate..."
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
                isFilterOpen || Object.values(filters).some(v => 
                  typeof v === 'string' ? v !== '' : Object.values(v).some(val => val !== '')
                ) 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                viewMode === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              <Grid className="w-4 h-4" />
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                viewMode === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              <List className="w-4 h-4" />
              List
            </button>
            <button
              onClick={() => setIsAddDrawerOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Vehicle
            </button>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        {isFilterOpen && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  <option value="Available">Available</option>
                  <option value="In Use">In Use</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Vehicle Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="">All Types</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Electric">Electric</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              {/* Fuel Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Fuel Type
                </label>
                <select
                  value={filters.fuelType}
                  onChange={(e) => handleFilterChange('fuelType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                >
                  <option value="">All Fuel Types</option>
                  <option value="gasoline">Gasoline</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="plugin-hybrid">Plug-in Hybrid</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Price Range ($/day)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange.min}
                    onChange={(e) => handleFilterChange('priceRange.min', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange.max}
                    onChange={(e) => handleFilterChange('priceRange.max', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {filteredCars.length} of {cars.length} vehicles
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

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCars.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <CarIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No vehicles found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your filters or add a new vehicle to get started.
              </p>
            </div>
          ) : (
            filteredCars.map((car) => (
              <div
                key={car.id}
                className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden"
              >
                {/* Vehicle Image */}
                <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      // Fallback to placeholder image
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop&auto=format";
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        car.status
                      )}`}
                    >
                      {car.status}
                    </span>
                  </div>
                </div>

                {/* Vehicle Info */}
                <div className="p-4">
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-800 dark:text-white/90">
                      {car.make} {car.model}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {car.licensePlate} • {car.year}
                    </p>
                  </div>

                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Type:</span>
                      <span className="text-gray-800 dark:text-white/90">{car.type}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Fuel:</span>
                      <span className="text-gray-800 dark:text-white/90 capitalize">{car.fuelType}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Mileage:</span>
                      <span className="text-gray-800 dark:text-white/90">{Number(car.mileage).toLocaleString()} km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-400">Daily Rate:</span>
                      <span className="text-gray-800 dark:text-white/90 font-medium">${car.dailyRate}/day</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditVehicle(car)}
                      className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteVehicle(car.id)}
                      className="px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 flex items-center justify-center transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <CarIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No vehicles found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your filters or add a new vehicle to get started.
              </p>
            </div>
          ) : (
            <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Vehicle
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  License Plate
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Year
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Type
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Mileage
                </th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Daily Rate
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
              {filteredCars.map((car) => (
                <tr
                  key={car.id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/[0.02]"
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                        <Image
                          src={car.image}
                          alt={`${car.make} ${car.model}`}
                          fill
                          className="object-cover"
                          sizes="48px"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=300&fit=crop&auto=format";
                          }}
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-800 dark:text-white/90">
                          {car.make} {car.model}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {car.color} • {car.fuelType}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-800 dark:text-white/90">
                    {car.licensePlate}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {car.year}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {car.type}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {Number(car.mileage).toLocaleString()} km
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
                    ${car.dailyRate}/day
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        car.status
                      )}`}
                    >
                      {car.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditVehicle(car)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg dark:hover:bg-blue-900/20 transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteVehicle(car.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg dark:hover:bg-red-900/20 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      )}

      {/* Add Vehicle Drawer */}
      <VehicleDrawer
        isOpen={isAddDrawerOpen}
        onClose={() => setIsAddDrawerOpen(false)}
        onSave={handleSaveVehicle}
        title="Add New Vehicle"
      />

      {/* Edit Vehicle Drawer */}
      <VehicleDrawer
        isOpen={isEditDrawerOpen}
        onClose={() => {
          setIsEditDrawerOpen(false);
          setEditingCar(null);
        }}
        onSave={handleUpdateVehicle}
        title="Edit Vehicle"
        initialData={editingCar || {}}
      />
    </ComponentCard>
  );
};

export default FleetManagement;

