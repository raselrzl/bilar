"use client";
import { Car, Gauge, Calendar, Fuel, Settings, Loader2 } from "lucide-react";
import { Suspense, useState } from "react";
import { getCarData } from "../components/CarData";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Card from "../components/Card";

export interface Car {
  id: string;
  image: string;
  title: string;
  model: string;
  engine: string;
  mileage: string;
  fuelType: string;
  date: string;
  Växellåda: "Automatic" | "Manual";
  fordonstyp: "Bil" | "Karavan";
  bränsle: "Diesel" | "Bensin" | "Hybrid" | "Elektrisk";
}

const växellådaOptions = ["Alla", "Automatic", "Manual"];
const fordonstypOptions = ["Alla", "Bil", "Karavan"];
const bränsleOptions = ["Alla", "Diesel", "Bensin", "Hybrid", "Elektrisk"];

export default function Hittabilar() {
  const carData = getCarData();

  // Initialize cars with carData
  const [cars] = useState<Car[]>(carData);

  const [selectedVäxellåda, setSelectedVäxellåda] = useState("Alla");
  const [selectedFordonstyp, setSelectedFordonstyp] = useState("Alla");
  const [selectedBränsle, setSelectedBränsle] = useState("Alla");
  const [loading, setLoading] = useState(false);
  const filteredCars = cars.filter((car) => {
    return (
      (selectedVäxellåda === "Alla" || car.Växellåda === selectedVäxellåda) &&
      (selectedFordonstyp === "Alla" ||
        car.fordonstyp === selectedFordonstyp) &&
      (selectedBränsle === "Alla" || car.bränsle === selectedBränsle)
    );
  });

  return (
    <>
      <div className="bg-[#f6f6f6]">
        <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col px-4 py-10 mb-2 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 w-full ">
            {/* Left Side: Image Section */}
            <div className="md:col-span-2 h-[200px] md:h-[300px]">
              <div className="flex w-full h-full">
                <div className="w-1/3">
                  <img
                    src="/hi1.webp"
                    alt="Car 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/3">
                  <img
                    src="/hi2.webp"
                    alt="Car 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-1/3">
                  <img
                    src="/karaven1.jpg"
                    alt="Car 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Text Block */}
            <div className="md:col-span-3 h-[310px]">
              <div className="h-[310px] md:h-[300px] md:pl-20 pt-6 md:pt-10 pl-3 bg-white">
                <h2 className="text-2xl font-bold text-red-800 uppercase mb-4">
                  Bilar till salu just nu
                </h2>
                <p className="text-gray-700 mb-6">
                  Sök efter bilar nedan och hitta rätt bil för dig.
                  <br />
                  Nya bilar läggs till varje dag – håll utkik efter din favorit.
                  <br />
                  Trygga köp med full insyn och garanti på utvalda fordon.
                </p>
                <a
                  href="/kopbilar"
                  className="text-sm font-semibold text-white bg-red-800 hover:bg-red-700 px-6 py-3 rounded transition"
                >
                  Bli kund och börja köpa bilar idag
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="max-w-5xl xl:max-w-7xl mx-auto px-4 mb-2 md:mb-8">
        <div className="flex flex-wrap justify-center items-end gap-6 shadow-2xl py-10 bg-[#f6f6f6] rounded-xl">
          {/* Växellåda */}
          <div className="flex flex-col">
            <Label
              htmlFor="växellåda-select"
              className="mb-1 font-semibold text-red-800"
            >
              Växellåda
            </Label>
            <Select
              value={selectedVäxellåda}
              onValueChange={setSelectedVäxellåda}
            >
              <SelectTrigger className="w-[200px] border-red-800 text-red-800 focus:ring-red-800 focus-visible:ring-red-800">
                <SelectValue placeholder="Välj växellåda" />
              </SelectTrigger>
              <SelectContent>
                {växellådaOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="text-red-800 focus:bg-red-100"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Fordonstyp */}
          <div className="flex flex-col">
            <Label
              htmlFor="fordonstyp-select"
              className="mb-1 font-semibold text-red-800"
            >
              Fordonstyp
            </Label>
            <Select
              value={selectedFordonstyp}
              onValueChange={setSelectedFordonstyp}
            >
              <SelectTrigger className="w-[200px] border-red-800 text-red-800 focus:ring-red-800 focus-visible:ring-red-800">
                <SelectValue placeholder="Välj fordonstyp" />
              </SelectTrigger>
              <SelectContent>
                {fordonstypOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="text-red-800 focus:bg-red-100"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Bränsle */}
          <div className="flex flex-col">
            <Label
              htmlFor="bränsle-select"
              className="mb-1 font-semibold text-red-800"
            >
              Bränsle
            </Label>
            <Select value={selectedBränsle} onValueChange={setSelectedBränsle}>
              <SelectTrigger className="w-[200px] border-red-800 text-red-800 focus:ring-red-800 focus-visible:ring-red-800">
                <SelectValue placeholder="Välj bränsle" />
              </SelectTrigger>
              <SelectContent>
                {bränsleOptions.map((option) => (
                  <SelectItem
                    key={option}
                    value={option}
                    className="text-red-800 focus:bg-red-100"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Clear Filters */}
          <div>
            <Button
              variant="default"
              className="bg-red-800 hover:bg-red-700 text-white w-[180px] md:min-w-[200px] flex items-center justify-center gap-2"
              onClick={() => {
                setLoading(true);
                // Simulate delay for demonstration
                setTimeout(() => {
                  setSelectedVäxellåda("Alla");
                  setSelectedFordonstyp("Alla");
                  setSelectedBränsle("Alla");
                  setLoading(false);
                }, 1000);
              }}
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              Rensa filter
            </Button>
          </div>
        </div>
      </div>

      {/* Car Cards */}
      <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col px-2 py-10 mb-10">
        {" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4">
          <Suspense
            fallback={
              <div className="col-span-full flex justify-center items-center py-10">
                <Loader2 className="w-8 h-8 text-red-800 animate-spin" />
              </div>
            }
          >
            <Card filteredCars={filteredCars} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
