// components/UsedCarsSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function UsedCarsSection() {
  return (
    <section
      id="used-car-section"
      className="bg-white py-16 px-4 sm:px-6  max-w-7xl mx-auto mt-10"
    >
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Köp begagnade bilar från{" "}
            <span className="text-red-800">Bilvio</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Vi erbjuder kvalitetstestade begagnade bilar till konkurrenskraftiga
            priser. Tryggt, enkelt och smidigt.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Grundligt kontrollerade fordon",
              "Flexibla finansieringsalternativ",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center text-gray-700 text-base"
              >
                <CheckCircle2 className="text-green-600 mr-2 h-5 w-5" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/hittabilar"
            className="bg-red-800 hover:bg-red-700 text-white text-lg px-6 py-2 rounded-full transition"
          >
            Se tillgängliga bilar
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-54 sm:h-60 md:h-76 lg:h-[270px] hidden">
          {/* <Image
            src="/used.webp"
            alt="Begagnade bilar"
            fill
            className="rounded-2xl object-cover shadow-xl"
          /> */}
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2">
        {[
          {
            title: "Tryggt köp",
            desc: "",
            img: "/100p.jpg",
          },
          {
            title: "Personlig rådgivning",
            desc: "Vi hjälper dig hitta rätt bil efter dina behov och din budget.",
            img: "/advice1.jpg",
          },
        ].map((card, idx) => (
          <Card
            key={idx}
            className="overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative w-[200px] h-24 sm:h-28 md:h-32">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>
            <CardContent className="p-5 bg-gradient-to-b from-red-50 to-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 ">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
