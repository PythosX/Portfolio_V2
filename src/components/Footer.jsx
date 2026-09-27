import { ArrowUp } from "lucide-react";
import { portfolio } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#top">K<span>.</span></a>
      <span>© {new Date().getFullYear()} {portfolio.name}. MADE WITH INTENT.</span>
      <a className="back-top" href="#top">BACK TO TOP <ArrowUp size={14} /></a>
    </footer>
  );
}