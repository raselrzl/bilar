"use client";

import {
  Cookie,
  Info,
  Shield,
  Settings,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="p-2 mt-10">
      <section className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <Cookie className="w-6 h-6 text-red-800" />
          Cookiepolicy
        </h1>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Info className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          På Motix använder vi cookies för att förbättra din upplevelse på vår webbplats. 
          Cookies hjälper oss att analysera trafik och anpassa innehåll efter dina behov.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Shield className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Vi använder endast cookies som är nödvändiga för webbplatsens funktion och för att skydda din integritet.
          Vi delar inte dina data med tredje part utan ditt medgivande.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Settings className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Du kan när som helst ändra eller ta bort cookies via din webbläsarinställningar. Observera att vissa funktioner
          på webbplatsen kanske inte fungerar optimalt utan cookies.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Clock className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Cookies sparas endast under den tid som krävs för att uppfylla sitt syfte eller enligt lagstadgade krav.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Om du upplever att våra cookies hanteras felaktigt eller utan ditt medgivande, vänligen kontakta oss.
          Vi förbehåller oss rätten att vidta åtgärder i enlighet med svensk lag.
        </p>

        <p className="text-justify flex items-start gap-3">
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Genom att fortsätta använda vår webbplats godkänner du vår användning av cookies enligt denna policy.
        </p>
      </section>
    </div>
  );
}
