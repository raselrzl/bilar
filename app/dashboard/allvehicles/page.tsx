import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/app/lib/db";

// Define the Vehicle interface
interface Vehicle {
  id: string;
  images: string[];
  title: string;
  model: string;
  engine: string;
  mileage: string;
  bränsle: string;
  Växellåda: string;
  fordonstyp: string;
  date: Date;
  createdAt: Date;
}

// Fetch vehicle data from the database
async function getAllVehiclesData(): Promise<Vehicle[]> {
  const data = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

// Ensure this is exported correctly
export default async function AllVehicleTable() {
  const data = await getAllVehiclesData();

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
            {data.map((vehicle: Vehicle) => (  // Explicitly type vehicle as Vehicle
              <TableRow key={vehicle.id}>
                <TableCell className="border border-gray-300 p-4">
                  <Image
                    src={vehicle.images[0]}  // Display first image from the array
                    alt={`${vehicle.title} ${vehicle.model}`}
                    width={80}
                    height={50}
                    className="rounded-sm object-cover"
                  />
                </TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.title}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.model}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.engine}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.mileage}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.bränsle}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle['Växellåda']}</TableCell>
                <TableCell className="border border-gray-300 p-4">{vehicle.fordonstyp}</TableCell>
                <TableCell className="border border-gray-300 p-4">
                  {format(vehicle.date, "dd/MM/yyyy")}  {/* Format registration date */}
                </TableCell>
                <TableCell className="border border-gray-300 p-4">
                  {format(vehicle.createdAt, "dd/MM/yyyy HH:mm:ss")}  {/* Format createdAt */}
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
