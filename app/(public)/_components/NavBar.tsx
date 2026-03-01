import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header  className="sticky  top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
        <div className="container flex min-h-16 items-center mx-auto px4 md:px-6 lg:px-8">
            <Link className="flex items-center space-x-2 mr-4" href="">
                <Image src={""} alt="Logo" className="size-9"/>
                <span className="font-bold">Course Hub</span>
            </Link>

            {/*  desktop navigation */}
            <nav>

            </nav>
        </div>
    </header>
  )
}
