import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
      <div>
        <div>
          <div>
            <h4>
              Welcome to InfoTech University
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Please register or login
            </p>
            <br />
            <div>
              <Link
                to="/register"
              >
                Register
              </Link>
            </div>
            <div>
              <Link
                to="/login"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Landing;