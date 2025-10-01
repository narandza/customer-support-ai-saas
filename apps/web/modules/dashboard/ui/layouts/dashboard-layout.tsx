import { cookies } from "next/headers";
import { SidebarProvider } from "@workspace/ui/components/sidebar";

import { OrgGuard } from "@/modules/auth/ui/components/org-guard";
import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { Provider } from "jotai";

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <AuthGuard>
      <OrgGuard>
        <Provider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <DashboardSidebar />
            <main className="flex flex-1 flex-col">{children}</main>
          </SidebarProvider>
        </Provider>
      </OrgGuard>
    </AuthGuard>
  );
};
