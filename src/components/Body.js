// import { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import {ResList}  from '../utils/apidata';
// import Shimmer from "../Shimmer";

// import RestroCard from "./RestroCard";
// import {withLabel} from "./RestroCard";

// import UserContext from "../utils/UserContext";
// const Body = () =>{

//     // Local State Varibale 
//     // first parameter is the 
//     // Second parameter is function which will be used to update list
//     const [RestaurantDataList, setListOfRestro] = useState([]);
//     const [FilteredRest, setFilteredRest] = useState([]);

//     // to track value of serach value we need a local state variable 
//     const [searchTextValue, setsearchTextValue] = useState("");

//     const RestCardWithOffer = withLabel(RestroCard);
    
//     const {loggedUser , setuserInfo} = useContext(UserContext); 

//     // fetch is a superpower given by browser it will fetch data from api
//     // fetch will return a promise 
    
//     const fetchData = async () =>{
//       const data = await fetch(

//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

//       );

//       //         "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.5204303&lng=73.8567437&carousel=true&third_party_vendor=1"

      
//       //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

//       const jsonapiData = await data.json();

//       console.log("JSON API DATA")
//       console.log(jsonapiData);

//       // was showing an error of data fatching because sometime data coming from cards[1] sometime cards[2] and different on other times so me make a function and check which value of i gives data in cards[i]
//       async function checkJsonData(jsonData) {

//         for (let i = 0; i < jsonapiData?.data?.cards.length; i++) {

//           // initialize checkData for Swiggy Restaurant data
//           let checkData = jsonapiData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//           // if checkData is not undefined then return it
//           if (checkData !== undefined) {
//             return checkData;
//           }
//         }
        
//       }
//       const resData = await checkJsonData(jsonapiData);
//       setListOfRestro(resData);
//       setFilteredRest(resData);
//       console.log("RES DATA");
//       console.log(resData);

//       // console.log("RESRestaurantDataList");
//       // console.log(RestaurantDataList);
//     }
    
//     useEffect(
//         () =>{
//           console.log("This Callback useEffect Function will be called after the body component is rendered  ");
//           fetchData();
//         },
//         []
//     );

//     const status = useOnlineStatus();
//     if(status === false)
//     {
//       return <h1> LOoks like you are offline !! check internet conection</h1>
//     }
 
//     // Conditional Rendering 
//     //Putting Shimmer instead of loaidng page 
//     // if(RestaurantDataList.length === 0){
//     //   return <Shimmer/>;
//     // }

//     // If RestaurantDataList is empty then return shimmer else return tjis
//     return RestaurantDataList.length === 0 ? <Shimmer/> : (
      
//       <div className="body">
//           <div className="flex justify-center">
//               <button className="m-10 bg-fuchsia-50 p-2 shadow-sm" onClick = { ()=>{
 
//                     // now i cannot upadte data like this for state variable 
//                     //  RestaurantDataList = RestaurantDataList.filter(
//                     //   (restuarant)=> restuarant.info.avgRating > 4
//                     //   );   
//                     //   console.log(RestaurantDataList);   

//                     // We need to call setListOfRestro and pass the new value to it 
//                     const filterredkist = RestaurantDataList.filter(
//                         (restuarant)=> restuarant.info.avgRating > 4.5
//                         );   
//                     setFilteredRest( filterredkist  );
//                   }
//               }>
//                 Top Rated Restro 
//               </button>

//               <div className="m-10  bg-fuchsia-50 p-2 shadow-sm ">
//                 <input type ="text" 
//                   className="border-1 p-2" 
//                   value= {searchTextValue}
//                   onChange = { (e) => {
//                       setsearchTextValue(e.target.value)
//                   }}/>
//                 <button
//                     className="p-4" 
//                     onClick={()=>{
//                     // filter the text and update the UI
//                       const filterredkist = RestaurantDataList.filter(
//                         (restuarant)=> restuarant.info.name.toLowerCase().includes(searchTextValue.toLocaleLowerCase())
//                         ); 

