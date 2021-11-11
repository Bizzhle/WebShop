import React, { useState } from "react";
import { thirdmenu } from "../mainmenu";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function Thirdmenu() {
  const [hover, setHover] = useState(false);
  const ShowHover = (id) => setHover((prev) => (prev === id ? null : id));

  return (
    <div className="section3">
      {thirdmenu &&
        thirdmenu.map((item, i) => (
          <div
            key={item.id}
            className={
              hover === item.id
                ? "section3_item section3_hovered "
                : "section3_item"
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
              <span className="section3_item_hover">
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
