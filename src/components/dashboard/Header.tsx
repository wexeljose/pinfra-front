import Link from "next/link"

export const DashboardHeader = () => {
    return (
        <header className="sticky top-0 z-10 bg-white border-b p-4 w-full">
            <Link className="text-xl font-bold max-w-2xl text-ellipsis text-nowrap overflow-hidden text-blue-500" href="/dashboard">
                Sistema de gestión hospitalario
            </Link>
        </header>
    )
}