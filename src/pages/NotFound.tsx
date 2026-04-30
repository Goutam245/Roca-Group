import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] bg-roca-navy text-roca-white flex items-center">
      <div className="roca-container text-center">
        <p className="font-label text-roca-copper text-xs mb-5">Error 404</p>
        <h1 className="font-display text-6xl md:text-8xl mb-6">Page Not Found</h1>
        <p className="text-roca-white/75 mb-10 max-w-md mx-auto">The page you were looking for has moved or no longer exists.</p>
        <Link to="/" className="btn-copper">Return Home</Link>
      </div>
    </section>
  );
}
