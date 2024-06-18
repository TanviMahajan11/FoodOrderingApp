import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const placeOrderHandler = () => {
    // Implement place order functionality
    console.log("Placing order...");
  };

  return (
    <div className="text-center m-2 p-10">
      <h1 className="font-bold text-3xl mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4 text-gray-700">
            <span className="font-bold">Your cart is empty.</span> Add some delicious food!
          </p>
          <img
            src="https://cdn1.designhill.com/uploads/personal_designs/5aeb0265d7b2ee6a97d524054d1754f8-f5e10dfe7d8c3ae5305bc14447e4b2a016061036056951.jpg?ver=2.12.78" // Replace with your empty cart image
            alt="Empty Cart"
            className="h-48 mb-4"
          />
        </div>
      ) : (
        <>
          <div className="w-9/12 m-auto mb-8">
            <ItemList items={cartItems} />
          </div>

          <div className="flex justify-center items-center space-x-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg"
              onClick={clearCartHandler}
            >
              Clear Cart
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg"
              onClick={placeOrderHandler}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
