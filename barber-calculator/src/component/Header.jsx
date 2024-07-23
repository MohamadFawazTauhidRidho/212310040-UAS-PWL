import React from "react";

import logo from "../../src/assets/Logo-kingbarber.jpg";

const Header = () => {
  return (
    <div>
      <div className="w-full h-20 px-20 bg-black flex items-center">
        <img src={logo} className="w-12" />
      </div>
    </div>
  );
};

export default Header;
