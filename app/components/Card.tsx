'use client';

import { Car, Calendar, Fuel, Gauge, Settings } from 'lucide-react';

export default function Card({ filteredCars }: { filteredCars: any[] }) {
  if (filteredCars.length === 0) {
    return (
      <p className="col-span-full text-center text-gray-500">
        Inga bilar hittades med valda filter.
      </p>
    );
  }

  return (
    <>
      {filteredCars.map((car) => (
        <div
          key={car.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-100 mx-2 md:mx-1"
        >
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
          />
          <div className="p-4 space-y-2">
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-md font-semibold text-gray-900 flex items-center gap-2">
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
              {car.date}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
