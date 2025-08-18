import { OrgGuard } from "@/modules/auth/ui/components/org-guard";
import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthGuard>
      <OrgGuard>{children}</OrgGuard>
    </AuthGuard>
  );
};

export default Layout;
