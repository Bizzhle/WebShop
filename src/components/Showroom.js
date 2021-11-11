import React, { useState } from "react";
import { sixthmenu } from "../mainmenu";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Showroom() {
  const [hover, setHover] = useState(null);
  const ShowHover = (id) => setHover((prev) => (prev === id ? null : id));
  console.log(hover);
  return (
    <div className="showroom">
      {sixthmenu &&
        sixthmenu.map((item, i) => (
          <div
            key={item.id}
            className={
              hover === item.id
                ? "section2_item section2_hovered "
                : "section2_item"
            }
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              color: `${item.color}`,
            }}
            onMouseEnter={() => ShowHover(item.id)}
            onMouseLeave={() => ShowHover(!hover)}
          >
            <p>{item.title}</p>
            {hover === item.id ? (
              <span className="section2_item_hover">
                <p>{item.description}</p>

                <p>
                  <HiOutlineArrowRight />{" "}
                </p>
              </span>
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
}
