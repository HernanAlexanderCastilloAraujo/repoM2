import React from "react";
import {useDispatch} from "react-redux";
import enviarForm from "../../redux/actions/actions";

const ContactUs = () => {

const dispatch = useDispatch()


  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const handleInput = (event) => {
const {name, value} = event.target

setForm({
  ...form,
  [name]: value
})
  }

  const handleSubmit = (event) => {
event.preventDefault()
    dispatch(enviarForm(form))

   setForm({
 nombre: "",
  email: "",
  asunto: "",
  mensaje: "",
   }


  
   )
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input onChange={handleInput} name="nombre" value={form.nombre} />
        <label htmlFor="email">Email: </label>
        <input onChange={handleInput} name="email" value={form.email}/>
        <label htmlFor="asunto">Asunto: </label>
        <input onChange={handleInput} name="asunto" value={form.asunto} />
        <label htmlFor="mensaje">Mensaje: </label>
        <input onChange={handleInput} name="mensaje" value={form.mensaje}  />
        <button type="submit" >Enviar</button>
      </form>
     
    </div>
  );
};

export default ContactUs;
