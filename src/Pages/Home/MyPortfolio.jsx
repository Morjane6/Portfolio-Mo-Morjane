import data from "../../data/index.json";
import "../../css/MyPortfolio.css";

export default function MyPortfolio() {
  return (
    <>
      {/* Andre seksjon */}
      <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container-box">
          <div className="portfolio--container">
            <h1 className="section--heading">Recent Projects</h1>
          </div>
        </div>

        <div className="portfolio--section--container">
          {data?.portfolio?.map((item, index) => (
            <div key={index} className="portfolio--section--card">
              <div className="portfolio--section--img">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
                <div className="btn-container">
                  <button
                    className="btn btn-github"
                    onClick={() => window.open(item.github, "_blank")}
                  >
                    Visit Github
                  </button>
                  <button
                    className="btn btn-color-1"
                    onClick={() => window.open(item.demo, "_blank")}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
