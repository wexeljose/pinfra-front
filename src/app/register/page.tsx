
export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Registro de usuario</h1>
        <p className="text-gray-500 dark:text-gray-400">Ingrese sus datos para registrar un usuario</p>
      </div>
      <form className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <input id="name" placeholder="Nombre" className="border p-2 rounded-md" required />
          </div>
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <input id="surname" placeholder="Apellido" className="border p-2 rounded-md" required />
          </div>
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <input id="ci" placeholder="Cédula de identidad" className="border p-2 rounded-md" required />
          </div>
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <label htmlFor="userType">Tipo de usuario</label>
          </div>
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <select id="userType" className="border p-2 rounded-md" required>
              <option value="1">Administrador</option>
              <option value="2">Auxiliar Administrativo</option>
              <option value="2">Ingreniero Biomédico</option>
              <option value="2">Técnico</option>
              <option value="2">Tecnólogo</option>
            </select>
          </div>
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <label htmlFor="userInstitute">Institución</label>
          </div>
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <select id="userInstitute" className="border p-2 rounded-md" required>
              <option value="1">Ingresar valor de Institucion JS</option>
              <option value="2">Ingresar valor JS</option>
              <option value="3">Ingresar valor JS</option>
            </select>
          </div>
          <div className="space-y-2 space-x-2 flex flex-col gap-2">
            <input id="email" type="email" placeholder="Correo electrónico" className="border p-2 rounded-md" required />
          </div>
        </div>
        <div className="space-y-2 space-x-2 flex flex-col gap-2">
          <label htmlFor="birthday">Fecha de nacimiento </label>
        </div>
        <div className="space-y-2 space-x-2 flex flex-col gap-2">
          <input id="birthday" type="date" className="border p-2 rounded-md" required />
        </div>
        <div className="space-y-2 space-x-2 flex flex-col gap-2">
          <input id="password" type="password" className="border p-2 rounded-md" placeholder="Contraseña" required />
        </div>
        <div className="space-y-2 space-x-2 flex flex-col gap-2">
          <input id="repeat-password" type="password" className="border p-2 rounded-md" placeholder="Repita su contraseña" required />
        </div>
        <div className="space-y-2 space-x-2 flex flex-col gap-2">
          <button type="submit" className="border p-2  bg-blue-500 text-white hover:bg-blue-600 transition rounded-md">
            Registrar
          </button>
        </div>
      </form>
    </div>
  )
}