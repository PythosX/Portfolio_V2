import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-kicker"><span>03 / CAPABILITIES</span><span>WHAT I BRING TO THE TABLE</span></div>
      <Reveal><h2 className="section-heading">IDEAS INTO <em>INTERFACES.</em></h2></Reveal>
      <div className="skills-grid">
        {portfolio.skills.map((skill, i) => <Reveal key={skill} delay={i * .04} className="skill-item"><span>0{i + 1}</span><h3>{skill}</h3><b>↗</b></Reveal>)}
      </div>
    </section>
  );
}