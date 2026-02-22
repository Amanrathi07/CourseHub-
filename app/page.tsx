import { ModeToggle } from "@/components/ModeToggle";
import { auth } from "@/lib/auth";
import { getServerSession } from "@/lib/getServerSession.ts";
import { headers } from "next/headers";
export default async function Home() {
  const session = await getServerSession();
  console.log(session?.user.name)
  return (  
    <>
     <ModeToggle />
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
     <div className="flex flex-col ">
        <span>name: {session?.user.name}</span>
        <span>email: {session?.user.email}</span>
        <span>emailVerified: {session?.user.emailVerified}</span>
        <span>id: {session?.user.id}</span>
     </div>
    </div>
    </>
  );
}
