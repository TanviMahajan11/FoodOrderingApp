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
            // MUTATING THE STATE HERE (MODIFYING)
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
