import Cards from './Cards';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import {getUsers} from './../redux/actions'


 // SE PUEDE USAR COONNECT CON mapStateToProps Y mapDispatchToProps
    


 const Home = (props) => {
 useEffect(() =>{
 
    props.getUsers()

 },[])
    return (
        <div>
        <h1>Home</h1>
        <p>Esta es la página de inicio Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti perferendis officiis assumenda iste. Accusantium perferendis
             rerum quam qui mollitia magni eum, illum corporis facilis reprehenderit, blanditiis molestiae labore repudiandae!</p>
             <hr />
             <Cards users={[...props.users,...props.myUsers]}/>
        </div>
    );
    }

    const mapStateToProps = (state) => {
        return {
            users: state.users,
            myUsers : state.myUsers
        }

    }

    const mapDispatchToProps = (dispatch) => {
        return {
            getUsers: () => dispatch(getUsers())
        }
    }  

export default connect(mapStateToProps, mapDispatchToProps)(Home);