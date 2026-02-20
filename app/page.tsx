import { ModeToggle } from "@/components/ModeToggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
  console.log(session?.user.name)
  return (  
    <div className="">
     <ModeToggle />
     
    </div>
  );
}
