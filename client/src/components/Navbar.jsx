import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, X, Mail } from "lucide-react";
import { toggleMenu, closeMenu, setScrolled } from "../store/slices/uiSlice.js";
import { NAV, PROFILE } from "../data/resumeData.js";

export default function Navbar() {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.ui.menuOpen);
  const scrolled = useSelector((state) => state.ui.scrolled);

  useEffect(() => {
    const onScroll = () => dispatch(setScrolled(window.scrollY > 12));
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dispatch]);

  const goTo = (id) => {
    dispatch(closeMenu());
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? "rgba(245,246,250,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid #E4E7F0" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => goTo("top")} className="font-display font-bold text-lg">
          Priya<span className="text-primary">.</span>Karkare
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              className="navlink font-mono text-[13px] text-muted tracking-wide"
            >
              {n.label}
            </button>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-mono text-[13px] px-4 py-2 rounded-full bg-ink text-white flex items-center gap-2"
          >
            <Mail size={14} /> Say hello
          </a>
        </nav>

        <button className="md:hidden" onClick={() => dispatch(toggleMenu())}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 bg-base">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => goTo(n.id)}
              className="font-mono text-left text-[14px]"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
