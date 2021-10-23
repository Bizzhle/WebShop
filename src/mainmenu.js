import React from "react";

export const Mainmenu = [
  {
    id: 1,
    title: "Products",
    path: "/",
    cName: "styles.nav_navlink",
    lists: [],
    items: [
      {
        id: 1,
        category: "T-shirts",
        subCategories: [
          {
            id: 1,
            name: "All t-shirts",
            path: "#",
          },
          {
            id: 2,
            name: "Classic t-shirts",
            path: "#",
          },
        ],
      },
      {
        id: 2,

        category: "Polo-shirts",
        subCategories: [
          {
            id: 1,
            name: "All polo shirts",
            path: "#",
          },
          {
            name: "Classic polo shirts",
            path: "#",
          },
        ],
      },
      {
        id: 3,

        category: "Sweaters & sweatshirts",
        subCategories: [
          {
            id: 1,
            name: "All sweaters & sweatshirts",
            path: "#",
          },
          {
            id: 2,
            name: "Sweatshirts",
            path: "#",
          },
        ],
      },
      {
        id: 4,

        category: "Masks",
        subCategories: [],
      },
      {
        id: 5,

        category: "Caps & Hats",
        subCategories: [],
      },
    ],
  },
  {
    id: 2,
    title: "Branding",
    path: "/",
    cName: "styles.nav_navlink",
    items: [],
    lists: [
      {
        name: "Textile printing",
        pic: "./images/bmw.jpg",
        color: "white",
      },
      {
        name: "Embrodiery",
        pic: "./images/florist.jpeg",
        color: "white",
      },
      {
        name: "Flock printing",
        pic: "./images/alphabet.jpg",
        color: "white",
      },
      {
        name: "Digital printing",
        pic: "./images/coffee.jpeg",
        color: "white",
      },
    ],
  },
  {
    id: 3,
    title: "Credentials",
    path: "/",
    cName: "styles.nav_navlink",
    lists: [],
    items: [],
  },
  {
    id: 4,
    title: "What we do",
    path: "/",
    cName: "styles.nav_navlink",
    items: [],
    lists: [
      {
        name: "Production",
        pic: "./images/restaurant.jpeg",
        color: "black",
      },
      {
        name: "Corporate fashion",
        pic: "./images/fitness.jpeg",
        color: "white",
      },
      {
        name: "Merchandise",
        pic: "./images/cola.jpeg",
        color: "white",
      },
      {
        name: "Showroom",
        pic: "./images/hotdog.jpeg",
        color: "black",
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/",
    cName: "styles.nav_navlink",
    lists: [],
    items: [],
  },
];
