
import {Component} from 'react';

import UserClass from "./UserClass";
import User from "./User";


import UserContext from '../utils/UserContext';

// or we can destructor it 
// import { Component } from "react";

class About extends Component{

    constructor(props)
    {
        super(props);
        console.log("Parent Cons");
    }

    componentDidMount () {
        console.log("Parent componentDidMount");
    }

    render() {

        console.log("Parent Render");
        return (
        <div className="about-component">
                <h1> This is Food Ordering App Created by me</h1>
                <h2> About CLASS BASED Component </h2>
                {<UserClass name = {"Tanvi Mahajan class"} loc = {"Chico"}/>}
                {<UserClass name = {"Soham Mahajan class"} loc = {"Pune"}/>}
                <h2> Func BASED Component </h2>
                <div>
                    <UserContext.Consumer>
                        {
                            ({loggedUser}) => <h1 className='font-bold'>{loggedUser}</h1>
                        }

                    </UserContext.Consumer>
                </div>
                {<User name = {"Tanvi Mahajan "}/>}
        </div>
    )
    }
};

export default About;

// Functional Compoenent 
// const About = () =>{
//     return (
//         <div className="about-component">
//                 <h1> This is Food Ordering App Created by me</h1>
//                 <h2> CLASS BASED Component </h2>
//                 {<UserClass name = {"Tanvi Mahajan class"} loc = {"une"}/>}
//                 <h2> Func BASED Component </h2>
//                 {<User name = {"Tanvi Mahajan "}/>}
//         </div>
//     )
// };

// export default About;