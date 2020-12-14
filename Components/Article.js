import React from "react";
import learningSvg from "../images/at-school.jpg";

function Article() {
  return (
    <div className="article__container">
      <div className="article__content">
        <h2>Peta Jeannie</h2>
        <p>I am a front-end developer learner who comes from Vavatenina</p>
      </div>
        <img src={learningSvg} />
    </div>
  );
}

export default Article;
