"use client"

import { BuildingIcon, CogIcon, ContactRoundIcon, HomeIcon, MonitorSmartphoneIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

/* 
    Un archivo tsx/jsx puede tener múltiples componentes
    Para evitar crear un componente exclusivo para los Links, lo crearé aquí
   
*/

const SidebarLink = ({ href, icon, text }: { href: string, icon?: React.ReactNode, text: string }) => {
    const pathname = usePathname()
    return (
        <li>
            <Link href={href} className={`flex items-center p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 ${pathname === href ? "bg-blue-50 text-blue-500" : "text-zinc-700"}`}>
                {
                    icon && (
                        <span className="mr-2">
                            {icon}
                        </span>
                    )
                }
                <span className="font-medium text-sm">
                    {text}
                </span>
            </Link>
        </li>
    )
}


export const DashboardSidebar = () => {
    const LINKS = [
        {
            href: "/dashboard",
            text: "Inicio",
            icon: <HomeIcon />
        },
        {
            href: "/dashboard/equipos",
            text: "Equipos",
            icon: <MonitorSmartphoneIcon />
        },
        {
            href: "/dashboard/instituciones",
            text: "Instituciones",
            icon: <BuildingIcon />
        },
        {
            href: "/dashboard/usuarios",
            text: "Usuarios",
            icon: <ContactRoundIcon />
        }
    ]

    return (
        <aside id="dashboard-sidebar" className="border-r p-4 w-64 h-screen">

            <ul className="space-y-2">
                {LINKS.map((link, index) => (
                    <SidebarLink key={index} href={link.href} icon={link.icon} text={link.text} />
                ))}
            </ul>
        </aside>
    )
}