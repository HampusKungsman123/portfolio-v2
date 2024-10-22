import React from "react";
import "./about.css";
import { FaHandPointRight } from "react-icons/fa";

function About() {
  const style = {
    color: "#e4b1f0",
    marginRight: "10px",
  };

  return (
    <div className="aboutWrapper">
      <section className="div1">
        <p>
          Hi! My name is Hampus Kungsman and I am from
          <span id="namn"> Stockholm, Sweden.</span> <br />I am currently
          studying to become a web developer at
          <span id="namn"> NTI Gymnasiet Södertörn.</span>
        </p>
      </section>
      <section className="div2">
        <p>
          Apart from coding, my hobbies include: <br />
          <ul className="hobbies">
            <li>
              <FaHandPointRight style={style} />
              <span id="hobbiesList">Playing videogames</span>
            </li>
            <li>
              <FaHandPointRight style={style} />
              Socializing with friends
            </li>
            <li>
              <FaHandPointRight style={style} />
              Watching movies
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default About;
