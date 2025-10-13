import "../../css/About.css";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-img.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="section--heading">About me</h1>
          <p className="hero--section-description">
            Jeg har en bachelor i IT og informasjonssystemer (2025) og en sterk
            interesse for webutvikling og programmering. Gjennom studiene har
            jeg opparbeidet meg solid kunnskap innen webapplikasjoner,
            programmering og SQL-databaser, og jeg har fullført flere prosjekter
            hvor samarbeid og problemløsning har stått sentralt. Etter mange år
            som vekter valgte jeg å skifte karriere for å følge interessen min
            for teknologi og utvikling. Erfaringen fra sikkerhetsbransjen har
            lært meg verdien av ansvar, struktur og god kommunikasjon,
            egenskaper jeg nå bruker for å forstå brukerbehov og skape gode,
            brukervennlige løsninger. Jeg trives med å utvikle løsninger som
            gjør en forskjell i folks hverdag, og jeg motiveres av å lære,
            utforske og bli stadig bedre som utvikler. I tillegg setter jeg pris
            på et godt arbeidsmiljø der kunnskapsdeling og samarbeid står høyt.
          </p>
        </div>
      </div>
    </section>
  );
}
