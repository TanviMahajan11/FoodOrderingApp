import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Cart from "./Cart";

const ItemList = ({items}) =>{

    const url =  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";
    let price = 0;

    const dispatch = useDispatch();

    return (
        <div>
            {/* Map through itemCards and render individual menu items */}
            {
                items && items.map( (itemMenu) =>(
                    <div className="Menu-item p-2 m-2 border-b-2 border-grey-400 flex justify-between">
                        <div className= "w-9/12 ">
                            <h3 className="font-bold">{itemMenu?.card?.info?.name } </h3>
                            <h4 className="text-sm"> $ { itemMenu?.card?.info?.defaultPrice ? itemMenu?.card?.info?.defaultPrice / 100 : itemMenu?.card?.info?.price/100} </h4> 
                            <h4 className="font-light text-sm mt-3"> {itemMenu?.card?.info?.description }</h4>       
                        </div>
                        <div className= "w-2/12 ">
                            <div className="absolute">
                                <button className="bg-green-100 font-bold shadow-lg text-center p-2" onClick={ () =>{
                                    // Dispatch an action
                                    // for dispathcing we have a hook called useDispatch
                                    console.log("cicked add");
                                    dispatch(addItem(itemMenu));
                    
                                }}> ADD </button>
                            </div>
                            <img className= " rounded-lg" src={url + itemMenu?.card?.info?.imageId} alt={itemMenu?.card?.info?.name} />
                            
                        </div>
                    </div>
                ))
            }
            </div> 
    )
};

export default ItemList;