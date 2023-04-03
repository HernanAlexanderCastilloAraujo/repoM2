import logo from "./logo.svg";
import "./App.css";
import Persona from "./components/Persona";
import Titulo from "./components/Titulo";
import Boton from "./components/Boton";
function App() {
  const dataEjemplo = [
    { name: "Juan", age: 20 },
    { name: "Pedro", age: 21 },
    { name: "Maria", age: 22 },
    { name: "Jose", age: 23 },
    { name: "Luis", age: 24 },
    { name: "Ana", age: 25 },
    { name: "Luisa", age: 26 },
    { name: "Rosa", age: 27 },
  ];

  return (
    <>
      <Titulo titulo="USUARIOS" />
      <div>
        {dataEjemplo.map((item, index) => {
          return (
            <Persona
              key={index}
              index={index}
              name={item.name}
              age={item.age}
            />
          );
        })}
      </div>
      <Boton name={"AGREGA"} />
    </>
  );
}

export default App;
