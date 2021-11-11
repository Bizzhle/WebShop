import React from "react";
import HeroSlider from "../components/HeroSlider";
import Othermenu from "../components/Othermenu";
import Thirdmenu from "../components/Thirdmenu";
import Fourthmenu from "../components/Fourthmenu";
import Fifthmenu from "../components/Fifthmenu";
import Showroom from "../components/Showroom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <section>
          <HeroSlider />
        </section>
        <section>
          <Othermenu />
        </section>
        <section>
          <Thirdmenu />
        </section>
        <section>
          <Fourthmenu />
        </section>
        <section>
          <Fifthmenu />
        </section>
        <section>
          <Showroom />
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </div>
  );
}
