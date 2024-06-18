import { render, screen , fireEvent } from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // toBeInTheDocument();

test ( "Should load header component with login button ", () =>{

    render(
    <BrowserRouter>
        <Provider store = {AppStore}>
                <Header/> 
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    // ALTERNATE WAY 

    const loginButtonAlt = screen.getByText("Login");

    // if multiple buttons on screen and want specifically the login button 

    const loginButtonAlt2 = screen.getByRole("button", {name : "Login"});
    
    expect(loginButtonAlt2).toBeInTheDocument();
});


test( "Should render Header Component with Cart Item is present " , ()=>{

   render(
    <BrowserRouter>
        <Provider store = {AppStore}>
                <Header/> 
        </Provider>
    </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();

});

test( "Should render Header Component with Cart Items 0" , ()=>{

   render(
    <BrowserRouter>
        <Provider store = {AppStore}>
                <Header/> 
        </Provider>
    </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart 0");

    expect(cartItem).toBeInTheDocument();

});

test( "Should change Login Button to Logout on CLick" , ()=>{

    // Render Header
   render(
    <BrowserRouter>
        <Provider store = {AppStore}>
                <Header/> 
        </Provider>
    </BrowserRouter>
    );

    // find login button
   const loginBtn = screen.getByRole("button", {name : "Login"});

    // Simiulate Click with help of FireEvent Given by Reacr-testing Library ( to fire an event )

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", {name : "Logout"});

    expect(logoutBtn).toBeInTheDocument();

});