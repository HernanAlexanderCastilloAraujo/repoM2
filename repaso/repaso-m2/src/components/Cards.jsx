import React from "react";
import Card from "./Card";


class Cards extends React.Component {
constructor(props) {
    super(props);
}


    render() {
        return (
            <div>
                {this.props.users.map((user) => {
                    const {id, name, email} = user;
                    return <Card id={id} name={name} email={email} key={id} />
                })}
            </div>
        )
    }
}

export default Cards;