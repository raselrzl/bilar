import VehicleCard from '../components/VehicleCard';
import prisma from '../lib/db';
export async function getData() {
  const data = await prisma.car.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}
export default async function AllVehicleCards() {
  const data = await getData();  // Fetch vehicle data from the database
  console.log("data", data);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold mb-6 text-red-800">Fordon i systemet</h2>
      <div className="flex flex-wrap justify-start gap-4">
        {data.map((vehicle) => (
          <VehicleCard key={vehicle.id} car={vehicle} />
        ))}
      </div>
    </div>
  );
}
