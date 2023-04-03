import logo from "./logo.svg";
import "./App.css";
import OtroComponente from "./components/OtroComponente";
import ComponenteConCss from "./components/ComponenteConCss";
import ComponenteModules from "./components/ComponenteModules/ComponenteModules";
import Cards from "./components/Cards/Cards";
import Cards2 from "./components/Cards2";
// si nos dirigimos a app.css veremos que se está aplicado estilo a la clase contenedor, sin embargo, si nos dirigimos al componente otroComponente veremos que se desea añadirle un estilo a la clase contenedor desde otro archivo css(estilos.css), y esto afecta a todos los elementos que tengan la clase contenedor, sin importar que el css sea importando solo al componente otroComponente y no a este componente (App.js), osea que para que los dos componentes tengas estilso diferentes debemos tener nombre de clases diferentes para cada uno de ellos, lo que no es muy practico cuundo hay muchos componentes, para solucionar esto se puede usar el concepto de modulos css, para que cada componente tenga su propio css y no afecte a los demas componentes.
function App() {
  return (
    <>
      <div className="contenedor">
        <div>Esto es un div</div>
        <div>Esto es un div</div>
        <div>Esto es un div</div>
        <div>Esto es un div</div>
        <div>Esto es un div</div>
      </div>
      <OtroComponente />
      <ComponenteConCss />
      <ComponenteModules />
      <Cards />
      <Cards2 />
    </>
  );
}

export default App;
