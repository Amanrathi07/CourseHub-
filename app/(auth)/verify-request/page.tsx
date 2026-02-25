"use client"
import { Button } from "@/components/ui/button";
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
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export default function page() {
  const [otp,setOtp] = useState<number>()
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
          <InputOTP maxLength={6} className="gap-2" value={otp} onChange={(value)=>setOtp(value)}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
          </InputOTPGroup>
        </InputOTP>
          <p className="text-sm text-muted-foreground">Enter the 6-digit code sent to your email</p>
        </div>
        <Button className="w-full">Verify Accoutn</Button>
      </CardContent>
    </Card>
  );
}
