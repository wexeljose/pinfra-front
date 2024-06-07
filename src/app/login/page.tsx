import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <section className="min-h-screen flex items-center justify-center">
    <div className="p-4 flex flex-col">
      <h1 className="text-2xl">Ingresa tus datos para iniciar sesión</h1>
        <form className="flex flex-col space-y-4 my-4">
            <input type="email" className="border p-2 rounded-md" placeholder="Correo electrónico"/>
            <input type="password" className="border p-2 rounded-md" placeholder="Contraseña"/>
          <button type="submit" className="border p-2 align-center bg-blue-500 text-white hover:bg-blue-600 transition rounded-md">Inicio de sesión</button>
          <Link href="/register" className="hover:underline hover:text-blue-500"> No tienes cuenta? Regístrate</Link>
        </form>
        
    </div>
   </section> 
  );
}
