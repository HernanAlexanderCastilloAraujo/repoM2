import "./App.css";
import { useEffect, useState } from "react"; // usamos useState para manejar el estado de los inputs y useEffect para validar el formulario en el momento que hay un cambio en el estado 
import style from "./App.module.css";
import validateForm from "./utils/validateForm"; // importamos la funcion validateForm que valida el email del formulario

function App() {
  //// Manejo de estado de los inputs con useState por separado, luego se unifican en un objeto con useState, en este caso solo se hace como un ejemplo, pero en la practica se recomienda manejar el estado de los inputs en un objeto con useState
  // const [email, setEmail] = useState(""); 
  // const [password, setPassword] = useState("");

  ////manejo del estado del imput email con useState
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
 
//   }

////manejo del estado del imput password con useState
// const handlePasswordChange = (event) => {
//     setPassword(event.target.value);

//   }


// estado del formulario con useState unificado en un objeto

const [form, setForm] = useState({
    email: "",
    password: "",
})

// estado de los errores con useState unificado en un objeto

const [errors, setErrors] = useState({
    email: "",
    password: "",
})

// cuando ocurre un cambio en el estado del formulario se ejecuta la funcion validateForm que valida el email del formulario, en la funcion tambien se debería validar los demás inputs del formulario
useEffect(() => {
  validateForm(form, setErrors, errors);
}, [form])


// cuando sucede un cambio en el estado de los inputs se ejecuta la funcion handleFormChange que actualiza el estado del formulario con el valor del input que se esta modificando

const handleFormChange = (event) => {
    setForm({
        ...form,
        [event.target.name]: event.target.value, 
    })

}

// funcion que se ejecuta cuando se envia el formulario, en este caso solo muestra un mensaje por consola y limpia el formulario
const submitHandler = (event) => {
    event.preventDefault();
    alert("Se acaba de enviar el formulario con un metodo POST");
    console.log(form);
    setForm({
        email: "",
        password: "",
    })
}
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          {/* si errors.email tiene algo, el siguiente imput va a tomar el style.error, igualmente lo hace el imput de password */}
          <input className={errors.email && style.error} type="text" name="email" autoComplete="off" onChange={handleFormChange} value={form.email}></input>
          <br/>
       <span>{errors.email ? errors.email:""}</span>

        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className={errors.password && style.error} type="text" name="password" value={form.password} onChange={handleFormChange}></input>
          <span>{errors.password ? errors.password:""}</span>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
