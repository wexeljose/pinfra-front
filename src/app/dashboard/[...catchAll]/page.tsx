export default function NotFound({ params }: { params: { catchAll: string[] } }) {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
            <h1 className="text-xl font-semibold">
                La página que buscas no existe
            </h1>
            <p className="text-sm text-gray-500">
                La ruta <code>/dashboard/{params.catchAll.join("/")}</code> no existe
            </p>
        </div>
    )
}