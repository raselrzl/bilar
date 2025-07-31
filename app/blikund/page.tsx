import Image from "next/image";
import CompanyRegisterForm from "../components/RegistrationForm";
import { Briefcase, IdCard, ShieldCheck } from "lucide-react";
export default function BliKund() {
  return (
    <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col mt-10">
      <div className=" grid grid-cols-5 p-2">
        <div className="col-span-5 md:col-span-2 bg-gradient-to-b from-red-600 to-white ">
          <div className="grid grid-cols-1 gap-6 p-2">
            {/* Card 1: Företagsinformation */}
            <div className="border rounded-lg p-6 shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-red-800" />
                <h3 className="text-lg font-semibold">Vad behöver vi?</h3>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>
                  <strong>Företagsinformation:</strong> Kopia på
                  registreringsbevis från Bolagsverket eller Skatteverket, högst
                  12 månader gammalt.
                </li>
              </ul>
            </div>

            {/* Card 2: Ägardokumentation */}
            <div className="border rounded-lg p-6 shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-4">
                <IdCard className="w-6 h-6 text-red-800" />
                <h3 className="text-lg font-semibold">
                  Dokumentation för ägare
                </h3>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Kopia på pass eller körkort för samtliga ägare.</li>
                <li>
                  För icke-EU-medborgare: bifoga även kopia på
                  uppehållstillstånd.
                </li>
              </ul>
            </div>

            {/* Card 3: Syftet med informationen */}
            <div className="border rounded-lg p-6 shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-red-800" />
                <h3 className="text-lg font-semibold">
                  Vad används informationen till?
                </h3>
              </div>
              <div className="text-sm space-y-2">
                <p>
                  Vi erbjuder en säker betaltjänst och uppfyller krav från
                  Finansinspektionen.
                </p>
                <p>
                  Alla kunder verifieras enligt KYC (känn din kund) och AML
                  (penningtvätt).
                </p>
                <p>
                  Vi granskar uppgifterna inom 24 timmar. Efter godkännande
                  öppnas ditt konto – du är redo att börja handla bilar!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 md:col-span-3 p-2">
          <div className="flex">
            <Image src="/onecar.png" height={20} width={80} alt="car" />
            <p className=" md:text-2xl mr-4 ml-2 uppercase font-bold text-red-800">
              Fyll i registreringsformuläret
            </p>
          </div>
          <div>
            <CompanyRegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
