import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import globe from"@/public/globe.svg"
import { getServerSession } from "@/lib/getServerSession.ts";
import { buttonVariants } from "@/components/ui/button";

interface navItemProps{
    name:string ;
    href:string ;
}

const navigationItems :navItemProps[] = [
    {name:"Home" , href:"/"},
    {name:"Courses" , href:"/courses"},
    {name:"Dashboard" , href:"/dashboard"}
]

export default async function NavBar() {

    const  session = await getServerSession()
  return (
    <header  className="sticky  top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
        <div className="container flex min-h-16 items-center mx-auto px4 md:px-6 lg:px-8">
            <Link className="flex items-center space-x-2 mr-4" href="">
                <Image src={globe} alt="Logo" className="size-9"/>
                <span className="font-bold">Course Hub</span>
            </Link>

            {/*  desktop navigation */}
            <nav className="hidden md:flex  md:flex-1 md:items-center md:justify-between">
                <div className="flex  items-center space-x-2">
                    {
                    navigationItems.map((item)=>(
                        <Link className="text-sm font-medium transition-colors hover:text-primary " key={item.href} href={item.href}>{item.name}</Link>
                    ))
                    }
                </div>
                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    {
                        session?("Logged in "):(
                            <>
                                <Link href={"/sign-in"} className={buttonVariants({
                                    variant:"secondary"
                                })}>Login</Link>
                                <Link href={"/sign-in"} className={buttonVariants()}>Get Started</Link>
                            </>
                        )
                    }
                </div>
            </nav>
        </div>
    </header>
  )
}
