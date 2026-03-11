"use client" ;
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { courseSchema, courseSchemaType } from "@/lib/zodSchema";
import { ArrowLeft, FormInput } from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function page() {
  const form = useForm<courseSchemaType>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      fileKey: "",
      price: 0,
      level: "Beginner",
      category: "",
      status: "Draft",
      slug: "",
      duration: 0,
      smallDescription: "",
    },
  });

  function onSubmit(data: courseSchemaType) {
    console.log(data)
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          href={"/admin/courses"}
          className={buttonVariants({
            variant: "outline",
            size: "icon",
          })}
        >
          <ArrowLeft className="size-4" />
        </Link>
        <h1 className="text-2xl font-bold">Create Course</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>
            {" "}
            Provide basic Information about the course
          </CardDescription>
        </CardHeader>

        <CardContent>
            <Form {...form}>
                <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField 
                      control={form.control}
                      name="title"
                      render={({field})=>(
                        <FormItem>
                            <FormLabel>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input type="text"  placeholder="Title" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                      )}
                    />
                </form>
            </Form>
        </CardContent>
      </Card>
    </>
  );
}



