import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import prisma from "../lib/db";
import { format } from "date-fns";  // Import date-fns for date formatting
import { unstable_noStore as noStore } from "next/cache";

// Define the Vehicle interface
interface Vehicle {
  id: string;
  images: string[];  // Assuming images is an array of strings
  title: string;
  model: string;
  engine: string;
  mileage: string;
  bränsle: string;
  Växellåda: string;
  fordonstyp: string;
  date: Date;       // Change date to Date instead of string
  createdAt: Date;  // Change createdAt to Date instead of string
}

// Fetch vehicle data from the database
async function getData(): Promise<Vehicle[]> {
  const data = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function AllVehicleTable() {
  noStore()
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6 text-red-800">Fordon i systemet</h2>
      <div className="overflow-auto border border-red-200 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-red-100 text-red-800">
              <TableHead>Bild</TableHead>
              <TableHead>Märke</TableHead>
              <TableHead>Modell</TableHead>
              <TableHead>Motor</TableHead>
              <TableHead>Miltal</TableHead>
              <TableHead>Bränsle</TableHead>
              <TableHead>Växellåda</TableHead>
              <TableHead>Fordonstyp</TableHead>
              <TableHead>Registreringsdatum</TableHead>
              <TableHead>Skapad</TableHead>
              <TableHead>Åtgärder</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((vehicle: Vehicle) => (  // Explicitly type vehicle as Vehicle
              <TableRow key={vehicle.id}>
                <TableCell>
                  <Image
                    src={vehicle.images[0]}  // Display first image from the array
                    alt={`${vehicle.title} ${vehicle.model}`}
                    width={80}
                    height={50}
                    className="rounded-sm object-cover"
                  />
                </TableCell>
                <TableCell>{vehicle.title}</TableCell>
                <TableCell>{vehicle.model}</TableCell>
                <TableCell>{vehicle.engine}</TableCell>
                <TableCell>{vehicle.mileage}</TableCell>
                <TableCell>{vehicle.bränsle}</TableCell>
                <TableCell>{vehicle['Växellåda']}</TableCell>
                <TableCell>{vehicle.fordonstyp}</TableCell>
                <TableCell>
                  {format(vehicle.date, "dd/MM/yyyy")}  {/* Format registration date */}
                </TableCell>
                <TableCell>
                  {format(vehicle.createdAt, "dd/MM/yyyy HH:mm:ss")}  {/* Format createdAt */}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem /* onClick={() => alert(`Edit ${vehicle.id}`)} */>
                        Redigera
                      </DropdownMenuItem>
                      <DropdownMenuItem
                      /*   onClick={() => alert(`Delete ${vehicle.id}`)} */
                        className="text-red-600"
                      >
                        Radera
                      </DropdownMenuItem>
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
