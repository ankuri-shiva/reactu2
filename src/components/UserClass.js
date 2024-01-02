import React from "react"
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props)
    }
    render() {
        const {name, location} = this.props
        return(
            <div>
                <h3>name : {name}</h3>
                <h4>location : {location}</h4>
                <div>
                    <UserContext.Consumer>
                        {({userData}) => <h1>{userData}</h1>}
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }
}

export default UserClass