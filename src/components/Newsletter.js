import React from "react";

function Newsletter() {
  return (
    <div className="newsletter">
      <h1>Newletter</h1>
      <div className="newsletter_desc">
        Get timely updates from your favorite products.
      </div>
      <div className="newsletter_inputContainer">
        <input type="text" placeholder="your email" />
        <button className="send-button">SEND</button>
      </div>
    </div>
  );
}

export default Newsletter;
