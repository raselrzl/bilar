import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#f6f6f6]">
     <div className="max-w-7xl mx-auto flex flex-col">
       <div className="grid grid-cols-5 min-h-[700px] ">
        {/* Left Column */}
        <div className="col-span-5 md:col-span-2 flex flex-col justify-center p-8 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            En auktionsplattform för dig som professionell bilhandlare
          </h1>

          {/* Benefit 1 */}
          <div className="flex items-start space-x-3">
            <Check className="text-green-500 size-30" />
            <p className="text-lg text-gray-800 leading-relaxed pt-2">
              Köp begagnade bilar från Sverige och Europa. Genom våra integrerade
              handelstjänster säkerställer vi en trygg och enkel affär.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-start space-x-3">
            <Check className="text-green-500 mt-1 size-30" />
            <p className="text-lg text-gray-800 leading-relaxed pt-2">
              Sälj dina inbytes- eller lagerbilar och hantera processen själv,
              eller dra nytta av vår fullservicetjänst AP-Managed.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-red-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Bli kund
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-span-5 md:col-span-3 mx:px-20 md:pb-6 flex items-center justify-center max-h-[260px] md:mt-60">
          <div className="relative w-full max-w-2xl h-[400px]">
            <Image
              src="/home.png"
              alt="Homepage image"
              fill
              className="object-contain px-10 pb-10"
              priority
            />
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}
