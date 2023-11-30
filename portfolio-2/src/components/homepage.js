import React, { useState } from "react";
import "./homepage.css";
import photo from "./photo.jpg";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function Homepage() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  return (
    <div className={`page ${isClicked?"slideUp":""}`}>
      <div className="photo-name">
        <img src={photo} className="photo" alt=" " />
        Charvit Zalavadiya
      </div>
      <div className="typing-skill">
        <Typed
          strings={["Web Developer", "UI-UX Designer"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
      <div className="btn">
        <Link to="/info">
          <button onClick={handleClick}>Explore More</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
