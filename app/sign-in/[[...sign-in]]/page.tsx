import { SignIn } from "@clerk/nextjs";


import { Metadata } from "next";


export const metadata: Metadata = {
  title: "motorix"
};
const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn path="/sign-in" routing="path" />
    </div>
  )
};

export default page;