"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {

  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">¡Oops! Parece que te has perdido en la cancha.</h1>
        <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
        <Image src="/nba-logo-color.png" alt="NBA Logo" width={300} height={300} className="w-32 h-32 mx-auto mb-8" />
        <button className="bg-blue-700 text-white text-2xl rounded-md" onClick={()=>{router.back()}}>Volver atras</button>
      </div>
    </div>
  );
};

export default NotFound;
