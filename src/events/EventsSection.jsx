import { useState } from "react";
import { eventsData } from "../data/eventsData.js";
import VaseRow from "./VaseRow.jsx";
import CategoryPopup from "./CategoryPopup.jsx";
import "./events.css";

/* Events module entry: vase row (Phase 3/4) + full-screen category popup (Phase 5). */
export default function EventsSection() {
  const [openId, setOpenId] = useState(null);
  const category = eventsData.find(c => c.id === openId);

  return (
    <>
      <VaseRow categories={eventsData} onSelect={setOpenId} />
      {category && <CategoryPopup key={category.id} category={category} onClose={() => setOpenId(null)} />}
    </>
  );
}
