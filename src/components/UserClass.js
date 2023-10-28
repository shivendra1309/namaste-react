import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"aatma",
                location:"defualt"
            },
        };
    }


    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shivendra1309");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        });
        
    }


    render() {
        const {name, login, avatar_url} = this.state.userInfo;
    return (
        <div className="user-card">
            <img src={avatar_url}></img>
            <h1>{name}</h1>
            <h1>{login}</h1>
            
        </div>
    );
    }

}
export default UserClass;