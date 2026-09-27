import { ArrowUpRight, ArrowRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-grain" />
      {type === "ghost" && <><div className="ghost-orbit orbit-one" /><div className="ghost-orbit orbit-two" /><div className="ghost-core">G<span>M</span></div><div className="visual-caption">INBOX / INTELLIGENCE</div></>}
      {type === "chitra" && <><div className="chitra-frame"><span>CHITRA</span><div className="chitra-sun" /><div className="chitra-hill hill-a" /><div className="chitra-hill hill-b" /></div><div className="visual-caption">IMAGINATION, IN CONTEXT</div></>}
      {type === "daymate" && <><div className="day-card"><div className="day-card-top">TODAY <span>✳</span></div><div className="day-line long" /><div className="day-line" /><div className="day-task"><i /> Focus session <b>09:30</b></div><div className="day-task"><i /> Project review <b>14:00</b></div><div className="day-task"><i /> Remember to call <b>18:00</b></div></div><div className="visual-caption">MAKE SPACE FOR WHAT MATTERS</div></>}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-kicker"><span>02 / SELECTED WORK</span><span>EXPERIMENTS, IDEAS & DIGITAL PRODUCTS</span></div>
      <Reveal className="projects-title-row"><h2 className="section-heading">SELECTED <em>WORK</em></h2><p>A collection of concepts and products exploring the space between useful and unusual.</p></Reveal>
      <div className="project-list">
        {portfolio.projects.map((project, index) => (
          <Reveal key={project.number} delay={index * .08} className={`project-row ${index % 2 ? "project-row-reverse" : ""}`}>
            <div className="project-art"><ProjectVisual type={project.visual} /><span className="project-art-index">{project.number} / 03</span></div>
            <div className="project-info">
              <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
              <h3>{project.name}<span className="project-arrow"><ArrowUpRight size={22} /></span></h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.technologies.map(tag => <span key={tag}>{tag}</span>)}</div>
              {(project.liveUrl || project.sourceUrl) && <div className="project-links">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">LIVE PROJECT <ArrowUpRight size={14} /></a>}
                {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noreferrer">SOURCE CODE <ArrowUpRight size={14} /></a>}
              </div>}
              <span className="project-type-note">PROJECT OVERVIEW</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}