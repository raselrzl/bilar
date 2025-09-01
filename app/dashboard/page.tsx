import { redirect } from "next/navigation";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Car, MessageCircle, Briefcase } from "lucide-react"; // Import icons from lucide-react
import prisma from "../lib/db";
import { unstable_noStore as noStore } from "next/cache";
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
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const allowedEmails = ["rasel6041@gmail.com", "jonas.wieselgren@gmail.com", "marcus.cederborg@gmail.com"];

  if (!user || !user.email || !allowedEmails.includes(user.email)) {
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
          <div className=" flex flex-col gap-4 mb-6 font-medium ml-6 md:hidden">
            <Link href="/dashboard/allvehicles">
              <button className="bg-red-800 hover:bg-red-700 text-white px-4 md:px-6 py-2 rounded-md w-full sm:w-auto">
                All Vehicles
              </button>
            </Link>

            <Link href="/dashboard/contactmessages">
              <button className="bg-red-800 hover:bg-red-700 text-white px-4 md:px-6 py-2 rounded-md w-full sm:w-auto">
                Contact Messages
              </button>
            </Link>

            <Link href="/dashboard/registeredcompanies">
              <button className="bg-red-800 hover:bg-red-700 text-white px-4 md:px-6 py-2 rounded-md w-full sm:w-auto">
                All Registered Companies
              </button>
            </Link>

            <Link href="/dashboard/user">
              <button className="bg-red-800 hover:bg-red-700 text-white px-4 md:px-6 py-2 rounded-md w-full sm:w-auto">
                All User
              </button>
            </Link>

            <Link href="/dashboard/addcar">
              <button className="bg-red-800 hover:bg-red-700 text-white px-4 md:px-6 py-2 rounded-md w-full sm:w-auto">
                Add Car
              </button>
            </Link>
          </div>
      

        {/* Display counts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Count of Cars */}
          <Link
            href="/dashboard/allvehicles"
            className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
          >
            <Car className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Vehicles
              </h3>
              <p className="text-2xl text-gray-800">{carCount}</p>
            </div>
          </Link>

          {/* Count of Contact Messages */}
          <Link
            href="/dashboard/contactmessages"
            className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
          >
            <MessageCircle className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Contact Messages
              </h3>
              <p className="text-2xl text-gray-800">{contactMessagesCount}</p>
            </div>
          </Link>

          {/* Count of Registered Companies */}
          <Link
            href="/dashboard/registeredcompanies"
            className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
          >
            <Briefcase className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Registered Companies
              </h3>
              <p className="text-2xl text-gray-800">
                {registeredCompaniesCount}
              </p>
            </div>
          </Link>

          {/* Count of total users */}
          <Link
            href="/dashboard/user"
            className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
          >
            <Briefcase className="w-8 h-8 text-red-800" />
            <div>
              <h3 className="text-xl font-semibold text-red-800">
                Total Users
              </h3>
              <p className="text-2xl text-gray-800">{userCount}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
