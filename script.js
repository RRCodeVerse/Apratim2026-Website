const $ = id => document.getElementById(id);

// ---------- Loader: count to 100% as images load ----------
const imgs = [...document.images];
let done = 0;
const tick = () => {
  $("pct").textContent = Math.round(100 * ++done / imgs.length) + "%";
  if (done === imgs.length) setTimeout(() => document.body.classList.remove("loading"), 400);
};
imgs.forEach(i => i.complete ? tick() : i.addEventListener("load", tick) || i.addEventListener("error", tick));
setTimeout(() => document.body.classList.remove("loading"), 6000); // never block longer than 6 s

// ---------- Active nav link ----------
const links = document.querySelectorAll(".pill a");
const activeIO = new IntersectionObserver(es => es.forEach(e => e.isIntersecting &&
  links.forEach(l => l.classList.toggle("active", l.hash === "#" + e.target.id))
), { threshold: 0.5 });
document.querySelectorAll(".scene").forEach(s => activeIO.observe(s));

// ---------- Parallax on hero layers ----------
const layers = document.querySelectorAll("[data-speed]");
addEventListener("scroll", () => {
  const y = scrollY;
  layers.forEach(l => l.style.setProperty("--y", `${y * l.dataset.speed}px`));
}, { passive: true });

// ---------- Curtain wipe between sections ----------
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const target = document.querySelector(a.getAttribute("href"));
  if (!target) return;
  e.preventDefault();
  if (a.classList.contains("btn")) a.classList.add("pop");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return target.scrollIntoView();
  const c = $("curtain");
  c.className = "in";
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "auto";
    target.scrollIntoView();
    document.documentElement.style.scrollBehavior = "";
    c.className = "out";
    a.classList.remove("pop");
  }, 500);
}));

// ---------- Placeholder data: edit freely ----------
const events = {
  Drama: [["Stage Play", "Original one-act plays on the main stage.", "Main Auditorium"], ["Street Play", "Nukkad natak with a social message.", "Central Lawns"]],
  Dance: [["Choreo", "Group choreography showdown.", "Open Air Theatre"], ["Street Dance", "Crew vs crew battles.", "Central Lawns"], ["Solo Dance", "Classical and contemporary solos.", "Main Auditorium"]],
  Music: [["Pitch Perfect", "Solo singing competition.", "Music Room"], ["Battle of Bands", "Live bands, one stage.", "Open Air Theatre"]],
  Photography: [["Frames", "Theme-based photo contest.", "Online"]],
  Other: [["Fashion Show", "Theme walk and styling.", "Main Auditorium"]],
};

// ---------- Events: vases open a modal carousel ----------
$("vases").innerHTML = Object.keys(events).map(cat =>
  `<button class="vase" data-cat="${cat}"><img src="assets/vase.webp" alt="">${cat}</button>`).join("");
