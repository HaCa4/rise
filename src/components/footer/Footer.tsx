import React from "react";
import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="https://github.com/HaCa4" className="link">
        <p>Github</p>
      </a>
      <span className="span">&#169; 2022</span>
    </div>
  );
};

export default Footer;
