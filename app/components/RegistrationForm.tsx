"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader2, XIcon } from "lucide-react";
import { useState } from "react";
import { UploadDropzone } from "@/lib/uplaodthing";
import Image from "next/image";
import { addRegisteredCustomer } from "../action";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  vat: z.string().min(1, "VAT-nummer krävs"),
  companyName: z.string().min(1, "Företag krävs"),
  street: z.string(),
  houseNumber: z.string(),
  postalCode: z.string(),
  city: z.string(),
  businessType: z.string(),
  employees: z.coerce.number().min(1, "Ange minst 1 medarbetare"),
  website: z.string().min(4, "Ange en giltig URL"),
  subscription: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  jobEmail: z.string().email("Ogiltig e-postadress"),
  jobPhone: z.string(),
  comments: z.string().optional(),
  images: z.array(z.string()).min(1, "At least one image is required"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Du måste ge ditt samtycke",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CompanyRegisterForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vat: "",
      companyName: "",
      street: "",
      houseNumber: "",
      postalCode: "",
      city: "",
      businessType: "",
      employees: 1,
      website: "",
      subscription: "",
      firstName: "",
      lastName: "",
      jobEmail: "",
      jobPhone: "",
      comments: "",
      images: [],
      consent: false,
    },
    mode: "all",
  });

  const { handleSubmit, formState, trigger, control } = form;
  const { isSubmitting } = formState;
  const [images, setImages] = useState<string[]>([]);
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Move to next step after validation of current step fields
  const nextStep = async () => {
    let valid = false;
    if (step === 1) {
      valid = await trigger(["vat", "companyName"]);
    } else if (step === 2) {
      valid = await trigger(["street", "houseNumber", "postalCode", "city"]);
    } else if (step === 3) {
      valid = await trigger([
        "businessType",
        "employees",
        "website",
        "firstName",
        "lastName",
        "jobEmail",
        "jobPhone",
      ]);
    } else if (step === 4) {
      valid = await trigger(["consent"]);
    }

    if (valid) {
      setStep((cur) => Math.min(cur + 1, 4));
    }
  };

  // Go back one step
  const prevStep = () => {
    setStep((cur) => Math.max(cur - 1, 1));
  };

  const onSubmit = async (data: FormValues) => {

   try {
  const newCar = await addRegisteredCustomer(data);
  setSuccessMessage("Customer registered successfully!");
  form.reset();
  setImages([]);
  router.push("/");
} catch (error) {
  console.error("Error adding car:", error);
  alert("An error occurred while adding the customer.");
}}
  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  return (
    <Card className="mt-10 max-w-3xl mx-auto rounded-none shadow-xl min-h-[455px] bg-gradient-to-r from-red-50 to-white">
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && (
              <>
                <div className="flex flex-row justify-between">
                  <p className="text-xl font-bold text-red-800">Företag</p>
                  <p className="font-medium">Steg 1 &gt; 4</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name="vat"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>VAT-nummer</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange momsregistreringsnummer"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Företag</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange företagsnamn"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="flex flex-row justify-between">
                  <p className="text-xl font-bold text-red-800">Adress</p>
                  <p className="font-medium">Steg 2 &gt; 4</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gata</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange gata"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="houseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hus nr.</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange husnummer"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postnummer</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange postnummer"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stad</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange stad"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="flex flex-row justify-between">
                  <p className="text-xl font-bold text-red-800">
                    Företagsinformation
                  </p>
                  <p className="font-medium">Steg 3 &gt; 4</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Typ av verksamhet</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        >
                          <FormControl className="border-1 border-red-800 w-full">
                            <SelectTrigger>
                              <SelectValue placeholder="Välj typ av verksamhet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bilhandlare">
                              Bilhandlare
                            </SelectItem>
                            <SelectItem value="verkstad">Verkstad</SelectItem>
                            <SelectItem value="annat">Annat</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="employees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Antal medarbetare</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Ange antal anställda"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hemsida</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://example.com"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <FormField
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Förnamn</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange ditt förnamn"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Efternamn</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ange ditt efternamn"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <FormField
                    control={control}
                    name="jobEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jobb e-mail</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Ange jobb e-post"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="jobPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Jobb telefon</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+46710000000"
                            {...field}
                            className="border-1 border-red-800"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="flex flex-row justify-between">
                  <p className="text-xl font-bold text-red-800">
                    Tilläggsinformation
                  </p>
                  <p className="font-medium">Steg 4 &gt; 4</p>
                </div>
                <FormField
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black">
                        Ladda upp ID-kort, Pass eller Körkort
                      </FormLabel>

                      {images.length > 0 ? (
                        <div className="flex gap-5">
                          {images.map((image, index) => (
                            <div
                              key={index}
                              className="relative w-[100px] h-[100px]"
                            >
                              <Image
                                height={100}
                                width={100}
                                src={image}
                                alt="Product Image"
                                className="w-full h-full object-cover rounded-lg border"
                              />
                              <button
                                onClick={() => {
                                  const newImages = images.filter(
                                    (_, i) => i !== index
                                  );
                                  setImages(newImages);
                                  form.setValue("images", newImages);
                                }}
                                type="button"
                                className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white"
                              >
                                <XIcon className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <UploadDropzone
                          endpoint="idCardImageRoute"
                          onClientUploadComplete={(res) => {
                            const uploaded = res.map((r) => r.url);
                            setImages(uploaded);
                            form.setValue("images", uploaded);
                          }}
                          onUploadError={() => {
                            alert("Something went wrong");
                          }}
                          appearance={{
                            button: {
                              // Change background and text color
                              backgroundColor: "#dc2828", // Tailwind red-600
                              color: "#fff", // white text
                              padding: "8px 16px",
                              borderRadius: "6px",
                              fontWeight: "600",
                            },
                          }}
                        />
                      )}

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="comments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kommentarer</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ange kommentarer (valfritt)"
                          {...field}
                          className="border-1 border-red-800"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex items-start gap-3 ">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Genom att skicka förfrågan ger jag AUTOimport
                          tillåtelse att kontakta mig via e-post och telefon.
                          Jag samtycker till att AUTOimport skickar mig mer
                          information om produkterna och de juridiska
                          bestämmelserna.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Tillbaka
                </Button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={isSubmitting}
                  className="bg-red-800"
                >
                  {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
                  Nästa
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-red-800"
                >
                  {isSubmitting && <Loader2 className="w-5 h-5 animate-spin" />}
                  Skicka
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
