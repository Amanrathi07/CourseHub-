import { ModeToggle } from "@/components/ModeToggle";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getServerSession } from "@/lib/getServerSession.ts";
import DashBoard from "@/modules/DashBoard";
import Link from "next/link";
export default async function Home() {
  const session = await getServerSession();

    if(!session) {
      return (
        <>
            <section className="relative py-20">
                <div className="flex flex-col items-center text-center space-y-8">
                    <Badge variant={"outline"}>The future of Online Education</Badge>
                    <h1 className="text-4x md:text-6xl font-bold tracking-tight">Elevate your Learning Experience</h1>
                    <p className="max-w-175 text-muted-foreground md:text-xl">Discover a new way to learn with our modern, interactive larning managment system. Acces high-quality courses anytime, anywhere.</p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Link className={buttonVariants({
                        size:"lg"
                      })} href="/courses">Explore Courses</Link>
                    </div>
                </div>
                
            </section>
        </>
      )
    }

    return <DashBoard session={session} />
  }
