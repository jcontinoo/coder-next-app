import ProductosDestacados from '../components/ui/ProductosDestacados';

const Home = () => {

  return (
    <div className={"flex items-center justify-center mt-11 transition-opacity"}>
      <div className="text-center">
        <h1 className="text-4xl text-blue-900 font-bold my-4 transition-opacity opacity-100">
          Bienvenido a NBA Store!
        </h1>
        <h2>Donde podrás encontrar la más reciente indumentaria de tu equipo favorito.</h2>
        <div className="mt-40 ml-44 w-5/6 h-80">
          <section className='flex justify-center items-center flex-wrap gap-10'>
            <ProductosDestacados /> 
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
