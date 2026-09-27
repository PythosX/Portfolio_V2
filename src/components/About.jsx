import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-kicker"><span>01 / ABOUT</span><span>A LITTLE ABOUT ME</span></div>
      <div className="about-layout">
        <Reveal className="about-heading-wrap"><h2 className="section-heading">{portfolio.about.headline.split("\n").map((line, i) => <span key={i}>{line}</span>)}</h2></Reveal>
        <Reveal className="about-copy" delay={.12}>
          <span className="red-dot-label"><i /> THE PERSON BEHIND THE PIXELS</span>
          <p>{portfolio.about.description}</p>
          <a className="inline-link" href="#contact">MORE ABOUT MY APPROACH <ArrowUpRight size={15} /></a>
        </Reveal>
      </div>
      <div className="about-bottom"><span>DESIGN-MINDED. DETAIL-DRIVEN.</span><span className="about-rule" /><span>BASED IN INDIA <b>✳</b></span></div>
    </section>
  );
}