import "./footer.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React from "react";
const Footer = () => {
  return (
    
      <div className=" my-0">
        <footer
          className="text-center text-white"
          style={{backgroundColor: "#3f51b5"}}
        >
          

          <div
            className="text-center p-1"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2023 Copyright:
            <a className="text-white" href="https://firojahmed1313.github.io/protfolio/">
              MD FIROJ AHMED
            </a>
          </div>
        </footer>
      </div>
    
  );
};

export default Footer;
