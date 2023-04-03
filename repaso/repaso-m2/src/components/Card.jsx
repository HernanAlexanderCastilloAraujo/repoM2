import React from "react";
import {Link} from "react-router-dom";

class Card extends React.Component {
constructor(props) {
    super(props);
}

    render() {
        return (
            <div>
                <hr />
                <Link to={`/detail/${this.props.id}`}>
                <h1>{this.props.name}</h1>
                </Link>
              

                <p>{this.props.email}</p>
                <hr />
            </div>
        )
    }


}

export default Card;