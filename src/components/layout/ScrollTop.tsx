import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full border-2 border-roca-copper bg-roca-navy/80 text-roca-copper hover:bg-roca-copper hover:text-roca-navy transition-all flex items-center justify-center backdrop-blur"
    >
      <ArrowUp size={20} />
    </button>
  );
}
