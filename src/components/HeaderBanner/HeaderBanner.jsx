import React from "react";

import "./HeaderBanner.css";
import banner from "../../images/banner.jpg";

function HeaderBanner() {
  return (
    <div className="banner">
      <img src={banner} alt="One piece banner" />
    </div>
  );
}

export default HeaderBanner;
