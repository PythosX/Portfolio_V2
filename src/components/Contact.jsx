import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const { email, githubUrl, linkedinUrl } = portfolio.contact;
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="section-kicker"><span>05 / CONTACT</span><span>HAVE SOMETHING IN MIND?</span></div>
      <Reveal className="contact-content">
        <p className="red-dot-label"><i /> OPEN TO CONVERSATIONS</p>
        <h2>HAVE AN IDEA?<br /><em>LET'S BUILD IT.</em></h2>
        <p className="contact-sub">Have a project, collaboration or interesting problem? Let's talk about what we can make.</p>
        {email ? <a className="contact-button" href={`mailto:${email}`}>START A CONVERSATION <ArrowUpRight /></a> : <p className="edit-note">Add your email in <code>src/data/portfolio.js</code> to enable direct contact.</p>}
      </Reveal>
      <div className="contact-socials">
        {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer"><Github size={17} /> GITHUB <ArrowUpRight size={13} /></a>}
        {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN <ArrowUpRight size={13} /></a>}
        {!githubUrl && !linkedinUrl && <span className="edit-note">Add real social profile URLs in the content configuration.</span>}
      </div>
    </section>
  );
}