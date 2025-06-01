import {
  UserPlus,
  Car,
  ClipboardCheck,
  CheckCircle,
  Handshake,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function AutoProffSteps() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Ansök om att bli kund",
      icon: <UserPlus size={40} />,
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            STEP 1 – Registration and onboarding
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed max-w-3xl">
            <strong className="font-semibold">Registration:</strong> Two minutes
            is all it takes. Fill in basic information about your business and
            let our team take care of the rest.
          </p>
          <p className="text-gray-700 mb-5 leading-relaxed max-w-3xl">
            <strong className="font-semibold">KYC Check:</strong> For your
            safety and in accordance with EU regulations for our secure payment
            services, we perform a KYC (Know Your Customer) check. This check
            not only gives you access to our trading platform and secure
            payment services, but also ensures that all our customers only
            trade with verified companies.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            <strong className="font-semibold">Onboarding:</strong> Our dedicated
            team will help you every step of the way. We will guide you on how
            to use our platform, demonstrate features, and share best practices
            for smooth trading.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Hitta & köp bilar",
      icon: <Car size={40} />,
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            STEP 2 – Find and buy cars
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed max-w-3xl">
            <strong className="font-semibold">Fiat Autoproff auction platform:</strong>{" "}
            Every Tuesday and Thursday at 1:00 PM, the Swedish auctions end.
            Whether you're looking for a newer used car with low miles or a
            budget-friendly older model, you can find the perfect car with us.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            <strong className="font-semibold">Buy cars:</strong> The platform
            offers a simple overview of the cars at the auction where detailed
            information about each car is a click away. Choose a car that suits
            you and place a bid. With AutoProff you can safely buy cars at good
            prices and low fees.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Välj tjänster & slutför uppgifter",
      icon: <ClipboardCheck size={40} />,
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            STEP 3 – Complete the transaction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Handshake className="text-red-800 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-900">
                  AutoProff Direct
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                With AutoProff Direct, the seller and buyer handle the
                transaction directly via AutoProff’s secure digital platform.
                This option offers fast and efficient trading with full
                transparency.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-red-800 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-900">
                  AutoProff Managed
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                AutoProff handles the full sales process on behalf of the seller,
                ensuring a smooth and professional transaction from start to
                finish. This service provides a premium experience for buyers
                seeking high-quality, verified purchases.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 4,
      title: "Affären är genomförd",
      icon: <CheckCircle size={40} />,
      content: (
        <>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            STEP 4 – The deal is complete.
          </h2>
          <p className="text-gray-700 mb-5 max-w-3xl leading-relaxed">
            If you need help, we are just a click or a phone call away.
          </p>
          <p className="text-gray-700 mb-5 max-w-3xl leading-relaxed">
            AutoProff is developed by car dealers for car dealers. Our mission
            is to make B2B car trading simple, secure and cost-effective.
          </p>
          <p className="text-gray-700 max-w-3xl leading-relaxed">
            We are constantly looking for ways to improve our services – please
            share your feedback.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <CheckCircle2 className="text-red-800 w-14 h-14" />
            <span className="text-2xl font-semibold text-red-800">
              Thank you for trusting AutoProff!
            </span>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* Steps circles */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6 relative mb-16">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => setActiveStep(step.id)}
          >
            <div
              className={`w-28 h-28 rounded-full bg-red-800 text-white flex items-center justify-center shadow-xl text-4xl mb-5 transition-transform duration-300 ${
                activeStep === step.id ? "scale-110" : "scale-100 group-hover:scale-105"
              }`}
            >
              {step.icon}
            </div>
            <p
              className={`text-base max-w-[110px] text-center font-medium transition-colors duration-300 ${
                activeStep === step.id
                  ? "text-red-800 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {step.title}
            </p>

            {/* Dashed arrow */}
            {index < steps.length - 1 && (
              <svg
                className="absolute top-14 md:top-20 left-[105%] md:left-[115%] w-28 h-6 hidden md:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 60 24"
              >
                <path strokeDasharray="6 6" d="M0 12h50" />
                <path d="M44 6l6 6-6 6" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Content card */}
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-5xl mx-auto border border-gray-100">
        {steps.find((step) => step.id === activeStep)?.content}
      </div>
    </div>
  );
}
