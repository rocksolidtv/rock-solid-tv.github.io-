import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Flame, Tv, BookOpen, Layers, ShoppingCart, Mail, Download,
  Filter, Search, Youtube, DollarSign, FileText, Megaphone, User, Calendar, Link,
} from "lucide-react";

const Section = ({ id, title, icon: Icon, children, description }) => (
  <section id={id} className="relative overflow-hidden py-16">
    <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.08),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.06),transparent_35%),linear-gradient(0deg,rgba(255,255,255,0.04),rgba(255,255,255,0.04)),repeating-linear-gradient(45deg,rgba(0,0,0,0.35)_0,rgba(0,0,0,0.35)_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
    <div className="mx-auto max-w-7xl px-4">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-red-600/20 p-2 ring-1 ring-red-600/40">
          <Icon className="h-6 w-6 text-red-500" />
        </div>
        <h2 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">{title}</h2>
      </div>
      {description && <p className="mb-8 max-w-3xl text-sm leading-relaxed text-gray-300">{description}</p>}
      {children}
    </div>
  </section>
);

const KJV_VERSES = [
  { ref: "Proverbs 23:23", text: "Buy the truth, and sell it not; also wisdom, and instruction, and understanding." },
  { ref: "Ephesians 5:11", text: "And have no fellowship with the unfruitful works of darkness, but rather reprove them." },
  { ref: "Isaiah 45:7", text: "I form the light, and create darkness: I make peace, and create evil: I the LORD do all these things." },
  { ref: "John 8:32", text: "And ye shall know the truth, and the truth shall make you free." },
  { ref: "Jeremiah 6:16", text: "Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein, and ye shall find rest for your souls." },
  { ref: "2 Timothy 3:16", text: "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:" },
];
function useVerseOfDay() {
  const index = useMemo(() => {
    const now = new Date();
    const dayOfYear = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(now.getFullYear(), 0, 0)) / 86400000);
    return dayOfYear % KJV_VERSES.length;
  }, []);
  return KJV_VERSES[index];
}

const SERIES = [
  { key: "red-pills", label: "Red Pills" },
  { key: "history", label: "History They Don’t Teach" },
  { key: "bible", label: "Bible They Don’t Teach" },
  { key: "endtimes", label: "End-Time Series" },
];

const EPISODES = [
  { id: "e1", title: "Was Paul a False Apostle?", series: "bible", youtubeId: "_7UtbBbB4o0", duration: "" },
  { id: "e2", title: "They Rewrote Scripture", series: "history", youtubeId: "L5gMyzPQDvc", duration: "" },
  { id: "e3", title: "The Real Israel", series: "bible", youtubeId: "CBRw6pzoshY", duration: "" },
  { id: "e4", title: "Alien Disclosure Is A Setup", series: "red-pills", youtubeId: "Iv2ttt_R8JY", duration: "" },
  { id: "e5", title: "The Bible Predicted Everything Happening Today", series: "bible", youtubeId: "qhxOEKY3X3A", duration: "" },
  { id: "e6", title: "Is Getting A Tattoo A Sin?", series: "bible", youtubeId: "G_9j3sGzW5s", duration: "" },
  { id: "e7", title: "The Truth About Fossil Fuel", series: "history", youtubeId: "ENtg_-F9Lqo", duration: "" },
];

const PLAYLISTS = [
  { id: "p1", title: "History They Don’t Teach In School — Series", url: "https://youtube.com/playlist?list=PLZbAgMjaab9gfO4h4ufi1gRolKEqtMB2o&si=ml2vA6ur9YKjNzfr", blurb: "Deep dives into events and agendas they scrubbed from the textbooks." },
  { id: "p2", title: "Bible They Don't Teach In Sunday School — Series", url: "https://youtube.com/playlist?list=PLZbAgMjaab9h5wu9lZsNyV1HLZT474yB2&si=9fLap9XHpkF5yu8X", blurb: "Straight KJV truth with the gloves off—doctrine, prophecy, and hard passages." },
  { id: "p3", title: "Red Pills — Series", url: "https://youtube.com/playlist?list=PLZbAgMjaab9hvOz3Xl3vJBpM5tjOFwgJS&si=mdlKKlF85DWMup9K", blurb: "Psyops decoded, systems exposed, narratives dismantled." },
];

