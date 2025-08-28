import data from "../../data/index.json";

import "../../css/Myskills.css";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h1 className="section--heading">Skills</h1>
      </div>

      <div className="skills--section--container">
        {data?.skills?.map((skill, index) => (
          <div key={index} className="skills--section--card">
            {/* Hovedikon */}
            <div className="skills--section--img">
              <img src={skill.src} alt={skill.title} />
            </div>

            {/* Hovedtittel */}
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{skill.title}</h3>

              {/* Liste over underferdigheter */}
              {skill.description.map((desc, idx) => (
                <article key={idx} className="skill-item">
                 
                  <div>
                    <h4>{desc.title}</h4>
                    <p>{desc.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
