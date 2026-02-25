"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Loader2Icon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function page() {
  const router = useRouter() ;
  const [otp,setOtp] = useState('')
  const [pending , startTransition] = useTransition()

  const isOtpComleated = otp.length === 6 ;

  const params = useSearchParams() ;
  const email = params.get("email") as string  ;

  function verifyOtp(){
    startTransition(async()=>{
      await authClient.signIn.emailOtp({
        email,
        otp,
      },{
        onSuccess:()=>{
          toast.success("Email Verified") 
          router.push("/")
        },
        onError:(error)=>{
          toast.error(error.error.message||"Error While Verifiing OTP")
        }

      })
    })
  }
  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Pleas check your email</CardTitle>
        <CardDescription>
          We have sent a verification email code to your email addres , pls open
          the email and paste the code below
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP  maxLength={6} className="gap-2" pattern={REGEXP_ONLY_DIGITS} value={otp} onChange={(value)=>setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
          <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to your email</p>
        </div>

        <Button  disabled={pending || !isOtpComleated} onClick={verifyOtp} className="w-full">
          {pending?(
          <><Loader2Icon className="size-4 animate-spin" />loading...</>
        ):(
          <>Verify Accoutn</>
        )}
        </Button>
      </CardContent>
    </Card>
  );
}
