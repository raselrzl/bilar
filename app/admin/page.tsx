import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddCarForm from "../components/AddCarForm";
import AllVehicleTable from "../components/AllVehicleTable";
import RegisteredCompanyTable from "../components/RegisteredCompanyTable";

export default function Admin() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex-col px-4 py-10 mb-2 md:mb-8">
        <div className="flex w-full flex-col gap-6">
          <Tabs defaultValue="companies" className="w-full">
            <TabsList className="bg-red-300 md:gap-10 mx-auto items-center">
              <TabsTrigger value="companies">Registered Companies</TabsTrigger>
              <TabsTrigger value="vehicles">All Vehicles</TabsTrigger>
              <TabsTrigger value="addcar">Add Car</TabsTrigger>
            </TabsList>

            <TabsContent value="companies">
              <RegisteredCompanyTable />
            </TabsContent>

            <TabsContent value="vehicles">
              <AllVehicleTable />
            </TabsContent>

            <TabsContent value="addcar">
              <AddCarForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
