import { Link } from "react-router-dom";
import { ArrowRight, Play, Check, Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import CountUp from "@/components/CountUp";
import { projects } from "@/lib/projects";

const HERO_IMG = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85";

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <img src={HERO_IMG} alt="Steel-frame skyscraper construction site" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,31,58,0.88) 0%, rgba(11,31,58,0.55) 60%, rgba(28,53,86,0.80) 100%)" }} />

        <div className="roca-container relative z-10 grid lg:grid-cols-12 gap-10 items-center pt-24 pb-32">
          <div className="lg:col-span-7 text-roca-white animate-fade-up">
            <p className="font-label text-roca-copper text-[12px] mb-5">Roca Group — Established 2004</p>
            <span className="copper-line-grow block h-px bg-roca-copper mb-8" />
            <h1 className="font-display text-[44px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-7">
              Engineering<br/>
              <span className="text-roca-copper italic">Excellence.</span>
            </h1>
            <p className="text-roca-white/85 max-w-[520px] text-base md:text-lg leading-relaxed mb-10">
              We deliver landmark construction projects across commercial, residential, and infrastructure sectors. From concept to completion, Roca Group builds what others only envision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="btn-copper">Explore Our Work <ArrowRight size={16} /></Link>
              <button className="btn-outline-white"><Play size={14} /> Watch Our Story</button>
            </div>
            <div className="mt-14 flex flex-wrap gap-6 md:gap-10 font-label text-[12px] text-roca-muted">
              <span><span className="text-roca-white">£2.4B+</span> Delivered</span>
              <span className="hidden md:inline text-roca-copper/40">|</span>
              <span><span className="text-roca-white">25 Years</span></span>
              <span className="hidden md:inline text-roca-copper/40">|</span>
              <span><span className="text-roca-white">400+</span> Projects</span>
            </div>
          </div>

          {/* Floating active project card */}
          <div className="hidden lg:block lg:col-span-5 lg:relative">
            <div className="absolute right-0 -bottom-10 w-[360px] bg-roca-navy/90 border-l-[3px] border-roca-copper p-7 shadow-2xl backdrop-blur animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center justify-between mb-4">
                <p className="font-label text-roca-copper text-[11px]">Active Project</p>
                <div className="flex items-center gap-2 text-roca-white/70 text-xs font-label">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                  Live
                </div>
              </div>
              <h3 className="font-display text-roca-white text-2xl mb-5 leading-tight">Manchester Central Hub — Phase 3</h3>
              <div className="flex justify-between text-xs text-roca-muted font-label mb-2">
                <span>Progress</span>
                <span className="text-roca-copper">68%</span>
              </div>
              <div className="h-1 bg-roca-steel">
                <div className="h-full bg-roca-copper" style={{ width: "68%", animation: "fillBar 1.6s ease-out 0.6s both" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STATS */}
      <section className="bg-roca-copper">
        <div className="roca-container py-14 grid grid-cols-2 lg:grid-cols-4 gap-10 text-roca-navy">
          {[
            { val: 2.4, suf: "B", pre: "£", label: "Total Project Value", dec: 1 },
            { val: 400, suf: "+", label: "Projects Delivered" },
            { val: 47, label: "Live Projects" },
            { val: 99, suf: "%", label: "On-Time Delivery" },
          ].map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-display font-semibold text-[44px] md:text-[56px] leading-none">
                <CountUp end={s.val} prefix={s.pre || ""} suffix={s.suf || ""} decimals={s.dec || 0} />
              </div>
              <div className="font-label text-[12px] mt-3 opacity-80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — ABOUT */}
      <section className="py-24 md:py-32 bg-roca-white">
        <div className="roca-container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85" alt="Roca Group construction team on site" className="w-full h-[460px] object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=85" alt="Architect reviewing plans" className="hidden md:block absolute -right-6 -bottom-10 w-56 h-72 object-cover border-8 border-roca-white shadow-2xl" loading="lazy" />
            <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 border-2 border-roca-copper" />
          </div>
          <div className="reveal">
            <p className="font-label text-roca-copper text-xs mb-4">Who We Are</p>
            <h2 className="font-display text-3xl md:text-[52px] text-roca-navy mb-7 leading-[1.1]">Four Decades of Building Britain's Future</h2>
            <p className="text-foreground/80 mb-5">Founded in 2004, Roca Group has grown from a Manchester-based contractor into one of the UK's most trusted construction firms. We deliver complex projects with the precision of engineers and the discipline of master builders.</p>
            <p className="text-foreground/80 mb-8">Our portfolio spans commercial towers, civic infrastructure, residential schemes, and heritage restorations — each delivered with the same commitment to safety, sustainability, and excellence that has defined us for over two decades.</p>
            <ul className="space-y-3 mb-8">
              {[
                "£50M+ single project capability",
                "ISO 9001 | ISO 14001 | ISO 45001 certified",
                "350 in-house construction professionals",
                "Nationwide UK coverage",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/85">
                  <Check className="text-roca-copper shrink-0 mt-1" size={18} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/approach" className="copper-link">Learn More About Us <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SECTORS */}
      <section className="bg-roca-navy py-24 md:py-32">
        <div className="roca-container">
          <div className="text-center mb-16 reveal">
            <p className="font-label text-roca-copper text-xs mb-4">Our Capabilities</p>
            <h2 className="font-display text-roca-white text-4xl md:text-[52px]">What We Build</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((s) => (
              <div key={s.title} className="group bg-roca-steel border-t-2 border-transparent hover:border-roca-copper transition-all duration-500 reveal overflow-hidden">
                <div className="overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h3 className="text-roca-white text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-roca-muted text-sm mb-5">{s.desc}</p>
                  <Link to="/sectors" className="copper-link">View Projects <ArrowRight size={14} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FEATURED PROJECTS */}
      <FeaturedProjects />

      {/* SECTION 6 — WHY ROCA */}
      <section className="bg-roca-cream py-24 md:py-32">
        <div className="roca-container space-y-24">
          {WHY_ROCA.map((row, i) => (
            <div key={row.tag} className={`grid lg:grid-cols-2 gap-14 items-center reveal ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <img src={row.img} alt={row.title} loading="lazy" className="w-full h-[460px] object-cover" />
              <div>
                <p className="font-label text-roca-copper text-xs mb-4">{row.tag}</p>
                <h3 className="font-display text-3xl md:text-4xl text-roca-navy mb-6 leading-tight">{row.title}</h3>
                <p className="text-foreground/80">{row.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <Testimonials />

      {/* SECTION 8 — ACCREDITATIONS */}
      <section className="bg-roca-cream py-24">
        <div className="roca-container text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl text-roca-navy mb-4">Trusted by Industry, Verified by Standards</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Our accreditations reflect our commitment to quality, safety, and excellence.</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee w-max">
            {[...ACCREDITATIONS, ...ACCREDITATIONS].map((a, i) => (
              <div key={i} className="bg-roca-navy border border-roca-copper px-10 py-6 min-w-[260px] text-center">
                <div className="font-label text-roca-copper text-xs mb-1">{a.sub}</div>
                <div className="text-roca-white font-display text-2xl">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — INSIGHTS */}
      <section className="bg-roca-white py-24 md:py-32">
        <div className="roca-container">
          <div className="text-center mb-16 reveal">
            <p className="font-label text-roca-copper text-xs mb-4">Insights</p>
            <h2 className="font-display text-4xl md:text-5xl text-roca-navy">From the Roca Newsroom</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {INSIGHTS.map((p) => (
              <article key={p.title} className="reveal group cursor-pointer">
                <div className="overflow-hidden mb-5">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <span className="font-label text-roca-copper text-[11px]">{p.tag}</span>
                <h3 className="font-display text-2xl text-roca-navy mt-3 mb-3 leading-snug group-hover:text-roca-copper transition-colors">{p.title}</h3>
                <p className="text-foreground/70 text-sm mb-3">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-foreground/50 font-label">{p.date}</span>
                  <span className="copper-link">Read More <ArrowRight size={14} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — CTA BANNER */}
      <section className="bg-roca-navy diagonal-pattern py-24 md:py-32">
        <div className="roca-container text-center max-w-3xl mx-auto reveal">
          <p className="font-label text-roca-copper text-xs mb-5">Start Your Project</p>
          <h2 className="font-display text-roca-white text-4xl md:text-[52px] mb-7 leading-[1.1]">Have an Ambitious Build in Mind?</h2>
          <p className="text-roca-white/80 mb-10 text-lg">From feasibility study to ribbon cutting — Roca Group delivers landmark construction with precision, transparency, and unmatched expertise.</p>
          <Link to="/contact" className="btn-copper !px-10 !py-5">Request a Consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}

// ----- DATA -----
const SECTORS = [
  { title: "Commercial Construction", desc: "Office towers, retail and mixed-use developments built to last.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85" },
  { title: "Residential Development", desc: "Luxury apartments and large-scale housing schemes.", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=900&q=85" },
  { title: "Civil & Infrastructure", desc: "Bridges, highways and public infrastructure of national scale.", img: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=900&q=85" },
  { title: "Industrial Facilities", desc: "Logistics centres, manufacturing plants and BioTech campuses.", img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=85" },
  { title: "Interior Fit-Out", desc: "Premium corporate, hospitality and retail interiors.", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=85" },
  { title: "Heritage Restoration", desc: "Sympathetic restoration of listed and historic buildings.", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=85" },
];

const WHY_ROCA = [
  {
    tag: "Safety First",
    title: "Zero Compromise on Site Safety",
    body: "We hold ourselves to the highest health and safety standards in the industry. Our HSE programme is independently audited and accredited under CHAS Gold and SafeContractor. Over the past five years, our incident rate sits at less than a quarter of the UK construction average.",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85",
  },
  {
    tag: "Transparent Process",
    title: "You Know Exactly Where Your Project Stands",
    body: "Every Roca client receives weekly progress reports, real-time dashboard access, and direct contact with their project director. We use digital twins and live BIM models so stakeholders see exactly what is being built — and when. No surprises, ever.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85",
  },
  {
    tag: "Sustainability",
    title: "Building a Greener Future, One Project at a Time",
    body: "We are on track for net zero operational carbon by 2030. Over 70% of our completed schemes since 2022 hold a BREEAM Excellent rating or higher. From low-carbon concrete to circular procurement, sustainability is engineered into every Roca build.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85",
  },
];

const ACCREDITATIONS = [
  { sub: "Certified", name: "CHAS Gold" },
  { sub: "Verified", name: "Constructionline Gold" },
  { sub: "Quality", name: "ISO 9001:2015" },
  { sub: "Environment", name: "ISO 14001" },
  { sub: "Approved", name: "SafeContractor" },
  { sub: "Recognised", name: "Investors in People" },
];

const INSIGHTS = [
  { tag: "Industry News", title: "Roca Group Breaks Ground on £78M Manchester Gateway Development", date: "March 2026", excerpt: "Our largest live project to date will deliver a 22-storey mixed-use tower in the heart of Manchester city centre.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85" },
  { tag: "Sustainability", title: "Our Roadmap to Net Zero: 2026 Progress Report", date: "February 2026", excerpt: "A transparent look at how Roca Group is delivering on its 2030 net zero operational carbon commitment.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&q=85" },
  { tag: "Company News", title: "Roca Group Ranked Top 50 UK Contractors for Third Consecutive Year", date: "January 2026", excerpt: "Industry benchmark recognises Roca Group's sustained delivery, financial stability and project quality.", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=85" },
];

// ----- Featured Projects -----
function FeaturedProjects() {
  const featured = projects.slice(0, 5);
  return (
    <section className="bg-roca-charcoal py-24 md:py-32">
      <div className="roca-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 reveal">
          <div>
            <p className="font-label text-roca-copper text-xs mb-4">Featured Work</p>
            <h2 className="font-display text-4xl md:text-[52px] text-roca-white leading-[1.1] max-w-2xl">Our Work Speaks for Itself</h2>
          </div>
          <p className="text-roca-muted max-w-md">A selection of landmark projects delivered across the UK by the Roca Group team.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <FeatureCard p={featured[0]} className="lg:col-span-2 lg:row-span-2 h-[520px]" big />
          <FeatureCard p={featured[1]} className="h-[250px]" />
          <FeatureCard p={featured[2]} className="h-[250px]" />
          <FeatureCard p={featured[3]} className="h-[300px] lg:col-span-2" />
          <FeatureCard p={featured[4]} className="h-[300px]" />
        </div>

        <div className="text-center mt-14 reveal">
          <Link to="/projects" className="btn-outline-copper !px-10 !py-5">View All Projects <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ p, className = "", big = false }: { p: typeof projects[number]; className?: string; big?: boolean }) {
  return (
    <Link to="/projects" className={`group relative block overflow-hidden reveal ${className}`}>
      <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-roca-navy via-roca-navy/40 to-transparent" />
      <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-roca-copper transition-all duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="font-label text-[10px] bg-roca-copper text-roca-navy px-3 py-1">{p.sector}</span>
          <span className="font-label text-[10px] border border-roca-slate text-roca-slate px-3 py-1">{p.location}</span>
        </div>
        <h3 className={`font-display text-roca-white ${big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} leading-tight`}>{p.name}</h3>
        {p.status === "current" && p.progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-[10px] font-label text-roca-muted mb-1">
              <span>In Progress</span><span className="text-roca-copper">{p.progress}%</span>
            </div>
            <div className="h-[3px] bg-white/20"><div className="h-full bg-roca-copper" style={{ width: `${p.progress}%` }} /></div>
          </div>
        )}
        <span className="copper-link mt-4 opacity-0 group-hover:opacity-100 transition-opacity">View Project <ArrowRight size={14} /></span>
      </div>
    </Link>
  );
}

// ----- Testimonials -----
const TESTIMONIALS = [
  { q: "Roca Group delivered our £45M commercial development three weeks ahead of schedule. Their project management was exemplary throughout.", n: "James Whitfield", t: "CEO, Whitfield Developments" },
  { q: "The attention to detail and quality of finish on our residential scheme exceeded every expectation. We've already commissioned Phase 2.", n: "Sarah Chen", t: "Director, Meridian Living" },
  { q: "From the initial site survey to final handover, Roca Group demonstrated the highest level of professionalism we've encountered in 20 years.", n: "Mark O'Brien", t: "Estates Director, NHS Property Services" },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section className="bg-roca-navy py-24 md:py-32 relative overflow-hidden">
      <Quote className="absolute -top-6 left-10 text-roca-copper/20" size={180} strokeWidth={1} />
      <div className="roca-container max-w-4xl text-center reveal relative">
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} size={18} className="fill-roca-copper text-roca-copper" />
          ))}
        </div>
        <blockquote key={i} className="font-display italic text-roca-white text-2xl md:text-3xl leading-snug mb-10 animate-fade-up">
          "{t.q}"
        </blockquote>
        <div className="font-label text-roca-copper text-sm">{t.n}</div>
        <div className="text-roca-muted text-xs font-label mt-1">{t.t}</div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous" className="w-11 h-11 rounded-full border border-roca-copper text-roca-copper hover:bg-roca-copper hover:text-roca-navy flex items-center justify-center transition-colors"><ChevronLeft size={18} /></button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k+1}`} className={`w-2 h-2 rounded-full transition-all ${k === i ? "bg-roca-copper w-6" : "bg-roca-muted/40"}`} />
            ))}
          </div>
          <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} aria-label="Next" className="w-11 h-11 rounded-full border border-roca-copper text-roca-copper hover:bg-roca-copper hover:text-roca-navy flex items-center justify-center transition-colors"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
