
# Chapter 2 - Igniting Our App

  # We want to bundle files to put the app into production means to optimization
  That means we need to 
    - optimize our code 
    - minify our code
    - if we have 1000 files then we need to bundle files
    - remove comments 
    - if we have lot of images then we want to optimze images 

  When we use npx create react app it already ignites our app
  
  How to create your own create react app ?

  # NPM ->
      It manages packages (package manager) it will manage all the package which we will install in our system 
      It behaves like node package manager but not a node package manager
      It is everyting but not node package manager 

      It is a standard repository for all the packages
      All packages , libraires, utilities we need come from npm

 
  npm init - when we did npm init package.json was created
  Jest For testing 

  Package.json -> configuration for npm. It keeps a track of what version is of that package is installed in our sysyem 

  Why do we need this file ?
  Somtimes these packages are also known as dependencines.
  Npm will take of what is the version of some package and all.
  It will take care in this package.json file 

  Dependencies :
        1) Bundler - when we have normal html css files our whole code needs to be minimized or optimised or cleaned or compressed. A bundler will help us do this
                    Web pack parcel Wheat are bundler
                    It packages our app properly so that we can put it to production.
                    
  Parcel bundler - library

  Dependencies 
    two types of dependencies
    1) Dev dependency - it generally required in developmenet phase 
    2) Normal dependency - they are used in production also

  npm install -D parcel ( We tell npm that we want parcel as a Dev Dependency)


  "parcel": "^2.11.0"  
  Suppose a new version of parcel is realeased  2.11.2 -> minor update 2.12 -> major update
  ^ -> caret -> parcel will automatically upadte minor version
  ~ tilde -> parcel will automatically upadte major version

  // package.lock.json file came when we installed parcel dependencies
  package.lock.json -> keeps a track of exact version of package
  package.json keeps a track of approx version while package.lock.json  keeps a track of exact version

  How many package.json we have ? 
  1 wrong 
  Every Dependency have its own package.json so we have many package.json files 


  // Node modules - all the code we fetched from npm for parcel or any other package ( kinda a database contains actual data of that dependency  ) 
          It is a collection of dependencies.
  // Transitive dependency -
  Our project was depenednt on parcel but parcel itself is dependent on other packages too 
  Hence when we install parcel , parcel says npm please install other packages also like it takes help of babel, browserslist, etc

  How do npm know what dependencies parcel need ?
  --> Parcel has its own package.json file , and it has its own dev and normal dependencies mantained in that file .
  Hence we we 
  This is called as Transitive Dependency 

  Node modules file is large so we 
  
  gitignore contains all the files which i dont want to push in github

  // if we have package.json and package-lock.json we can recreate our node modules by npm install
  Whatever we can regenerate dont put it in git

  -- Ignite our app using parcel

  npx parcel index.html -> created a server and assigned a port 1234 and hosted our app on server 
 
  npx -> executing a package 
 
  npx vs npm 


  # Getting React into to our App
  1) First way using cdn Links
    <!-- CDN Links 

        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

        We are importing this react code into our project 

        first file --- ( core of react , core react framework algoritm )  React code written in plain javascript
    
        second file is -- react library which is useful for DOM operations (bridge between React and DOM)
    
    -->

  not a good way to do why ?

  Fetching from cdn is a costly operation. 
  if i fetch from cdn it will make a network call from unpkg.com and IT GET REACT FROM UNPKG.COm

  Second, today react@18 is there tomorrow if react@19 came in we have to keep chaning the links 
  
  2) Second way is using npm

  npm install react

  If i already have react in my node modules it will be a easy to use react inside our code 
  We dont want to make a another network call to get react we will have it already in our node modules  .

  # React is making our app fast ? How ? 
    --> React uses a lot of libraries. Parcel is one of the library which helps to make our app fast

  # Parcel 
    - Created a Dev Build 
    - Local Server ( Host your app on server )
    - HMR Hot Module Replacement ( Refershing page automatically ) suppose you make change to title it will automatically change 
    - Parcel uses a File Watching Algorithm - Written in c++
        As soon as you save it built it again and every time the time to build is reduced. 
    - Parcel gives Faster Builds as it is doing caching ( parcel - cache files )
    - Image Optimization ( most expensive thing is to load images )
    - Minification 
    - Bundling
    - Compress 
    - Consistent Hashing ( keeps a track of )
    - Code Splitting 
    - Differential Bundling ( Means when your app will be hosted , ur app can be opened inside browser (safari, chrome, or older versions too) Parcel takes care of this that it gives you support on older browsers too)
    - Error handling - good error suggessions 
    - Diagonistics
    - now app is on Http ->> host on https
    - Tree Shaking ( if we have 1000 functions and we are just using 4 5 , parcel will tree shake then it will remove unused )
    - Diffrent build for dev and production bundles ( production build  takes little more time than development . production build requires more optimization )

Development Build 
    npx parcel index.html

    This npx command means we are executing npm package parcel with a source file "index.html"

Production Build :
    npx parcel build index.html

    ( You will get error as in package.json file has a main file as App.js but we are specifying index.html as main file in our npx command )

    When u build a production ready app it will put all the files in dist folder ( optimized files )

# dist Folder
   When you do " npx parcel index.html " it generates a development build of your project and it hosts into 1234 and it put its into dist folder. Using Parcel cache and dist we can see the contents on server.


parcel cahche , dist and node modules are automatically generate when you built it 

Read : https://parceljs.org/

Eg : PM MODI ( REACT ) AMIT SHAH -> Parcel 

# What is `browserlists`

How to make our app compatibale With other browser versions ?
    - There is a package called browserlist. We get this package automatically when we install parcel.
    - Browserlists makes our code compatible for lot of browsers 
    - it will take an array of browsers 

Defination: browserslist is a configuration file that defines which browsers and their versions your project should support. This helps ensure that your web application works consistently across different browsers.

Go to Link : https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z (A page to display compatible browsers from browserslist string)

In package.json add

    "browserslist" : [
        "Last 2 Chrome versions",
        "Last 2 Firefox versions" ]

    - this means parcel will make sure that our app will 100% support these 2 browser versions and it may or may not work on other browsers

we can congigure for our app to work for 99% of usa (go to query composition)



Theory Assignment 

# Theory Assignment:
● - What is `NPM`?
● - What is `Parcel/Webpack`? Why do we need it?
● - What is `.parcel-cache`
● - What is `npx` ?
● - What is difference between `dependencies` vs `devDependencies`
● - What is Tree Shaking?
● - What is Hot Module Replacement?
● - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
own words.
● - What is `.gitignore`? What should we add and not add into it?
● - What is the difference between `package.json` and `package-lock.json`
● - Why should I not modify `package-lock.json`?
● - What is `node_modules` ? Is it a good idea to push that on git?
● - What is the `dist` folder?
● 
Read about dif bundlers: vite, webpack, parcel
● Read about: ^ - caret and ~ - tilda
---------------------------------------------------------------------------------------------
# Chapter 3 - Laying the Foundation
---------------------------------------------------------------------------------------------

We are writing code for humans and machines 

# Start by Runnung Script npm start 
Development Build ( to run our app )
    npx parcel index.html

Rather than doing it again and again we will create a script inside package.json to which will run the command in easy way.

In package.json add 
 "scripts": {
    "start" : "parcel index.html" ,
    "build": "parcel build index.html",
    "test": "jest"
  },

