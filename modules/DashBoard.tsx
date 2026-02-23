
import { ModeToggle } from "@/components/ModeToggle";
import { Logout } from "@/modules/ui/Logout";

interface props{
   session : {
     user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
    };
   }
}

export default function DashBoard({session}:props) {
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
     <Logout />
    </div>
    </>
  )
}
