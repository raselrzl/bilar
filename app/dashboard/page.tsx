import { redirect } from "next/navigation";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Car, MessageCircle, Briefcase } from "lucide-react"; // Import icons from lucide-react
import prisma from "../lib/db";

 async function getContactMessagesCount() {
  const count = await prisma.contactMessage.count(); // Counting all records in the 'contactMessage' table
  return count;
}

 async function getCarDataCount() {
  const count = await prisma.car.count(); // Counting all records in the 'car' table
  return count;
}
 async function getRegisteredCompaniesCount() {
  const count = await prisma.registeredCustomer.count(); // Counting all records in the 'registeredCompany' table
  return count;
}

async function getUserCount() {
  const userCount = await prisma.user.count(); // Counts the total number of users
  return userCount;
}
export default async function Admin() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "rasel6041@gmail.com") {
    return redirect("/");
  }

  const apiUrl = "/api/auth/creation/";

  // Get counts
  const carCount = await getCarDataCount();
  const contactMessagesCount = await getContactMessagesCount();
  const registeredCompaniesCount = await getRegisteredCompaniesCount();
  const userCount = await getUserCount();

  return (
    <div className="max-w-7xl mx-auto flex-col px-4 py-10 mb-2 md:mb-8">
      <div className="flex w-full flex-col gap-6">
        <div className="flex justify-left space-x-4 mb-6 overflow-x-auto">
          <Link href="/dashboard/registeredcompanies">
            <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md cursor-pointer">
              All Registered Companies
            </button>
          </Link>
          <Link href="/dashboard/allvehicles">
            <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md cursor-pointer">
              All Vehicles
            </button>
          </Link>
          <Link href="/dashboard/contactmessages">
            <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md cursor-pointer">
              Contact Messages
            </button>
          </Link>
            <Link href="/dashboard/user">
            <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md cursor-pointer">
              All User
            </button>
          </Link>
          <Link href="/dashboard/addcar">
            <button className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md cursor-pointer">
              Add Car
            </button>
          </Link>
        </div>

        {/* Display counts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Count of Cars */}
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <Car className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Vehicles
              </h3>
              <p className="text-2xl text-gray-800">{carCount}</p>
            </div>
          </div>

          {/* Count of Contact Messages */}
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <MessageCircle className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Contact Messages
              </h3>
              <p className="text-2xl text-gray-800">{contactMessagesCount}</p>
            </div>
          </div>

          {/* Count of Registered Companies */}
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <Briefcase className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Registered Companies
              </h3>
              <p className="text-2xl text-gray-800">
                {registeredCompaniesCount}
              </p>
            </div>
          </div>

          {/* Count of total users */}
          <div className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4">
            <Briefcase className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Users
              </h3>
              <p className="text-2xl text-gray-800">
                {userCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
