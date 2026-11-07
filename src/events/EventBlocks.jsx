import { STATUS_LABELS } from "../data/eventsData.js";

/* Renders the content blocks defined in eventsData.js.
   Block types: p, ul, ol, table, kv, note, events (see the data file header). */

function renderItem(it, i) {
  if (typeof it === "string") return <li key={i}>{it}</li>;
  return (
    <li key={i}>
      {it.text}
      <ul>{it.sub.map(renderItem)}</ul>
    </li>
  );
}

export function StatusBadge({ status }) {
  if (!status || !STATUS_LABELS[status]) return null;
  return <span className={`evp-badge evp-badge-${status}`}>{STATUS_LABELS[status]}</span>;
}

export default function EventBlock({ block, tabs, onGo }) {
  switch (block.t) {
    case "p":
      return <p className="evp-p">{block.text}</p>;
    case "note":
      return <p className="evp-note">{block.text}</p>;
    case "ul":
      return <ul className="evp-ul">{block.items.map(renderItem)}</ul>;
    case "ol":
      return <ol className="evp-ol">{block.items.map(renderItem)}</ol>;
    case "table":
      return (
        <div className="evp-tablewrap">
          <table className="evp-table">
            <thead>
              <tr>{block.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "kv":
      return (
        <dl className="evp-kv">
          {block.rows.map((r, i) => (
            <div className="evp-kv-row" key={i}>
              <dt>{r.k}</dt>
              <dd>{r.v}<StatusBadge status={r.s} /></dd>
            </div>
          ))}
        </dl>
      );
    case "events":
      return (
        <ul className="evp-events">
          {block.ids.map(id => {
            const t = tabs.find(x => x.id === id);
            if (!t) return null;
            return (
              <li key={id}>
                <button type="button" className="evp-chip" onClick={() => onGo(id)}>
                  {t.label}
                  {block.notes?.[id] && <small>{block.notes[id]}</small>}
                </button>
              </li>
            );
          })}
        </ul>
      );
    default:
      return null;
  }
}
