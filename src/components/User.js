import { useEffect, useState } from "react";

// Functional Component is a normal javascript function which returns a piece of JSX
const User = (props) =>
{
    const [count, setcount] = useState(0);

    // called after every render
    useEffect (() =>{
        // api call 
    }, []);

   
    return (
        <div className="user-card">
            <h2> {props.name} </h2>
            <h3> Pune </h3>
            <h4> tanvioct11@gmail.com </h4>
            <h4> Count : {count} </h4>
            <button onClick={()=>{
                setcount(count + 1);   
            }}>
                 CountInc    
            </button>
        </div>
    );
};

export default User;
