"use client";

import {
  Shield,
  Info,
  Lock,
  Clock,
  UserCheck,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function Integritetspolicy() {
  return (
    <div className="p-2 mt-10">
      <section className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          <Shield className="w-6 h-6 text-red-800" />
          Integritetspolicy
        </h1>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Info className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          På Motix värnar vi om din personliga integritet och säkerheten för dina
          uppgifter. För att kunna verifiera våra kunder samlar vi in vissa
          personuppgifter såsom e-postadress, telefonnummer och ID-kortsinformation.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Lock className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Vi vill försäkra dig om att all information som du lämnar till oss
          hanteras med största sekretess och lagras på ett säkert sätt. Vi säljer
          aldrig dina personuppgifter till tredje part eller använder dem för något
          annat än kundverifiering och de tjänster vi erbjuder.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Shield className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Vi följer gällande dataskyddslagstiftning, inklusive GDPR, och vidtar
          tekniska och organisatoriska åtgärder för att skydda dina
          personuppgifter från obehörig åtkomst, förlust eller ändring.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <Clock className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Dina personuppgifter sparas endast så länge det är nödvändigt för
          ändamålen med vår verksamhet, eller enligt lagstadgade krav. När
          uppgifterna inte längre behövs kommer de att raderas eller anonymiseras.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <UserCheck className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Du har rätt att begära information om vilka uppgifter vi har om dig, få
          felaktiga uppgifter rättade, samt begära radering eller begränsning av
          behandlingen av dina personuppgifter enligt gällande lag.
        </p>

        <p className="mb-4 text-justify flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Om någon använder våra uppgifter från vår webbplats utan vårt
          tillstånd, förbehåller vi oss rätten att vidta rättsliga åtgärder enligt
          svensk lagstiftning om digitala brott och dataskydd.
        </p>

        <p className="text-justify flex items-start gap-3">
          <CheckCircle className="w-5 h-5 flex-shrink-0 text-red-700 mt-1" />
          Genom att använda vår webbplats godkänner du att vi samlar in och
          hanterar dina uppgifter enligt denna integritetspolicy. Om du har några
          frågor om hur vi skyddar dina data, är du alltid välkommen att kontakta
          oss.
        </p>
      </section>
    </div>
  );
}
