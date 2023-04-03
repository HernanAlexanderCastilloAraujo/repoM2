import React from "react";
import Contador from "./Contador";
import ContadorHooks from "./ContadorHooks";


// contador es un componente de clase y utiliza es objeto state como estado..., contadorHooks es un componente funcional y utiliza el hook useState para manejar el estado

class Home extends React.Component {
constructor(props) {
super(props);
}
render() {
    return(
        <>
        <h1>EJEMPLO</h1>
       
<Contador></Contador> 

<hr />
<ContadorHooks></ContadorHooks>
        </>
    )
}

}
export default Home;