Run them ->
    # Start Command 
            npm run start  
            or 
            npm start

    The start script execute this command 
    npm run start will execute the package parcel index.html bcz we have configured it in package.json

    # Build Command 
            npm run build  ( but you cannot do npm build )

Note that npx == npm run

# React Element 
    It creates a React element and returns us an object which is then converted into HTML and inserted into DOM with the help
    of ReactDOM.

    // when we write React.createElement => it creates an object => render is taking the object, converting object to HTMLElement and push (replace in div root ) it to browser

    //  React Element using REACT  

    const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, 
    "Hello WOrld From React"
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));

# JSX
Writing code using reactElement can be too chaos
    - Javascript syntax to create react elements
    - JSX is not a part of react 
    - We can write react without JSX.
    - JSX makes life of developer easy.
    - JSX ( html and javascript is merged together )
    - JSX is not HTML inside Javascript

    JSX is HTML like Syntax or XML like Syntax but not HTML or XML

Link : https://www.geeksforgeeks.org/reactjs-jsx-introduction/?ref=roadmap

// React Element using JSX  

const jsxHeading = <h1 id ="heading" className="head"> HIi using JSX </h1>;


// jsxHeading is a reactElement (object)
const jsxHeading = <h1 id ="heading" > HIi using JSX </h1>;

Javascript is a code which JS Engines executes. 
JS Engine will not understand JSX 

The above code is not a valid javascript. 
Then how is this code working ??
Parcel is taking care of this. 

Code --> the code is transpiled before going to JS Engine --> JS Engine

JSX (transpiled (converted to code which react or browser can understand ) before it reaches JS Engine)

Parcel(manager) is transpiling the code with the help of package called Babel.
 
// JSX code => ( Babel is converting JSX to React.createElement ) => React.createELement is a JS Object => HTMLElement (render)

# Babel 
    - Babel is transplier (it transpiling the code )
    - It converts the JSX code to React code which browser (JS Engine) can understand
    - Babel is Javascript Complier 

Website : https://babeljs.io/

![Babel](image.png)

If you want to give attributes to JSX you have to give them in camel case 
const jsxHeading = <h1 id ="heading" className="head"> HIi using JSX </h1>;
console.log(jsxHeading)
![Class](image-1.png)


# Single line and Multiple line JSX

// Single line valid syantax jsx
const jsxHeading = <h1 id ="heading" className="head"> HIi using JSX </h1>;

Suppose you want to write it in multiple lines we need to wrap them in paranthesis 

const jsxHeading = ( <h1 id ="heading" className="head">
 HIi using JSX 
 </h1> );

Why in () ? As babel needs to understand where it starts and ends.

// ---------------------------------------------------------------------------
# REACT Component 

Everything is a component in react. A button, header, fotter , card , heading, title, input box, search bar, etc is a component.

Component -> 
    Two Types of components 

    1) Class based component 
        - old way of writing code ( nobody uses it now )
        - They uses Javascript classes

    2) Functional component
        - new way of writing code 
        - They uses Javascript functions 

// ---------------------------------------------------------------------------
# React Functional Component
    - Just a normal Javascript Function which returns some piece of JSX code, a React Element (i.e. if we make a react element using createElement() function)
    - It can return bunch of react elements too
    - Convention :  Name Functional Component with a Capital letter 

    eg : const HeadingComponent = () =>{
        return <div> <h1> Namaste Functional Component </h1> <h2> Tanvi </h2> </div> ;
    }

    If the JSX is only of 1 line, then end it with a semicolon
    eg : const HeadingComponent = () =>{
            return <div> <h1> Namaste Functional Component </h1> <h2> Tanvi </h2> </div> ;
        }

    If it has multiple lines then wrap it in brackets and also put
    semicolon at the end

    eg : const HeadingComponent = () =>{
            return 
            (div> 
            <h1> Namaste Functional Component </h1>
            <h2> Tanvi </h2> 
            </div>) ;
        }

    - Short Hand Technique 

    We can also return without using the return keyword like :-

        Both are one and the same  
        const Fn = () =>{
            return true;
        }

    const Fn = () => true;

# Rendering React functional Component 

    We cannot render React Component like this 

        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(HeadingComponent);                                                      // ERROR 

    To render a normal React element you used to write pass the name of that element in the render() function as
    an argument. However, to render a functional component, we need to pass “ <name_of_component /> “ as the
    argument of the render() [This is called using as a Tag].

    root.render(<HeadingComponent />)
    This is the Syntax that Babel will understand that it is a Heading Component 

If we do console.log(HeadingComponent) it will give a weird output which isn’t an object

# How to use a ReactComponent inside other ReactComponent 

# Component Composition 
- Using a component inside another component is called Component Composition 
- Composition 2 components into one another
- Putting one component into another component 
- Specify the name of React Component inside angular brackets 
<TitleCompoenent />

eg: 
const TitleComponent  = () => (
  <h1> Hello Tanvi </h1>
);

const HeadingComponent = () =>(

    <div>
    <h1> Namaste Functional Component </h1>
    <TitleComponent/>
    </div>
);

- Can we use Normal function in functional component 

const Title =  function(){
    return 

}

# You can inject any javascript code in JSX using { } 

eg : 
    const number = 1000;
    const HeadingComponent = () => (

        <div>
        <h1> Namaste Functional Component </h1>
        <h2> {number} {/h1}
        <TitleComponent/>
        </div>
    );

![Output](image-2.png)

Similarly you can do any calulations of expressions and all

# Putting an Element inside a Component

- React Element is a JavaScript Object 
- So we can directly put that element in {} as we can inject any javascript code in JSX using { } 

eg: 

    // --- REACT ELEMENT USING REACT ---
    const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, 
    "Hello WOrld From React Element "
    );

    // React Component 
    const HeadingComponent = () =>(

        <div>
        <h1> Namaste Functional Component </h1>
        <h2> {number} </h2>                         
        <TitleComponent/>
        {heading}                       
        </div>
    );

# React Element Inside React Element 

const elem = <span> REACT ELE USING SPAN </span>;
const jsxHeading = <h1 id ="heading" className="head"> {elem} HIi using JSX </h1>;

# JSX prevents Cross side scripting attacks 

JSX prevents Cross side scripting attacks 
    - get info about laptop
    - get cookies data 
    - get data 

// suppose data is coming from api and we get some malicious data (by an attacker)
const data = api.getData();

// Component Composition <TitleComponent/> and Putting an React Element inside a Component {jsxHeading}
const HC = () =>(
  <div>
  <h1> Namaste Functional Component </h1>
  {data}                      
  </div>
);

Even if attacker passes some malicious data through api into data and we use data {data} in ur app then JSX will escape it 
JSX takes care of these injection attacks 

JSX
● React.createElement vs JSX
● Benefits of JSX
● Behind the Scenes of JSX
● Babel & parcel role in JSX
● Components
● Functional Components
○ Composing Components
Assignment
● What is JSX?
● Superpowers of JSX
● Role of type attribute in script tag? What options can I use there?
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX








# Chapter 4 : Building Real World Application

- Food Ordering APP

    - Planning 
        - Exactly know what to build
        - UI design on paper 


// Incline css in jsx

// dynamic 

Suppose my first RestroCard card is of meghana foods i want my second card to be burger king without using hardcoded values 

