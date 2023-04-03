
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Detail from "./components/Detail";
import { useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {

  const {pathname} = useLocation();


  return (
    <>
    {/* para quitar la navBar de alguna dirección en especifico se utiliza el useLocation */}
    {pathname !== "/" && <NavBar/> } 
    <Routes>
      {/* <Route path="/">
        <div className="navBar">
          <h2>Esto es el navbar</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <hr />
        </div>
      </Route> */}

      <Route  path="/" element={<Home/>} />
      <Route  path="/users" element={<Users/>}/>
      
      <Route path="/users/:userId" element={<Detail/>} />

    </Routes>


      {/* <Route path="/home">
        <Home name="Alex" />
      </Route> */}

      {/* otra forma de definir el componente que deseamos mostrar */}
      {/* <Route path="/home" children={() => <Home name="mrHache"/>} /> */}

      {/* otra forma de definir el componente que deseamos mostrar, en este caso no se pueden pasar props */}
      {/* <Route path="/home" component={Home} /> */}

      {/* otra forma de definir el componente que deseamos mostrar en este caso, en num se guarda el valor que haya despues de "/", num se va a guardar en un "unObjeto" (será una propiedad de dicho objeto)*/}

      {/* <Route path="/home/:num" render={(unObjeto)=><Home name="MrHache" unObjeto={unObjeto}/>} />
    </> */}

   

      {/* <Route
      // se puede usar esta forma para dirigirse a una direccion que me entreguen por match, sin embargo, hay una manera más sencilla, y es utilizando un hook llamado useParams
        path="/users/:userId"
        render={({match}) =><Detail userId={match.params.userId}/>}
      /> */}
  
    </>
  );
}

export default App;
