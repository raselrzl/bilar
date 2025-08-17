import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Navbar from "./Navbar";

export default async function NavbarServer() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  return <Navbar initialUser={user} />;
}
