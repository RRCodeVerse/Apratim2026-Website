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
