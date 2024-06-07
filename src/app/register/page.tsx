
export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Registro de usuario</h1>
        <p className="text-gray-500 dark:text-gray-400">Ingrese sus datos para registrar un usuario</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name">Nombre</label>
            <input id="name" placeholder="Nombre" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="surname">Apellido</label>
            <input id="surname" placeholder="Apellido" required />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="birthday">Fecha de nacimiento</label>
          <input id="birthday" type="date" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="repeat-password">Repita su contraseña</label>
          <input id="repeat-password" type="password" required />
        </div>
        <button type="submit" className="w-full">
          Registrar
        </button>
      </form>
    </div>
  )
}