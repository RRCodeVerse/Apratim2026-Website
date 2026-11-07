import { useEffect, useRef } from "react";

/* Tab bar: "Overview" + one pill per event, labelled with the real event names.
   Accessible tablist: roving tabindex, ←/→/Home/End keys. On narrow screens the
   row scrolls sideways and keeps the active pill in view. */
export default function EventTabs({ tabs, activeId, onChange, idPrefix }) {
  const refs = useRef({});

  const onKeyDown = e => {
    const i = tabs.findIndex(t => t.id === activeId);
    let n = null;
    if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = tabs.length - 1;
    if (n === null) return;
    e.preventDefault();
    onChange(tabs[n].id);
    refs.current[tabs[n].id]?.focus();
  };

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    refs.current[activeId]?.scrollIntoView({ block: "nearest", inline: "center", behavior: reduce ? "auto" : "smooth" });
  }, [activeId]);

  return (
    <div className="evp-tabs" role="tablist" aria-label="Events in this category" onKeyDown={onKeyDown}>
      {tabs.map(t => (
        <button
          key={t.id}
          ref={el => (refs.current[t.id] = el)}
          type="button"
          role="tab"
          id={`${idPrefix}-tab-${t.id}`}
          aria-selected={t.id === activeId}
          aria-controls={`${idPrefix}-panel`}
          tabIndex={t.id === activeId ? 0 : -1}
          className="evp-tab"
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
