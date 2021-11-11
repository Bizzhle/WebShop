import React, { useState } from "react";
import { othermenu } from "../mainmenu";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Othermenu() {
  const [hover, setHover] = useState(false);
  const ShowHover = (id) => setHover((prev) => (prev === id ? null : id));

  return (
    <div className="section2">
      {othermenu &&
        othermenu.map((item, i) => (
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
            <p className="section2_item_title">{item.title}</p>
            {hover === item.id ? (
              <span className="section2_item_hover">
                <p className="section2_item_hover_description">
                  {item.description}
                </p>

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
