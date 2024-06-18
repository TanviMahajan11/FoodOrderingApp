import { useEffect, useState } from "react";
import {MENU_URL} from '../utils/constants'


// This hook will fetch data for a particular restro (resId)
const useRestroMenu = (resID) =>{

     /**
     * 1) RestroData: Holds the data fetched from the restaurant menu API.
     *      - This state variable (RestroData) is initialized with an empty array ([]).
            - It is used to store the data fetched from the restaurant menu API.
            - The setRestroData function is used to update the state when new data is received.
       2) offersData: Holds offers data from the fetched API response.
       3) RestroMenu: Extracted menu data from the fetched API response.
     */

    const [RestroData , setRestroData] = useState([]);
    const [offersData, setoffersData] = useState([]);
    const [RestroMenu, setRestroMenu] = useState([]);

    const URL  = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=";

    useEffect(()=>{
        fetchMenu();
    },[]);

    // The fetch function is used to make a network request to the specified API endpoint.
    const fetchMenu = async () =>{
        // Step 1: Fetch menu data from the specified API endpoint
        const data = await fetch(URL+resID);

        // Step 2: Convert the fetched data to JSON format
        const jsonData = await data.json();

         // 3.1: Update RestroData state with the entire JSON data
        setRestroData(jsonData);

        console.log("MENU JSON DATA ");
        console.log(jsonData)


        // 3.2: Extract offers data and update offersData state
        setoffersData(jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);


        // data.cards[4].groupedCard.cardGroupMap.REGULAR.cards

        // 3.3: Extract menu data and update RestroMenu state
        // setRestroMenu(jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


        // Loop through cards and extract menu data dynamically
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            const menuData = jsonData?.data?.cards[i]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            if (menuData) {
                setRestroMenu(menuData);
                break;
            }
        }
    };

    // console.log("RESTRO MENU");
    // console.log(RestroMenu);
    return {RestroData, offersData, RestroMenu};
} ;

export default useRestroMenu;