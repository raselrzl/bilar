"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Phone, Mail, PhoneCall } from "lucide-react";

export default function FaqPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <HelpCircle className="mx-auto text-red-800 mb-2" size={40} />
        <h1 className="text-4xl font-bold text-red-800 uppercase">
          Vanliga frågor
        </h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Här hittar du svar på de vanligaste frågorna om våra tjänster, köp,
          försäljning och mycket mer.
        </p>
      </section>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="space-y-4 mb-12">
        {faqList.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-lg text-red-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="bg-gray-50 p-4 rounded-lg border">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Contact Prompt */}
      <section className="text-center mt-16 bg-red-50 p-8 rounded-xl border border-red-200 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <PhoneCall className="text-red-800 mb-4" size={36} />
          <h3 className="text-xl font-bold text-red-800 uppercase mb-2">
            Kontakta oss direkt
          </h3>
          <p className="text-gray-700 max-w-xl mx-auto">
            Tveka inte att höra av dig till oss – vi svarar under vardagar!
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-semibold text-red-700">
              📧 E-post:{" "}
              <a
                href="mailto:info@motorix.se"
                className="underline hover:text-red-900"
              >
                info@motorix.se
              </a>
            </p>
            <p className="font-semibold text-red-700">
              📞 Telefon:{" "}
              <a
                href="tel:+46812345678"
                className="underline hover:text-red-900"
              >
                08-123 456 78
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// FAQ Data
const faqList = [
  {
    question: "Hur köper jag en bil från Motorix?",
    answer:
      "Du kan enkelt köpa en bil via vår hemsida eller besöka vår butik. Alla bilar är kontrollerade och redo att köras hem.",
  },
  {
    question: "Tar ni emot inbyte av min gamla bil?",
    answer:
      "Ja, vi erbjuder inbyte. Du kan skicka in information om din bil så får du ett värderingsförslag av oss.",
  },
  {
    question: "Kan jag provköra bilen innan köp?",
    answer:
      "Självklart! Vi rekommenderar alltid att du provkör bilen innan köp. Boka en tid online eller ring oss direkt.",
  },
  {
    question: "Erbjuder ni finansiering?",
    answer:
      "Ja, vi samarbetar med flera finansbolag för att erbjuda dig flexibla betalningslösningar.",
  },
  {
    question: "Vad ingår i garantin?",
    answer:
      "Garantin täcker motor, växellåda och andra viktiga komponenter beroende på bilmodell. Läs mer på garantisidan.",
  },
  {
    question: "Hur lång tid tar leveransen?",
    answer:
      "Normalt sker leveransen inom 5–7 arbetsdagar efter godkänt köp och betalning.",
  },
  {
    question: "Måste jag hämta bilen själv?",
    answer:
      "Nej, vi erbjuder hemleverans i hela Sverige mot en avgift beroende på avstånd.",
  },
  {
    question: "Vilka dokument behövs vid köp?",
    answer:
      "Du behöver giltig legitimation, körkort och eventuellt försäkringsbevis beroende på betalningsmetod.",
  },
  {
    question: "Hur fungerar er returpolicy?",
    answer:
      "Vi erbjuder 14 dagars ångerrätt enligt distansköpslagen, så länge bilen inte använts mer än nödvändigt.",
  },
  {
    question: "Kan jag sälja min bil till er utan att köpa en ny?",
    answer:
      "Ja, vi köper bilar oberoende av om du köper en ny från oss eller inte. Fyll i vårt säljformulär.",
  },
  {
    question: "Hur vet jag att bilen är i gott skick?",
    answer:
      "Alla våra bilar är besiktigade, genomgångna av mekaniker och har historikrapport via Carfax.",
  },
  {
    question: "Vad händer om jag får problem efter köpet?",
    answer:
      "Kontakta vår kundservice direkt. Vi hjälper dig utifrån garanti och serviceavtal som ingår i köpet.",
  },
];
