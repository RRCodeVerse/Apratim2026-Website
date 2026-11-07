import { createPortal } from "react-dom";

/* Parchment scroll that unrolls above a hovered vase (desktop only).
   Rendered in a portal with fixed positioning so it is never clipped by the
   horizontally scrolling vase row. It is mouse-only decoration: the vase button
   itself remains the accessible control, so this is aria-hidden. */
export default function CategoryScroll({ category, pos, onEnter, onLeave, onSelect }) {
  const vw = window.innerWidth;
  const w = Math.min(320, vw - 16);
  const left = Math.min(Math.max(pos.cx, w / 2 + 8), vw - w / 2 - 8);
  const bottom = window.innerHeight - pos.top + 8;
  const { name, hover } = category;

  return createPortal(
    <button
      type="button"
      className="ev-scroll"
      style={{ left, bottom, width: w }}
      tabIndex={-1}
      aria-hidden="true"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      onClick={() => onSelect?.(category.id)}
    >
      <span className="ev-scroll-body" key={category.id}>
        <span className="ev-tassel ev-tassel-a" />
        <span className="ev-tassel ev-tassel-b" />
        <span className="ev-roll" />
        <span className="ev-paper">
          <span className="ev-s-title">{name}</span>
          <span className="ev-s-kw">{hover.keywords}</span>
          <span className="ev-s-desc">{hover.blurb}</span>
          <span className="ev-s-cta">{hover.cta}</span>
        </span>
        <span className="ev-roll" />
      </span>
    </button>,
    document.body
  );
}
