"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { saveContactMessage } from "../action";

// Validation schema using zod
const contactSchema = z
  .object({
    name: z.string().min(1, "Namn är obligatoriskt"),
    email: z.string().email("Ange en giltig e-postadress"),
    phone: z.string().min(1, "Namn är obligatoriskt"),
    message: z.string().min(1, "Meddelande är obligatoriskt"),
  })
  .refine((data) => data.email !== "" || data.phone?.trim() !== "", {
    message: "Ange antingen e-post eller telefonnummer",
    path: ["email"], // Show error on email field
  });

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const contactData = {
        ...data,
        email: data.email,
        phone: data.phone, 
      };

      await saveContactMessage(contactData);

      alert("Tack för ditt meddelande! Vi återkommer snart.");
      reset();
    } catch (error) {
      console.error("Error saving contact message:", error);
      alert("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-red-800 mb-12 text-center uppercase">Kontakta oss</h1>

      <div className="flex flex-col md:flex-row gap-12 shadow-2xl p-4">
        <div className="flex-1 max-w-xl mx-auto md:mx-0">
          {isSubmitSuccessful ? (
            <div className="bg-green-100 text-green-700 p-6 rounded-lg text-center">
              <p>Tack för ditt meddelande! Vi återkommer till dig så snart som möjligt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="font-semibold">
                  Namn <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Ditt namn"
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                  className={errors.name ? "border-red-600" : ""}
                />
                {errors.name && (
                  <p role="alert" className="text-red-600 mt-1 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="font-semibold">
                  E-post
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="din@email.se"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  className={errors.email ? "border-red-600" : ""}
                />
                {errors.email && (
                  <p role="alert" className="text-red-600 mt-1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone" className="font-semibold">
                  Telefonnummer{" "}
                  <span className="text-gray-500 font-normal text-sm">(Om du vill att vi ringer upp, skriv det här)</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="07X-XXX XX XX"
                  {...register("phone")}
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="font-semibold">
                  Meddelande <span className="text-red-600">*</span>
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Skriv ditt meddelande här..."
                  {...register("message")}
                  aria-invalid={errors.message ? "true" : "false"}
                  className={errors.message ? "border-red-600" : ""}
                />
                {errors.message && (
                  <p role="alert" className="text-red-600 mt-1 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-md transition"
              >
                Skicka meddelande
              </Button>
            </form>
          )}

          <section className="mt-12 text-gray-700 text-center md:text-left">
            <p>
              Eller ring oss direkt på{" "}
              <a href="tel:+46812345678" className="text-red-700 underline">
                08-123 456 78
              </a>
              , eller skicka ett mail till{" "}
              <a href="mailto:info@Bilvio.se" className="text-red-700 underline">
                info@Bilvio.se
              </a>
              .
            </p>
            <p className="mt-2">Vi svarar under vardagar. Tveka inte att kontakta oss!</p>
          </section>
        </div>

        {/* Right: Image placeholder */}
        <div className="flex-1 max-w-xl mx-auto md:mx-0 h-[400px] bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <img src="/kontakt.jpg" alt="Kontakta oss" className="w-full h-full object-cover" />
          <div className="w-full h-full flex items-center justify-center text-gray-400 italic select-none">
            info@Bilvio.se
          </div>
        </div>
      </div>
    </main>
  );
}
