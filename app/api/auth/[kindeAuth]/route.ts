import { NextRequest } from "next/server";
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request: NextRequest, { params }: { params: { kindeAuth: string } }) {
  const endpoint = params.kindeAuth;
  return await handleAuth(request, endpoint);
}
