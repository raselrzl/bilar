import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { format } from "date-fns";  // Import date-fns for date formatting
import prisma from "@/app/lib/db";
import Link from "next/link";
import Image from "next/image";

// Define the Vehicle type for TypeScript
interface Vehicle {
  id: string;
  images: string[];
  title: string;
  model: string;
  engine: string;
  mileage: string;
  fuelType: string;  // Assuming 'fuelType' is the correct field name for fuel
  Växellåda: string;  // Change this if the type of Växellåda is different
  fordonstyp: string;  // Same for fordonstyp
  bränsle: string;  // Assuming 'bränsle' is the correct field name
  date: Date;  // Change to Date type
  createdAt: Date;  // Change to Date type
  updatedAt: Date;
}

// Fetch vehicle data from the database
export async function getData(): Promise<Vehicle[]> {
  const data = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function AllVehicleTable() {
  const data = await getData();

  return (
    <div className="container max-w-7xl mx-auto py-10 px-2">
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-red-800">Fordon i systemet</h2>

      {/* Top-right corner vehicle count */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Total Vehicles</div>
        <div className="font-semibold text-lg">{data.length}</div> {/* Display count */}
      </div>

      <div className="overflow-auto border border-red-200 rounded-md shadow-sm">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow className="bg-red-100 text-red-800">
              <TableHead className="border border-gray-300 p-4">Bild</TableHead>
              <TableHead className="border border-gray-300 p-4">Märke</TableHead>
              <TableHead className="border border-gray-300 p-4">Modell</TableHead>
              <TableHead className="border border-gray-300 p-4">Motor</TableHead>
              <TableHead className="border border-gray-300 p-4">Miltal</TableHead>
              <TableHead className="border border-gray-300 p-4">Bränsle</TableHead>
              <TableHead className="border border-gray-300 p-4">Växellåda</TableHead>
              <TableHead className="border border-gray-300 p-4">Fordonstyp</TableHead>
              <TableHead className="border border-gray-300 p-4">Registreringsdatum</TableHead>
              <TableHead className="border border-gray-300 p-4">Skapad</TableHead>
              <TableHead className="border border-gray-300 p-4">Åtgärder</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className="border border-gray-300 p-4">
                  <Image
                    src={vehicle.images.length > 0 ? vehicle.images[0] : '/default-image.png'}  // Fallback image
                    alt={`${vehicle.title} ${vehicle.model}`}
                    width={80}
                    height={50}
                    className="rounded-sm object-cover"
                  />
                </TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.title || 'N/A'}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.model || 'N/A'}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.engine || 'N/A'}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.mileage || 'N/A'}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.bränsle || 'N/A'}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle['Växellåda'] || 'N/A'}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.fordonstyp || 'N/A'}</TableCell>
                <TableCell className="border border-gray-300 p-4">
                  {vehicle.date ? format(new Date(vehicle.date), "dd/MM/yyyy") : 'N/A'}
                </TableCell>
                <TableCell className="border border-gray-300 p-4">
                  {format(new Date(vehicle.createdAt), "dd/MM/yyyy HH:mm:ss")}
                </TableCell>
                <TableCell className="border border-gray-300 p-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Redigera</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Radera</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
