import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-roca-deep text-roca-white border-t-2 border-roca-copper">
      <div className="roca-container py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-1.5 h-1.5 bg-roca-copper" />
            <div className="leading-none">
              <div className="font-display text-roca-white font-bold text-3xl">roca</div>
              <div className="font-label text-roca-copper text-[11px] tracking-[0.2em]">group</div>
            </div>
          </div>
          <p className="text-roca-muted text-sm max-w-xs">Building Britain's Future Since 2004.</p>
          <div className="flex gap-4 mt-6">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="w-10 h-10 border border-roca-copper/40 flex items-center justify-center text-roca-copper hover:bg-roca-copper hover:text-roca-navy transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-label text-roca-copper text-xs mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-roca-muted">
            {[
              ["/", "Home"],
              ["/approach", "Our Approach"],
              ["/sectors", "Our Sectors"],
              ["/projects", "Our Projects"],
              ["/contact", "Contact"],
              ["#", "Careers"],
            ].map(([to, l]) => (
              <li key={l}><Link to={to} className="hover:text-roca-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label text-roca-copper text-xs mb-5">Sectors</h4>
          <ul className="space-y-3 text-sm text-roca-muted">
            {["Commercial","Residential","Civil","Industrial","Fit-Out","Heritage"].map((s) => (
              <li key={s}><Link to="/sectors" className="hover:text-roca-white transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-label text-roca-copper text-xs mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-roca-muted">
            <li>Roca Group HQ<br/>12 Exchange Square<br/>Manchester, M2 7EN</li>
            <li>+44 (0) 161 234 5678</li>
            <li>enquiries@rocagroup.co.uk</li>
            <li className="text-xs pt-2">Mon–Fri 8:00am – 6:00pm</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-roca-copper/20">
        <div className="roca-container py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-roca-muted">
          <div>© 2026 Roca Group Limited. All Rights Reserved. <span className="mx-2">|</span> <a href="#" className="hover:text-roca-white">Privacy Policy</a> <span className="mx-2">|</span> <a href="#" className="hover:text-roca-white">Terms</a> <span className="mx-2">|</span> <a href="#" className="hover:text-roca-white">Sitemap</a></div>
          <div>Registered in England & Wales No. 04521389</div>
        </div>
      </div>
    </footer>
  );
}
