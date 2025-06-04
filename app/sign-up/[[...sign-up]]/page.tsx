import { SignUp } from "@clerk/nextjs";


import { Metadata } from "next";


export const metadata: Metadata = {
  title: "motorix"
};
const page = () => {
  return (
     <div className="flex justify-center items-center min-h-screen">
      <SignUp path="/sign-up" routing="path" />
    </div>
  )
};

export default page;