const MERCH = [
  { id: "m1", name: "Rock Solid TV Cap (Black Trucker)", price: 24.0, img: "https://images.unsplash.com/photo-1534217464669-0022f5d14f6d?q=80&w=1200&auto=format&fit=crop", note: "Self-fulfilled. PayPal checkout." },
  { id: "m2", name: "Gritty Logo Tee (Black/Red)", price: 28.0, img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop", note: "100% cotton. Classic fit." },
  { id: "m3", name: "Sticker Pack: Unfiltered Truth", price: 9.0, img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop", note: "Weatherproof matte." },
];

const BLOG = [
  { id: "b1", title: "Welcome to the Unfiltered Side", date: "2025-08-01", excerpt: "This is where the training wheels come off. If YouTube ever pulls the plug, this site is the lifeboat." },
  { id: "b2", title: "The Biggest False Flags in History", date: "2025-08-08", excerpt: "From the Reichstag Fire to modern psyops, the playbook hasn’t changed—only the packaging." },
];

const VAULT = [];

const GUESTBOOK_KEY = "rstv_guestbook_v1";
function loadGuestbook() { try { const raw = localStorage.getItem(GUESTBOOK_KEY); return raw ? JSON.parse(raw) : []; } catch { return []; } }
function saveGuestbook(items) { try { localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(items)); } catch {} }

export default function App() {
  const verse = useVerseOfDay();
  const [seriesFilter, setSeriesFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [guestbook, setGuestbook] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => { setGuestbook(loadGuestbook()); }, []);

  const filteredEpisodes = useMemo(() => {
    return EPISODES.filter((e) =>
      (seriesFilter === "all" || e.series === seriesFilter) &&
      (search.trim() === "" || e.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [seriesFilter, search]);

  function handleSignGuestbook(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const entry = { id: Math.random().toString(36).slice(2), name: name.trim(), message: message.trim(), date: new Date().toISOString() };
    const next = [entry, ...guestbook];
    setGuestbook(next); saveGuestbook(next); setName(""); setMessage("");
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-gray-200">
      <div className="sticky top-0 z-50 border-b border-red-900/40 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <motion.div initial={{ rotate: -10, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 180, damping: 10 }} className="rounded-xl bg-red-700/20 p-2 ring-1 ring-red-700/40" title="Rock Solid TV">
              <Flame className="h-6 w-6 text-red-500" />
            </motion.div>
            <div>
              <h1 className="text-lg font-black tracking-wider text-white md:text-xl">ROCK SOLID TV</h1>
              <p className="text-[11px] uppercase tracking-widest text-red-400">Uncensored History. Unfiltered Truth. Unshakable Faith.</p>
            </div>
          </div>
          <nav className="hidden gap-4 text-sm font-semibold md:flex">
            <a className="text-gray-300 hover:text-white" href="#episodes">Episodes</a>
            <a className="text-gray-300 hover:text-white" href="#playlists">Playlists</a>
            <a className="text-gray-300 hover:text-white" href="#merch">Merch</a>
            <a className="text-gray-300 hover:text-white" href="#vault">Vault</a>
            <a className="text-gray-300 hover:text-white" href="#blog">Blog</a>
            <a className="text-gray-300 hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </div>

      <header className="relative overflow-hidden border-b border-red-900/40">
        <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background:radial-gradient(60%_60%_at_30%_20%,rgba(255,0,0,0.35),transparent),radial-gradient(60%_60%_at_70%_80%,rgba(255,0,0,0.2),transparent),repeating-linear-gradient(0deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_2px)]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Rip Off the Blindfold.<br />Take the Red Pill.
            </motion.h2>
            <p className="mb-6 text-gray-300">Documentary-style deep dives on hidden history, biblical truth (KJV), and the red pills they didn’t want you to swallow.</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://youtube.com/@rock-solid-tv" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-red-600/50 bg-red-700/20 px-4 py-2 font-bold text-white hover:bg-red-700/30"><Youtube className="h-4 w-4" /> Watch on YouTube</a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800/60 px-4 py-2 font-semibold text-gray-200 hover:bg-gray-800"><Mail className="h-4 w-4" /> Get Updates</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-red-900/50 bg-black/60 p-6 shadow-2xl shadow-red-900/10">
            <div className="mb-3 flex items-center gap-2 text-red-400"><BookOpen className="h-5 w-5" /><span className="text-xs font-extrabold uppercase tracking-widest">KJV — Verse of the Day</span></div>
            <blockquote className="text-lg leading-relaxed text-gray-100">“{verse.text}”</blockquote>
            <div className="mt-3 text-right text-sm text-gray-400">— {verse.ref}</div>
          </motion.div>
        </div>
      </header>

      <Section id="episodes" title="Episodes" icon={Tv} description="Filter by series, search by title, and play episodes without leaving the page.">
        <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="col-span-2 flex items-center gap-2 rounded-xl border border-gray-800 bg-black/60 p-2">
            <Search className="ml-2 h-4 w-4 text-gray-400" />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search titles…" className="w-full bg-transparent p-2 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none" />
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-black/60 p-2">
            <Filter className="ml-2 h-4 w-4 text-gray-400" />
            <select value={seriesFilter} onChange={(e) => setSeriesFilter(e.target.value)} className="w-full rounded-lg bg-transparent p-2 text-sm text-gray-200 focus:outline-none">
              <option value="all">All Series</option>
              {SERIES.map((s) => (<option key={s.key} value={s.key}>{s.label}</option>))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredEpisodes.map((ep) => (
            <motion.div key={ep.id} initial={{ y: 12, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-2xl border border-gray-800 bg-black/60 shadow-xl">
              <div className="relative">
                <div className="aspect-video w-full">
                  <iframe className="h-full w-full" src={`https://www.youtube.com/embed/${ep.youtubeId}`} title={ep.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="text-base font-extrabold text-white">{ep.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-red-400">{SERIES.find((s) => s.key === ep.series)?.label}</p>
                </div>
                <a href={`https://www.youtube.com/watch?v=${ep.youtubeId}`} target="_blank" rel="noreferrer" className="rounded-lg border border-red-700/50 bg-red-700/20 px-3 py-2 text-xs font-bold text-red-100 hover:bg-red-700/30">Open in YouTube</a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="playlists" title="Playlists" icon={Layers} description="Binge by series. These open directly on YouTube in a new tab.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLAYLISTS.map((pl) => (
            <motion.div key={pl.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-gray-800 bg-black/60 p-6 shadow-xl">
              <h3 className="mb-2 text-lg font-extrabold text-white">{pl.title}</h3>
              <p className="mb-4 text-sm text-gray-300">{pl.blurb}</p>
              <a href={pl.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-red-700/50 bg-red-700/20 px-3 py-2 text-xs font-bold text-red-100 hover:bg-red-700/30"><Youtube className="h-4 w-4" /> Open Playlist</a>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="merch" title="Merch" icon={ShoppingCart} description="Self-fulfilled via PayPal. Buttons below can link to PayPal.me or product pages when you’re ready.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MERCH.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="overflow-hidden rounded-2xl border border-gray-800 bg-black/60 shadow-xl">
              <div className="aspect-video w-full overflow-hidden"><img src={item.img} alt={item.name} className="h-full w-full object-cover" /></div>
              <div className="space-y-2 p-4">
                <h3 className="font-extrabold text-white">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.note}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-400">${item.price.toFixed(2)}</span>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-red-700/50 bg-red-700/20 px-3 py-2 text-xs font-bold text-red-100 hover:bg-red-700/30" title="Connect to your PayPal link">
                    <DollarSign className="h-4 w-4" /> PayPal
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="vault" title="Uncensored Vault" icon={Layers} description="Open access downloads for PDFs and videos. Add items when ready.">
        <div className="rounded-2xl border border-gray-800 bg-black/60 p-6 text-gray-400">Nothing here yet. When you add files, they’ll appear below with direct download buttons.</div>
      </Section>

      <Section id="blog" title="Blog" icon={FileText} description="Raw takes, research notes, and long-form breakdowns.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {BLOG.map((post) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-2xl border border-gray-800 bg-black/60 p-6 shadow-xl">
              <div className="mb-2 flex items-center gap-2 text-xs text-gray-400"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString()}</div>
              <h3 className="mb-2 text-xl font-extrabold text-white">{post.title}</h3>
              <p className="mb-4 text-gray-300">{post.excerpt}</p>
              <button className="inline-flex items-center gap-2 rounded-lg border border-red-700/50 bg-red-700/20 px-3 py-2 text-xs font-bold text-red-100 hover:bg-red-700/30"><Link className="h-4 w-4" /> Read Post</button>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact & Updates" icon={Megaphone} description="Join the email list (no spam), drop a note in the public guestbook, or reach out directly.">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-black/60 p-6">
            <h4 className="mb-2 font-extrabold text-white">Email Updates</h4>
            <p className="mb-4 text-sm text-gray-400">We’ll send you new episodes and big drops. (This demo stores nothing; connect to your provider later.)</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks — you’re on the list (demo)"); e.currentTarget.reset(); }} className="space-y-3">
              <input type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-gray-700 bg-black/50 p-3 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none" />
              <button className="w-full rounded-xl border border-red-700/50 bg-red-700/20 p-3 text-sm font-bold text-red-100 hover:bg-red-700/30">Subscribe</button>
            </form>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-black/60 p-6">
            <h4 className="mb-2 font-extrabold text-white">Direct Contact</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-red-400" /> rocksolidtv@outlook.com</p>
              <p className="flex items-center gap-2"><Youtube className="h-4 w-4 text-red-400" /> youtube.com/@rock-solid-tv</p>
            </div>
            <div className="mt-4"><a href="#" className="inline-flex items-center gap-2 rounded-xl border border-red-700/50 bg-red-700/20 px-4 py-2 text-sm font-bold text-red-100 hover:bg-red-700/30" title="Connect a PayPal/Donate link later"><DollarSign className="h-4 w-4" /> Donate</a></div>
          </div>
          <Guestbook />
        </div>
      </Section>

      <footer className="border-t border-red-900/40 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2"><Flame className="h-5 w-5 text-red-500" /><span className="font-extrabold tracking-wider text-white">ROCK SOLID TV</span></div>
              <p className="text-sm text-gray-400">Bold, gritty, and unafraid. New drops weekly — subscribe and share.</p>
            </div>
            <div className="text-sm text-gray-300">
              <p className="mb-1 font-bold text-white">Navigation</p>
              <ul className="space-y-1">
                <li><a className="hover:underline" href="#episodes">Episodes</a></li>
                <li><a className="hover:underline" href="#playlists">Playlists</a></li>
                <li><a className="hover:underline" href="#merch">Merch</a></li>
                <li><a className="hover:underline" href="#vault">Vault</a></li>
                <li><a className="hover:underline" href="#blog">Blog</a></li>
                <li><a className="hover:underline" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="text-sm text-gray-400">
              <p className="mb-2 font-bold text-white">Legal</p>
              <p>© {new Date().getFullYear()} Rock Solid TV. All rights reserved.</p>
              <p className="mt-2 text-xs">Built with Vite + React + Tailwind. Swap demo content for your real links and IDs, then export.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Guestbook() {
  const [guestbook, setGuestbook] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => { try { const raw = localStorage.getItem("rstv_guestbook_v1"); setGuestbook(raw ? JSON.parse(raw) : []); } catch {} }, []);

  function handleSignGuestbook(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const entry = { id: Math.random().toString(36).slice(2), name: name.trim(), message: message.trim(), date: new Date().toISOString() };
    const next = [entry, ...guestbook];
    setGuestbook(next);
    try { localStorage.setItem("rstv_guestbook_v1", JSON.stringify(next)); } catch {}
    setName(""); setMessage("");
  }

  return (
    <div className="rounded-2xl border border-gray-800 bg-black/60 p-6">
      <h4 className="mb-2 font-extrabold text-white">Public Guestbook</h4>
      <form onSubmit={handleSignGuestbook} className="mb-4 space-y-3">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-gray-400" />
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-gray-700 bg-black/50 p-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none" />
        </div>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Say hi, drop a thought, keep it respectful." className="h-24 w-full rounded-xl border border-gray-700 bg-black/50 p-2 text-sm text-gray-100 placeholder:text-gray-500 focus:outline-none" />
        <button className="w-full rounded-xl border border-red-700/50 bg-red-700/20 p-2 text-sm font-bold text-red-100 hover:bg-red-700/30">Sign Guestbook</button>
      </form>
      <div className="space-y-3">
        {guestbook.length === 0 ? (
          <p className="text-sm text-gray-500">No entries yet. Be the first.</p>
        ) : (
          guestbook.map((g) => (
            <div key={g.id} className="rounded-xl border border-gray-800 bg-black/50 p-3">
              <div className="mb-1 flex items-center justify-between text-xs text-gray-400">
                <span className="font-semibold text-gray-300">{g.name}</span>
                <time>{new Date(g.date).toLocaleString()}</time>
              </div>
              <p className="text-sm text-gray-200">{g.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
