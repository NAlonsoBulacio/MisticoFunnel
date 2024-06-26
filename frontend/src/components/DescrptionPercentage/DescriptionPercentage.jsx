import React from "react";
import StatementList from ".././ProgressBar/ProgressBar";
const DescriptionPercentage = () => {
  return (
    <div className="flex flex-wrap justify-between items-start h-auto lg:h-[550px] xl:space-x-0">
      <div className="w-full lg:w-[50%] flex flex-wrap justify-start items-start space-y-4">
        {/* <h2 className="w-full font-roboto-400 text-xl text-center lg:text-left text-yellow-700">
          Estudio Clinico
        </h2> */}
        <h1 className="font-roboto-400 text-3xl lg:text-5xl text-center lg:text-left">
        Somos fabricantes por eso podemos tener 

        </h1>
        <div className="flex lg:hidden overflow-hidden px-10">
          <img
            src="https://www.agefit.com/_next/image?url=%2Fproduct-serum-planas-2.png&w=750&q=75"
            alt=""
            className="w-full rounded-xl"
          />
        </div>
        <p>
        En nuestra fábrica, cada prenda refleja nuestro compromiso con la calidad y el detalle. Al ser fabricantes directos, tenemos la ventaja de eliminar los intermediarios, lo que nos permite ofrecerte precios excepcionales sin sacrificar la calidad. Controlamos cada etapa del proceso de producción, desde la selección de las mejores telas hasta el último detalle en las costuras, asegurando productos duraderos y de alta calidad. Este enfoque nos permite brindarte una excelente relación calidad-precio en cada compra. Descubre la diferencia que marca nuestra dedicación y experiencia en cada prenda que adquieres.

        </p>
        <StatementList />
      </div>
      <div className="hidden lg:flex justify-end w-[50%] overflow-hidden h-full rounded-xl">
        <img
          src="https://www.agefit.com/_next/image?url=%2Fproduct-serum-planas-2.png&w=750&q=75"
          alt=""
          className="h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default DescriptionPercentage;
