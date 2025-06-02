import AddCarForm from "../components/AddCarForm";
import AllVehicleTable from "../components/AllVehicleTable";
import RegisteredCompanyTable from "../components/RegisteredCompanyTable";

export default function Admin() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex-col px-4 py-10 mb-2 md:mb-8">
        <RegisteredCompanyTable />
        <AllVehicleTable />
        <AddCarForm />
      </div>
    </>
  );
}
