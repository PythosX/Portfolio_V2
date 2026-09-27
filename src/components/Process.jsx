import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="section-kicker"><span>04 / PROCESS</span><span>FROM FIRST THOUGHT TO FINAL DETAIL</span></div>
      <Reveal className="process-intro"><h2 className="section-heading">A THOUGHTFUL<br /><em>WAY OF WORKING.</em></h2><p>Good work comes from asking better questions, making intentional choices and refining the details.</p></Reveal>
      <div className="process-grid">
        {portfolio.process.map((step, i) => <Reveal key={step.number} delay={i * .07} className="process-step"><span className="process-number">{step.number}</span><div className="process-marker"><i /></div><h3>{step.title}</h3><p>{step.description}</p></Reveal>)}
      </div>
    </section>
  );
}