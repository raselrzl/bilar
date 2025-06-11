"use client";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      {/* sektion 1 */}
      <div className="bg-gradient-to-b from-red-50 to-[#f6f6f6]">
        <div className="max-w-5xl xl:max-w-7xl mx-auto flex flex-col">
          <div className="grid grid-cols-5 min-h-[400px] ">
            <motion.div
              className="col-span-5 md:col-span-2 flex flex-col justify-center pl-4 pr-4 md:pl-16 pt-8 pb-6 space-y-6"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h1
                className="text-2xl font-bold uppercase text-red-800"
                variants={textItem}
              >
                Din pålitliga försäljningspartner för professionella bilhandlare
              </motion.h1>

              <motion.p
                className="text-xl text-gray-700 leading-relaxed font-bold italic"
                variants={textItem}
              >
                Vi är din professionella mellanhand som förenklar och tryggar
                hela försäljningsprocessen mellan bilhandlare.
              </motion.p>

              <motion.div
                className="flex items-start space-x-3"
                variants={textItem}
              >
                <span className="checkmark"></span>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Köp begagnade bilar från Sverige och Europa. Våra integrerade
                  handelstjänster gör affären enkel och säker.
                </p>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3"
                variants={textItem}
              >
                <span className="checkmark"></span>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Välj att hantera försäljningen själv eller använd vår
                  fullservicetjänst AP-Managed.
                </p>
              </motion.div>

              <motion.div className="text-center" variants={textItem}>
                <Link
                  href="/blikund"
                  className="inline-block bg-red-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-red-700 transition"
                >
                  Bli kund
                </Link>
              </motion.div>
            </motion.div>

            {/* Höger kolumn - Bild */}
            <div className="col-span-5 md:col-span-3 mx:px-20 md:pb-6 flex items-center justify-center max-h-[260px] md:mt-30">
              <div className="relative w-full max-w-2xl h-[400px]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }} // 'once: false' triggers it every time in view
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/home.png"
                    alt="Startsida bild"
                    fill
                    className="object-contain px-10 pb-10"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2*/}
      <div className="max-w-5xl xl:max-w-7xl mx-auto flex flex-col p-2 mt-2">
        <div className="grid grid-cols-5 shadow-2xl p-3 md:py-8 rounded-md md:rounded-3xl gap-8">
          <div className="md:col-span-2 col-span-5 mx-auto flex flex-col">
            {" "}
            <h1 className="font-bold text-2xl mb-4 text-center md:text-left pl-6 text-red-800 block md:hidden">
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

          <motion.div
            className="grid md:col-span-3 col-span-5 gap-4"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // 👈 This ensures it repeats every scroll into view
          >
            <motion.div
              className="text-gray-900 flex flex-col space-y-10"
              variants={textContainer}
            >
              <motion.h1
                className="font-bold text-2xl mb-4 text-center md:text-left text-red-800 hidden md:inline-block"
                variants={textItem}
              >
                FÖR KÖPARE
              </motion.h1>

              <div className="space-y-4 p-2">
                {[
                  "Ett smidigt sätt att köpa begagnade bilar i Sverige",
                  "Fasta priser – ingen budgivning Brett urval av bilar i olika prisklasser",
                  "Enkel sökfunktion för att hitta rätt bil för dina behov Utförliga och tydliga bilbeskrivningar",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    className="relative text-md pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-800 before:rounded-full"
                    variants={textItem}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div variants={textItem}>
                <Link
                  href="/kopbilar"
                  className="inline-block cursor-pointer text-white bg-red-800 border-2 border-red-800 px-5 py-2 rounded hover:bg-red-700 hover:border-red-700 transition text-center"
                >
                  Läs mer om att köpa bilar
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* section 3*/}
      <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col p-2">
        <div className="grid grid-cols-5 shadow-2xl p-3 md:py-8 rounded-md md:rounded-3xl gap-8">
          <div className="md:col-span-3 col-span-5 gap-4 order-2 md:order-1">
            <motion.div
              className="text-gray-900 flex flex-col justify-between"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h1
                className="font-bold text-2xl mb-4 pl-5 text-center md:text-left text-red-800 hidden md:inline-block uppercase"
                variants={textItem}
              >
                Tilläggstjänst
              </motion.h1>

              <motion.h2
                className="font-bold text-xl mb-4 pl-5 italic text-justify"
                variants={textItem}
              >
                Med den här tjänsten sparar du både tid och energi. Istället för
                att själv hålla koll på annonser och marknaden, gör vi jobbet åt
                dig. Vi har koll på vad som finns – och vad som är på väg in.
              </motion.h2>

              <div className="space-y-4 px-2">
                {[
                  "Du berättar bara vad du letar efter, så bevakar vi marknaden och tipsar dig så fort något intressant dyker upp. Perfekt för dig som är på jakt efter en specifik modell eller bara vill ha ett extra öga på marknaden.",
                  "Tjänsten är flexibel och kan anpassas efter dina behov – oavsett om du söker något väldigt specifikt eller bara vill bli notifierad om bra alternativ inom en viss kategori.",
                  "Skickar notis direkt när en specifik bilmodell du är intresserad av dyker upp. Aktivt letar efter bilmodeller utifrån dina önskemål och krav. Oavsett om det gäller en viss årsmodell, färg, utrustningsnivå eller prisklass – vi hjälper dig att hitta rätt bil snabbare.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    className="relative text-md pl-6 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-red-800 before:rounded-full text-justify"
                    variants={textItem}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              <motion.div variants={textItem}>
                <Link
                  href="/saljbilar"
                  className="inline-block cursor-pointer text-white bg-red-800 border-2 border-red-800 px-5 py-2 rounded hover:bg-red-700 hover:border-red-700 transition text-center mt-4"
                >
                  Läs mer om att sälja bilar
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <div className="md:col-span-2 col-span-5 mx-auto flex flex-col gap-4 order-1 md:order-2">
            <motion.div
              style={{
                width: "100%",
                height: "12rem",
                backgroundColor: "#D1D5DB", // gray-300
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/car22.png"
                alt="Image 1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>

            <motion.div
              style={{
                width: "100%",
                height: "12rem",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/karaven.jpg"
                alt="Image 2"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* section 4*/}
      {/*   <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col p-2 my-10">
        <div className="shadow-2xl p-3 md:py-8 my-10 rounded-md md:rounded-3xl">
          <p className="text-2xl text-black mb-6 text-center font-bold">
            Vi arbetar tillsammans med många olika typer av företag –<br />
            från små bilhandlare till stora koncerner och OEM-tillverkare.
          </p>
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
      </div> */}

      {/* section 5*/}
      <div className="max-w-5xl xl:max-w-7xl mx-auto p-2 mb-10">
        <div className="bg-gray-100 rounded-md md:rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
          {/* Right: Image */}
          <motion.div
            style={{ height: "400px", width: "100%" }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/karaven.jpg"
              alt="Karaven"
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            />
          </motion.div>
          {/* Left: Text & Buttons */}
          <motion.div
            className="p-6 md:p-12"
            variants={textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h2
              className="text-xl md:text-2xl font-bold text-red-800 mb-4 uppercase"
              variants={textItem}
            >
              Vill du öka omsättningen med mindre risk och mer vinst?
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 mb-6"
              variants={textItem}
            >
              Kontakta våra experter för att upptäcka en strukturerad metod för
              att sälja eller köpa begagnade bilar.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={textContainer}
            >
              <motion.a
                href="tel:040481031"
                className="text-lg text-center font-semibold text-white bg-red-800 hover:bg-red-700 px-6 py-3 rounded transition"
                variants={textItem}
              >
                000-000000
              </motion.a>

              <motion.div variants={textItem}>
                <Link
                  href="/kontakt"
                  className="text-lg font-semibold text-red-800 border-2 border-red-800 hover:bg-red-800 hover:text-white px-6 py-3 rounded transition text-center"
                >
                  Efterfråga samtal
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
