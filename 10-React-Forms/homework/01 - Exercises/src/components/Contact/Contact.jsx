import React from 'react'
import './Contact.modules.css'


// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
const errors = {}
errors.name = !inputs.name?'Se requiere un nombre': errors.name
errors.email = !regexEmail.test(inputs.email)?'Debe ser un correo electrónico': errors.email
errors.message = !inputs.message?'Se requiere un mensaje': errors.message

return errors
}

export default function Contact () {

const [inputs, setInputs] = React.useState({
  name: '',
  email: '',
  message: ''
})

const [errors, setErrors] = React.useState({
  name: '',
  email: '',
  message: ''
})

React.useEffect(() => {
  setErrors(validate(inputs))
}, [inputs]
)
const handleChange = (event) => {
  const property = event.target.name
setInputs({
...inputs, 
[property]: event.target.value
})

setErrors(validate({
...inputs,
[property]: event.target.value
}
))
}

const handleSubmit = (event) => {
  event.preventDefault()
const valueErrors = []
Object.values(errors).forEach((value) => {
  if(value){
    valueErrors.push(value)
  }
})
console.log(valueErrors)
if(valueErrors.length){
  alert("Debe llenar todos los campos")
}
  if(!valueErrors.length){
   alert("Datos completos")
   setErrors(
    {
      name: '',
      email: '',
      message: ''
    }
   )
   setInputs({
    name: '',
    email: '',
    message: ''
   })
  } 
}

  return (
<div>
 <form onSubmit={handleSubmit}>
  <label htmlFor="name">Nombre:</label>
  <input className={errors.name && 'warning'} onChange={handleChange} value={inputs.name} type="text" name="name" placeholder='Escribe tu nombre...'/>
  {errors.name && <p className='danger'>{errors.name}</p>}
  <label htmlFor="email">Correo Electrónico:</label>
  <input className={errors.email && 'warning'} onChange={handleChange} value={inputs.email} type="text" name="email" placeholder='Escribe tu email...'/>
  {errors.email && <p className='danger'>{errors.email}</p>}
  <label htmlFor="message">Mensaje:</label>
  <textarea className={errors.message && 'warning'} onChange={handleChange} value={inputs.message} type="text" name="message" placeholder='Escribe tu mensaje...'/>
  {errors.message && <p className='danger'>{errors.message}</p>}
 <button type='submit'>
    Enviar
 </button>
 </form>

  </div>
  )
}