const RestroCard = () =>{

  return (
    <div className="res-card" style = {styleCard} > 
        <img className="res-logo" alt = "res-logo"src ="https://www.southernliving.com/thmb/gYgRHO3BcxYaaZmtbJ_nFkqtiG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Cook_Rice_007-71c450b1a0684fb28e729228fc300676.jpg"/>
        <h3 >Meggna Foods</h3>
        <h4 > Birayni, North Indian, Asian</h4>
        <h4> 4.6 </h4>
        <h4> 38min </h4>
    </div>
  )
};

<RestroCard/>
<RestroCard/>

We will do this using the concept of Props

# Props
    - props are normal arguments to a function.
    - passing a prop to a function means passing argument to function
    - props is short form of properties
    - properties is something we can pass to component 
    - supoose i want to dynamically pass data to component using props 


// passing props (arguments) to the component 
<RestroCard resName = "Burgerking" cuisine = "Burger, Fries, Coke"/>

React will take all these properties (props) (resName = "Burgerking" cuisine = "Burger, Fries, Coke") and it will wrap it inside an objects and it will pass as props in functional component 

const RestroCard = (props) =>{

  return (
    <div className="res-card" style = {styleCard} > 
        <img className="res-logo " alt = "res-logo"src = {props.image}/>
        <h3 >{props.resName}</h3>
        <h4 > {props.cuisine}</h4>
        <h4> {props.rating} </h4>
        <h4> {props.time} </h4>
    </div>
  )
};

# Config Driven UI
    - When you open a food delievry app and some offer cards will be diffrent in difrrent cities
    like in Delhi it will be 50% off on Burger 
    In Mumbai we have 20 % off 
    Maybe in Pune we dont have any offer right now
    So, we cannot build different Apps for different cities right ? 

    - Our wesbite is driven by data . This is known config driven ui. Our app is driven by config.

    - Controling your Ui using data (congig).The data come from backened (api) 

const Body = () =>{
  return (
    <div className="body">
      <div className="search">
          Search
       </div>
      <div className = "rest-container">
          // one way of passing dynamic data 
          //<RestroCard resName = "Meghana Foods" cuisine = "Birayni, North Indian, Asian" rating = "5" time = "35min" image = "https://www.southernliving.com/thmb/gYgRHO3BcxYaaZmtbJ_nFkqtiG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/How_To_Cook_Rice_007-71c450b1a0684fb28e729228fc300676.jpg" />
          //<RestroCard resName = "Burgerking" cuisine = "Burger, Fries, Coke" rating = "4" time = "15min" image = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png"/>      
          
          // another way 
          <RestroCard resName = {BuergerObj}/>
      </div>
    </div>
  )
};



// inline css we give as javscript object eg style = {JsObject}
const RestroCard = (props) =>{
    const {resData } = props;

  return (
    <div className="res-card" style = {styleCard} > 
      <img className = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
      <h3 >{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4> {resData.info.avgRating}</h4>
      <h4> {resData.info.sla.deliveryTime} min</h4>
       
    </div>
  );

// not a good way to write 
Destructure it 

// inline css we give as javscript object eg style = {JsObject}
const RestroCard = (props) =>{
const {resData } = props;

const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime} = resData?.info 

return (
<div className="res-card" style = {styleCard} > 
    <img className = "res-logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
    <h3 >{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4> {avgRating}</h4>
</div>
);
};

Code 2 :

const Body = () =>{
    return (
    <div className="body">
        <div className="search">
            Search
        </div>
        <div className = "rest-container">
            <RestroCard resData = {BurgerObj}/>
            <RestroCard resData = {RestaurantDataList[1]}/>
            <RestroCard resData = {RestaurantDataList[2]}/>
            <RestroCard resData = {RestaurantDataList[3]}/>
            <RestroCard resData = {RestaurantDataList[4]}/>
        </div>
    </div>
    )
};

We need to loop over list and create a new card dynamically 
Best practice is to use map for 

// inside my RestaurantDataList container i have looped over the restaurant list and i doing a . map - > for each restaurant i am returning a piece of JSX ( <RestroCard resData = {restuarant}/> )

RestaurantDataList.map((restuarant)=> (
    <RestroCard resData = {restuarant}/>
))

- Each child in a list should have a unique key property 
- Now each of this list item should be uniquely represented which means you should have a key.
- key is a reserved keyword.
- Whenever you are looping on any list you have to give a key 
- We are passing a restaurant id as a uniuew key

RestaurantDataList.map((restuarant)=> (
    <RestroCard key = {restuarant.info.id} resData = {restuarant}/>
))

Why do have to give key ?


When we loop over a lot of things 

         ---container---
        /       |        \
      RC        RC       RC
     id1        id2      id3

These RC components need to have unqiue id's bcz supoose a there is a new restaurant which comes in between and it will not re render it all the other restaurant it will just render only the new resataurant (OPTIMIZATION)  

We can also use index as keys 
but It is a Bad practice

Assignment
● Is JSX mandatory for React?
● Is ES6 mandatory for React?
● {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
● How can I write comments in JSX?
● What is <React.Fragment></React.Fragment> and <></> ?
● What is Virtual DOM?
● What is Reconciliation in React?
● What is React Fiber?
● Why we need keys in React? When do we need keys in React?
● Can we use index as keys in React?
● What is props in React? Ways to
● What is a Config Driven UI ?


# Chapter 5 : Lets Get Hooked 

Library -> it makes your developer life easy.
It makes you write less code and do more on the webpage.

# Best Practice 
    Make seperate files for seperate components 

- src folder 
    - All the main code in React project we keep in src folder 

Never keep hardcoded data in component folder


# Exports 
    There are two types of export 
        1) Default Export -- >   export default Header; By defualt a file can only export one thing
        2) Named Export   -- >   to export multiple things from same file

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL =  "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

// Import for named exports 
import { CDN_LOGO } from "../utils/constants";


# Can You use Named and Default exports together 
  
# React Hooks 

// Make our website dyanmic or make our website interactive by adding some features to it

Button -> Top Rated Restraurant 

// Adding click Handler 

Event Handlers 

// onclick will take a callback fnctionn

onclick = { () => {

} }

<button className="filter-btn" onClick = { ()=>{
    RestaurantDataList = RestaurantDataList.filter(
    (restuarant)=> restuarant.info.avgRating > 4
    );   
    console.log(RestaurantDataList);   
    }
}>
Top Rated Restro 
</button>

After clicking We are filtering out the restaurants which have rating more than  4 but they are not reflecting on UI. Our page should change the UI automatically. To do this we have super power 

# State Variable - Super Powerful variable using React Hooks named 

React is fast and effienct in DOM manipulation 

When you want to keep data layer and Ui layer consistnt ( sync ) with each other this is where react helps us
i.e Data changes Ui chnages - ( Updating the DOM Effiecently )

React 
    - Faster DOM Manipulation 

# React Hook 
    - Normal Javascript  function whcich is utily function
    - Written by Facebook Developers 
    - It is written inside react 

    - It is Prebuild
    - Utlity function 
    - It has some logic written behind the scene 

## useState()  
    - Superpowerful state variables in react
    - Maintaining state of variable 
    - Gives you powerful state variables

// import it like a named import 
import {useState} from "react";

const [variable] = useState();

useState() will give you a state variable and you will recieve it using [] array

## WhenEver State Variable upadtes/changes react will re-render the component
As soon as the State Varibale updates from anywhere react will very quickly remove prevois data and update the UI with new data

Whenever there is a change in any state variable react trigger it DIFF ALGORITHM i.eir will find out the diffrence in Virual DOMs and it will re render the component i.e automatically update the UI. It keeps the data layer and UI layer in sync

# UseEffect()

# React Alogirthm

    - React uses Reconciliation Algorithm ( React Fiber)
    - On Ui we have DOM 

            res-container 
        / | | | | | | | | | \

        7 restro cards 

    Suppose my UI chnages 7 cards to 3 filtered cards 

    Whenever we have a UI first React creates a VIRTUAL DOM of it (7 restro cards)


# Virtual DOM
    - It is not a actual DOM
    - Representation of Actual Dom

    - What is actual DOm

            <div>
                <div>
                    <img>
                    .
                .
            .
# Diff Algorithm
    - Finds out Difference between Updated Virtual DOM and previous Virtual DOM 

# Why React is Fast ? 
    - React is doing Effecient DOM Manipulation
        -- How ?? bcz it is having Virtual DOM. 
        -- React can effeciently find out the difference between Virtual DOMs and update the UI

    - React has very good Render Cycles 
        - Its render cycles are very fast

# Array Destructoring 

useState returns an array 

Eg:

const [RestaurantDataList, setListOfRestro] = useState(ResList);

is same as :

const arr = useState(resList);

const RestaurantDataList = arr[0];

const setListOfRestro = arr[1];


# In Nutshell
    - Hooks are Normal 

# Chapter 6 - Exploring the World 

# Monolith Architecture :
    - Earlier we used to have large big projects which had small pieces
        - code for API's
        - UI code
        - Authentication code
        - Database Code
        
    Means in the project all is written frontened, backend, api and after a small change in project we had to build the whole project again.

# Microservice Architecture 
    - Different services for different jobs
    - eg Authentication service, UI , Database Connection services all these small services combined together forms a big app
    - All these microservices talk to each other depending on the need.
    - We have a seperate UI project, seperate backend project 
    - This is known as Sepearation of Concerns and Single Responsbilty Principle 
    - Single Responsbilty Principle ( where each and every service has its own job )
    - In this architecture as services are independent of each other we can have DIFFERENT TECH STACK FOR DIFFERENT THINGS (SERVICE)
        -- Eg UI can be written in React, Backend in Java , etc

## How do these Services Iteract with each other 
    Eg. Ui will talk to backened and show it on UI
    - All these services run on their own specific ports 
        -- Eg port 1234 - Ui service                /
              port 3333 - SMS service               /sms
              port 2344 - Backend service           /api   (supp backend is mapped to /api domain and all the apis are deployed on the same url )
        At the end all the ports are mapped to domanin name

        If UI wants to interact with backend it will make a call to /api or will call backed port


# Getting Data From API

Fetching Data From Backed 
There are two ways 
    1) Page Load >> API Call >> Render 
            When our app loads we can make an API call and when we get data we can render it on UI
        But if our API takes 500ms. So in this case our page will load it will wait for 500ms nd then after 500ms it will render UI.
        - Our page is kinda frozen for 500mx and after 500ms we suddenly see everything 

    2) Page Load >> Render UI >> API call >> Re-Render 
        As soon app loads we will quilcky render with whatever we have and now we make an API call and when we get data we will re-render it on UI
        - This is a better approach
        - Gives you a better User Experience 
        - Here atleast we see some skeleeton initially 

