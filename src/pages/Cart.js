import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsDashSquare, BsPlusSquare, BsDashLg, BsPlusLg } from "react-icons/bs";
import { addProduct } from "../context/cartRedux";
import { removeProduct } from "../context/cartRedux";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaPaypal } from "react-icons/fa";

export default function Cart() {
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const price = useSelector((state) => state.cart.total);

  console.log(products);

  const dispatch = useDispatch();
  // console.log(products[0].products.image);

  const handleQuantity = (type) => {
    if (type === "dec") {
      dispatch(removeProduct({ products, quantity }));
    } else {
      dispatch(
        addProduct({
          products,
          quantity,
        })
      );
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ total }));
  };

  // const handleClick = () => {
  //   dispatch(addProduct({ product, quantity }));
  // };

  return (
    <div className="cart">
      <SearchBar />
      <div className=" cart_wrapper">
        <div className="cart_wrapper_sections">
          {quantity >= 1 ? (
            <section className="cart_wrapper_sections__information cart__bg-color">
              <h1>
                {quantity} {quantity === 1 ? "item" : "items"}{" "}
              </h1>

              <h3>Shipped by textil</h3>

              <div className="cart_wrapper_sections__information_info  ">
                <div className="image">
                  <img src={products[0].products.image} alt="" />
                </div>
                <div className="cart_wrapper_sections__information_info_productDetail">
                  <div className="cart_wrapper_sections__information_info_productDetail_details">
                    <p className="productName">Pepe Jeans</p>
                    <p className="productID">Shoes</p>
                    <p className="productSize">Size: 37.5</p>

                    <div className="cart_wrapper_sections__information_info_productDetail_details_amountContainer">
                      <div
                        className="remove"
                        onClick={() => handleQuantity("dec")}
                      >
                        <BsDashLg style={{ height: 25, width: 25 }} />
                      </div>
                      <div className="amount">
                        {quantity >= 1 ? quantity : 0}
                      </div>
                      <div
                        className="add"
                        onClick={() => handleQuantity("inc")}
                      >
                        <BsPlusLg style={{ height: 25, width: 25 }} />
                      </div>
                    </div>

                    <p className="productPrice">
                      <b>{products[0].products.price}€</b>
                    </p>
                  </div>
                  <div className="cart_wrapper_sections__information_info_productDetail_delete">
                    <RiDeleteBin5Line style={{ width: 35, height: 35 }} />
                  </div>
                </div>
              </div>

              <div className="cart_wrapper_sections__information_reserved">
                <AiOutlineInfoCircle />{" "}
                <p>Items placed in this bag are not reserved.</p>
              </div>

              {/* <div>
          <div className="product">
            <div className="priceDetail"></div>
          </div>
        </div> */}
            </section>
          ) : (
            <section className="cart_delivery cart__bg-color">
              <h3>Your bag is empty</h3>
              <p>
                <Link to="/product">go to shop</Link>
              </p>
            </section>
          )}

          <section className="cart_delivery cart__bg-color">
            <h3>Estimated Delivery</h3>
            <p>11.11.2018</p>
          </section>

          <section className="cart_delivery cart__bg-color">
            <h3>We accept</h3>
            <div>
              <FaCcMastercard
                style={{ width: 35, height: 35, marginRight: 20 }}
              />
              <FaCcVisa style={{ width: 35, height: 35, marginRight: 20 }} />
              <FaCcPaypal style={{ width: 35, height: 35, marginRight: 20 }} />
            </div>
          </section>
        </div>

        <div className="cart_total cart__bg-color">
          <h3>Total</h3>
          <div className="item">
            <span>
              <p className="subtotal">subtotal</p>
              <p className="price">{products[0].products.price * quantity} €</p>
            </span>
            <hr />
            <span>
              <p className="subtotal">
                <b>Total (VAT included)</b>
              </p>
              <p className="price">{products[0].products.price * quantity} €</p>
            </span>
          </div>

          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}
