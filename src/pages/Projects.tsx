import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/lib/projects";

const SECTORS = ["All Sectors","Commercial","Residential","Civil","Industrial","Fit-Out","Heritage"] as const;
const TABS = ["All Projects","Current Projects","Completed Projects"] as const;

export default function Projects() {
  const [tab, setTab] = useState<typeof TABS[number]>("All Projects");
  const [sector, setSector] = useState<typeof SECTORS[number]>("All Sectors");

  const filtered = useMemo(() => projects.filter((p) => {
    if (tab === "Current Projects" && p.status !== "current") return false;
    if (tab === "Completed Projects" && p.status !== "completed") return false;
    if (sector !== "All Sectors" && p.sector !== sector) return false;
    return true;
  }), [tab, sector]);

  const featured = projects.find((p) => p.name === "Roca Manchester Gateway")!;
  const current = filtered.filter((p) => p.status === "current");
  const completed = filtered.filter((p) => p.status === "completed");

  return (
    <>
      <section className="bg-roca-navy py-24 md:py-32">
        <div className="roca-container">
          <p className="font-label text-roca-muted text-xs mb-6"><Link to="/" className="hover:text-roca-copper">Home</Link> <span className="mx-2 text-roca-copper">/</span> Our Projects</p>
          <h1 className="font-display text-roca-white text-5xl md:text-[80px] leading-[1.05]">Our <span className="text-roca-copper italic">Portfolio.</span></h1>
          <p className="text-roca-white/75 max-w-2xl text-lg mt-8">A selection of landmark Roca Group projects — past, current, and recently completed.</p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-20 z-40 bg-roca-charcoal border-y border-roca-copper/30 backdrop-blur">
        <div className="roca-container py-5 flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {TABS.map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`font-label text-[11px] px-4 py-2 border-b-2 transition-colors ${tab === t ? "text-roca-white border-roca-copper" : "text-roca-muted border-transparent hover:text-roca-white"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <label className="font-label text-roca-muted text-[11px]">Sector</label>
            <select value={sector} onChange={(e) => setSector(e.target.value as any)} className="bg-transparent border border-roca-copper/40 text-roca-white text-sm py-2 px-3 focus:outline-none focus:border-roca-copper">
              {SECTORS.map((s) => <option key={s} className="bg-roca-navy" value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Featured spotlight */}
      <section className="bg-roca-charcoal py-16">
        <div className="roca-container">
          <div className="relative grid lg:grid-cols-2 min-h-[600px] reveal">
            <img src={featured.image} alt={featured.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-roca-navy/95 via-roca-navy/70 to-transparent lg:from-transparent lg:via-roca-navy/50 lg:to-roca-navy/95" />
            <div className="lg:col-start-2 relative z-10 p-10 md:p-16 flex flex-col justify-center text-roca-white">
              <p className="font-label text-roca-copper text-xs mb-5">Featured Project</p>
              <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">{featured.name}</h2>
              <div className="grid grid-cols-3 gap-4 border-y border-roca-copper/30 py-5 mb-6">
                <div><div className="font-label text-roca-copper text-[10px]">Value</div><div className="font-display text-xl">{featured.value}</div></div>
                <div><div className="font-label text-roca-copper text-[10px]">Sector</div><div className="font-display text-xl">{featured.sector}</div></div>
                <div><div className="font-label text-roca-copper text-[10px]">Started</div><div className="font-display text-xl">Jan 2025</div></div>
              </div>
              <p className="text-roca-white/80 mb-6">This 22-storey mixed-use tower in Manchester city centre represents our largest live project to date.</p>
              <div className="mb-6">
                <div className="flex justify-between font-label text-[11px] text-roca-muted mb-2"><span>Progress</span><span className="text-roca-copper">{featured.progress}%</span></div>
                <div className="h-1 bg-white/15"><div className="h-full bg-roca-copper" style={{ width: `${featured.progress}%` }} /></div>
              </div>
              <Link to="#" className="btn-copper self-start">View Project Details <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Current */}
      {(tab !== "Completed Projects") && current.length > 0 && (
        <section className="bg-roca-charcoal pb-20">
          <div className="roca-container">
            <h3 className="font-display text-3xl text-roca-white mb-10">Current Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {current.map((p) => <ProjectCard key={p.name} p={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Completed */}
      {(tab !== "Current Projects") && completed.length > 0 && (
        <section className="bg-roca-navy py-20">
          <div className="roca-container">
            <h3 className="font-display text-3xl text-roca-white mb-10">Completed Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completed.map((p) => <ProjectCard key={p.name} p={p} completed />)}
            </div>
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <section className="bg-roca-charcoal py-32 text-center text-roca-muted">No projects match the current filters.</section>
      )}
    </>
  );
}

function ProjectCard({ p, completed = false }: { p: Project; completed?: boolean }) {
  return (
    <div className="group bg-roca-steel reveal overflow-hidden border-t-2 border-transparent hover:border-roca-copper transition-all duration-500">
      <div className="overflow-hidden relative">
        <img src={p.image} alt={p.name} loading="lazy" className={`w-full h-[230px] object-cover transition-transform duration-700 group-hover:scale-105 ${completed ? "grayscale-[30%] brightness-90" : ""}`} />
        <span className={`absolute top-4 left-4 font-label text-[10px] px-3 py-1 ${p.status === "current" ? "bg-emerald-500/90 text-roca-navy" : "bg-roca-muted/90 text-roca-navy"}`}>
          {p.status === "current" ? "In Progress" : "Completed"}
        </span>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="font-label text-[10px] bg-roca-copper text-roca-navy px-2 py-1">{p.sector}</span>
          <span className="font-label text-[10px] text-roca-muted">{p.location}</span>
          {p.year && <span className="font-label text-[10px] text-roca-muted">• {p.year}</span>}
        </div>
        <h4 className="font-display text-xl text-roca-white mb-3 leading-tight">{p.name}</h4>
        {p.client && <p className="text-roca-muted text-xs font-label mb-3">Client: {p.client}</p>}
        {p.status === "current" && p.progress !== undefined && (
          <div>
            <div className="flex justify-between text-[10px] font-label text-roca-muted mb-1"><span>Progress</span><span className="text-roca-copper">{p.progress}%</span></div>
            <div className="h-[3px] bg-white/15"><div className="h-full bg-roca-copper" style={{ width: `${p.progress}%` }} /></div>
          </div>
        )}
      </div>
    </div>
  );
}
