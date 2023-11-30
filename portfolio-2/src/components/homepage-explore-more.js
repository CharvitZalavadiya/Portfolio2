import React, { useState } from "react";
import "./homepage-explore-more.css";
import { Link } from "react-router-dom";

function HomepageExploreMore() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="btn">
      <Link to="/aboutme">
        <button className={`page ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>Explore More</button>
      </Link>
    </div>
  );
}

export default HomepageExploreMore;