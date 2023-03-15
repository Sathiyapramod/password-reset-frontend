import React, { useState } from "react";
import { API } from "../General";
import { useNavigate } from "react-router-dom";

function Verification() {
  const navigate = useNavigate();
  const [codeword, setCodeword] = useState("");
  async function sendOTP() {
    const data = { codeword };
    const verifyOTP = await fetch(`${API}/password/verification`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    if (verifyOTP.response === 401) {
      console.log("error");
      navigate("/forgotpassword");
    } else {
      const result = await verifyOTP.json();
      if(result.OTP != data.codeword){
        alert("Error !!! Password Mismatch !!!");
        navigate("/forgotpassword");
      }
      else
        navigate("/changepassword");
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
            <label className="form-label">Enter OTP</label>
          </div>
          <div className="col-7">
            <input
              type="email"
              className="form-control me-2"
              onChange={(event) => setCodeword(event.target.value)}
            />
          </div>
          <div>
            <button
              className="btn btn-outline-primary"
              onClick={() => sendOTP()}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
