import React from "react";
import Typical from "react-typical";
import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {



  return (

    <div className="home-container">
      <div className="profile-picture">
        <div className="profile-picture-bg"></div>
      </div>

      <span className="greeting-text">
        {" "}
        Hi, I am 
        <span className="name-text">
        {" "}
            Jesus
        </span>
      </span>
      <div className="profile-details-role">
        <div className="greeting-text">
          <h1>
            {" "}
            <Typical
              loop={Infinity}
              steps={[
                "Full Stack Developer",
                2000,
                "MERN Stack",
                2000,
                "Passionate about technology",
                2000,
                "Never stop learning",
                2000,
              ]}
            />
          </h1>
        </div>

        <div className="profile-options">
          <Button 
            variant="primary"
            size="lg"
          /* className="btn btn-seeProjects" */>
            {""}
            See my projects{" "}
          </Button>

          <Button /* className="btn btn-contactMe" */>
            {""}
            Contact Me{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;