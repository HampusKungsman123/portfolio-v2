import React from "react";
import "./main.css";

function Main() {
  return (
    <div className="mainWrapper">
      <main>
        <h1>
          Hello there! <span id="wave">👋</span>
        </h1>
        <h2>
          My name is <span id="namn">Hampus Kungsman!</span>
        </h2>
        <div className="typewriter">
          <h2 id="twText">&lt;Aspiring Web Developer&gt;</h2>
        </div>
      </main>
    </div>
  );
}

export default Main;
