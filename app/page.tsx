import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* section 1*/}
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
                  Köp begagnade bilar från Sverige och Europa. Genom våra
                  integrerade handelstjänster säkerställer vi en trygg och enkel
                  affär.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start space-x-3">
                <Check className="text-green-500 mt-1 size-30" />
                <p className="text-lg text-gray-800 leading-relaxed pt-2">
                  Sälj dina inbytes- eller lagerbilar och hantera processen
                  själv, eller dra nytta av vår fullservicetjänst AP-Managed.
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
      {/* section 2*/}
      <div className="max-w-7xl mx-auto flex flex-col p-5">
        <div className="grid grid-cols-5 shadow-2xl p-8 rounded-3xl gap-8">
          <div className="md:col-span-2 col-span-5 mx-auto flex flex-col">
            {" "}
            <h1 className="font-bold text-3xl mb-4 text-center text-red-800 block md:inline-hidden">
              FÖR KÖPARE
            </h1>
            <div className="relative w-[220px] h-[390px] md:w-[270px] md:h-[550px] rounded-[2rem] border-[10px] border-t-[16px] border-black bg-black shadow-lg">
              {/* Screen area with image background */}
              <div
                className="absolute inset-0 w-full h-full rounded-[1.5rem] overflow-hidden bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/car1.webp')" }}
              ></div>

              {/* Status bar: Time + Signal/Wi-Fi/Battery */}
              <div className="absolute top-[8px] w-full px-4 flex justify-between items-center text-white text-xs font-medium z-30">
                {/* Time */}
                <div>19:41</div>

                {/* Status Icons */}
                <div className="flex items-center gap-1">
                  {/* Network Signal (5 bars) */}
                  <div className="flex gap-[1px] items-end">
                    <div className="w-[2px] h-[4px] bg-black"></div>{" "}
                    {/* weak */}
                    <div className="w-[2px] h-[6px] bg-black"></div>
                    <div className="w-[2px] h-[8px] bg-black"></div>
                    <div className="w-[2px] h-[10px] bg-black"></div>
                    <div className="w-[2px] h-[12px] bg-black"></div>{" "}
                    {/* full */}
                  </div>

                  {/* Battery */}
                  <div className="w-[20px] h-[10px] border border-white rounded-sm relative">
                    <div className="absolute right-[-3px] top-[2px] w-[2px] h-[6px] bg-white rounded-sm"></div>
                    <div className="absolute left-0 top-0 h-full w-[14px] bg-white"></div>{" "}
                    {/* battery fill */}
                  </div>
                </div>
              </div>

              {/* Front Camera */}
              <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-12 h-5 bg-black rounded-full flex items-center justify-center gap-[6px] z-30 shadow-sm">
                {/* Camera */}
                <div className="w-[10px] h-[10px] bg-gray-700 rounded-full"></div>

                {/* Flash */}
                <div className="w-[8px] h-[8px] bg-gray-500 rounded-full"></div>
              </div>
              {/* Volume Up Button (Left Side - outside border) */}
              <div className="absolute left-[-14px] top-[150px] w-[4px] h-[40px] bg-gray-800 rounded z-30"></div>

              {/* Volume Down Button (Left Side - outside border) */}
              <div className="absolute left-[-14px] top-[200px] w-[4px] h-[40px] bg-gray-800 rounded z-30"></div>

              {/* Power Button (Right Side - outside border) */}
              <div className="absolute right-[-14px] top-[175px] w-[4px] h-[60px] bg-gray-800 rounded z-30"></div>

              {/* Home Button (bottom center) */}
              <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[40px] h-[40px] bg-black rounded-full border-[2px] border-gray-600 z-30 shadow-inner"></div>
            </div>
          </div>

          <div className="grid md:col-span-3  col-span-5 gap-4">
            <div className=" text-gray-900 flex flex-col justify-between">
              <h1 className="font-bold text-3xl mb-4 text-center text-red-800 hidden md:inline-block">
                FÖR KÖPARE
              </h1>
              {/* Paragraphs with dot before */}
              <h2 className="font-bold text-3xl mb-4 pl-5 ">
                Det enkla sättet att köpa begagnade bilar i Sverige
              </h2>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Svensk auktion med flera avslut varje vecka
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Stort utbud av bilar
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                150 000+ bilar till salu årligen i Europa
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Enkelt att hitta bilar som passar dig med vårt sökfilter
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Skräddarsydda abonnemang
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Väldokumenterade bilbeskrivningar
              </p>
              <p className="relative text-xl pl-5 mb-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Integrerade betalnings-, transport- och dokumenttjänster som gör
                det säkert och smidigt att köpa
              </p>

              {/* Button-like link */}
              <Link
                href="/kopbilar"
                className="inline-block cursor-pointer text-white bg-red-800 border-2 border-red-800 px-5 py-2 rounded hover:bg-red-700 hover:border-red-700 transition text-center"
              >
                Läs mer om att köpa bilar
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* section 3*/}
      <div className="max-w-7xl mx-auto flex-col p-5">
        <div className="grid grid-cols-5 shadow-2xl p-8 rounded-3xl gap-8">
          <div className="md:col-span-3 col-span-5 gap-4 order-2 md:order-1">
            <div className="text-gray-900 flex flex-col justify-between">
              <h1 className="font-bold text-3xl mb-4 text-center text-red-800 hidden md:inline-block">
                FÖR SÄLJARE
              </h1>

              {/* Main heading */}
              <h2 className="font-bold text-3xl mb-4 pl-5">
                Effektivisera försäljningen av dina inbytes- och begagnade bilar
              </h2>

              {/* Paragraphs with dot before */}
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Sälj på svensk auktion eller genom daglig exportauktion
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Stark köparbas över alla bilkategorier och bränsletyper - 10
                000+ köpare från 12+ EU-marknader
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Vi tar din inbyteshandel till nästa nivå med en helt digital
                C2B-&gt;B2B-lösning
              </p>
              <p className="relative text-xl pl-5 mb-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-red-800 before:rounded-full before:content-['']">
                Med vår tjänst Garantipris eliminerar du risken i inbytesaffären
                vilket även leder till en ökad försäljning
              </p>

              {/* Button-like link */}
              <Link
                href="/saljbilar"
                className="inline-block cursor-pointer text-white bg-red-800 border-2 border-red-800 px-5 py-2 rounded hover:bg-red-700 hover:border-red-700 transition text-center mt-4"
              >
                Läs mer om att sälja bilar
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 col-span-5 mx-auto flex flex-col gap-4 order-1 md:order-2">
            <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="/car22.png"
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src="/karaven.jpg"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section 4*/}
      <div className="max-w-7xl mx-auto flex-col p-5">
        <div className="shadow-2xl p-10 my-10 rounded-2xl">
        {/* Intro Text */}
        <p className="text-2xl text-black mb-6 text-center font-bold">
          Vi arbetar tillsammans med många olika typer av företag –<br />
          från små bilhandlare till stora koncerner och OEM-tillverkare.
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          <img
            src="/c2.png"
            alt="Company 2"
            className="h-16 object-contain mx-auto"
          />
          <img
            src="/c3.jpeg"
            alt="Company 3"
            className="h-16 object-contain mx-auto"
          />
          <img
            src="/c4.png"
            alt="Company 4"
            className="h-16 object-contain mx-auto"
          />
          <img
            src="/c5.jpg"
            alt="Company 5"
            className="h-16 object-contain mx-auto"
          />
        </div>
      </div>
      </div>
    </>
  );
}
