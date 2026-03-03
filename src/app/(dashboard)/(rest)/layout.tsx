import { AppHeader } from "@/components/app-header-";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function RestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
}
