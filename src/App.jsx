import { useEffect, useRef, useState } from "react";
import events from "./data/events.js";
import depts from "./data/depts.js";
import EventsSection from "./events/EventsSection.jsx";

const cats = Object.keys(events);
const NAV = [["home", "Home"], ["events", "Events"], ["about", "About Us"], ["contact", "Contact Us"]];

export default function App() {
  const [cat, setCat] = useState(null); // open modal category, null = closed
  const [idx, setIdx] = useState(0);
  const [dept, setDept] = useState(0);
  const [active, setActive] = useState("");
  const [pct, setPct] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const curtain = useRef(null);
  const polaroid = useRef(null);
  const list = cat ? events[cat] : [];

  // Background audio setup with autoplay & one-time interaction fallback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    audio.loop = true;

    // Attempt direct autoplay
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy prevented immediate playback; wait for first user gesture
          setIsPlaying(false);
          const startOnInteraction = () => {
            if (audio.paused) {
              audio.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          };
          window.addEventListener("click", startOnInteraction, { once: true });
          window.addEventListener("touchstart", startOnInteraction, { once: true });
          window.addEventListener("keydown", startOnInteraction, { once: true });
        });
    }
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Loader: count to 100% as images load
  useEffect(() => {
    const imgs = [...document.images];
    let done = 0;
    const end = () => document.body.classList.remove("loading");
    const tick = () => {
      setPct(Math.round(100 * ++done / imgs.length));
      if (done === imgs.length) setTimeout(end, 400);
    };
    imgs.forEach(i => i.complete ? tick() : (i.addEventListener("load", tick), i.addEventListener("error", tick)));
    const t = setTimeout(end, 6000); // never block longer than 6 s
    return () => clearTimeout(t);
  }, []);

  // Active nav link
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { threshold: 0.5 });
    document.querySelectorAll(".scene").forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Scroll reveal + count-up
  useEffect(() => {
    const countUp = el => {
      const end = +el.dataset.count; let t0;
      const step = t => {
        t0 ??= t; const p = Math.min((t - t0) / 1500, 1);
        el.textContent = Math.round(end * p).toLocaleString(); if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(e.target);
    }), { threshold: 0.2 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Parallax on hero layers
  useEffect(() => {
    const layers = document.querySelectorAll("[data-speed]");
    // Ease toward scroll position so layers glide; the loop sleeps once settled (saves battery on phones)
    let y = scrollY, raf = 0;
    const frame = () => {
      y += (scrollY - y) * 0.12;
      if (Math.abs(scrollY - y) < 0.1) y = scrollY;
      layers.forEach(l => l.style.setProperty("--y", `${y * l.dataset.speed}px`));
      raf = y === scrollY ? 0 : requestAnimationFrame(frame);
    };
    const wake = () => { if (!raf) raf = requestAnimationFrame(frame); };
    addEventListener("scroll", wake, { passive: true });
    wake();
    return () => { removeEventListener("scroll", wake); cancelAnimationFrame(raf); };
  }, []);

  // Modal keyboard controls
  useEffect(() => {
    if (!cat) return;
    const n = events[cat].length;
    const key = e => {
      if (e.key === "Escape") setCat(null);
      if (e.key === "ArrowLeft") setIdx(i => (i - 1 + n) % n);
      if (e.key === "ArrowRight") setIdx(i => (i + 1) % n);
    };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, [cat]);

  // Replay the polaroid "swap" animation on each pick (element must persist: it also carries .reveal)
  useEffect(() => {
    const p = polaroid.current;
    p.classList.remove("swap"); void p.offsetWidth; p.classList.add("swap");
  }, [dept]);

  // Curtain wipe between sections
  const go = e => {
    const a = e.currentTarget;
    const target = document.querySelector(a.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    if (a.classList.contains("btn")) a.classList.add("pop");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return target.scrollIntoView();
    const c = curtain.current;
    c.className = ""; void c.offsetWidth; // reset so cloud animations replay each time
    c.className = "in";
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "auto";
      target.scrollIntoView();
      document.documentElement.style.scrollBehavior = "";
      c.className = "out";
      a.classList.remove("pop");
    }, 650); // curtainIn is .6s; swap scene once fully covered
  };

  const [title, desc, loc, formUrl] = list[idx] || [];
  const [, pName, pMail] = depts[dept];

  return (
    <>
      <audio ref={audioRef} src="/assets/bg-music.mp3" loop preload="auto" />
      <div id="loader"><div className="stars"></div><b id="pct">{pct}%</b></div>
      <div id="curtain" ref={curtain}>
        <img className="tc t1" src="/assets/cloud1.webp" alt="" />
        <img className="tc t2" src="/assets/cloud2.webp" alt="" />
        <img className="tc t3" src="/assets/cloud1.webp" alt="" />
        <img className="tc t4" src="/assets/cloud2.webp" alt="" />
        <span>APRATIM 2K26</span></div>

      <nav>
        <a href="#home" className="logo" onClick={go}>APRATIM</a>
        <div className="nav-controls">
          <div className="pill">
            {NAV.map(([id, label]) =>
              <a key={id} href={"#" + id} className={active === id ? "active" : undefined} onClick={go}>{label}</a>)}
          </div>
          <button
            className={`sound-btn ${isPlaying ? "playing" : "muted"}`}
            onClick={toggleSound}
            aria-label={isPlaying ? "Mute background music" : "Play background music"}
            title={isPlaying ? "Mute Sound" : "Play Sound"}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" className="sound-icon" aria-hidden="true">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="sound-icon" aria-hidden="true">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      <section id="home" className="scene night">
        <img className="cloud c1" src="/assets/cloud1.webp" alt="" data-speed="0.25" />
        <img className="cloud c2" src="/assets/cloud2.webp" alt="" data-speed="0.35" />
        <img className="palace" src="/assets/palace.webp" alt="" data-speed="0.2" />
        <img className="dune d1" src="/assets/dune-back.webp" alt="" data-speed="0.3" />
        <img className="camels" src="/assets/camels.webp" alt="" data-speed="0.4" />
        <img className="dune d2" src="/assets/dune-front.webp" alt="" data-speed="0.5" />
        <div className="hero">
          <svg className="logo-draw" viewBox="0 0 900 140" role="img" aria-label="APRATIM">
            <text x="50%" y="110" textAnchor="middle" textLength="860" lengthAdjust="spacingAndGlyphs">APRATIM</text>
          </svg>
          <p className="year">2026</p>
          <p>14 – 15 Nov · CCET Sector 26, Chandigarh</p>
          <a className="btn" href="#events" onClick={go}>Register</a>
        </div>
        <div className="scroll-hint">scroll ↓</div>
      </section>

      <section id="events" className="scene dusk">
        <h2 className="sign reveal">Events</h2>
        <EventsSection />
      </section>

      <div id="modal" hidden={!cat} onClick={e => e.target.id === "modal" && setCat(null)}>
        <div className="m-card swap" key={cat + idx}>
          <button className="m-close" aria-label="Close" onClick={() => setCat(null)}>×</button>
          <div className="m-text">
            <h3 id="m-title">{title}</h3><p id="m-desc">{desc}</p><p className="m-loc" id="m-loc">{loc}</p>
            <a href="#" id="m-rule">Rulebook</a>
            {formUrl && <a href={formUrl} id="m-reg" target="_blank" rel="noopener noreferrer">Register</a>}
          </div>
          {/* shortcut: placeholder photo (same as mockup), swap per event later */}
          <div className="m-img" id="m-img" style={{ backgroundImage: "url(/assets/about-bg.webp)" }}></div>
          <div className="m-nav">
            <button id="m-prev" aria-label="Previous" onClick={() => setIdx((idx - 1 + list.length) % list.length)}>‹</button>
            <span id="m-count">{cat && `${idx + 1} / ${list.length}`}</span>
            <button id="m-next" aria-label="Next" onClick={() => setIdx((idx + 1) % list.length)}>›</button>
          </div>
        </div>
      </div>

      <section id="about" className="scene plum">
        <div className="lantern" style={{ left: "10%" }}><img src="/assets/lantern.webp" alt="" /></div>
        <div className="lantern" style={{ left: "84%", animationDelay: "-1.5s,-.4s" }}><img src="/assets/lantern.webp" alt="" /></div>
        <div className="about reveal">
          <h2>About Us</h2>
          <p>Placeholder text: a student-run festival of dance, drama, music, art and ideas, bringing thousands together for four unforgettable days. Replace this with your fest&apos;s story.</p>
          <div className="stats">
            <div><b data-count="50">0</b><small>Events</small></div>
            <div><b data-count="15000">0</b><small>Footfall</small></div>
            <div><b data-count="54">0</b><small>Years</small></div>
          </div>
        </div>
      </section>

      <section id="contact" className="scene dawn">
        <div className="contact-wrap">
          <div className="parchment reveal">
            <h2>Contact Us</h2>
            <ul id="depts">
              {depts.map((d, i) =>
                <li key={i}><button className={dept === i ? "active" : undefined} onClick={() => setDept(i)}>{d[0]}</button></li>)}
            </ul>
          </div>
          <div className="polaroid reveal" id="polaroid" ref={polaroid}>
            <div className="ph"></div><b id="p-name">{pName}</b><a id="p-mail" href={"mailto:" + pMail}>{pMail}</a>
          </div>
        </div>
        <footer>© 2026 APRATIM</footer>
      </section>
    </>
  );
}
