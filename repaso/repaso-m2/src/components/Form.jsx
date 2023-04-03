
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions'

const validate = (state,errorsState) => {
// para el delay hago un errors propio de la funcion
const errors = {...errorsState}



 if(!state.name) errors.name = "falta name"
 else{errors.name = ""}
 if(!state.email) errors.email = "falta email"
    else{errors.email = ""}
if(!state.username) errors.username = "falta username"
    else{errors.username = ""}
if(!state.phone) errors.phone = "falta phone"
    else{errors.phone = ""}
if(!state.website) errors.website = "falta website"
    else{errors.website = ""}

return errors    
}


const Form = () => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        website: ''
    })

    const [errors, setErrors] = useState({

        name: '',
        email: '',
        username: '',
        phone: '',
        website: ''
    })

    useEffect(() => {
        setErrors(validate(form, errors))
    }, [])

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

       setErrors(
        validate(
            {
                ...form,
                [event.target.name]: event.target.value
            }
            , errors)
       ) 
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.addUser(form))
alert("usuario creado con exito")
setForm(
    {
        name: '',
        email: '',
        username: '',
        phone: '',
        website: ''
    }
)
    }

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange}/>
        <span>{errors.name}</span>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <span>{errors.email}</span>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        <span>{errors.username}</span>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} />
        <span>{errors.phone}</span>
        <label htmlFor="website">Website</label>
        <input type="text" name="website" value={form.website} onChange={handleChange} />
        <span>{errors.website}</span>
        <button type="submit" disabled={(errors.name||errors.email||errors.username||errors.phone||errors.website)? true: false} >Submit</button>
    </form>
)


}

export default Form