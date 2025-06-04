"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Loader2, XIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uplaodthing";

// ✅ Updated schema with z.enum
const carSchema = z.object({
  title: z.string().min(1, "Märke krävs"),
  model: z.string().min(1, "Modell krävs"),
  engine: z.string().min(1, "Motorinformation krävs"),
  mileage: z.string().min(1, "Miltal krävs"),
  fuelType: z.string().min(1, "Bränsletyp krävs"),
  date: z.string().min(1, "Datum krävs"),
  Växellåda: z.enum(["Automatic", "Manual"]),
  fordonstyp: z.enum(["Bil", "Karavan"]),
  bränsle: z.enum(["Diesel", "Bensin", "Hybrid", "Elektrisk"]),
  images: z.array(z.string()).min(1, "At least one image is required"),
});

type CarFormData = z.infer<typeof carSchema>;

export default function AddCarForm() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<CarFormData>({
    resolver: zodResolver(carSchema),
    defaultValues: {
      title: "",
      model: "",
      engine: "",
      mileage: "",
      fuelType: "",
      date: "",
      Växellåda: undefined,
      fordonstyp: undefined,
      bränsle: undefined,
      images: [],
    },
  });

  const onSubmit = async (data: CarFormData) => {
    setLoading(true);
    console.log("Submitted car data:", data);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
  };
  const handleDelete = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  return (
    <Card className="max-w-3xl mx-auto mt-10 shadow-md border-red-200 bg-white">
      <CardHeader className="text-xl font-semibold text-red-800">
        Lägg till nytt fordon
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Märke</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Volvo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modell</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: XC60" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="engine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motor</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Hybrid, Automatic, 190 HP"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mileage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Miltal</FormLabel>
                    <FormControl>
                      <Input placeholder="132,800 km" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bränsletyp</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: THE" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Datum</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Växellåda (Select) */}
              <FormField
                control={form.control}
                name="Växellåda"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Växellåda</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Välj växellåda" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Automatic">Automatic</SelectItem>
                        <SelectItem value="Manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Fordonstyp (Select) */}
              <FormField
                control={form.control}
                name="fordonstyp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fordonstyp</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Välj fordonstyp" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Bil">Bil</SelectItem>
                        <SelectItem value="Karavan">Karavan</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Bränsle (Select) */}
            <FormField
              control={form.control}
              name="bränsle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bränsle</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Välj bränsle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Bensin">Bensin</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="Elektrisk">Elektrisk</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Images</FormLabel>

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
                      endpoint="carImageUploader"
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

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                className="bg-red-800 text-white"
                disabled={loading}
              >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Lägg till bil
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
