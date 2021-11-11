import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { MdMailOutline, MdPhone, MdRoom } from "react-icons/md";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <h1 className="footer_left_logo">TexTil</h1>
        <p className="footer_left_desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="footer_left_socials">
          <div
            className="footer_left_socials_socialIcon"
            style={{ color: "#3B5999" }}
          >
            <FaInstagram />
          </div>
          <div
            className="footer_left_socials_socialIcon"
            style={{ color: "#E4405F" }}
          >
            <FaFacebook />
          </div>
          <div className="footer_left_socials_socialIcon">
            <FaTwitter style={{ color: "#55ACEE" }} />
          </div>
          <div
            className="footer_left_socials_socialIcon"
            style={{ color: "#E60023" }}
          >
            <FaPinterest />
          </div>
        </div>
      </div>
      <div className="footer_center">
        <h3>Useful links</h3>
        <ul className="footer_center_list">
          <li className="listItem">Home</li>
          <li className="listItem">Cart</li>
          <li className="listItem">Products</li>
          <li className="listItem">Accessories</li>
          <li className="listItem">Wishlist</li>
          <li className="listItem">Terms</li>
        </ul>
      </div>
      <div className="footer_right">
        <h3>Contact</h3>
        <div className="contactItem">
          <MdRoom style={{ marginRight: "10px" }} />{" "}
          <p>622 Dixie Path , South Tobinchester 98336</p>
        </div>
        <div className="contactItem">
          <MdPhone style={{ marginRight: "10px" }} /> <tel>+1 234 56 78</tel>
        </div>
        <div className="contactItem">
          <MdMailOutline style={{ marginRight: "10px" }} />{" "}
          <p> contact@lama.dev</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
