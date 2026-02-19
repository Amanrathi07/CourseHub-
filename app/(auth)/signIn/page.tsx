import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";

export default function page() {
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

        <CardContent>
          <Button className="w-full" variant={"outline"}>
            <GithubIcon className="size-4"/>
            sign in with GitHb
          </Button>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">or continue with</span>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" placeholder="abc@example.com" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