# useEffect() takes in 2 parametrs
    first is a call back function 
    second is a dependency array

# Conditional Rendering 
    - Rendering on the basis of condition is known as conditional rendering 

# Shimmer UI
    - We load fake page (skeleton) untill we get data from API

# Why we need State varibales ?
    
    Suppose We want a functionality of updating Button Name like after we Login we should se an Logout Button and vice-versa

    So i have a local variable named BtnName and i have written logic for onClick 
          let BtnName ="Login";

          <button 
              className="loginBtn" 
              onClick={() => {
                      BtnName = "Logout";
               }}> 
               {BtnName} 
               </button>  

    So after clicking the button i still see Login as BtnName on UI. IF i clg(BtnName) it prints logout. i.e it got updated to Logout but our UI did not render. Our Header component did not had a refresh. 
    I.e The logic which we wrote is updating the BtnName but it is not displaying on UI ( i.e not getting rendered on UIb)

    This is why Javascript variables does not work in such cases.
    There is no way in React to keep a track of weather the variable BtnName got updated or not.

    # Why 
        - If you want to make you component dynamic (some things to change in our component) we use useState state variables. 

    # When


    # Usage 

        - First we import it as a named import from react
         import { useState } from "react";

        - Create a variable
         const [BtnName, setBtnName] = useState("Login");
            -- useState give us 2 values 
                    -- first the react variable 
                    -- second parameter is the function which can modify this react variable
            -- BtnName comes from useState with a default value "Login"
            -- It BtnName behaves like a normal Javascript variable but it is a special react variable 

        - We cannot directly modify the state variable like this 
            BtnName = "Logot"   // error 
            
            Instead we do 
                setBtnName("Logout");

        Whenever we will do setBtnName() React will update the BtnName variable and it will trigger the render process once again. 

## Whenever state variable chnages react will re-render the whole compoenent quickly and we will get all the updated values ( it reconcilaites)

const [BtnName, setBtnName] = useState("Login");

const Header = () =>{ 
    .. rest 
    .. of the
    .. code
    <button 
        className="loginBtn" 
        onClick={() => {
                //BtnName = "Logout";
                if(BtnName === "Logout")
                    setBtnName("Login");
                else
                setBtnName("Logout");
        }}> 
        {BtnName} 
    </button> 
    ..
    ..
    }

### How is the const varibale getting updated isnt it going against Javascript rules. how is const variable is getting modfied ?
    - Whenever we update BtnName variable using setBtnName, basically react is updating the value BtnName and it is calling this compoenent (header component in this case )once again
    - Means it is rendering the compoennt once again. But this time when we invoke the component, the BtnName variable is a new variable (variable with updated value ) than it was before. 
    - This is the beauty of react 

As soon as we call the setBtnName it will update the BtnName value reference and it will render the header compoenent once again. 
It will find the Difference between the older and new version and it will see in that Diff that only button is getting updtaed, there is no chnage in the other thing.
Nothing will change but only button will chnage 
This is the reconcilation process
This is why react is fast
When we click on login button if header is getting refreshed only the button is getting refreshed , but other logo and other values wont load once again as only button changes. It changes very fast.

# Search Functionaity 

// to track value of serach value we need a local state variable 
const [searchTextValue, setsearchTextValue] = useState("")

<div className="Search">
    <input type ="text" className="serach-text" value= {setsearchTextValue}></input>
    <button
        className="searchBtn" 
        onClick={()=>{
        // filter the text and update the UI
        console.log(setsearchTextValue);
    }}>
        Search </button>
</div>

Now when we are typing its not getting typed in the input box ? WHYYY?? 
    - the value is bind to searchTextValue variable and the searchTextValue is initally empty. Now the input box will not change unless we change the searchTextValue
    - To fix this we will add onChange handler. This onChange function should also chnage the searchTextValue 

    // we will get the new value from callback method e
    onChange = { (e) => {
        setsearchTextValue(e.target.value)
    }}

