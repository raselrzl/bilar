import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
// Define the RegisteredCompany interface
interface RegisteredCompany {
  id: string;
  vat: string;
  companyName: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  businessType: string;
  employees: number;
  website: string;
  firstName: string;
  lastName: string;
  jobEmail: string;
  jobPhone: string;
  comments: string | null;
  consent: boolean;
  createdAt: Date;
}

// Fetch registered company data from the database
async function getData(): Promise<RegisteredCompany[]> {
  const data = await prisma.registeredCustomer.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function RegisteredCompanyTable() {
  noStore()
  const data = await getData();

  return (
    <div className="container mx-auto py-10 max-w-7xl px-2">
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Total Registrerade Företag</div>
        <div className="font-semibold text-lg">{data.length}</div> {/* Display count */}
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-red-800">Registrerade Företag</h2>
      <div className="overflow-auto border border-red-200 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-red-100 text-red-800">
              <TableHead>VAT-nummer</TableHead>
              <TableHead>Företag</TableHead>
              <TableHead>Adress</TableHead>
              <TableHead>Postnummer</TableHead>
              <TableHead>Stad</TableHead>
              <TableHead>Verksamhet</TableHead>
              <TableHead>Medarbetare</TableHead>
              <TableHead>Hemsida</TableHead>
              <TableHead>Förnamn</TableHead>
              <TableHead>Efternamn</TableHead>
              <TableHead>E-post</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Kommentarer</TableHead>
              <TableHead>Samtycke</TableHead>
              <TableHead>Åtgärder</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((company: RegisteredCompany) => (  // Explicitly type company
              <TableRow key={company.id}>
                <TableCell>{company.vat}</TableCell>
                <TableCell>{company.companyName}</TableCell>
                <TableCell>{company.street} {company.houseNumber}</TableCell>
                <TableCell>{company.postalCode}</TableCell>
                <TableCell>{company.city}</TableCell>
                <TableCell>{company.businessType}</TableCell>
                <TableCell>{company.employees}</TableCell>
                <TableCell>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-800 underline"
                  >
                    Besök
                  </a>
                </TableCell>
                <TableCell>{company.firstName}</TableCell>
                <TableCell>{company.lastName}</TableCell>
                <TableCell>{company.jobEmail}</TableCell>
                <TableCell>{company.jobPhone}</TableCell>
                <TableCell>{company.comments || "—"}</TableCell>
                <TableCell>
                  {company.consent ? "✔️" : "❌"}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenu>Actions</DropdownMenu>
                      <DropdownMenuItem asChild>
                          <Link href={`/dashboard/registeredcompanies/${company.id}/delete`}>
                            Delete
                          </Link>
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
