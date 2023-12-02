import Image from 'next/image'

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="border-t-8 border-orange-600 border-solid animate-spin rounded-full h-16 w-16">
      <Image src={"/favicon.ico"} alt={"loader-image"} width={80} height={80} />
      </div>
      <p className="text-xl font-semibold mt-4 text-blue-700">Cargando productos...</p>
    </div>
  );
};

export default Loader;
