import { useState } from "react";
import { useScreen } from "./hooks/useScreen";

function App() {
  const [year, setYear] = useState(1999); //año actual
  const [age, setAge] = useState(23); //edad actual
  const [minYear, setMinYear] = useState(1900); //año minimo
  const [maxYear, setMaxYear] = useState(2022); //año maximo
  const [width, height] = [useScreen().width, useScreen().height]; //ancho y alto de la pantalla

  //una funcion que incrementa el año en la mitad de los
  //años que hay entre el año actual y el año maximo

  const incrementar = () => {
    setMinYear(year);
    setYear(getYear(year, maxYear));
  };

  //una funcion que decrementa el año en la mitad de los
  //años que hay entre el año actual y el año minimo

  const decrementar = () => {
    setMaxYear(year);
    setYear(getYear(minYear, year));
  };

  //una funcion que dado dos año 1999 y 2022 me devuelva el año que esta en la mitad de esos dos
  const getYear = (year1, year2) => {
    const year = year1 + (year2 - year1) / 2;
    //convertir el año a entero
    return Math.round(year);
  };
  //Una funcion que me devuelva la edad dado un año
  const getAge = (year) => {
    const age = 2021 - year;
    return age + 1;
  };
  return (
    <>
      {width < 600 ? (
        <div className="flex bg-slate-600 w-full h-screen justify-center items-center flex-col">
          <div className="w-40 h-40 p-6 rounded-full text-white font-bold bg-slate-400 my-6">
            <h1 className="text-center py-4 text-5xl">{year}</h1>
            <h6 className="text-center text-sm">{getAge(year)} Años</h6>
          </div>
          <div className="w-full flex justify-evenly">
            <button
              onClick={incrementar}
              className="bg-green-600 text-white py-6 px-8 font-bold uppercase rounded-xl shadow-2xl"
            >
              Sumar
            </button>

            <button
              onClick={decrementar}
              className="bg-red-600 text-white py-6 px-8 font-bold uppercase rounded-xl shadow-2xl"
            >
              Restar
            </button>
          </div>
        </div>
      ) : (
        <div className="flex bg-slate-600 w-full h-screen justify-center items-center">
          <div className="w-1/3 flex justify-center">
            <button
              onClick={incrementar}
              className="bg-green-600 text-white py-6 px-8 font-bold uppercase rounded-xl shadow-2xl"
            >
              incrementar
            </button>
          </div>
          <div className="w-1/3">
            <div className="w-40 h-40 py-6 rounded-full text-white font-bold bg-slate-400 mx-auto">
              <h1 className="text-center py-4 text-5xl">{year}</h1>
              <h6 className="text-center text-sm">{getAge(year)} Años</h6>
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <button
              onClick={decrementar}
              className="bg-red-600 text-white py-6 px-8 font-bold uppercase rounded-xl shadow-2xl"
            >
              Decrementar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
