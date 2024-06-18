import React, { useEffect , useState} from "react";
import  ReactDOM  from "react-dom/client";
import Error from "./components/Error";
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// Inorder the app.js to use header component we need to import the header compoenent 
import Header from "./components/Header"
import Body from "./components/Body"
import Contacts from "./components/Contacts";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";

import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

// Chunking
// Code Splitting
// Dynamic Bundling

// lazy Loading - when app will load intilly it will not load the code for grocessay intaillay . When i go to that page then only it should laod the page 
// On Demand Loading
// Dynamic import 

// lazy is a function given from react 
// named export

import { lazy , Suspense} from "react";
const  Groccery = lazy (()=> import("./components/Groccery") );

const AppLayoutComponent = () =>{

  // Authentication Data 
  const [userInfo, setuserInfo] = useState();

  useEffect(() =>{
    //make api call

    const data = {
      name : "Tanvi Mahajan"
    }

    setuserInfo(data.name);

  }, [])

  return (
      <Provider store = {AppStore}>
        <UserContext.Provider value ={{loggedUser  : userInfo , setuserInfo} }> 
            <div className = "App">
                  <Header/>
                  <Outlet/>
            </div>
        </UserContext.Provider>
     </Provider>
  );
};

// passing configuration(information that will define that what will happen on a specific route (path) eg /about  )
// it Takes a lists of paths 
// if my path is "/about" load my element About Component 
const appRouter  = createBrowserRouter([
  {
    path :"/",
    element : <AppLayoutComponent/> ,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "/contacts",
        element :<Contacts/>,
      },
      {
        path : '/restaurant/:resID',
        element : <RestaurantMenu/>,
      },
      {
        path : '/groc',
        element :<Suspense fallback = {<h1> Loading !!</h1>} > <Groccery/> </Suspense>,
      },
      {
        path : '/cart',
        element : <Cart/>
      }

    ],
    errorElement : <Error/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayoutComponent/>);
root.render(<RouterProvider router = {appRouter}> </RouterProvider>);





