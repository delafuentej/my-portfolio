import React /*  { useEffect} */ from "react";
import Typical from "react-typical";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { ImXing } from "react-icons/im";
import { IoMdConstruct } from "react-icons/io";
/* import Button from "react-bootstrap/Button";
 */ import "./Home.css";

const Home = () => {
  /* useEffect(()=>{
    fetch("https://api.glinkedin===============================');
      console.log(res);
      console.log('====================================');
    })
  },[]) */

  return (
    <div className="home-container">
      <h1 className="home-title">
       {/*  Portfolio under construction{" "} */}
       {/*  <span style={{ color: "turquoise", fontSize: "2em" }}>
          <IoMdConstruct />
        </span> */}
      </h1>
      <div className="profile-picture">
        <div className="profile-picture-bg"></div>
      </div>

      <span className="greeting-text">
        {" "}
        Hi, I am
        <span className="name-text"> Jesús</span>
      </span>
      <div className="profile-details-role">
        <div className="greeting-text">
          <h2>
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
          </h2>
        </div>
          
        <h5 className="visit-title">Visit me on:</h5>
        <ul className="home-icons">
         
          <li>
            <a
              href="https://www.linkedin.com/in/jes%C3%BAs-de-la-fuente-b5325047/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="linkedinIcon">
                <SiLinkedin />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/delafuentej"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="githubIcon">
                <SiGithub />
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.xing.com/profile/JESUS_DELAFUENTEDELUCAS2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="xingIcon">
                <ImXing />
              </div>
            </a>
          </li>
        </ul>

        {/*   <div className="profile-options">
          <Button
            variant="dark"
            size="lg"
            style={{
              margin: "20px auto",
            }}
           
          >
            My projects{" "}
          </Button>

          <Button
            variant="dark"
            size="lg"
            style={{
              marginLeft: "30px",
            }}
            
          >
            Contact Me
          </Button>
        </div>  */}
      </div>
    </div>
  );
};

export default Home;
