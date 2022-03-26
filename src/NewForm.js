import React, { useContext } from "react";
import "./newform.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function NewForm() {
  
  return (
    <div className="lf">
      <div className="loginform">
        <form>
          <div className="lfd">
            <button className="btn1">
              <FacebookIcon className="icon" /> Facebook
            </button>
            <button className="btn2">
              <GoogleIcon className="icon" />
              <span> </span>
              <span style={{ color: "#4885ed" }}>G</span>
              <span style={{ color: "#db3236" }}>o</span>
              <span style={{ color: "#f4c20d" }}>o</span>
              <span style={{ color: "#4885ed" }}>g</span>
              <span style={{ color: "#3cba54" }}>l</span>
              <span style={{ color: "#db3236" }}>e</span>
            </button>
          </div>
          <p>Or</p>
          <input className="a1" type="email" placeholder="Enter Email or Username" />
          
          <input  type="password" placeholder="Enter Password" />
          <br />
          <button
            onClick={(event) => {
              event.preventDefault();
             
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewForm;