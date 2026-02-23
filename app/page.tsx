import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "@/lib/getServerSession.ts";
import DashBoard from "@/modules/DashBoard";
import Link from "next/link";
export default async function Home() {
  const session = await getServerSession();

    if(!session) {
      return (
         <>
         <ModeToggle />
          <div className="w-dvw h-dvh flex items-center justify-center">
        <Link className={buttonVariants({
          variant:"default" ,
        })} href={"/sign-in"}>sign in</Link>
        </div>
         </>
      )
    }

    return <DashBoard session={session} />
  }
