import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";
import CharacterSwap from "./CharacterSwap";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-topline"><span>INDEPENDENT CREATIVE DEVELOPER</span><span className="topline-right"><i /> AVAILABLE FOR SELECT PROJECTS</span></div>
      <div className="hero-copy hero-copy-left">
        <motion.p initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25 }}>{portfolio.intro}</motion.p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4, duration: .8 }}>
          {portfolio.headline.map((line, i) => <span key={line} className={i === 1 ? "headline-outline" : ""}>{line}</span>)}
        </motion.h1>
      </div>
      <CharacterSwap />
      <motion.div className="hero-copy hero-copy-right" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>
        <p>{portfolio.description}</p>
        <div className="hero-actions">
          <a className="button button-light" href="#contact">START A PROJECT <ArrowUpRight size={16} /></a>
          <a className="text-link" href="#projects">EXPLORE MY WORK <span>↘</span></a>
        </div>
      </motion.div>
      <a className="scroll-cue" href="#about"><span className="scroll-icon"><ArrowDown size={14} /></span><span>SCROLL TO EXPLORE</span></a>
      <span className="hero-index">01 — 05</span>
    </section>
  );
}