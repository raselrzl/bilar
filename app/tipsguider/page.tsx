"use client";

import { Lightbulb, BookOpenCheck, ClipboardList, FileCheck2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TipsGuiderPage() {
  const tips = [
    {
      icon: <Lightbulb className="text-red-700" size={24} />,
      title: "Så undviker du vanliga fallgropar",
      description:
        "Att köpa bil ska vara tryggt. Här är några viktiga saker att tänka på när du gör en bilaffär – både som köpare och säljare.",
    },
    {
      icon: <BookOpenCheck className="text-red-700" size={24} />,
      title: "Checklista inför bilköp",
      description:
        "En praktisk checklista du kan följa för att känna dig trygg med ditt bilköp. Allt från dokument till garantier.",
    },
    {
      icon: <Lightbulb className="text-red-700" size={24} />,
      title: "Så fungerar vår betalningslösning",
      description:
        "Vi erbjuder säker betalning direkt via plattformen. Lär dig hur processen ser ut och vad du som kund behöver göra.",
    },
    {
      icon: <BookOpenCheck className="text-red-700" size={24} />,
      title: "Guider för transport & leverans",
      description:
        "Hur fungerar transporten? Vem ansvarar? Vi guidar dig genom leveransprocessen steg för steg.",
    },
    {
      icon: <ClipboardList className="text-red-700" size={24} />,
      title: "Viktiga dokument vid bilköp",
      description:
        "Få koll på vilka dokument du behöver: köpeavtal, garantibevis, registreringsbevis och mycket mer.",
    },
    {
      icon: <FileCheck2 className="text-red-700" size={24} />,
      title: "Så tolkar du bilens historikrapport",
      description:
        "Vi visar dig hur du läser och förstår bilens servicehistorik och besiktningsprotokoll för att fatta bättre beslut.",
    },
    {
      icon: <Lightbulb className="text-red-700" size={24} />,
      title: "Att sälja bil via Bilvio",
      description:
        "Planerar du att sälja bil? Här får du en snabbguide till hur du skapar en trygg försäljning via vår plattform.",
    },
    {
      icon: <BookOpenCheck className="text-red-700" size={24} />,
      title: "Så förhandlar du pris på rätt sätt",
      description:
        "Tips på hur du kan förhandla pris på ett professionellt sätt utan att riskera affären – för både köpare och säljare.",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-red-800 uppercase">
          Tips & guider
        </h1>
        <p className="text-gray-600 mt-4">
          Här hittar du hjälpsamma guider, checklistor och smarta tips för en trygg bilaffär.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                {tip.icon}
                <h2 className="text-lg font-semibold text-red-800 uppercase">
                  {tip.title}
                </h2>
              </div>
              <p className="text-sm text-gray-700">{tip.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