//                     setFilteredRest(filterredkist);
//                     //console.log(searchTextValue);
//                 }}>
//                   Search </button>
//               </div>
//               {/* <div className="m-10">
//                 <label>Username</label>
//                 <input className="border border-black p-2" 
//                   value ={loggedUser}
//                   onChange={ (e) => setuserInfo(e.target.value)

//                 }></input>
//             </div> */}
//           </div>
      
         
//         <div className = "flex flex-wrap p-10 hover space-x-4 space-y-4">
//             {
//               FilteredRest.map((restuarant)=> (
//                 <Link
//                   key = {restuarant.info.id}  
//                   to= {"/restaurant/"+ restuarant.info.id}>
                  
//                   <div className="border-transparent h-full hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450 bg-pink-100">

                  
//                   {/** If restaurant is promoted then print promoted */
  
//                   restuarant.info.isOpen === true ? 
//                   (<RestCardWithOffer resData = {restuarant}/>) :
//                   (<RestroCard  resData = {restuarant}/>)
//                   }
//                    </div>
//                 </Link>
                
//             ))
           
            
//             }
//         </div>
//       </div>
//     );
//   };

//   export default Body;








import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "../Shimmer";
import RestroCard from "./RestroCard";
import { withLabel } from "./RestroCard";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [RestaurantDataList, setListOfRestro] = useState([]);
    const [FilteredRest, setFilteredRest] = useState([]);
    const [searchTextValue, setsearchTextValue] = useState("");
    const [message, setMessage] = useState("");
    const [isShowingTopRated, setIsShowingTopRated] = useState(false);

    const RestCardWithOffer = withLabel(RestroCard);
    const { loggedUser, setuserInfo } = useContext(UserContext);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const jsonapiData = await data.json();

        async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonapiData?.data?.cards.length; i++) {
                let checkData = jsonapiData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                if (checkData !== undefined) {
                    return checkData;
                }
            }
        }

        const resData = await checkJsonData(jsonapiData);
        setListOfRestro(resData);
        setFilteredRest(resData);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const status = useOnlineStatus();
    if (status === false) {
        return <h1>Looks like you are offline!! Check internet connection</h1>
    }

    const handleTopRatedClick = () => {
        if (isShowingTopRated) {
            setFilteredRest(RestaurantDataList);
            setMessage("");
            setIsShowingTopRated(false);
        } else {
            const filteredList = RestaurantDataList.filter(
                (restaurant) => restaurant.info.avgRating > 4.0
            );
            setFilteredRest(filteredList);
            setMessage("✨ The top-rated restaurants are ✨");
            setIsShowingTopRated(true);
        }
    };

    const handleSearchClick = () => {
        const filteredList = RestaurantDataList.filter(
            (restaurant) => restaurant.info.name.toLowerCase().includes(searchTextValue.toLowerCase())
        );
        setFilteredRest(filteredList);
        setMessage(`🔍 The results for "${searchTextValue}" are`);
        setsearchTextValue("");
        setIsShowingTopRated(false);
    };

    return RestaurantDataList.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex justify-center space-x-4 mb-8">
                <button className="m-10 bg-purple-600 text-white p-3 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50" onClick={handleTopRatedClick}>
                    {isShowingTopRated ? "All Restaurants" : "Top Rated Restro"}
                </button>

                <div className="m-10 bg-white p-2 rounded-lg shadow-md flex space-x-2">
                    <input type="text"
                        className="border-2 border-gray-300 p-2 rounded-l-lg focus:outline-none focus:border-purple-500"
                        value={searchTextValue}
                        onChange={(e) => setsearchTextValue(e.target.value)} />
                    <button
                        className="bg-purple-600 text-white p-3 rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                        onClick={handleSearchClick}>
                        Search
                    </button>
                </div>
            </div>

            {message && <div className="text-center text-2xl font-bold mb-8 text-purple-600">{message}</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
                {FilteredRest.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurant/" + restaurant.info.id}>
                        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white h-80">
                            {restaurant.info.isOpen ?
                                (<RestCardWithOffer resData={restaurant} />) :
                                (<RestroCard resData={restaurant} />)
                            }
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
