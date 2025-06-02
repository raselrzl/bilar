"use client";
import CarImageSlider from "../components/Slider";
import {
  Search,
  BellRing,
  BadgeCheck,
  Truck,
  ShieldCheck,
  Tags,
  UserPlus,
  Car,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import ThreeD24 from "../components/ThreeD24";
import Image from "next/image";

export default function KopBilar() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f6f6f6]">
        <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col px-4 py-10 mb-2 md:mb-8 ">
          <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-10 md:gap-0">
            {/* Right Side: Text Block */}
            <div className="md:col-span-3 h-[300px] mb-10">
              <div className="h-[400px] md:h-[300px] md:pl-20 pt-6 md:pt-10 pl-3 bg-gradient-to-b from-red-50 to-white">
                <h2 className="text-2xl font-bold text-red-800 uppercase mb-4">
                  Vi förmedlar bilar – snabbt, tryggt och prisvärt.
                </h2>
                <p className="text-gray-700 mb-6">
                  Som en pålitlig mellanhand hjälper vi dig att hitta rätt bil
                  till rätt pris.
                  <br />
                  Nya objekt tillkommer dagligen – från privatpersoner och
                  professionella säljare.
                  <br />
                  Du får full transparens, säker betalning och garanti på
                  utvalda bilar.
                </p>
                <a
                  href="/kopbilar"
                  className="text-sm font-semibold text-white bg-red-800 hover:bg-red-700 px-6 py-3 rounded transition"
                >
                  Läs mer om hur det fungerar
                </a>
              </div>
            </div>
            {/* Left Side: Image Section */}
            <div className="md:col-span-2 h-[200px] md:h-[300px]">
              <CarImageSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Step Flow Section */}
      <div className="w-full max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-red-800 text-white flex items-center justify-center shadow-lg mb-4">
              <UserPlus size={40} />
            </div>
            <p className="text-sm font-medium text-gray-800">
              Registrera dig som säljare
            </p>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <div className="border-t-2 border-dashed border-gray-400 w-12" />
            <ArrowRight className="text-red-700" />
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-red-800 text-white flex items-center justify-center shadow-lg mb-4">
              <Car size={40} />
            </div>
            <p className="text-sm font-medium text-gray-800">
              Lägg upp dina bilar
            </p>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <div className="border-t-2 border-dashed border-gray-400 w-12" />
            <ArrowRight className="text-red-700" />
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-red-800 text-white flex items-center justify-center shadow-lg mb-4">
              <ClipboardCheck size={40} />
            </div>
            <p className="text-sm font-medium text-gray-800">
              Hantera bud & godkänn affären
            </p>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <div className="border-t-2 border-dashed border-gray-400 w-12" />
            <ArrowRight className="text-red-700" />
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-red-800 text-white flex items-center justify-center shadow-lg mb-4">
              <CheckCircle size={40} />
            </div>
            <p className="text-sm font-medium text-gray-800">
              Affären är klar – vi sköter resten
            </p>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-white border rounded-lg p-6 shadow-2xl hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Search className="text-red-800" />
              <h3 className="text-xl font-semibold text-red-800 uppercase">
                Nå rätt köpare enkelt
              </h3>
            </div>
            <p className="text-gray-700 text-sm">
              Publicera annonser med några klick och bli synlig för ett brett
              nätverk av handlare.
              <br />
              <BellRing className="inline w-4 h-4 mr-1 text-red-700" /> Vi
              skickar aviseringar till intresserade köpare.
              <br />
              <BadgeCheck className="inline w-4 h-4 mr-1 text-red-700" /> Vår AI
              rekommenderar dina bilar till relevanta köpare.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white border rounded-lg p-6 shadow-2xl hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Tags className="text-red-800" />
              <h3 className="text-xl font-semibold text-red-800 uppercase">
                Sälj till bra pris – utan kostsamma mellanhänder
              </h3>
            </div>
            <p className="text-gray-700 text-sm">
              Inga dolda avgifter och attraktiva transaktionskostnader.
              <br />
              Du har alltid kontroll över priser och budgivning.
              <br />
              <a href="#" className="text-red-700 underline hover:text-red-900">
                Se våra villkor
              </a>
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white border rounded-lg p-6 shadow-2xl hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="text-red-800" />
              <h3 className="text-xl font-semibold text-red-800 uppercase">
                Säker betalning & verifierade köpare
              </h3>
            </div>
            <p className="text-gray-700 text-sm">
              All handel sker med KYC-verifierade företag.
              <br />
              AutoImport erbjuder säker betalningslösning – du får betalt utan
              risk.
              <br />
              <small className="text-gray-500">
                * Endast seriösa bilhandlare har tillgång till plattformen.
              </small>
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white border rounded-lg p-6 shadow-2xl hover:shadow-lg transition">
            <div className="flex items-center gap-3 mb-3">
              <Truck className="text-red-800" />
              <h3 className="text-xl font-semibold text-red-800 uppercase">
                Vi hjälper dig med transport
              </h3>
            </div>
            <p className="text-gray-700 text-sm">
              Köparen kan boka frakt direkt i plattformen – eller ordna själv.
              <br />
              Du får snabbt besked om leverans, hämtning eller eventuella
              frågor.
            </p>
          </div>
        </div>
      </div>

     <div className="max-w-7xl mx-auto px-4">
       <div className="border-l-4 border-t-4 border-red-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto w-full">
          {/* Left: Image Section */}
          <div className="relative h-[200px] w-full">
            <Image
              src="/twocars.png"
              alt="Two Cars"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right: Text Section */}
          <div className=" flex flex-col">
           <div className="mb-18"> <ThreeD24 /></div>
            <p className="shadow-2xl p-5 font-medium text-shadow-2xs text-xl text-red-800 bg-gradient-to-r from-red-300 to-[#f6f6f6] uppercase italic rounded-l-2xl md:rounded-l-2xl rounded-tl-none">Vi utför en validering inom 24 timmar för att säkerställa att de
            inskickade företagsdokumenten stämmer överens med det offentliga
            registret. Därefter öppnar vi ditt konto och du får tillgång till
            att börja köpa och sälja fordon.</p>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
