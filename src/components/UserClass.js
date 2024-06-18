// Class based Component is a normal javascript class
// Class based component is a class which has a render method which returns some piece of JSX

import React from 'react';
import User from './User';

class UserClass extends React.Component{
    // state variables 
    // Whenever a instance of class is created constructor is called and this is the best place to receive props and to create state variable
    // Creating a instance - loading a class based component on we page 

    // receiveing props using constructor 

    constructor(props){
        super(props);

        // state varibale is a big object and we have variables inside it 
        this.state = {
            count : 0,
            gitData : {
                name : "Dummy",
            }
        }
       // console.log( this.props.name + "Child Cons");
    }

    // Once Constructor and render is called this method is called 
    async componentDidMount () {

        const data = await fetch("https://api.github.com/users/TanviMahajan11");
        const json = await data.json();

       // console.log(json);
        this.setState({
            gitData : json,
        })
    }

    componentDidUpdate(){
        // console.log("CDU");
    }

    componentWillUnmount(){
        // will be called when the compoenet will be gome 
    }
    
    // redener will return some piece of JSX which will be displayed on UI 
    render() {
               // console.log(this.props.name  + "Child Render");

        return (
        <div className="user-card">
            <h2> {this.props.name} </h2>
            <h3> {this.props.loc} </h3>
            <h4> {this.state.gitData.login} </h4>
            <h4> count : {this.state.count } </h4>
            <button onClick={()=>{
                // NEVER MODIFY STATE VARIABLES DIRECTLY 
                // this.state.count =  this.state.count  + 1 

                // React gives us access to a function this.setState() we pass an object to this function

                // the component is re-rendering when the state variable is getting chnaged.

                this.setState({
                    count : this.state.count + 1
                });

            }} >
                CountInc
            </button>
        </div>
        );
    };    
};

export default UserClass;