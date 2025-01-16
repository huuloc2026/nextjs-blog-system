import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import React from "react";

const Header = () => {
  
   return (
     <div className="container mx-auto px-4 md:px-6 lg:px-8">
       <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
         <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
           <ModeToggle />
         </Link>
         <div className="ml-auto flex gap-2">
           <Link
             href="/"
             className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
             prefetch={false}
           >
             Home
           </Link>
           <Link
             href="/me"
             className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
             prefetch={false}
           >
             About Me
           </Link>
           <Link
             href="/verify"
             className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
             prefetch={false}
           >
             Services
           </Link>

           <Link href="/login">
             <Button variant="outline" className="justify-self-end">
               Sign in
             </Button>
           </Link>
           <Link href="/register">
             <Button className="justify-self-end">Sign Up</Button>
           </Link>
         </div>
       </header>
     </div>
   );
};

export default Header;