### As soon as i start typing anything in search text it starts to re-render 

Eg: "cafe"
    you type c -> body got re-rendered 
             a -> body got re-rendered
             f -> body got re-rendered
             3 -> body got re-rendered

React is rerendering the whole component for every single alphabet (each time we do a key press as each time we are doing onChnage ) we type but the best part is trigerring the recocilation cycle it is finding the difference bteween old and new Virtual DOM and it is seeing that only input value is changed and React is rerendering the whole body compoenent but it is just updating the input text value in DOM 


# useEffect() 
 
   -  First of all we, import it as named import from React.
        import { useEffect} from "react";

   -  useEffect Hook which takes in 2 arguments
        - first is a call back function 
        - second is a optional dependency array 

        useEffect( () =>{}  ,
                []);

   - It is called after every render of that component. 

   - If NO Dependency array then useEffect is called on ->>>  every component render.

        e.g.
             useEffect( () =>{
                console.log("useEffect");
                });

                         Header Rendered
            Header.js:13 useEffect
            Header.js:10 Header Rendered
            Header.js:13 useEffect
            Header.js:10 Header Rendered
            Header.js:13 useEffect

   - If Dependency array is empty ( [] ) then useEffect is called on  ->>> INTIAL RENDER i.e (JUST ONCE)

        e.g. 

            useEffect( () =>{
                        console.log("useEffect");
                    } ,[] );

           Header Rendered
           useEffect
           Header Rendered 10 times

   - If  Dependency array is not empty then useEffect is called every time the Dependency array is updated.

# useState
    - Used for creating local state variables inside your functional components
    - Practices : 
        - Never create useState outside your components
        - Always try to call them at the top of compoenent.
        - Never create them inside if else (conditions, loops, functions  ) ( you can do that ) this will create inconsisteny in app

# Create Routes 
    npm Js Library - React Router 

## Creating Routing configuration

    - We are passing configuration(information that will define that what will happen on a specific route   (path) eg /about  )
    - it Takes a lists of paths 
    - if my path is "/about" load my element About Component 

    1) First we import create the configuration by importing createBrowserRouter from 'react-router-dom'
    2) This createBrowserRouter takes in some configuration. This configuration is a list. List of Objects , Each and every object defines a diffrent path and what should happen on that path.

    E.g.
        const appRouter  = createBrowserRouter([
        {
            path :"/",
            element : <AppLayoutComponent/> ,
        },
        {
            path : "/about",
            element : <About/>,
        }
        ]);

        This is telling if the path is / then load the AppLayoutComponent, if it is /about then load the About Component.

    3) We need to Render this component 
        We import RouterProvider ( Provide routing configuration to our app)

        Now instead of passing AppLayout Component to render we pass 

        // root.render(<AppLayoutComponent/>);
        root.render(<RouterProvider router = {appRouter}> </RouterProvider>);


## if u write rafce it will automatically create a component

## Error Handling Page 

    The following configuration needs to be created

    Add  errorElement : <Error/>

    {
        path :"/",
        element : <AppLayoutComponent/> ,
        errorElement : <Error/>
    },

    If we have some error in this path '/' it will catch it and it will be redirected to the Error componenet which we gave in errorElement field.

## React ROuter DOM gives us an access to a Hook (useRouteError)
    - It tells us more details about the error

    const Error = () =>{
    const err = useRouteError();
    return (
        <div>
             <h1> OOPS Something Went Wrong </h1>
            <h2> {err.status} : {err.statusText}</h2>
        </div>
    )
}

## Creating Children Routes --- OUTLET
### Keep the header intact 

    When i am on my home page we have 
        <Header/>
        <Body/>
    which id fine. But when i am on my About Page i still want the header but now instead of Body we should have About Page
        <Header/>
        <About/>

    If i am on /        then i should have <Body/>
       "       /about       "              <About/>
       "       /contacts    "              <Contacts/>
       .        .           .               .      
    and so on

    To make this kind of functionality we have to create children Routes

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
      }

    ],

    Our App has 3 children We want to load the childrens according to path using reactRouterDOm using outlet component 

    return (
    <div className = "App">
          <Header/>
          <Outlet/>
    </div>
    )


    according to the Routes 

    - Here Our Header is intact and our Outlet is getting filled with the componenet that is passed as a children from parent
    - Basically Outlet is getting replaced by the desired component.
    - We are pushing our childrens according to Routes
    - We can have multiple parents and childrens  and according to route it will render.

### Creating Links 

<li> <a href = "/contacts"> Contact Us </a> </li>

Navigating to new page without reloading the whole page 

Instead of using ahref we will use LINK component 
link - superpower which is given ti us by React

Link component works like an anchor tag 
    <Link to = "/contacts" > Contact Us </Link>
Diff -> 
Now after using link our page will not reload the whole page 
But when we use anchor tag it re-loads the page.

### Routing in Web-Apps 
    - Client Side Routing 
        -- All components are already loaded on app 
        -- We are not making any network calls 
        -- The only network call we are making is fetching the Api 

    - Server Side Routing 
        -- We have files right index.html , aboutus.html. 
        If i click on my About Page i.e /about it reloads the whole page, it sends a network call to about.html fetches that html and renders it onto the web page 
        -- make a network call -> get data from server ->  renders on UI-> refresh the page

### Whenever we are Navigating to a different Route always use LINK Component. It will not reload your page and it is super fast and smooth. It is not reloading the whole page it  just change the components. This is why we say React is a Single Page Application. We do not change the page. While naviagtaiing we are not refreshhing the whole page

# React is a Single Page Application
    - Its just one page, just the components are getting interchanged via Client Side Routing.

### Dynamic Routing

/restro/:id 

{
    path : '/restaurant/:resID',
    element : <RestaurantMenu/>,
}

Dynamic. This part should be different for Megahna Foods, It should be different for KFC, diff for Mac D.
/:resID this part of URL is DYNAMIC. resID can be changed according to the restaurant id. Every Restro has a unique id. Therefore our Routes will be unique for each Restro. 

Whenever we do /restaurant/123 or any id its loads the RestaurantMenu Component for the particular Restaurant.

Steps:
    1) When RestaurantMenu page loads, Load the data ( make an API call )
    
        
    2) Fetch Menu For Restro
        - We create a ASYNC function called Fetch Menu () 



# Features of Food App

## Functionality - Load Restaurant Menu
 
    The functionality of the "Load Restaurant Menu" React components involves fetching data from a Swiggy live restaurant menu API and displaying relevant information like Restaurant Name, cusines, ratings, along with ongoing offers, and menu items.

    The components manage the state of fetched data (RestroData, offersData, RestroMenu) and use the Shimmer component for loading UI. The fetchMenu function fetches data, converts it to JSON, and updates the state variables. Overall, the components provide a comprehensive view of a restaurant's menu.

    RestaurantMenu Component:
        - State Variables - used to  
            1) RestroData: Holds the data fetched from the restaurant menu API.
                    - This state variable (RestroData) is initialized with an empty array ([]).
                    - It is used to store the data fetched from the restaurant menu API.
                    - The setRestroData function is used to update the state when new data is received.
            2) offersData: Holds offers data from the fetched API response.
            3) RestroMenu: Extracted menu data from the fetched API response. 

    How to to go to a 

# Fetch Data from Github and Show on Github


# useParams Hooks

