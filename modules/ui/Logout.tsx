"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Logout() {
  const router = useRouter();
  async function logout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logout Successfull ");
          router.push("/sign-in");
          router.refresh();
        },
        onError: (error) => {
          toast.error(error.error.message || "Internal Server Error");
        },
      },
    });
  }

  return (
    <div>
      <button
        className="cursor-pointer rounded-lg px-2 py-2 text-sm text-red-500 hover:text-red-500"
        onClick={logout}
       
      >
        logout
      </button>
    </div>
  );
}
