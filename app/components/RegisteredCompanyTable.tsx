import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";

// Replace with actual data fetching logic
const companies = [
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
  {
    vat: "SE1234567890",
    company: "Test AB",
    street: "Testgatan",
    houseNumber: "12A",
    postalCode: "12345",
    city: "Stockholm",
    businessType: "bilhandlare",
    employees: 5,
    website: "https://testab.se",
    subscription: "premium",
    firstName: "Anna",
    lastName: "Karlsson",
    jobEmail: "anna@testab.se",
    jobPhone: "+46701234567",
    comments: "Kontaktas via e-post.",
    consent: true,
  },
];

export default function RegisteredCompanyTable() {
  return (
    <div className="container mx-auto py-10">
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
            {companies.map((company, index) => (
              <TableRow key={index}>
                <TableCell>{company.vat}</TableCell>
                <TableCell>{company.company}</TableCell>
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
