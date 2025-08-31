import "../../css/HeroSection.css";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--title">Hei, Jeg er Mohammed Morjane</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Webutvikler</span>
            <br />
            Fullstack 
          </h1>
          <p className="hero--section-description">
            Målet mitt er å bygge løsninger som både <br /> ser bra ut og
            fungerer godt for brukeren.
          </p>
        </div>

        {/* Knappene pakket i egen flex-container */}
        <div className="hero--section--buttons">
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = "mailto:mohammed.morjane@hotmail.com";
            }}
          >
            Contact Me
          </button>

          <button
            className="btn btn-color-1"
            onClick={() => window.open("./img/Mohammed_Morjane_CV_2025.pdf")}
          >
            Download CV
          </button>

          <button
            className="btn btn-github"
            onClick={() =>
              window.open("https://github.com/Morjane6", "_blank")
            }
          >
            Visit My GitHub
          </button>
        </div>
      </div>

      <div className="hero--section--img">
        <img src="./img/hero-img-cartoon.png" alt="Hero Section" />
      </div>
    </section>
  );
}
