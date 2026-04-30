import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const SECTORS = [
  {
    tag: "01 — Commercial Construction",
    title: "Commercial Construction",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85",
    body: "From speculative office towers to flagship retail destinations, Roca Group delivers commercial buildings that combine architectural ambition with commercial pragmatism. We work with developers, REITs and public sector clients to deliver landmark schemes across the UK.",
    services: ["High-rise office buildings", "Mixed-use developments", "Retail and hospitality", "Build-to-suit headquarters"],
    stat: "180+ commercial projects delivered",
  },
  {
    tag: "02 — Residential Development",
    title: "Residential Development",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
    body: "We build homes that hold their value. Our residential portfolio ranges from luxury city apartments to large-scale suburban housing, all delivered to the highest specification and finished with the same care as our flagship commercial schemes.",
    services: ["High-density apartment schemes", "Build-to-rent (BTR)", "Affordable housing partnerships", "Luxury residential towers"],
    stat: "9,400+ homes delivered to date",
  },
  {
    tag: "03 — Civil & Infrastructure",
    title: "Civil & Infrastructure",
    img: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=1200&q=85",
    body: "Roca Group is a trusted delivery partner for National Highways, Network Rail and local authorities. We mobilise quickly, work safely under live operational conditions, and deliver complex civils projects to demanding programmes.",
    services: ["Highway construction & upgrades", "Bridges & viaducts", "Tunnelling & earthworks", "Public realm and active travel"],
    stat: "£600M+ civils delivered since 2018",
  },
  {
    tag: "04 — Industrial Facilities",
    title: "Industrial Facilities",
    img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=85",
    body: "Modern logistics, manufacturing and life sciences facilities require precision delivery and deep technical expertise. Our industrial team handles everything from speculative big-box logistics to complex GMP-compliant biotech campuses.",
    services: ["Logistics & distribution centres", "Manufacturing facilities", "Data centres", "Life sciences & cleanrooms"],
    stat: "12M+ sq ft of industrial space built",
  },
  {
    tag: "05 — Interior Fit-Out & Refurbishment",
    title: "Interior Fit-Out & Refurbishment",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85",
    body: "Our specialist fit-out division delivers Cat A and Cat B office, hospitality and retail interiors with the precision the world's most demanding occupiers expect. We work in live environments out-of-hours and to the tightest programmes.",
    services: ["Cat A & Cat B fit-out", "Hospitality interiors", "Retail and showroom rollouts", "Refurbishment in occupied buildings"],
    stat: "3.4M sq ft of fit-out completed",
  },
  {
    tag: "06 — Heritage & Restoration",
    title: "Heritage & Restoration",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=85",
    body: "Working on listed and historic buildings demands specialist craft skills and a meticulous approach to fabric, materials and consents. Our heritage team has restored cathedrals, civic halls and grand hotels across the UK.",
    services: ["Grade I & II listed buildings", "Stone and masonry conservation", "Historic timber & joinery", "Adaptive reuse"],
    stat: "Approved by Historic England panel",
  },
];

export default function Sectors() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden py-32">
        <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=1920&q=85" alt="UK city skyline with construction cranes" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,31,58,0.92) 0%, rgba(11,31,58,0.6) 100%)" }} />
        <div className="roca-container relative z-10 text-roca-white">
          <p className="font-label text-roca-muted text-xs mb-6"><Link to="/" className="hover:text-roca-copper">Home</Link> <span className="mx-2 text-roca-copper">/</span> Our Sectors</p>
          <h1 className="font-display text-5xl md:text-[80px] leading-[1.05] max-w-3xl">Where We <span className="text-roca-copper italic">Build.</span></h1>
          <p className="text-roca-white/75 max-w-2xl text-lg mt-8">Six core sectors. Decades of delivery. One uncompromising standard.</p>
        </div>
      </section>

      {SECTORS.map((s, i) => (
        <section key={s.title} className={`${i % 2 === 0 ? "bg-roca-white" : "bg-roca-cream"} py-24 md:py-32 border-t border-roca-copper/15`}>
          <div className="roca-container grid lg:grid-cols-2 gap-14 items-center">
            <div className={`reveal ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-[500px] object-cover" />
            </div>
            <div className="reveal">
              <p className="font-label text-roca-copper text-xs mb-4">{s.tag}</p>
              <h2 className="font-display text-3xl md:text-5xl text-roca-navy mb-6 leading-tight">{s.title}</h2>
              <p className="text-foreground/80 mb-8">{s.body}</p>
              <ul className="space-y-3 mb-8">
                {s.services.map((sv) => (
                  <li key={sv} className="flex items-start gap-3 text-foreground/85">
                    <Check className="text-roca-copper shrink-0 mt-1" size={18} />
                    <span>{sv}</span>
                  </li>
                ))}
              </ul>
              <p className="font-label text-roca-copper text-sm border-t border-roca-copper/30 pt-5 mb-6">{s.stat}</p>
              <Link to="/projects" className="copper-link">View Projects <ArrowRight size={14} /></Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
