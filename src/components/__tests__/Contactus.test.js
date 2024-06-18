import Contacts from "../Contacts"
import { render , screen} from "@testing-library/react";
import '@testing-library/jest-dom'

describe( " Contact Us Page HEading" ,()=>{

    test ( "Check if contact us component is loaded or not " , ()=>{

        // the component will be rendered in JS DOM 
        render(<Contacts/>);

        // AFter rendering we will check if heading is loaded in page or not 
        const headings = screen.getByRole("heading");

        expect(headings).toBeInTheDocument();
        }
    )
})

describe( " Testing Input fields ", ()=>{

    test (" Contact us page should have 2 input boxes",()=>{

            // render
        render(<Contacts/>);

            // querrying
        const inoutBoxes = screen.getAllByRole("textbox");

            // assert 
        expect(inoutBoxes.length).toBe(2);  
    })

    it( " Contact Us Page should have a input field called name", ()=>{
        render(<Contacts/>);
        const inputName = screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();
    })

})




