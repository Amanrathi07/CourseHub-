import { getServerSession } from "@/lib/getServerSession.ts"
import SignInPage from "./SignInPage";
import { redirect } from "next/navigation";

export default async function page() {
  const session =await getServerSession();

  if(session) redirect("/")
    
    
  
  return <SignInPage />
}
