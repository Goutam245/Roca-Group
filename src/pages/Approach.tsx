import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Ruler, Compass, Building2, KeyRound, ShieldCheck, Leaf, Users, Linkedin } from "lucide-react";

const STEPS = [
  { n: "01", icon: Handshake, t: "Initial Consultation", d: "We meet with clients to understand vision, requirements, budget, and timeline constraints before any commitment." },
  { n: "02", icon: Ruler, t: "Feasibility & Planning", d: "Our pre-construction team conducts surveys, cost planning, and risk assessments to validate project viability." },
  { n: "03", icon: Compass, t: "Design & Pre-Construction", d: "Working alongside architects and engineers, we develop technical designs, procurement strategies, and construction programmes." },
  { n: "04", icon: Building2, t: "Construction & Management", d: "Site mobilisation, skilled workforce deployment, daily progress reporting, and rigorous quality control throughout." },
  { n: "05", icon: KeyRound, t: "Handover & Aftercare", d: "Comprehensive snagging, commissioning, O&M manual handover, and 12-month post-completion support." },
];

const TEAM = [
  { name: "David Roca", role: "Founder & CEO", bio: "Engineer turned entrepreneur. Founded Roca Group in 2004.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=85" },
  { name: "Aisha Patel", role: "Managing Director", bio: "20 years leading delivery on landmark UK schemes.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85" },
  { name: "Tom Hargreaves", role: "Construction Director", bio: "Oversees all live sites and HSE compliance.", img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=85" },
  { name: "Eleanor Reid", role: "Sustainability Director", bio: "Architect of our 2030 net zero roadmap.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85" },
];

export default function Approach() {
  return (
    <>
      <section className="bg-roca-navy py-24 md:py-36">
        <div className="roca-container">
          <p className="font-label text-roca-muted text-xs mb-6"><Link to="/" className="hover:text-roca-copper">Home</Link> <span className="mx-2 text-roca-copper">/</span> Our Approach</p>
          <h1 className="font-display text-roca-white text-4xl md:text-[80px] leading-[1.05] max-w-4xl">Our Approach to <span className="text-roca-copper italic">Every Build.</span></h1>
          <p className="text-roca-white/75 max-w-2xl text-lg mt-8">A rigorous, transparent process that protects your investment at every stage — from first conversation to final handover and beyond.</p>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-roca-white py-24 md:py-32">
        <div className="roca-container">
          <div className="text-center mb-20 reveal">
            <p className="font-label text-roca-copper text-xs mb-4">The Roca Process</p>
            <h2 className="font-display text-4xl md:text-5xl text-roca-navy">Five Stages. Zero Surprises.</h2>
          </div>

          <div className="relative grid md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px border-t-2 border-dashed border-roca-copper/40" />
            {STEPS.map((s, i) => (
              <div key={s.n} className="relative reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-roca-cream">
                  <span className="absolute inset-0 flex items-center justify-center font-label text-[60px] text-roca-navy/10 leading-none">{s.n}</span>
                  <s.icon className="text-roca-copper relative" size={36} strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-2xl text-roca-navy text-center mb-3 leading-tight">{s.t}</h3>
                <p className="text-foreground/70 text-sm text-center">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-roca-cream py-24">
        <div className="roca-container">
          <div className="text-center mb-14 reveal">
            <p className="font-label text-roca-copper text-xs mb-4">Our Commitments</p>
            <h2 className="font-display text-4xl md:text-5xl text-roca-navy">Built Into Every Project</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: ShieldCheck, t: "Site Safety", d: "We work toward an industry-leading zero incident target. Independently HSE-audited, with full CDM-2015 compliance and dedicated safety leads on every site." },
              { Icon: Leaf, t: "Environmental", d: "BREEAM Excellent as standard, measurable carbon reduction at every stage, ≥95% construction waste diversion from landfill, and low-carbon material specifications." },
              { Icon: Users, t: "Community", d: "Local employment commitments, structured apprenticeship programmes, and active charitable partnerships in every region we build." },
            ].map((c) => (
              <div key={c.t} className="bg-roca-white p-10 border-t-2 border-roca-copper reveal">
                <c.Icon className="text-roca-copper mb-6" size={36} strokeWidth={1.4} />
                <h3 className="font-display text-2xl text-roca-navy mb-3">{c.t}</h3>
                <p className="text-foreground/75 text-sm">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="bg-roca-charcoal py-24 md:py-32">
        <div className="roca-container grid lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85" alt="Birmingham Innovation Quarter" className="w-full h-[500px] object-cover reveal" loading="lazy" />
          <div className="reveal">
            <p className="font-label text-roca-copper text-xs mb-4">Featured Case Study</p>
            <h2 className="font-display text-roca-white text-4xl md:text-5xl mb-6 leading-tight">Birmingham Innovation Quarter</h2>
            <p className="text-roca-white/75 mb-8">A 14-storey mixed-use development in the heart of Birmingham, delivered on time and 4% under budget for Birmingham City Council.</p>
            <dl className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10 border-y border-roca-copper/30 py-8">
              {[["Value","£92M"],["Duration","28 months"],["Sector","Commercial"],["Completed","2025"]].map(([k,v]) => (
                <div key={k}>
                  <dt className="font-label text-roca-copper text-[11px] mb-1">{k}</dt>
                  <dd className="text-roca-white font-display text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
            <Link to="/projects" className="copper-link">View Full Case Study <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-roca-cream py-24 md:py-32">
        <div className="roca-container">
          <div className="text-center mb-16 reveal">
            <p className="font-label text-roca-copper text-xs mb-4">Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl text-roca-navy">The People Behind Roca</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM.map((m) => (
              <div key={m.name} className="reveal group">
                <div className="overflow-hidden mb-5">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-[320px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h3 className="text-roca-navy text-lg font-semibold">{m.name}</h3>
                <p className="font-label text-roca-copper text-[11px] mb-3">{m.role}</p>
                <p className="text-foreground/70 text-sm mb-4">{m.bio}</p>
                <a href="#" className="text-roca-copper hover:text-roca-navy transition-colors inline-block"><Linkedin size={18} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
