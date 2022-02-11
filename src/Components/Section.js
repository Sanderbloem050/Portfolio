import React, { useState } from "react";
import "./styles/Section.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Section = () => {
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <div className="main">
      <div>
        <h1 className="main-header">
          <span>Sander Bloem</span>{" "}
        </h1>
        <p className="main-status">
          Functionele uitdagingen, innovatieve toepassingen, Games in zowel 2D
          als 3D als deze zaken combineren en uitzoeken is waar ik gelukkig van
          wordt. Deze mooie uitdagingen vind ik in mijn werk bij deFine it in
          Groningen.
        </p>
        <div className="main-btn">
          <Link onClick={showModal} to="/">
            Bekijk werk
          </Link>
        </div>

        {modalActive && <Modal showModal={showModal} />}
      </div>
    </div>
  );
};

export default Section;
