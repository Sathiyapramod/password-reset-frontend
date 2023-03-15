import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../General";

function Forgotpassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  async function sendOTP(){
    const data = { email };
    const forgotpassword = await fetch(`${API}/password/forgotpassword`, {
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "content-type":"application/json"
      }
    });
    if(forgotpassword.status === 401){
      alert("Unauthorized Access. !!");
      navigate("/");
    }
    else {
      const result = await forgotpassword.json();
      // console.log(result);
      navigate("/verification");
    }
  }
  return (
    <div>
      <div className="border border-tertiary loginform mx-auto shadow">
        <span className="fs-1">Forgot Password</span>
        <br />
        <br />
        <div className="mx-auto row align-items-center gap-2">
          <div className="col-4">
            <label className="form-label">Enter Email Id</label>
          </div>
          <div className="col-7">
            <input type="email" className="form-control me-2" onChange={(event)=>setemail(event.target.value)}/>
          </div>
          <div>
            <button
              className="btn btn-outline-primary"
              onClick={() => sendOTP()}
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