# Date : 23 Jan 
# Class Based Component 
    - Older way of creating components 
    -  Class based Component is a normal javascript class
    - Class based component is a class which extends React.Component and it has a render method which returns some piece of JSX which will be displayed on UI 
    - React.Component is a class which is given to us by React and our UserClass is inherting some properties from it.

syntax :

import React from 'react';

class UserClass extends React.Component{

    // redener will return some piece of JSX which will be displayed on UI 
    render() {
        return (
        <div className="user-card">
            <h2> TNM </h2>
            <h3> Pune </h3>
            <h4> tanvioct11@gmail.com </h4>
        </div>
        );
    }    
}

export default UserClass;

- We use the keyword class then NameOFCompoenent and write extends React.Component 
- Basically, this extends React.Component will make react know that this is a class based component.

## Passing Props in Class Based Component
 
    {<UserClass name = {"Tanvi Mahajan class"}/>}

We receive props in class based component using constructor and we have to compulsory use super(props)


    constructor(props){
        super(props);
        console.log(props);
    }

And then use it like below using this.props

<h2> {this.props.name} </h2>

## State Variables in class based components 
    - in functional component we use hook useState
    - There was no concept of hooks earlier so we do it as below 
    - Whenever a instance of class is created constructor is called and this is the best place to receive props and to create state variable
    - Creating a instance means loading a class based component on we page 


    constructor(props){
        super(props);
        console.log(props);

        // state varibale is a big object and we have state variables inside it 
        this.state = {
            count : 0
        }
    }

for multiple state variables 

    this.state = {
                count : 0,
                c2 : 2
            }

 And we use it as :
     <h4> count : {this.state.count }</h4>

## Updating State Variables

-  NEVER MODIFY STATE VARIABLES DIRECTLY 
    --  this.state.count =  this.state.count  + 1 

- React gives us access to a function this.setState() we pass an object to this function

this.setState({
    count : this.state.count + 1,
    c2 : this.state.c2 - 1
});

-  the component is re-rendering when the state variable is getting chnaged.


### Infinite Loop of Render 
    - If you call setCount inside the render function, it can lead to undesirable side effects, such as causing an infinite loop of renders. The state update triggers a re-render, and if that re-render again calls setCount, it will result in an infinite loop.

### React Class based Component Life Cycle Method 

AboutUS -> Parent Component         (functional Component)
    -- UserClass -> Child Component (class Based Component) 
    -- User      -> Child Component (class Based Component) 

- Whenever Parent Component (AboutUS) is rendered(load) on the web page and when it see there is a UserClass compoenent it starts to load / mount. 
- Now it starts loading the Class based Compoenent means it creates a new instance of this class is created. 
- When class is instanced
    - The constructor is called
    - Then the Render Method is called 

## Case 2 Parent - Child Relationship 
AboutUS -> Parent Component         (class Based Component)
    -- UserClass -> Child Component (class Based Component) 
    -- User      -> Child Component (class Based Component)

### Sequence of Execution
    - Parent Constructor            ( About)
    - Parent Render                 ( About)
    - Child Constructor             ( UserClass)
    - Child Render                  ( UserClass)
    - Child componentDidMount       ( UserClass)
    - Parent componentDidMount      (About )

// Once Constructor and render is called componentDidMount method is called 
    componentDidMount () {
        console.log("Child componentDidMount");
}

When the Parent component is loaded first of all the Parent constructor is called then the render() is called. 
While rendering it sees that we have a child component. 
Now it triggers the life cycle method of the child.
Then child constructor will be called then the render of child is called. 
Once the rendering of child is finished i.e once the mounting of child component is done then componentDidMount() will be called. Now the whole child component is mounted succesfully. Once child has been mounted succesfully, now the parent componentDidMount() will be called.

### componentDidMount()
    - There are some things we do once the component is mounted succesfully.
    - It is used to make API calls 

### Why we make api call insde componentDidMount()
    -- Load component with basic details
    -- Then we make APi details 
    -- Then we rerender it again with APi Data ( React render compoenent quickly )
    -- We dont want to wait for data from APi so load the component with basic details 

### Case 3  Class Based mulitple Childrens 

AboutUS -> Parent Component         (class Based Component)
    -- UserClass -> Child Component (class Based Component) 
    -- UserClass -> Child Component (class Based Component) 
    -- User      -> Child Component (class Based Component)

#### Execution Sequence 
About       - Parent Cons
About       - Parent Render

UserClass       -- Tanvi Mahajan classChild Cons
UserClass       -- Tanvi Mahajan classChild Render

UserClass       -- Soham Mahajan classChild Cons
UserClass       -- Soham Mahajan classChild Render

<!DOM is updated in batch!>

UserClass       -- Tanvi Mahajan classChild componentDidMount
UserClass       -- Soham Mahajan classChild componentDidMount
About      - Parent componentDidMount

![React Life Cycle](image-1.png)

React batch the render phase of both childrens then the commit phase will be bathced laterr

Render Phase -> 
Commit Phase -> 

### Fectch data 

First we make componentDidMount() as async
then we write fetch code 

    // Once Constructor and render is called this method is called 
    async componentDidMount () {

        const data = await fetch("https://api.github.com/users/TanviMahajan11");
        const json = await data.json();

        console.log(json);
        this.setState({
            gitData : json,
        })
    }

-- Mounting cycle --
Constructor is called
Render with dummy data 
    - HTML with dummy data 
ComponentDidMount 
    - API call 
Update State(this.state)

-- Update Cycle --
Render with new API data 
HTML is loaded with new API data 
ComponentDidUpdate 

# Optimizing our App

Single Responsibilty Function
    - A function should have a single responsibilty 
    - Header function should just display header
    - Write code in modular fashion as your code will become more readble, maimtable and testable.
    - Keep components as light as possible. 

Modularity 
    - Break down the code into different small modules so that the code becomes more maintanable and testable.

# Custom Hooks 
    - We can create our own custom Hooks and using these hooks we can make our code more modular, abstarct extra responsiblity
    - Seperate file for seperate hook in utils
    - Give name as useName 


# Lazy Loading 

// Chunking
// Code Splitting
// Dynamic Bundling

// lazy Loading - when app will load intilly it will not load the code for grocessay intaillay . When i go to that page then only it should laod the page 
// On Demand Loading
// Dynamic import 

    - lazy Loading - when app will load intilly it will not load the code for grocessay intaillay . When i go to that page then only it should laod the page 
    - On Demand Loading 
    -  lazy is a function given from react and we will do a named import 

        import { lazy } from "react";

    - we will not import Groceery like this 

        import Groccery from './components/Groccery'

    - We will get Groceery in our app by using lazy. lazy is a function given from react which takes a callback function and we write import here. 
    - The import is a function which takes the path of the Groceesry component.

        const Groccery = lazy (()=> import("./components/Groccery") );

- Lazy loading for distributing the code in different chunks.
- To reduce bundle sizing   

# ADD STYLES 

Ways to write Css
    - index.css
    - saas , scss ( not a recommened way )
    - styled components 
    - material Ui
    - Bootstrap
    - Cakra Ui
    - Ant Design
    - tailwind Css

# Tailwind CSS
    - Rapidly build modern websites without ever leaving your HTML.
    - It works with most if the frameworks
    - Tailwind css uses postcss
    postcss - a tool for transforming CSS with JavaScript


    Configuration : 

    Lets Install :
        npm install -D tailwindcss postcss
        npx tailwindcss init

    This creates a configiration for tailwind 

    Follow : https://tailwindcss.com/docs/guides/parcel

    content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ], 
  content takes a list of all the files where we are going to use tailwind 


