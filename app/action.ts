// app/actions.ts (or wherever you are managing server-side logic)
"use server";

import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache"; // This will help to revalidate the cache after the action.
import { redirect } from "next/navigation";

type CarFormData = {
  title: string;
  model: string;
  engine: string;
  mileage: string;
  fuelType: string;
  date: string;
  Växellåda: "Automatic" | "Manual";
  fordonstyp: "Bil" | "Karavan";
  bränsle: "Diesel" | "Bensin" | "Hybrid" | "Elektrisk";
  images: string[];
};

export async function addCar(data: CarFormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const allowedEmails = ["rasel6041@gmail.com", "jonas.wieselgren@gmail.com"];

  if (!user || !user.email || !allowedEmails.includes(user.email)) {
    return redirect("/");
  }

  try {
    const car = await prisma.car.create({
      data: {
        title: data.title,
        model: data.model,
        engine: data.engine,
        mileage: data.mileage,
        fuelType: data.fuelType,
        date: new Date(data.date),
        Växellåda: data.Växellåda,
        fordonstyp: data.fordonstyp,
        bränsle: data.bränsle,
        images: data.images,
      },
    });

    revalidatePath("/dashboard/allvehicles");

    return car;
  } catch (error) {
    console.error("Error adding car:", error);
    throw new Error("Failed to add car");
  }
}

type RegisteredCustomerFormData = {
  vat: string;
  companyName: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
  businessType: string;
  employees: number;
  website: string;
  subscription?: string;
  firstName: string;
  lastName: string;
  jobEmail: string;
  jobPhone: string;
  comments?: string;
  consent: boolean;
  images: string[];
};

export async function addRegisteredCustomer(data: RegisteredCustomerFormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/");
  }

  try {
    const registeredCustomer = await prisma.registeredCustomer.create({
      data: {
        vat: data.vat,
        companyName: data.companyName,
        street: data.street,
        houseNumber: data.houseNumber,
        postalCode: data.postalCode,
        city: data.city,
        businessType: data.businessType,
        employees: data.employees,
        website: data.website,
        subscription: data.subscription,
        firstName: data.firstName,
        lastName: data.lastName,
        jobEmail: data.jobEmail,
        jobPhone: data.jobPhone,
        comments: data.comments,
        consent: data.consent,
        images: data.images,
      },
    });

    revalidatePath("/");

    return registeredCustomer;
  } catch (error) {
    console.error("Error adding registered customer:", error);
    throw new Error("Failed to add registered customer");
  }
}

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function saveContactMessage(data: ContactFormData) {
  try {
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
    });

    revalidatePath("/");

    return contactMessage;
  } catch (error) {
    console.error("Error saving contact message:", error);
    throw new Error("Failed to save contact message");
  }
}

export async function deleteProduct(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const allowedEmails = ["rasel6041@gmail.com", "jonas.wieselgren@gmail.com"];

  if (!user || !user.email || !allowedEmails.includes(user.email)) {
    return redirect("/");
  }

  await prisma.car.delete({
    where: {
      id: formData.get("productId") as string,
    },
  });

  redirect("/dashboard/allvehicles");
}

export async function deleteRegisteredCompany(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const allowedEmails = ["rasel6041@gmail.com", "jonas.wieselgren@gmail.com"];

  if (!user || !user.email || !allowedEmails.includes(user.email)) {
    return redirect("/");
  }

  await prisma.registeredCustomer.delete({
    where: {
      id: formData.get("registeredCustomerId") as string,
    },
  });

  redirect("/dashboard/registeredcompanies");
}


export async function deleteContactMessages(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const allowedEmails = ["rasel6041@gmail.com", "jonas.wieselgren@gmail.com"];

  if (!user || !user.email || !allowedEmails.includes(user.email)) {
    return redirect("/");
  }

  await prisma.contactMessage.delete({
    where: {
      id: formData.get("contactMessageId") as string,
    },
  });

  redirect("/dashboard/contactmessages");
}

export async function deleteUser(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const allowedEmails = ["rasel6041@gmail.com", "jonas.wieselgren@gmail.com"];

  if (!user || !user.email || !allowedEmails.includes(user.email)) {
    return redirect("/");
  }

  await prisma.user.delete({
    where: {
      id: formData.get("userId") as string,
    },
  });

  redirect("/dashboard/user");
}