import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrgGuard } from "@/modules/auth/ui/components/org-guard";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AuthGuard>
      <OrgGuard>
        <main className="flex flex-1 flex-col">{children}</main>
      </OrgGuard>
    </AuthGuard>
  );
};
