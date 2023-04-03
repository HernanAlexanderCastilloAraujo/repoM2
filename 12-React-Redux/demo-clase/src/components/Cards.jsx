import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../redux/actions';

// yo quiero que este componente cuando se monte pida informacion sobre unos usuarios, estos usuarios van al estado global, y desde el estado global, quiero leerlos para mapearlos y motras Cards

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <>
                <h1>Este es el contenedor</h1>
                {this.props.users.map((user) => {
                    return (
                        <div>
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                            <h3>{user.website}</h3>
                        </div>
                    )
                })}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Cards);