import React from "react";
// import  CV from "../../assets/CV.pdf"
const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/17kix7wuqyIMuG31p54-vPJxKEJLtX5pz/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        download
        className="btn"
      >
        DOWNLOAD CV
      </a>
      <a href="#contact" className="btn btn-primary">
        LET'S TALK
      </a>
    </div>
  );
};

export default CTA;
