"use client";
import { Car, Gauge, Calendar, Fuel, Settings } from "lucide-react";

const carData = [
  {
    image: "/carD1.avif",
    title: "Audi Q5",
    engine: "Diesel, Automatic, 163 HP",
    mileage: "116,306 km",
    fuelType: "THE",
    date: "09/2015",
  },
  {
    image: "/carD1.avif",
    title: "BMW X3",
    engine: "Petrol, Manual, 150 HP",
    mileage: "98,500 km",
    fuelType: "THE",
    date: "03/2017",
  },
  {
    image: "/card3.avif",
    title: "Volvo XC60",
    engine: "Hybrid, Auto, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
  },
  {
    image: "/carD1.avif",
    title: "Mercedes GLC",
    engine: "Electric, 204 HP",
    mileage: "74,000 km",
    fuelType: "THE",
    date: "11/2020",
  },
  {
    image: "/carD1.avif",
    title: "Skoda Kodiaq",
    engine: "Diesel, Automatic, 163 HP",
    mileage: "88,900 km",
    fuelType: "THE",
    date: "05/2016",
  },
  {
    image: "/card3.avif",
    title: "Peugeot 3008",
    engine: "Petrol, Manual, 150 HP",
    mileage: "120,110 km",
    fuelType: "THE",
    date: "01/2018",
  },
  {
    image: "/carD1.avif",
    title: "VW Tiguan",
    engine: "Diesel, Automatic, 163 HP",
    mileage: "141,300 km",
    fuelType: "THE",
    date: "10/2015",
  },
  {
    image: "/carD1.avif",
    title: "Audi Q5",
    engine: "Electric, 204 HP",
    mileage: "66,400 km",
    fuelType: "THE",
    date: "12/2021",
  },
  {
    image: "/card3.avif",
    title: "BMW X3",
    engine: "Hybrid, Auto, 190 HP",
    mileage: "97,120 km",
    fuelType: "THE",
    date: "04/2014",
  },
  {
    image: "/carD1.avif",
    title: "Volvo XC60",
    engine: "Petrol, Manual, 150 HP",
    mileage: "114,500 km",
    fuelType: "THE",
    date: "02/2016",
  },
  {
    image: "/carD1.avif",
    title: "Mercedes GLC",
    engine: "Diesel, Automatic, 163 HP",
    mileage: "137,700 km",
    fuelType: "THE",
    date: "06/2019",
  },
  {
    image: "/card3.avif",
    title: "Skoda Kodiaq",
    engine: "Electric, 204 HP",
    mileage: "58,400 km",
    fuelType: "THE",
    date: "08/2022",
  },
  {
    image: "/carD1.avif",
    title: "Peugeot 3008",
    engine: "Petrol, Manual, 150 HP",
    mileage: "126,300 km",
    fuelType: "THE",
    date: "01/2017",
  },
  {
    image: "/carD1.avif",
    title: "VW Tiguan",
    engine: "Diesel, Automatic, 163 HP",
    mileage: "92,800 km",
    fuelType: "THE",
    date: "03/2018",
  },
  {
    image: "/card3.avif",
    title: "Audi Q5",
    engine: "Hybrid, Auto, 190 HP",
    mileage: "111,900 km",
    fuelType: "THE",
    date: "10/2015",
  },
  {
    image: "/carD1.avif",
    title: "BMW X3",
    engine: "Diesel, Automatic, 163 HP",
    mileage: "139,700 km",
    fuelType: "THE",
    date: "11/2013",
  },
  {
    image: "/carD1.avif",
    title: "Volvo XC60",
    engine: "Electric, 204 HP",
    mileage: "77,400 km",
    fuelType: "THE",
    date: "09/2021",
  },
  {
    image: "/card3.avif",
    title: "Mercedes GLC",
    engine: "Petrol, Manual, 150 HP",
    mileage: "118,900 km",
    fuelType: "THE",
    date: "05/2017",
  },
  {
    image: "/carD1.avif",
    title: "Skoda Kodiaq",
    engine: "Hybrid, Auto, 190 HP",
    mileage: "130,600 km",
    fuelType: "THE",
    date: "07/2020",
  },
  {
    image: "/carD1.avif",
    title: "Peugeot 3008",
    engine: "Diesel, Automatic, 163 HP",
    mileage: "101,200 km",
    fuelType: "THE",
    date: "08/2015",
  },
];

export default function Hittabilar() {
  return (
    <div className="max-w-7xl mx-auto flex-col my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4">
        {carData.map((car, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border-1 border-gray-50 mx-4 md:mx-1"
          >
            {/* Car Image */}
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
            />

            {/* Car Details */}
            <div className="p-4 space-y-2">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Car className="w-5 h-5 text-red-800" />
                  {car.title}
                  <span className="inline-block bg-red-800 text-white text-sm px-3 py-1 rounded-full mb-1">
                    Car
                  </span>
                </h3>

                <div></div>
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
                {car.fuelType}
              </p>

              <p className="text-gray-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-800" />
                {car.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
