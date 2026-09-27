import { useState } from "react";

export default function CharacterSwap() {
  const [hovered, setHovered] = useState(false);
  const [toggled, setToggled] = useState(false);
  const alternate = hovered || toggled;

  return (
    <button
      className={`character-stage ${alternate ? "is-alternate" : ""}`}
      type="button"
      aria-label={toggled ? "Show original character artwork" : "Toggle alternate portrait"}
      aria-pressed={toggled}
      onClick={() => {
        if (!hovered) setToggled(v => !v);
      }}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setHovered(true);
          }}
        onPointerLeave={() => setHovered(false)}
      onPointerLeave={() => setHovered(false)}
    >
      <span className="character-hint" aria-hidden="true">{alternate ? "01 / PORTRAIT" : "HOVER TO REVEAL"} <span>↗</span></span>
      <img className="character-image character-default" src="/images/hero-default.png" alt="Original futuristic hooded character artwork" fetchPriority="high" />
      <img className="character-image character-alternate" src="/images/hero-hover.png" alt="" aria-hidden="true" />
      <span className="character-focus-label">Press Enter / tap to switch portrait</span>
    </button>
  );
}
