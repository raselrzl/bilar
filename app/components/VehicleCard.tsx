import Image from "next/image";
import { Car, Settings, Gauge, Fuel, Calendar } from "lucide-react";  // Ensure these icons are imported
import { format } from "date-fns";  // For date formatting
import Link from "next/link";

// Define the Car type
interface Car {
  id: string;
  title: string;
  model: string;
  engine: string;
  mileage: string;
  fuelType: string;
  date: Date; // Change this to Date instead of string
  Växellåda: "Automatic" | "Manual";
  fordonstyp: "Bil" | "Karavan";
  bränsle: "Diesel" | "Bensin" | "Hybrid" | "Elektrisk";
  images: string[];
  createdAt: Date;
  updatedAt: Date; // Assuming the images are an array of strings
}

// Define the VehicleCard component
export default function VehicleCard({ car }: { car: Car }) {
  return (
    <div
      key={car.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100 mx-2 md:mx-1"
    >
      <img
        src={car.images[0]}  // Display the first image from the images array
        alt={car.title}
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
      />
      <div className="p-4 space-y-2">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-md font-semibold text-gray-900 flex items-center gap-2 uppercase">
            <Car className="w-5 h-5 text-red-800" />
            {car.title}
            <span className="inline-block bg-red-800 text-white text-sm px-3 py-1 rounded-full mb-1">
              {car.fordonstyp}
            </span>
          </h3>
        </div>
        <p className="text-gray-700 flex items-center gap-2">
          <Settings className="w-4 h-4 text-red-800" />
          {car.engine}
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <Gauge className="w-4 h-4 text-red-800" />
          {car.mileage}
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <Fuel className="w-4 h-4 text-red-800" />
          {car.bränsle}
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-red-800" />
          {format(new Date(car.date), "dd/MM/yyyy")}
        </p>
      </div>
      <div className="px-4 pb-4">
        <Link
          href={`/product/${car.id}`}
          className="block w-full text-center bg-red-800 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
          aria-label={`View details of ${car.title} ${car.model}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
