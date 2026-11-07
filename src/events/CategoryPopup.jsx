import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import EventTabs from "./EventTabs.jsx";
import TabPanel from "./TabPanel.jsx";
import "./popup.css";

const FOCUSABLE = 'button:not([disabled]),[href],[tabindex]:not([tabindex="-1"])';

/* The popup's visual shell + behaviour. Exported separately from the portal wrapper. */
export function PopupBody({ category, onClose, dialogRef }) {
  const uid = useId().replace(/:/g, "");
  const [tabId, setTabId] = useState(category.tabs[0].id);
  const content = useRef(null);
  const tab = category.tabs.find(t => t.id === tabId) ?? category.tabs[0];

  useEffect(() => { content.current?.scrollTo({ top: 0 }); }, [tabId]);

  const onKeyDown = e => {
    if (e.key === "Escape") { e.stopPropagation(); onClose(); return; }
    if (e.key !== "Tab") return;                       // keep keyboard focus inside the popup
    const els = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <div className="evp" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={`${uid}-title`} tabIndex={-1} onKeyDown={onKeyDown}>
      <div className="evp-frame">
        {["tl", "tr", "bl", "br"].map(c => <span key={c} className={`evp-corner evp-corner-${c}`} aria-hidden="true" />)}

        <div className="evp-head">
          <div className="evp-titlewrap">
            <span className="evp-orn" aria-hidden="true" />
            <h1 className="evp-title" id={`${uid}-title`}>{category.name}</h1>
            <span className="evp-orn evp-orn-r" aria-hidden="true" />
          </div>
          <button type="button" className="evp-close" aria-label="Close" onClick={onClose}>
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="evp-scroll">
          <div className="evp-roll evp-roll-top">
            <img className="evp-cap evp-cap-l" src="/assets/ev-cap-top.webp" alt="" draggable="false" />
            <img className="evp-cap evp-cap-r" src="/assets/ev-cap-top.webp" alt="" draggable="false" />
          </div>

          <div className="evp-paper">
            <EventTabs tabs={category.tabs} activeId={tab.id} onChange={setTabId} idPrefix={uid} />
            <div
              className="evp-content"
              ref={content}
              role="tabpanel"
              id={`${uid}-panel`}
              aria-labelledby={`${uid}-tab-${tab.id}`}
              tabIndex={0}
            >
              <div className="evp-inner">
                <TabPanel category={category} tab={tab} onGo={setTabId} />
              </div>
            </div>
          </div>

          <div className="evp-roll evp-roll-bottom">
            <img className="evp-cap evp-cap-l" src="/assets/ev-cap-bottom.webp" alt="" draggable="false" />
            <img className="evp-cap evp-cap-r" src="/assets/ev-cap-bottom.webp" alt="" draggable="false" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CategoryPopup({ category, onClose }) {
  const dialogRef = useRef(null);

  // lock page scroll while open; restore scroll lock + focus on close
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, []);

  return createPortal(<PopupBody category={category} onClose={onClose} dialogRef={dialogRef} />, document.body);
}
