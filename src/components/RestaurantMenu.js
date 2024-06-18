import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import Shimmer from "../Shimmer";
import OffersCard from "./OffersCard";
import MenuCard from "./MenuCard";
import { useState} from "react";

// Display the data of a particular restaurant 
const RestaurantMenu = () =>{

    const {resID} = useParams();

    const {RestroData, offersData, RestroMenu} = useRestroMenu(resID);
     
    const [showIndex, setShowIndex] = useState(1);

    // Shimmer UI: Render loading UI if RestroData is null
    if(RestroData === null) return <Shimmer/>

    // Destructuring restaurant details from RestroData
    const { cuisines , avgRating, areaName} = RestroData?.data?.cards[0]?.card?.card?.info || {};

    // data.cards[0].card.card.text

    //console.log(RestroData);
   
   // Render the restaurant menu component
    return (
    <div className="mx-60 my-10">
        <div className="w-full shadow-lg bg-red-50 p-4" >
            <h1 className="font-bold text-2xl text-left "> {RestroData?.data?.cards[0]?.card?.card?.text} </h1>    
            <div className="font-light flex justify-between">
                <div className="text-left">
                    <h5>{cuisines ? cuisines.join(", ") : null}</h5>
                    <h5> {areaName}</h5>
                </div>
                <div className="text-right">
                    <h5>{avgRating} </h5>
                </div>
            </div>
        </div>

        <div className="card-3-Menu mt-4">
            {/* Map through RestroMenu and render MenuCard component for each menu item */}
            {
                RestroMenu && RestroMenu.map( (menu, index) =>(
                    // controlled component 
                    <MenuCard 
                    menuDetails = {menu}
                    key ={menu?.card?.card?.title}
                    showItems={index === showIndex ? true : false}
                    setShowIndex = {
                        () => setShowIndex(index)
                    }
                    />
                ))
            }
        </div>

    </div>
    )
};

export default RestaurantMenu;


/*
<div className="card-2-offers">
    {
        offersData.map((offers) => (
            <OffersCard offerData={offers} />
        ))
    }
</div>

*/