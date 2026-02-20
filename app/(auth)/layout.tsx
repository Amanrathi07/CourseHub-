import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface props{
    children:React.ReactNode
}

export default function AuthLayout({children}:props) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Link href="/" className={buttonVariants({
        variant:"outline",
        className:"absolute top-4 left-4"
      })}>
        <ArrowLeft className="size-4"/>
        back
      </Link>
        <div className="flex w-full max-w-sm flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 self-center font-medium">
            {/* <Image src={""} alt="Logo" /> */}
            corseLLM
          </Link>
            {children}
            <div className="text-balance text-center text-xs text-muted-foreground">
              By clicking continue, you agree to our <span className="hover:text-primary hover:underline cursor-pointer">Term of services</span>{" "} 
              and  <span className="hover:text-primary hover:underline cursor-pointer">Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}
