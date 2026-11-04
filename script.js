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
