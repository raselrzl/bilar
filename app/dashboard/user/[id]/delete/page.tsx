import { deleteUser } from "@/app/action";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { UserX } from "lucide-react";

export default async function DeleteRoute({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = await paramsPromise;

  return (
    <div className="h-[60vh] w-full flex items-center justify-center px-4">
      <Card className="w-full max-w-md rounded-2xl border shadow-lg p-6">
        {/* Header */}
        <CardHeader className="text-center space-y-3">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <UserX className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-semibold text-gray-900">
            Delete User Account?
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            This action <span className="font-semibold text-red-600">cannot be undone</span>.  
            It will permanently remove this user and all associated data from our servers.
          </CardDescription>
        </CardHeader>

        {/* Footer with buttons */}
        <CardFooter className="flex justify-center gap-4 mt-4">
          <Button
            variant="secondary"
            asChild
            className="px-6 rounded-lg shadow-sm"
          >
            <Link href="/dashboard/user">Cancel</Link>
          </Button>

          <form action={deleteUser}>
            <input type="hidden" name="userId" value={params.id} />
            <SubmitButton
              variant="destructive"
              text="Delete User"
            />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
