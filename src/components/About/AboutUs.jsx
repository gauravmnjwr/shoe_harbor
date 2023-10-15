import React from "react";
import "./AboutUs.css"; // Import CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Our Shoe Company</h2>
      <p>
        Join us on this exciting journey and discover a world of shoes that
        redefine your style and elevate your comfort. Your feet deserve the
        best, and we're here to deliver just that.
      </p>
      <h1>Write to us</h1>
      <form action="">
        <input type="text" name="" id="" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write Something"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AboutUs;
