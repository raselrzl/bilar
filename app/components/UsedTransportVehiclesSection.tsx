// components/UsedTransportVehiclesSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function UsedTransportVehiclesSection() {
  return (
    <section
      id="used-transport-section"
      className=" py-16 px-4 sm:px-6  max-w-7xl mx-auto md:rounded-2xl"
    >
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Köp begagnade transportbilar från{" "}
            <span className="text-red-800">Bilvio</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Bilvio erbjuder pålitliga transportfordon för både företag och
            entreprenörer.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Perfekta för hantverkare och företag",
              "Servicehistorik och inspektion ingår",
              "Skåpbilar, pickups och lätta lastbilar för alla yrken."
            ].map((item) => (
              <li key={item} className="flex items-center text-gray-700 text-base">
                <CheckCircle2 className="text-green-600 mr-2 h-5 w-5" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/hittabilar" className="bg-red-800 hover:bg-red-700 text-white text-lg px-6 py-2 rounded-full transition">
            Utforska transportbilar
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[420px] hidden">
          <Image
            src="/transport1.jpg"
            alt="Begagnade transportbilar"
            fill
            className="rounded-2xl object-cover shadow-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

    </section>
  );
}
