import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="login mx-auto shadow-2">
        <div
          className="container-fluid bg-light"
          style={{ width: "100vw", height: "6rem" }}
        >
          <div className="d-flex flex-row pt-3 pb-3">
            <span className="mx-auto fs-3">PASSWORD FLOW app</span>
            <span>
              <button
                className="btn btn-outline-none"
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                  alert("You have successfully Logged Out !!! 😉");
                }}
              >
                LOGOUT
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