# Higher Order Components  
    - It is a function that takes a component as a input and it then enhances that component returns it back. 
    - Normal Javascript Function
    - They are pure functions 
    - Used to enhace 
    - The components are enhaced version of the input component. 

# All React Applications have 2 layers
    - UI Layer - code u write in jsx 
    - Data Layer - consits of state props, local varibales (whatever u have data ) 


## Manage Data properly in Data Layer 


The Ui Layer is powered by Data layer

# Functionality : promoted label on restro card
# Feature : 
    We have diffrent sections Recomended, Ice-cream sections , etc.

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
    const {menuDetails} = props;

    // Destructure itemCards and title from menuDetails
    const {itemCards, title} = menuDetails?.card?.card;

    const [showItems, setshowItems] = useState(false);

    const handleClick = () =>{
        // toggle feature 
        setshowItems(!showItems);
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

# Accordian Feature 
    - when we click on recomeneded all other accordians to colapse itself.

    All restaurant items (Recomeneded , icereams )are maitaing have their own states 

    parent is controlling the state of accordian and not the children (menucard)

    At a time only accordian should expand

# Components 
    - Controlled - parent has contol of chilren
    - UnControlled 

# Extenstions 
    - React devtools - to dubug
        1) components - can see your data and 
        2) Profiler - records your application 

# lifyting state up 
    _ react dev webiste notes 

# Props Drilling
- In Real world Raect application ethere are lots of componets with a hiearcy
- React is a one way data stream ( top to bottom )

# React Context 
Context - global space where anyone can acess it 
It is foolish to pass props to many layers
Context solves the problem of Props Drilling
Loged in User info is needed 
Theme - dark or light theme we need this info for almost anywhwre in app

We use the createContext() from react

import { createContext } from "react";

// its kinda a central global object
// we will give it some information which it will hold 
    const UserContext = createContext(
        {
            loggedUser : "Default User",
        }
    );

    export default UserContext;

//  access context in other files using the useContext Hook 
        const data = useContext(UserContext);

- we can have as many as global contexts we want 
- We can create multiple context 

Can we keep all the data in Context??
- If so then we dont need to pass props right ?
- Only data used in multiple places or it can be used in multiple places should be used in react context.
- We can access it anywhere we want to
- Will this context will Class based components ?

First import the context 
<div>
<UserContext.Consumer>
    {
        ({loggedUser}) => <h1 className='font-bold'>{loggedUser}</h1>
    }

</UserContext.Consumer>
</div>

## Change Value of Context

    //Context Provider 

    We wrap the whole app with the the new value of context 

     <UserContext.Provider value ={{loggedUser  : userInfo} }> 
        <div className = "App">
              <Header/>
              <Outlet/>
        </div>
     </UserContext.Provider>

    We can aslo do this 
                                                                            // outside this context it will have default value 
     <UserContext.Provider value ={{loggedUser  : userInfo} }>              // here it will have value tanvi
        <div className = "App">
          <UserContext.Provider value ={{loggedUser  : "SOHAM"} }>           // here it will have value soham
              <Header/>
             </UserContext.Provider>
              <Outlet/>
        </div>
     </UserContext.Provider>

# Redux 
    - Create our own Redux
    - Manage State and data using REdux
    - Redux works in Data Layer of Application
    - Handle data effiectly using Redux
    - Redux is not mandatory 
    - When we are building a small or mid size app, Redux is not needed
    - But when we have a large app, where data is heavily useds, lots of data is there, lots of read and write operations are taking place in Ui application , lot of components and data transfer between components 
    - Redux is not a part of React. Redux is a seperate library.
    - Redux is not the only libaray used for state managemanet. We have zustand

    - Redux is used to manage states. ( state management )
    - It helps us easy to debug our application ( chrome extension ) redux dev tools 


    - React-Redux libarqry is a bridge 
    - Redux toolkit


If you do not subscribe to the right portion of the store then it will be a big performance loss

    // One way of cartItems will only update if there re changes in items. Other than that if there is any update in store it will not update cartItems, as cartItems has only sibscibed to items from the store
    const cartItems = useSelector((store) => store.cart.items );

    // Second way 
    This store variable is subscribed to the store, this will be updated if any of the store variable chnages. lIke if anything chnages in store and if it is a big app any small chnage will also update store

    const store = useSelector( (store) => store);
    const cartItems = store.cart.items;

    But the second method is very less efficient

    Good performance way is to only subscibe to the required part of the store 

# STEPS 
## Step 1 : Install Redux JX ToolKit and React Redux Libraries
## Step 2 : Build Redux Store 
## Step 3 : Connect Store to App
## Step 4 : Create Slice
## Step 5 : Dispatch Action
## Step 6 : Read Data using Selector  


## Step 1 : Install Redux JX ToolKit and React Redux Libraries

    Reduxjs/toolkit -> Its Library for doing Redux thing like creating the congiguration for store, etc.

        npm install @reduxjs/toolkit 

    react-redux -> Its libraray for doing bridge doing jobs between raect and redux like providing it to react, etc 
    
        npm install react-redux (bridge things )

## Step 2 : Build Redux Store 
    We will build it inside utils AppStore.js

    We will use configureStore() which comes from our redux toolkit. it will give us a store for our React application

    AppStore.js

        const { configureStore } = require("@reduxjs/toolkit");

        const AppStore = configureStore({});

## Step 3 : Connect Store to App

Provide the created store to our application in app.js using Provider which we get from react-redux
We wrap our whole app in this store using Provider where we pass the store as props 

app.js
    .
    .
    .

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

Supoose we dont want the whole app to use the Redux Store, then we just provide store to the specific portion of the app.

## Step 4 : Create Slice

import { createSlice } from "@reduxjs/toolkit";

// cartSlice is a function which takes a configuration first it takes name of the slice and then the initital state and the reducers 

// createSlice will return an object 
const cartSlice = createSlice({

    // name of the slice 
    name : 'cart',
    
    // initailState is an object 
    initialState : {
        // what initailly the slice will have 
        items : []
    },

    // obj has diffrent types of actions like addItem, RemoveItem etc and for each action wr willl have a reducer fucntion
    reducers : {
        // create actions(add an item , remove an item, clear cart) and reducrers here 
        addItem : (state, action) => {
            // this is a reducer function for add item which will basically modify the slice of the store  

            state.items.push(action.payload);

        },
        removeItem : (state) => {
            state.items.pop(); 
        },
        clearCart :(state) => {
            state.items.length = 0;
        }
        
    }
});

// we will export our actions and reducers 
// React redux has given this syntax to export the actions ad reducers

// takig out actions individually 
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;


app.js

    const { configureStore } = require("@reduxjs/toolkit");
    import cartReducer from "./cartSlice";

    const AppStore = configureStore({
        // This is the big reducer for our whole app and it contains small reducers for each slice     
        reducer : {
            cart : cartReducer,
        }

    });

    export default AppStore;

## Step 5 : Dispatch Action

// onclick we are going to dispach an action

<button className="bg-green-100 font-bold shadow-lg text-center p-2" onClick={ () =>{
                                    // dispatch an action
                                }}> ADD </button>

