"use client";

import { Users, CarFront, Handshake, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-800 uppercase">Om Motorix</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base">
          Motorix är en modern bilplattform skapad för att förenkla och trygga bilaffärer online – för både köpare och säljare.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="text-red-700 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-semibold text-red-800 uppercase mb-1">Vårt team</h3>
            <p className="text-sm text-gray-600">
              Ett engagerat team med erfarenhet inom bilhandel, teknik och kundservice.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <CarFront className="text-red-700 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-semibold text-red-800 uppercase mb-1">Vårt uppdrag</h3>
            <p className="text-sm text-gray-600">
              Att skapa en trygg, transparent och enkel bilmarknad för alla.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <ShieldCheck className="text-red-700 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-semibold text-red-800 uppercase mb-1">Säkerhet först</h3>
            <p className="text-sm text-gray-600">
              Vi prioriterar säkerhet i varje steg – från registrering till betalning och leverans.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Handshake className="text-red-700 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-semibold text-red-800 uppercase mb-1">Trygga affärer</h3>
            <p className="text-sm text-gray-600">
              Vi finns med dig hela vägen och erbjuder support, garantier och verifierade fordon.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-red-800 uppercase mb-4">Varför välja oss?</h2>
        <p className="text-base text-gray-700">
          Vi grundade Motorix med en enkel idé: att digitalisera bilaffären på ett sätt som både känns mänskligt och modernt.
          Med ett brett utbud, smidiga verktyg och säker teknik gör vi det enklare än någonsin att köpa eller sälja bil.
        </p>
      </section>
    </main>
  );
}
