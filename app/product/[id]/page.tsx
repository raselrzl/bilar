import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Car, Settings, Gauge, Fuel, Calendar } from "lucide-react";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productId: string) {
  const data = await prisma.car.findUnique({
    where: { id: productId },
    select: {
      id: true,
      title: true,
      model: true,
      engine: true,
      mileage: true,
      fuelType: true,
      date: true,
      Växellåda: true,
      fordonstyp: true,
      bränsle: true,
      images: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}

export default async function ProductIdRoute({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  noStore();

  const params = await paramsPromise;
  const car = await getData(params.id);
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden md:flex md:space-x-8 p-6">
        {/* Car Image */}
        <div className="md:flex-shrink-0 md:w-1/2">
          {car.images.length > 0 ? (
            <Image
              src={car.images[0]}
              alt={car.title}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          ) : (
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>

        {/* Car Details */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-4 uppercase">
              <Car className="w-8 h-8 text-red-800" />
              {car.title} {car.model}
              <span className="inline-block bg-red-800 text-white text-sm px-3 py-1 rounded-full">
                {car.fordonstyp}
              </span>
            </h1>

            <div className="mt-6 space-y-4 text-gray-700 text-lg">
              <p className="flex items-center gap-3">
                <Settings className="w-6 h-6 text-red-800" />
                <span>
                  <strong>Engine:</strong> {car.engine}
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Gauge className="w-6 h-6 text-red-800" />
                <span>
                  <strong>Mileage:</strong> {car.mileage}
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Fuel className="w-6 h-6 text-red-800" />
                <span>
                  <strong>Fuel Type:</strong> {car.bränsle}
                </span>
              </p>

              <p className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-red-800" />
                <span>
                  <strong>Date:</strong> {format(new Date(car.date), "dd/MM/yyyy")}
                </span>
              </p>

              <p>
                <strong>Transmission:</strong> {car.Växellåda}
              </p>

              <p>
                <strong>Created At:</strong>{" "}
                {format(new Date(car.createdAt), "dd/MM/yyyy HH:mm")}
              </p>

              <p>
                <strong>Last Updated:</strong>{" "}
                {format(new Date(car.updatedAt), "dd/MM/yyyy HH:mm")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
