import EventBlock from "./EventBlocks.jsx";

/* Content of one tab: kicker, title, tagline, then its sections. */
export default function TabPanel({ category, tab, onGo }) {
  const showTitle = tab.title && tab.title !== category.name; // Overview repeats the popup title
  return (
    <>
      <header className="evp-tabhead">
        {tab.kicker && <p className="evp-kicker">{tab.kicker}</p>}
        {showTitle && <h2 className="evp-tabtitle">{tab.title}</h2>}
        {tab.tagline && <p className="evp-tagline">{tab.tagline}</p>}
      </header>
      {tab.sections.map((s, i) => (
        <section className="evp-sec" key={i}>
          {s.heading && <h3 className="evp-h">{s.heading}</h3>}
          {s.blocks.map((b, j) => <EventBlock key={j} block={b} tabs={category.tabs} onGo={onGo} />)}
        </section>
      ))}
    </>
  );
}
