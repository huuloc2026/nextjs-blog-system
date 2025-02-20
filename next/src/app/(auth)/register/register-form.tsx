"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import envConfig from "@/app/config/config";

// Define form schema with Zod
const formSchema = z.object({
  email: z.string().min(2).max(50).email({ message: "Invalid email address" }),
  name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(50),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .optional(),
  dateOfBirth: z
    .string()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .optional(),
  address: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function RegisterForm() {
   const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      dateOfBirth: "", 
    },
  });

  // Handle form submission
  async function onSubmit(values: FormValues) {
    try {
      const apiUrl = envConfig?.NEXT_PUBLIC_API_ENDPOINT;
      const response = await fetch(` ${apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const jsonResponse = await response.json();
      if (!response.ok) {
        console.error("API Error:", jsonResponse);
        throw new Error(jsonResponse.message || "Failed to register");
      }
      toast({
        variant: "default",
        title: "Successfully!!!",
        description: jsonResponse.message ? jsonResponse.message : "Successfully to register",
      });
      console.log("Registration successful:", jsonResponse);
    } catch (error:any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message ? error.message : "Failed to register",
      });
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[600px] w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (*)</FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>User Name (*)</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password (*)</FormLabel>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
