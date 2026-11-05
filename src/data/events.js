// Built from /Events docs. Shape: [title, description, location, registrationFormUrl].
// Registration is a Google Form per event: put its link as the 4th item; the modal shows a Register link only when set. Dates: 18–19 Nov 2026.
// TODO: Drama has no source doc yet (mockup placeholders kept). Confirm venues marked "TBA".
export default {
  Drama: [
    ["Stage Play", "Original one-act plays on the main stage.", "Main Auditorium"],
    ["Street Play", "Nukkad natak with a social message.", "Central Lawns"],
  ],
  Dance: [
    ["Group Dance", "Step Up flagship: 12–25 member teams, 5–12 min, all forms except pure folk. Cash prizes. Day 1.", "Main Stage"],
    ["Duet Dance", "Pairs, 2–5 min, any style from Bollywood to salsa. Day 2.", "Main Stage"],
    ["Prop Hustle", "Prop-based dance battle. Day 2.", "Fun Stage"],
    ["Catch the Hook", "Spot hook steps and groove to surprise beat drops. Solo or duo. Day 1.", "Fun Stage"],
    ["Raunak'26", "Punjabi folk dance by Punjabi By Nature: bhangra or any folk dance, 2–7 min. Day 2, 3:30–5:30 PM.", "Main Stage"],
  ],
  Music: [
    ["Solo Singing", "3–4 min, backing track or up to 2 instrumentalists. Day 1.", "Main Stage"],
    ["Group Singing", "Up to 4 singers, 3–5 min, up to 2 instrumentalists.", "Main Stage"],
    ["Solo Instrumental", "4–5 min performance plus 5 min setup. Bring your own instrument.", "Main Stage"],
    ["Fusion Band", "Up to 8 members, 10 min, original fusion compositions, no backing tracks. Day 2.", "Fun Stage"],
  ],
  Photography: [
    ["Photohunt", "Teams of 1–3 decode clues across campus. By Achintyam.", "Campus"],
    ["Photography Competition", "Theme-based photography contest. By Achintyam.", "Online"],
    ["Videography Competition", "Short-film challenge. By Achintyam.", "Online"],
  ],
  Other: [
    ["Mr & Miss Apratim", "Four rounds: introduction, talent, ramp walk, Q&A. 18–19 Nov.", "Main Stage"],
    ["Huge Vaad Vivaaaaad", "Single-elimination debate knockout. Apostle of Speech. 18–19 Nov, 10 AM onwards.", "LH 1 – LH 5"],
    ["Lexicon PD", "Asian Parliamentary 3v3 debate. Free entry. 18–19 Nov, 10 AM onwards.", "LH 1 – LH 5"],
    ["Open Mic", "Poetry, stand-up, storytelling, max 5 min. 18 Nov, 11:30 AM–1:30 PM.", "Fun Stage"],
    ["Stories, Love, and Ink", "1-hour on-spot story, 1000–1200 words. 19 Nov, 10:30–11:30 AM.", "LH 1"],
    ["Live Sketching", "45-minute individual sketching challenge. By Artstrong.", "TBA"],
    ["Canvas Painting", "One original painting on a themed canvas. By Artstrong.", "TBA"],
    ["Best Out of Waste", "Build something from 70% waste material. By Artstrong.", "TBA"],
    ["Blindfold Artist Duo", "One draws blindfolded, one guides by voice. By Artstrong.", "TBA"],
    ["Pictionary Battle", "Team drawing and guessing rounds. By Artstrong.", "TBA"],
    ["Pocket Wars", "Console gaming brackets, 2–3 titles. Esports Club.", "TBA"],
    ["Console Showdown", "Head-to-head console tournament, 2–3 titles. Esports Club.", "TBA"],
  ],
};
