"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Loader2Icon, Send } from "lucide-react";
import { IoLogoGoogle } from "react-icons/io";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function SignInPage() {

  const router = useRouter()

  const [email,setEmail] = useState('')

  const [githubPending, startGithubTransition] = useTransition()
  const [emailPending,startEmailTransition] = useTransition()

  async function signInWithGoogle() {
    startGithubTransition(async ()=>{
      await authClient.signIn.social({
      provider:"google",
      callbackURL:"/" ,
      
    },{
         onSuccess:()=>{
        toast.success("Sign in with Google , you will be redirected...")
      },
      onError:(err)=>{
        toast.error(err.error.message||"Internal Server Error")
      } ,
      
      })
    })
  }

  async function signInwithEmail() {
    startEmailTransition(async()=>{
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type:"sign-in",
      },{
        onSuccess:()=>{
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Email" }), 2000)
              ),
            {
              loading: "Loading...",
              success: (data) => `${data.name} has been send , pls check you inbox`,
              error: "Error",
            }
          )

          router.push(`/verify-request?email=${email}`)
        },
        onError:(err)=>{
          toast.error(err.error.message||"Internal Server Error")
        }
      })
    })
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl ">
            signIn
          </CardTitle>
          <CardDescription>
            login in with github
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Button disabled={githubPending} onClick={signInWithGoogle} className="w-full" variant={"outline"}>
            {githubPending?(<>
              <Loader2Icon className="size-4 animate-spin"/>
              <span>Loading...</span>
            </>):
              (<>
                <IoLogoGoogle className="size-4"/>
                sign in with Google
              </>)
            }
          </Button>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">or continue with</span>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="abc@example.com" required />
            </div>

            <Button disabled={emailPending} onClick={signInwithEmail}>
              {emailPending ?(<>
                <Loader2Icon className="size-4 animate-spin" />
              pls wait ...
            </>):(
              <><Send className="size-4"/>Continue with Email</>)}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
