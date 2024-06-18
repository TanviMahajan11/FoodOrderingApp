import RestroCard from "../RestroCard";
import MOCKDATA from "../mocks/RestroData.json";

import { render, screen , fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // toBeInTheDocument();

test ( " Should Render Restro Card with props data in it ", ()=>{

    render(
        <RestroCard resData = {MOCKDATA}/>
    );
    
    const Name = screen.getByText("Burger King");

    expect(Name).toBeInTheDocument();
    
})