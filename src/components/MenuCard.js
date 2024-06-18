/**
 * MenuCard Component:
 * - Displays a card containing menu details for a specific category.
 * - Receives menuDetails as props, containing information about the menu category.
 * - Renders the category title along with the count of items (if items are present).
 * - Maps through itemCards and displays individual menu items with name, price, and image.
 */

import ItemList from "./ItemList";
import {useState} from "react";

const MenuCard =(props) =>{

    // Destructure menuDetails from props
    const {menuDetails, showItems, setShowIndex} = props;
    console.log(" show items " + showItems );
    console.log(menuDetails)

    // Destructure itemCards and title from menuDetails
    const {itemCards, title} = menuDetails?.card?.card;

    // const [showItems, setshowItems] = useState(false);

    const handleClick = () =>{
        // toggle feature 
        setShowIndex();
    };

    // Base URL for menu item images
    return (
        <div className="Menu-card">
            {/* Render category title and item count (if items are present) */}
            { itemCards && itemCards.length > 0 &&(
                <div className="w-full shadow-lg bg-gray-50 p-4 mb-5 ">
                   <div className="flex justify-between cursor-pointer" onClick = {handleClick} > 
                        <span className="font-bold text-lg">
                            {title} ({itemCards.length})   
                        </span>
                        <span>
                            ⬇️
                        </span>
                    </div> 
                    {
                        showItems && <ItemList key = {title} items ={itemCards} ></ItemList> 
                    }
                    
                </div>   
                
                
            ) }
        </div>
    )
};

export default  MenuCard; 