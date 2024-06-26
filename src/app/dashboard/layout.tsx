import { DashboardHeader } from "@/components/dashboard/Header";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div id="dashboard-layout">
            <DashboardHeader />
            {/* Sidebar */}
            <div className="flex">
                <DashboardSidebar />
                <main className="p-2 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;