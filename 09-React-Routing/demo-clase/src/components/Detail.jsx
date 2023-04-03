import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const Detail = () => {

    const [user, setUser] = useState({})
    const {userId} = useParams()
    const history = useNavigate()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(err => console.log(err))
    },[])

    return (
        <div>
            <button onClick={() => history.goBack()}>Volver</button>
            <button onClick={() => history.push("/users")}>Ir a users</button>
            <button onClick={() => history.push("/")}>Ir a home</button>
            <h1> este es el detail del usuario {user.name}</h1>
            <h3>Nombre: {user.name}</h3>
            <h4>Email: {user.email}</h4>
            <h4>Teléfono: {user.phone}</h4>
            <h4>{user.website}</h4>
        </div>   
    )
}

export default Detail