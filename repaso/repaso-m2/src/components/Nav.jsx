import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
<div>
        <Link to="/">
        <p>HOME</p>
        </Link>
   
        <Link to="/about">
        <p>ABOUT</p>
        </Link>
        <Link to="/form">
        <p>FORM</p>
        </Link>
</div>
    
    )
        
}



export default Nav