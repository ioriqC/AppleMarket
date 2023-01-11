import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { delItems } from '../store/cartSlice';

const Cart = () => {
  const state = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItems(item));
  };

  const cartItems = (item) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(item)}
            className="btn-close float-end"
            aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={item.img} alt={item.title} height="200px" width="180px" />
            </div>
            <div className="col-md-4">
              <h3>{item.title}</h3>
              <p className="lead fw-bold">$ {item.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const cartEmpty = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const checkButton = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary w-25 mx-auto">
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length !== 0 ? state.map(cartItems) : cartEmpty()}
      {state.length !== 0 && checkButton()}
    </>
  );
};

export default Cart;
