import React from "react";
import { Link } from "react-router-dom";
import "./styles/Info.css";

const Info = () => {
  return (
    <div className="info-section">
      <div className="info-about">
        <h3>
          Over <span>Sander</span>
        </h3>
        <p className="info-about-status">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quia
          saepe aliquam commodi quae excepturi expedita reiciendis possimus
          corporis totam ipsum soluta velit vero quas ex mollitia fugit,
          necessitatibus assumenda. Quidem, expedita itaque! Et repellendus
          quisquam magnam, tempora vel perspiciatis non consequuntur alias dolor
          consequatur tempore debitis dignissimos magni est, aliquid aut iusto
          minima mollitia quam totam ab ad assumenda amet iste. Quo optio ipsam
          libero, vero doloribus perferendis hic vel eveniet inventore velit
          rem.
        </p>
        <div className="info-btn">
          <Link to="/">More</Link>
        </div>
      </div>

      <div className="info-content">
        <h1>Competenties</h1>
        <p>Grafisch vormgeven</p>
        <p>Webdesign</p>
        <p>3D & 2D GameDevelopment</p>
        <h1>Talen</h1>
        <p>Javascript</p>
        <p>Html, CSS</p>
        <p>C#</p>
        <p>SQL</p>
      </div>
    </div>
  );
};

export default Info;
