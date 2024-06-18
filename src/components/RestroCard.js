// import { CDN_URL } from "../utils/constants";

// // const styleCard ={
// //     backgroundColor : "pink"
// //   };
  
// const RestroCard = (props) =>{

//     const {resData } = props;
  
//     const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime} = resData?.info 
  
//   return (
//     <div className= "w-40 h-50 text-center"  > 
//       <img className = "rounded-lg w-25 h-25 object-center" src = {CDN_URL + cloudinaryImageId }/>
//       <h3 >{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4> {avgRating}</h4>
//     </div>
//   );
//   };


//   // Higher Order component
//   // It takes input - RestroCard and it returns => RestaurantCard Promoted

// export const withLabel = (RestroCard) =>{

//   // returning  a new component 
//   return (props) =>{
//     // componeny is returning some jsx
//     return (
//       <div>
//         <label className="absolute bg-black text-white m-2 p-2 rounded-lg"> Open </label>
//         <RestroCard {...props}/>
//       </div>
//     );
//   };
// };


//   export default RestroCard;


import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resData?.info;

    return (
        <div className="w-full h-full text-center p-4">
            <img className="rounded-lg w-full h-40 object-cover mb-4" src={CDN_URL + cloudinaryImageId} alt={name} />
            <h3 className="font-bold text-lg">{name}</h3>
            <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
            <h4 className="text-yellow-500 font-semibold">Rating: {avgRating}</h4>
        </div>
    );
};

// Higher Order component
export const withLabel = (RestroCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestroCard {...props} />
            </div>
        );
    };
};

export default RestroCard;
