"use client"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export  function Logout() {
    const router = useRouter();
    async function logout() {
       await authClient.signOut({
        fetchOptions:{
            onSuccess:()=>{
                toast.success("Logout Successfull ")
                router.push("/sign-in");
            },
            onError:(error)=>{
                toast.error(error.error.message||"Internal Server Error")
            }
        }
       }) 
    }

  return (
    <div>
        <Button onClick={logout} variant={"destructive"}>logout</Button>
    </div>
  )
}