## Step 6 : Read Data using Selector  

ADD ITEMS NUMBER 
useSelector will give access to the store subscribgint to store using selector. selector gives us acess to the whole store and we just want access to items.

  const cartitems = useSelector(
    (store) => store.cart.items
    );
 
# Feature - Cart 



## Architecture of Redux Toolkit


# Topics
## lazy Loading 
## Higher Order Functions
## Lyft Up State 
## React Context  
## Redux
## Testing - React Testing Libarary 



# Testing 
## Types of Testing a Developer can do 
    - Unit Testing  
        -- Testing your react components in isolation ( eg only a header component is tested )
        -- Small unit of react application is tested 
    - Integration Testing 
        -- Testing the integration of components ( Eg Suppose we did a search)
        -- Multiple components talking to each other 
    - End to End Testing 
        -- Testing the website as soon as the user landing on page to user leaving the page
        -- Requires different types of tools like Selenium 

## Libraries 
    # React Testing Library 
        - React Testing Library is build on top of DOM testing Library 
        - Projects created with Create React App have out of the box support for React Testing Library. If that is not the case, you can add it via npm like so:
        - But for us we need to intergarte ourselves 
        - React Testing Library uses JEST ( Jest is a delightful JavaScript Testing Framework with a focus on simplicity. ) Javascript testing framework 

        
## Setting up Testing In our APP
    1) Install React Testing Libraray 
         npm install --save-dev @testing-library/react

    2) Install Jest 
         npm install -D jest

    3) Installed Babel Dependencies ( required which are required when we use Jest with Babel)
         npm install --save-dev babel-jest @babel/core @babel/preset-env

    4) Configure Babel
        
        babel.config.js
            module.exports = {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
            };

    5) Configure Parcel Config file to disable default Babel Transpilation
        We want this configuration to work and not the one which parcel has given us by default.
        .parcelrc
            {
            "extends": "@parcel/config-default",
            "transformers": {
                "*.{js,mjs,jsx,cjs,ts,tsx}": [
                "@parcel/transformer-js",
                "@parcel/transformer-react-refresh-wrap"
                ]
            }
            }

    6) Jest Configuration
        - jsdom - library which parces and interacts with assembled HTML just like browser. ( its like a browser and all our testing code will run here. Suppose we are testing header component then all our header component will be loaded in jsdom )
        - when you run test cases, there is no server or browser running , it wont run there, they will be needing an environment to run for this we use jsdom 

            npx jest --init

    7) Install JSDOM library 
        If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.

            npm install --save-dev jest-environment-jsdom

    8) JSX Support ( To make JSX work in testing library ) @babel/preset-react
        npm install --save-dev @babel/preset-react
    
    9) Configure in babel.config.js
            ["@babel/preset-react" , {runtime : "automatic"}]

    10) Install @testing-libraray/jest-dom  ( to use expect(headings).toBeInTheDocument();)
        npm install --save-dev @testing-library/jest-dom




## Run Tests
    npm run test 

## Writing Test Cases 
    __tests__ folder 
    .test.js 
    .test.ts
    .spec.js
    .spec.ts

    __ in front and __ in back is known as  dunder 
    ,
1) Testing  Sum.js

    sum.js
        export const sum = (a, b) =>{
            return a+b;
        }

    sum.test.js
        import {sum} from "../sum";

        // we write a function called test which takes two paraments 
        //     1) string ( description of the test )
        //     2) callback function ( implementaion of test case )

        test ( "Sum function should calculate the sum of 2 numbers " , ()=>{

            const result =  sum(3,4);

            // Assertion
            expect(result).toBe(7);

        })

2) Check if Contact Us page is Loaded or not 

Whenever you want to test a UI component then first we have to render that component first on JS DOM with help of render method() which comes from testinglibrary/react

    import Contacts from "../Contacts"
    import { render , screen} from "@testing-library/react";
    import '@testing-library/jest-dom'

    test ( "Check if contact us component is loaded or not " , ()=>{

        // the component will be rendered in JS DOM 
        render(<Contacts/>);

        // AFter rendering we will check if heading is loaded in page or not 
        const headings = screen.getByRole("heading");
        console.log(headings);

        expect(headings).toBeInTheDocument();

    })

3) 

   console.log(inoutBoxes);
   It returns you the (HTMLInputElements) (JSX) Virtual DOM React Elements.
   When you render an input component, it is basically JSX (JSX is a react Element (react element is the object))

console.log
      [
        <ref *1> HTMLInputElement {
          '__reactFiber$3sff8nzcuyo': FiberNode {
            tag: 5,
            key: null,
            elementType: 'input',
            type: 'input',
            stateNode: [Circular *1],
            return: [FiberNode],
            child: null,
            sibling: [FiberNode],
            index: 0,
            ref: null,
            pendingProps: [Object],
            memoizedProps: [Object],
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 1,
            flags: 1048576,
            subtreeFlags: 0,
            deletions: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugSource: undefined,
            _debugOwner: [FiberNode],
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          '__reactProps$3sff8nzcuyo': {
            type: 'text',
            className: 'border border-black p-2 m-2',
            placeholder: 'name'
          },
          _wrapperState: { initialChecked: undefined, initialValue: '', controlled: false },
          '__reactEvents$3sff8nzcuyo': Set(1) { 'invalid__bubble' },
          value: [Getter/Setter],
          _valueTracker: {
            getValue: [Function: getValue],
            setValue: [Function: setValue],
            stopTracking: [Function: stopTracking]
          }
        },
        <ref *2> HTMLInputElement {
          '__reactFiber$3sff8nzcuyo': FiberNode {
            tag: 5,
            key: null,
            elementType: 'input',
            type: 'input',
            stateNode: [Circular *2],
            return: [FiberNode],
            child: null,
            sibling: [FiberNode],
            index: 1,
            ref: null,
            pendingProps: [Object],
            memoizedProps: [Object],
            updateQueue: null,
            memoizedState: null,
            dependencies: null,
            mode: 1,
            flags: 1048576,
            subtreeFlags: 0,
            deletions: null,
            lanes: 0,
            childLanes: 0,
            alternate: null,
            actualDuration: 0,
            actualStartTime: -1,
            selfBaseDuration: 0,
            treeBaseDuration: 0,
            _debugSource: undefined,
            _debugOwner: [FiberNode],
            _debugNeedsRemount: false,
            _debugHookTypes: null
          },
          '__reactProps$3sff8nzcuyo': {
            type: 'text',
            className: 'border border-black p-2 m-2',
            placeholder: 'message'
          },
          _wrapperState: { initialChecked: undefined, initialValue: '', controlled: false },
          '__reactEvents$3sff8nzcuyo': Set(1) { 'invalid__bubble' },
          value: [Getter/Setter],
          _valueTracker: {
            getValue: [Function: getValue],
            setValue: [Function: setValue],
            stopTracking: [Function: stopTracking]
          }
        }
      ]


      it is a alias for test 

       it ( "Check if contact us component is loaded or not " , ()=>{

        // the component will be rendered in JS DOM 
        render(<Contacts/>);

        // AFter rendering we will check if heading is loaded in page or not 
        const headings = screen.getByRole("heading");
        console.log(headings);

        expect(headings).toBeInTheDocument();

    })


Large Scale App
Routing - React Router Dom
Testing 
State Management - Redux
Bundling - Parcel 