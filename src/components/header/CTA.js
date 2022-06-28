import React from "react";
// import  CV from "../../assets/CV.pdf"
const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/1s-wkg1u3rppWUd3OkxRWLHCNlBfdIlhs/view"
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
