  "use client";

  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form";
  import { Button } from "@/components/ui/button";

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
    username: z
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
    const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        username: "",
        password: "",
        dateOfBirth: "", // Initialize as empty string if not required
      },
    });

    // Handle form submission
    async function onSubmit(values: FormValues) {
        try {
          const apiUrl = envConfig?.NEXT_PUBLIC_API_ENDPOINT;
          console.log(apiUrl);
          if (!apiUrl) {
            throw new Error("API URL is not defined");
          }
          const response = await fetch(
            "http://localhost:5000/v1/auth/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          )
            .then((response) => response.json())
            .then((json) => console.log(json));
        } catch (error) {
          throw error
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
            name="username"
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
