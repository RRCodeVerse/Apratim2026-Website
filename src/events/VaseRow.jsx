import { useCallback, useEffect, useRef, useState } from "react";
import Vase from "./Vase.jsx";
import CategoryScroll from "./CategoryScroll.jsx";

function Chevron({ dir }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      <path
        d={dir === "left" ? "M15 4 7 12l8 8" : "M9 4l8 8-8 8"}
        fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

/* Horizontal row of vases with left/right arrows.
   Native scrolling + scroll-snap keeps swipe working on touch;
   arrows work on both desktop and mobile. */
export default function VaseRow({ categories, onSelect }) {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [active, setActive] = useState(null); // { id, cx, top } of the hovered vase
  const timer = useRef(0);

  const cancelHide = () => clearTimeout(timer.current);
  const show = (cat, btn) => {
    cancelHide();
    const r = (btn.querySelector("img") || btn).getBoundingClientRect();
    setActive({ id: cat.id, cx: r.left + r.width / 2, top: r.top });
  };
  const hideSoon = () => { cancelHide(); timer.current = setTimeout(() => setActive(null), 160); };
  const hideNow = () => { cancelHide(); setActive(null); };
  const select = id => { hideNow(); onSelect?.(id); };   // close the hover scroll, then open the popup

  // any scroll (page or vase row) or resize closes the scroll so it never floats in the wrong place
  useEffect(() => {
    if (!active) return;
    addEventListener("scroll", hideNow, true);
    addEventListener("resize", hideNow);
    return () => { removeEventListener("scroll", hideNow, true); removeEventListener("resize", hideNow); };
  }, [active]);
  useEffect(() => cancelHide, []);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft >= max - 2 });
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => { el.removeEventListener("scroll", measure); ro.disconnect(); };
  }, [measure]);

  const page = dir => {
    const el = track.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="ev-row" id="vases">
      <button type="button" className="ev-arrow ev-arrow-left" aria-label="Show previous categories"
        disabled={edge.start} onClick={() => page(-1)}><Chevron dir="left" /></button>

      <ul className="ev-track" ref={track} aria-label="Event categories">
        {categories.map(c => (
          <Vase key={c.id} category={c} active={active?.id === c.id} onSelect={select}
            onHoverStart={show} onHoverEnd={hideSoon} />
        ))}
      </ul>

      <button type="button" className="ev-arrow ev-arrow-right" aria-label="Show next categories"
        disabled={edge.end} onClick={() => page(1)}><Chevron dir="right" /></button>

      {active && (
        <CategoryScroll
          category={categories.find(c => c.id === active.id)}
          pos={active}
          onEnter={cancelHide}
          onLeave={hideSoon}
          onSelect={select}
        />
      )}
    </div>
  );
}
