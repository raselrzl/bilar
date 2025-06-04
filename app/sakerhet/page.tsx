"use client";

import {
  ShieldCheck,
  Lock,
  Key,
  AlertTriangle,
  UserCheck,
  Database,
  Globe,
} from "lucide-react";

export default function Sakerhet() {
  return (
    <div className="p-2 mt-10">
      <section className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <ShieldCheck className="w-6 h-6 text-red-800" />
          Säkerhet
        </h1>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Lock className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          På Motix prioriterar vi säkerheten för dina personuppgifter och använder moderna tekniska lösningar för att skydda dem.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Key className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Vi implementerar kryptering både vid överföring och lagring av data för att säkerställa att ingen obehörig kan komma åt din information.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <UserCheck className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Endast behörig personal har tillgång till dina uppgifter och vi har strikta rutiner för att hantera och skydda dem.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Database className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Våra servrar är säkrade och regelbundet uppdaterade för att förhindra intrång och dataförluster.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Globe className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Vi följer alla gällande lagar och riktlinjer, inklusive GDPR, för att garantera att din data behandlas rättssäkert.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Om vi upptäcker något säkerhetsintrång kommer vi omedelbart att agera och informera berörda parter enligt lag.
        </p>

        <p className="text-justify flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Genom att använda våra tjänster godkänner du våra säkerhetsrutiner och åtgärder som syftar till att skydda din data.
        </p>
      </section>
    </div>
  );
}
