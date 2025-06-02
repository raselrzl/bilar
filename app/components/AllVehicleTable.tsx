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

// Sample data
const vehicles = [
  {
    id: "0ewfewfefve03",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },
  {
    id: "0ewfeevre03",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },{
    id: "00ewfrevfdfd3",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },{
    id: "00efwfe3",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },{
    id: "003ewff",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },{
    id: "003fw",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },{
    id: "00fwf",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },{
    id: "002",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },{
    id: "003",
    image: "/card3.avif",
    title: "Volvo",
    model: "XC60",
    engine: "Hybrid, Automatic, 190 HP",
    mileage: "132,800 km",
    fuelType: "THE",
    date: "07/2019",
    Växellåda: "Automatic",
    fordonstyp: "Bil",
    bränsle: "Hybrid",
    createdAt: "2024-06-01 14:22",
  },
];

export default function AllVehicleTable() {
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
            {vehicles.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell>
                  <Image
                    src={vehicle.image}
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
                <TableCell>{vehicle.Växellåda}</TableCell>
                <TableCell>{vehicle.fordonstyp}</TableCell>
                <TableCell>{vehicle.date}</TableCell>
                <TableCell>{vehicle.createdAt}</TableCell>
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
