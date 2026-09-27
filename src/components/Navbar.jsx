import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolio } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Work", "#projects"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${portfolio.name}, back to top`}>
        <span className="brand-mark">K<span>.</span></span>
        <span className="brand-name">KARAN <i>®</i></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}<span className="nav-line" /></a>)}
      </nav>
      <a className="nav-cta" href="#contact">LET'S TALK <ArrowUpRight size={14} /></a>
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, href], i) => (
            <a key={href} href={href} onClick={close}><span>0{i + 1}</span>{label}<ArrowUpRight size={17} /></a>
          ))}
        </nav>
      )}
    </header>
  );
}