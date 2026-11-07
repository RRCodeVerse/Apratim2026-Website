/* One decorative vase + its category label.
   Uses the existing /assets/vase.webp at the existing size (see events.css).
   Mouse hover / keyboard focus report to the row, which shows the scroll.
   Touch taps skip the hover entirely and go straight to onSelect (popup, Phase 5). */
export default function Vase({ category, active, onSelect, onHoverStart, onHoverEnd }) {
  const mouseEnter = e => { if (e.pointerType === "mouse") onHoverStart?.(category, e.currentTarget); };
  const mouseLeave = e => { if (e.pointerType === "mouse") onHoverEnd?.(); };
  const focus = e => { if (e.currentTarget.matches(":focus-visible")) onHoverStart?.(category, e.currentTarget); };

  return (
    <li className="ev-item">
      <button
        type="button"
        className="ev-vase"
        data-category={category.id}
        data-active={active ? "true" : undefined}
        aria-label={category.name}
        onClick={() => onSelect?.(category.id)}
        onPointerEnter={mouseEnter}
        onPointerLeave={mouseLeave}
        onFocus={focus}
        onBlur={() => onHoverEnd?.()}
      >
        <span className="ev-vase-art">
          <img className="ev-vase-img" src="/assets/vase.webp" alt="" draggable="false" />
        </span>
        <span className="ev-vase-name">{category.name}</span>
      </button>
    </li>
  );
}
