"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useSignout() {
  const router = useRouter();
    const handelSignout = async function logout() {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              toast.success("Logout Successfull ");
              router.push("/");
              router.refresh();
            },
            onError: (error) => {
              toast.error(error.error.message || "Internal Server Error");
            },
          },
        });
      }

     return handelSignout ;
}
