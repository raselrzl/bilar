"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Briefcase,
  Megaphone,
  MailCheck,
  Lightbulb,
  PhoneCall,
} from "lucide-react";

export default function JobPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-800 uppercase">Lediga tjänster</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Vill du bli en del av Motorix? Vi söker passionerade personer som vill hjälpa oss forma framtidens bilmarknad.
          <br />
          <span className="font-semibold text-red-700">
            Kolla in vår jobbsida för fler möjligheter!
          </span>
        </p>
      </section>

      {/* Job Listings */}
      <Accordion type="single" collapsible className="grid grid-cols-1 gap-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left flex gap-3 items-center text-lg text-red-800">
            <Megaphone className="text-red-700" />
            Digital marknadsförare – Stockholm / Hybrid
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 p-4 rounded-lg border">
            <p className="mb-2"><strong>Beskrivning:</strong> Driv våra digitala kampanjer med passion och datafokus.</p>
            <p className="mb-2"><strong>Ansvar:</strong> SEO, SEM, kampanjstrategi, sociala medier.</p>
            <p className="mb-2"><strong>Kvalifikationer:</strong> Minst 2 års erfarenhet, kunskap om Google Ads & Meta Business.</p>
            <p className="mb-2"><strong>Lön:</strong> 32 000 – 42 000 SEK/månad beroende på erfarenhet.</p>
            <p className="mb-2"><strong>Om tjänsten:</strong> Heltid, start omgående, hybridupplägg.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left flex gap-3 items-center text-lg text-red-800">
            <Lightbulb className="text-red-700" />
            Content Manager – Distans / Göteborg
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 p-4 rounded-lg border">
            <p className="mb-2"><strong>Beskrivning:</strong> Ansvarig för allt innehåll på vår webb och våra kampanjer.</p>
            <p className="mb-2"><strong>Ansvar:</strong> Copywriting, storytelling, SEO-optimering, strategi.</p>
            <p className="mb-2"><strong>Kvalifikationer:</strong> Starka skrivkunskaper på svenska, erfarenhet av CMS och nyhetsbrev.</p>
            <p className="mb-2"><strong>Lön:</strong> 30 000 – 38 000 SEK/månad.</p>
            <p className="mb-2"><strong>Om tjänsten:</strong> Heltid, möjlighet till helt distansarbete.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left flex gap-3 items-center text-lg text-red-800">
            <Briefcase className="text-red-700" />
            Marketing Automation Specialist – Malmö / Remote möjligt
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 p-4 rounded-lg border">
            <p className="mb-2"><strong>Beskrivning:</strong> Skapa smarta automatiserade flöden i t.ex. HubSpot.</p>
            <p className="mb-2"><strong>Ansvar:</strong> Automatisering, kundresa, e-postflöden.</p>
            <p className="mb-2"><strong>Kvalifikationer:</strong> Erfarenhet av CRM, HubSpot eller liknande system.</p>
            <p className="mb-2"><strong>Lön:</strong> 35 000 – 45 000 SEK/månad.</p>
            <p className="mb-2"><strong>Om tjänsten:</strong> Flexibel arbetsplats, start inom 1–2 månader.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left flex gap-3 items-center text-lg text-red-800">
            <MailCheck className="text-red-700" />
            E-postmarknadsförare – Uppsala / Hybrid
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 p-4 rounded-lg border">
            <p className="mb-2"><strong>Beskrivning:</strong> Planera, utforma och analysera e-postkampanjer för våra kunder.</p>
            <p className="mb-2"><strong>Ansvar:</strong> Nyhetsbrev, kampanjanalys, A/B-testning.</p>
            <p className="mb-2"><strong>Kvalifikationer:</strong> Erfarenhet av Mailchimp, Klaviyo eller liknande verktyg.</p>
            <p className="mb-2"><strong>Lön:</strong> 29 000 – 35 000 SEK/månad.</p>
            <p className="mb-2"><strong>Om tjänsten:</strong> Tillsvidareanställning, hybridupplägg.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Call to Action */}
      <section className="text-center mt-16 bg-red-50 p-8 rounded-xl border border-red-200 shadow-md">
        <div className="flex flex-col items-center justify-center">
          <PhoneCall className="text-red-800 mb-4" size={36} />
          <h3 className="text-xl font-bold text-red-800 uppercase mb-2">
            Intresserad? Kontakta oss!
          </h3>
          <p className="text-gray-700 max-w-xl mx-auto">
            Ring oss gärna om du har frågor kring någon tjänst. Du kan också skicka in din ansökan direkt till vår e-post.
            <br />
            Bifoga gärna både CV och ett personligt brev där du berättar varför du passar hos oss.
          </p>
          <div className="mt-4 space-y-2">
            <p className="font-semibold text-red-700">
              📧 E-post:{" "}
              <a
                href="mailto:jobb@motorix.se"
                className="underline hover:text-red-900"
              >
                jobb@motorix.se
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
