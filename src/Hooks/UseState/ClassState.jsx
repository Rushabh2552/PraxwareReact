import React from "react";

class ClassState extends React.Component{

    constructor()
    {
        super();
        this.state= {
            num: 1,
            name: 'Rushabh'
        }
    }

    render(){
        return(
        <div>
            <h1>{this.state.num}</h1>
            <button onClick={()=> this.setState({num: this.state.num + 1})}>Change</button>
            <h1>{this.state.name}</h1>
            <button onClick={()=> this.setState({name: 'Modi'})}>Update name</button>
        </div>
        )
        
    }
}

export default ClassState; 