import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "./actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mail, Phone, Building2, Calendar, LogOut, User } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/admin/login");
  }

  const { data: submissions, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-muted/20">
      {/* Navbar */}
      <header className="bg-background border-b border-border/50 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
                <User className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-bold text-xl text-primary dark:text-white">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
             <span className="text-sm text-muted-foreground hidden md:block">{user.email}</span>
             <form action={signOut}>
                <Button variant="outline" size="sm" className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10">
                    <LogOut className="w-4 h-4" /> Sign Out
                </Button>
             </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 py-8">
        <div className="grid gap-6">
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Total Inquiries</CardDescription>
                        <CardTitle className="text-4xl">{submissions?.length || 0}</CardTitle>
                    </CardHeader>
                </Card>
            </div>

            {/* Submissions Table */}
            <Card className="border-border/50 shadow-md">
                <CardHeader>
                    <CardTitle>Recent Inquiries</CardTitle>
                    <CardDescription>A list of all contact form submissions.</CardDescription>
                </CardHeader>
                <CardContent>
                    {!submissions || submissions.length === 0 ? (
                        <div className="text-center py-10 text-muted-foreground">
                            No inquiries found yet.
                        </div>
                    ) : (
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                       <TableHead>Date</TableHead>
                                       <TableHead>Name / Company</TableHead>
                                       <TableHead>Contact Info</TableHead>
                                       <TableHead className="w-[40%]">Project Details</TableHead>
                                       <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {submissions.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell className="whitespace-nowrap font-medium text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 opacity-50" />
                                                    {new Date(item.created_at).toLocaleDateString()}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-semibold text-foreground">{item.name}</div>
                                                {item.company_name && (
                                                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                                        <Building2 className="w-3 h-3" /> {item.company_name}
                                                    </div>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Mail className="w-3 h-3 text-primary" /> {item.email}
                                                    </div>
                                                     {item.phone && (
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <Phone className="w-3 h-3" /> {item.phone}
                                                        </div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <p className="text-sm line-clamp-2" title={item.project_details}>
                                                    {item.project_details}
                                                </p>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <Link href={`mailto:${item.email}?subject=Re: Project Inquiry - Engiverse`}>
                                                    <Button size="sm" variant="secondary" className="gap-2">
                                                        <Mail className="w-4 h-4" /> Reply
                                                    </Button>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
