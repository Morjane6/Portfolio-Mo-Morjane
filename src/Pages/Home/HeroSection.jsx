import "../../css/HeroSection.css";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <h2 className="hero--section--title">
            <span className="hero--section-title--color">Webutvikler & </span>
            Programmerer
          </h2>
          <p className="hero--section-description">
            Jeg utvikler moderne og brukervennlige webapplikasjoner og bygger
            intelligente systemer, fra AI-løsninger og maskinlæringsmodeller
            til GUI-baserte programmer. Utforsk mine prosjekter{" "}
            <Link
              to="MyPortfolio"
              smooth={true}
              duration={600}
              className="link"
            >
              her
            </Link>
            .
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
            onClick={() => window.open("./cv/Mo-MorjaneCV-2025.pdf")}
          >
            Download CV
          </button>

          <button
            className="btn btn-github"
            onClick={() => window.open("https://github.com/Morjane6", "_blank")}
          >
            Visit My GitHub
          </button>
        </div>
      </div>

      <div className="hero--section--img">
        <img src="./img/profilBilde_main1.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
