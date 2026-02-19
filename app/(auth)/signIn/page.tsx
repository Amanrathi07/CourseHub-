import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        </CardContent>
      </Card>
    </div>
  )
}
