"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { GithubIcon, Loader2Icon } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function page() {

  const [githubPending, startGithubTransition] = useTransition()

  async function signInWithGithhub() {
    startGithubTransition(async ()=>{
      await authClient.signIn.social({
      provider:"google",
      callbackURL:"/" ,
      
    },{
         onSuccess:()=>{
        toast.success("Sign in with Github , you will be redirected...")
      },
      onError:(err)=>{
        toast.error(err.error.message||"Internal Server Error")
      } ,
      
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
          <Button disabled={githubPending} onClick={signInWithGithhub} className="w-full" variant={"outline"}>
            {githubPending?(<>
              <Loader2Icon className="size-4 animate-spin"/>
              <span>Loading...</span>
            </>):
              (<>
                <GithubIcon className="size-4"/>
                sign in with GitHb
              </>)
            }
          </Button>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">or continue with</span>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="abc@example.com" />
            </div>
            <Button>Continue with Email</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
