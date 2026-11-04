// ---------- Placeholder data: edit freely ----------
const events = {
  Drama: [["Stage Play", "Original one-act plays on the main stage.", "Main Auditorium"], ["Street Play", "Nukkad natak with a social message.", "Central Lawns"]],
  Dance: [["Choreo", "Group choreography showdown.", "Open Air Theatre"], ["Street Dance", "Crew vs crew battles.", "Central Lawns"], ["Solo Dance", "Classical and contemporary solos.", "Main Auditorium"]],
  Music: [["Pitch Perfect", "Solo singing competition.", "Music Room"], ["Battle of Bands", "Live bands, one stage.", "Open Air Theatre"]],
  Photography: [["Frames", "Theme-based photo contest.", "Online"]],
  Other: [["Fashion Show", "Theme walk and styling.", "Main Auditorium"]],
};
const depts = [
  ["Registrations & Correspondence", "Name Surname", "reg@festname.org"],
  ["Website, App & Payments", "Name Surname", "web@festname.org"],
  ["Sponsorships", "Name Surname", "spons@festname.org"],
  ["Logistics & Operations", "Name Surname", "logistics@festname.org"],
  ["Reception & Accommodation", "Name Surname", "pcr@festname.org"],
  ["Publicity", "Name Surname", "publicity@festname.org"],
];
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

// ---------- Active nav link ----------
const links = document.querySelectorAll(".pill a");
const activeIO = new IntersectionObserver(es => es.forEach(e => e.isIntersecting &&
  links.forEach(l => l.classList.toggle("active", l.hash === "#" + e.target.id))
), { threshold: 0.5 });
document.querySelectorAll(".scene").forEach(s => activeIO.observe(s));

// ---------- Events: vases open a modal carousel ----------
$("vases").innerHTML = Object.keys(events).map(cat =>
  `<button class="vase" data-cat="${cat}"><img src="assets/vase.webp" alt="">${cat}</button>`).join("");
let list = [], idx = 0;
const show = () => {
  const [t, d, loc] = list[idx];
  $("m-title").textContent = t; $("m-desc").textContent = d; $("m-loc").textContent = loc;
  $("m-img").style.backgroundImage = "url(assets/about-bg.webp)"; // shortcut: placeholder photo, swap per event later
  $("m-count").textContent = `${idx + 1} / ${list.length}`;
  const card = document.querySelector(".m-card");
  card.classList.remove("swap"); void card.offsetWidth; card.classList.add("swap");
};
$("vases").addEventListener("click", e => {
  const v = e.target.closest(".vase"); if (!v) return;
  list = events[v.dataset.cat]; idx = 0; show(); $("modal").hidden = false;
});
const close = () => $("modal").hidden = true;
document.querySelector(".m-close").onclick = close;
$("modal").addEventListener("click", e => e.target.id === "modal" && close());
$("m-prev").onclick = () => { idx = (idx - 1 + list.length) % list.length; show(); };
$("m-next").onclick = () => { idx = (idx + 1) % list.length; show(); };
addEventListener("keydown", e => {
  if ($("modal").hidden) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") $("m-prev").click();
  if (e.key === "ArrowRight") $("m-next").click();
});

// ---------- Contact: department list -> polaroid ----------
$("depts").innerHTML = depts.map((d, i) => `<li><button data-i="${i}">${d[0]}</button></li>`).join("");
const pick = i => {
  const [, name, mail] = depts[i];
  $("p-name").textContent = name; $("p-mail").textContent = mail; $("p-mail").href = "mailto:" + mail;
  document.querySelectorAll("#depts button").forEach(b => b.classList.toggle("active", +b.dataset.i === i));
  const p = $("polaroid"); p.classList.remove("swap"); void p.offsetWidth; p.classList.add("swap");
};
$("depts").addEventListener("click", e => e.target.dataset.i && pick(+e.target.dataset.i));
pick(0);

// ---------- Scroll reveal + count-up ----------
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  e.target.querySelectorAll("[data-count]").forEach(countUp);
  io.unobserve(e.target);
}), { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

function countUp(el) {
  const end = +el.dataset.count; let t0;
  const step = t => { t0 ??= t; const p = Math.min((t - t0) / 1500, 1);
    el.textContent = Math.round(end * p).toLocaleString(); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

// ---------- Parallax on hero layers ----------
const layers = document.querySelectorAll("[data-speed]");
addEventListener("scroll", () => {
  const y = scrollY;
  layers.forEach(l => l.style.setProperty("--y", `${y * l.dataset.speed}px`));
}, { passive: true });
