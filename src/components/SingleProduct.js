import React, { useState, useEffect } from "react";
// import { FaBars, FaShoppingCart, FaBackspace } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import SelectBar from "./SelectBar";
import { useSelector } from "react-redux";
import { addProduct } from "../context/cartRedux";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

export default function SingleProduct() {
  // const [data, setData] = useState([]);
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.total);
  const price = useSelector((state) => state.cart.total);

  const [products, setProducts] = useState({});
  // const [quantity1, setQuantity1] = useState(quantity);
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // console.log(quantity);

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProductData();
  }, [id]);

  const handleClick = () => {
    dispatch(addProduct({ products, quantity, price, total }));
  };

  const title = "choose your size";

  return (
    <div className="single-product">
      <div className="wrapper">
        <div className="single-product_searchbar">
          <SearchBar />
        </div>

        <div className="single-product_container">
          <div className="single-product_container_image-container">
            <div className="image">
              <img src={products.image} alt="" />
            </div>
          </div>

          <div className="single-product_container_info ">
            <div className="single-product_container_info_container">
              <h3>{products.title}</h3>
              <div className="single-product_container_info_price">
                <p className="pr-2 text-xl ">€{products.price}</p>
                <p className="">VAT included</p>
              </div>

              <SelectBar title={title} />
              <button
                className="single-product_container_info_button"
                onClick={handleClick}
              >
                Add to bag
              </button>

              {/* <button className="single-product_container_info_button">
              go to bag
            </button> */}

              {/* <div className="single-product_container_info_card-info border-gray-400 border mt-12">
              <ul className="">
                <li className="border-b border-gray-400   p-4 text-center">
                  shipped by webshopper
                </li>
                <li className="border-b border-gray-400 p-4">
                  <p>fast delivery</p>
                  <p>1-3 working day</p>
                  <ul className="flex justify-between">
                    <li>Fast delivery</li>
                    <li>10 EUR</li>
                  </ul>
                </li>

                <li className="border-b border-gray-400 p-4">
                  <p>deliver</p>
                  3-5 working days
                  <ul className="flex justify-between">
                    <li>Standard delivery</li>
                    <li>Free</li>
                  </ul>
                </li>

                <li className="border-b border-gray-400 p-4">
                  Free Delivery and free returns
                </li>

                <li className=" p-4">
                  <p>30 days return policy</p>
                </li>
              </ul>
            </div> */}
            </div>

            <div
              className="single-product_container_info_border"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="accordion ">
                <span>Description</span>
                <span>{!isOpen ? <AiOutlineDown /> : <AiOutlineUp />}</span>
              </div>
              {isOpen && (
                <div class="accordion-panel">
                  <p>{products.description}</p>
                </div>
              )}
            </div>

            {/* <div onClick={() => setIsOpen(!isOpen)}>
            <div className="accordion flex justify-between w-full border-t bg-white active:bg-gray-400 hover:bg-gray-400 text-black font-semibold text-left text-lg cursor-pointer p-4  transition duration-150">
              <span>Details and features</span>{" "}
              <span>{!isOpen ? <AiOutlineDown /> : <AiOutlineUp />}</span>
            </div>
            {isOpen && (
              <div class="panel px-4 bg-white overflow-hidden">
                <p>
                  "Fully unlocked and compatible with any carrier of choice
                  (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket,
                  Metro, etc.)." 1:"The device does not come with headphones or
                  a SIM card. It does include a charger and charging cable that
                  may be generic, in which case it will be UL or Mfi (Made for
                  iPhone) Certified." 2:"Inspected and guaranteed to have
                  minimal cosmetic damage, which is not noticeable when the
                  device is held at arms length." 3:"Successfully passed a full
                  diagnostic test which ensures like-new functionality and
                  removal of any prior-user personal information." 4:"Tested for
                  battery health and guaranteed to have a minimum battery
                  capacity of 80%.
                </p>
              </div>
            )}
          </div> */}
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

      <div className="bottom"></div>
    </div>
  );
}
