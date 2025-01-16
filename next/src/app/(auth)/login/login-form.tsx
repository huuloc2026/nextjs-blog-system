"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Link component from Next.js

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
import { useToast } from "@/hooks/use-toast";
import { useAppContext } from "@/app/AppProvider";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(2).max(50).email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(50),
});

type FormValues = z.infer<typeof formSchema>;

export function LoginForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "kigagybo@mailinator.com",
      password: "kigagybo@mailinator.com",
    },
  });

  const { toast } = useToast();
  const {setSessionToken} = useAppContext()
    const router = useRouter();

  // Handle form submission
  async function onSubmit(values: FormValues) {
    const apiUrl = envConfig?.NEXT_PUBLIC_API_ENDPOINT;
    try {
      if (!apiUrl) {
        throw new Error("API URL is not defined");
      }

      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },                                
        body: JSON.stringify(values),
      }); 

      const result = await response.json();
      console.log(result);
      setSessionToken(result.data.accessToken);
      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }
      toast({
        variant: "default",
        title: "Success!",
        description: result.message,
      });
      router.push("/me");
      router.refresh();

      // Handle success (e.g., redirect or store token) 
      const resultFromNextServer = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(result),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(">>>>resultFromNextServer", resultFromNextServer);

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
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

        <Button type="submit" className="w-full">
          Submit
        </Button>

        {/* "Don't have an account?" link */}
        <div className="text-center mt-4">
          <span>Don't have an account?</span>{" "}
          <Link href="/register" className="hover:underline">
            <Button variant={"ghost"}>Register here</Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
