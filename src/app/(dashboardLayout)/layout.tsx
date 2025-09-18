import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex gap-2">
      <aside>
        <Sidebar />
      </aside>
      {children}
    </section>
  );
};

export default DashboardLayout;
