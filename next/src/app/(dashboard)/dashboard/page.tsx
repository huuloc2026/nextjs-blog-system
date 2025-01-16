
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-md">
        <div className="flex items-center justify-center h-14 border-b">
          <h2 className="text-2xl font-semibold">Tech Blog</h2>
        </div>
        <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <Link
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-700 hover:bg-gray-100"
            prefetch={false}
          >
            Dashboard
          </Link>
          <Link
            href="analytics"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-700 hover:bg-gray-100"
            prefetch={false}
          >
            Analytics
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-700 hover:bg-gray-100"
            prefetch={false}
          >
            Orders
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-700 hover:bg-gray-100"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-700 hover:bg-gray-100"
            prefetch={false}
          >
            Customers
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-700 hover:bg-gray-100"
            prefetch={false}
          >
            Settings
          </Link>
        </nav>
      </div>
      <div className="flex flex-col flex-grow overflow-auto">
        <header className="flex items-center justify-between px-10 py-4 border-b">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </header>
        <main className="flex-grow p-6 flex flex-col">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <PlaneIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">345</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +155% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Active Users
                </CardTitle>
                <PlaneIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">745</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +20% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  New Signups
                </CardTitle>
                <PlaneIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">163</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +12% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <PlaneIcon className="w-4 h-4" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,034</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +3% from last week
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Order ID</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">ORD001</TableCell>
                    <TableCell>Pizza</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell className="text-right">$20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ORD002</TableCell>
                    <TableCell>Burger</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell className="text-right">$8</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">ORD003</TableCell>
                    <TableCell>Fries</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell className="text-right">$6</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function PlaneIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}
