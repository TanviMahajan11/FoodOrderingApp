import { useEffect, useState } from "react";

// check if user is online or offline ( internet connectivity )
const useOnlineStatus = () =>{

    const [status, setStatus] = useState(true);
    
    // Event Listerner - keep a track of when the user is online or offline 
    // As we want this to execute only once 
    useEffect( () =>{
        window.addEventListener("offline" , () =>{
            setStatus(false);
        })

        window.addEventListener("online" , () =>{
            setStatus(true);
        })

    }, []);

    return status;
};

export default useOnlineStatus;