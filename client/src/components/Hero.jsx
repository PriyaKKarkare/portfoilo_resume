import React from "react";
import { Mail, Linkedin, ArrowUpRight, MapPin, TrendingUp } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import Sparkline from "./shared/Sparkline.jsx";
import { PROFILE } from "../data/resumeData.js";

const STATS = [
  ["3", "Companies & internships"],
  ["1", "Live NeoBanking platform"],
  ["2", "Scopus-indexed publications"],
  ["MERN", "Certified, 2026"],
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12">
      <Reveal>
        <p className="font-mono text-primary text-[13px] tracking-widest mb-2">
          FRONT-END DEVELOPER · REACT.JS / NEXT.JS
        </p>
        <h1
          className="font-display font-bold leading-tight w-full"
          style={{ fontSize: "clamp(32px,5vw,56px)" }}
        >
          I build banking-grade interfaces that feel effortless to use.
        </h1>
        <p className="text-muted text-base w-full block mt-4 leading-relaxed">
          2.4 years shipping production UI for a live NeoBanking platform — reusable
          components, REST integrations, and interfaces built to survive real transaction
          volume. Recently MERN-certified and building out full-stack range.
        </p>
        <div className="flex flex-wrap gap-3 mt-7">
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-mono flex items-center gap-2 text-white bg-primary px-5 py-3 rounded-xl text-[13px]"
          >
            <Mail size={15} /> Email me
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono flex items-center gap-2 border border-line px-5 py-3 rounded-xl text-[13px]"
          >
            <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="card-hover mt-11 bg-surface border border-line rounded-3xl p-7 shadow-[0_20px_50px_rgba(16,21,43,0.06)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="font-display flex items-center justify-center w-14 h-14 rounded-2xl text-white font-bold text-xl bg-gradient-to-br from-primary to-primaryDeep">
                PK
              </div>
              <div>
                <p className="font-display font-bold text-[17px]">{PROFILE.name}</p>
                <p className="font-mono flex items-center gap-1 text-muted text-[12.5px] mt-1">
                  <MapPin size={12} /> {PROFILE.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <p className="font-mono text-muted text-[11px] tracking-wide">EXPERIENCE</p>
                <p className="font-display text-3xl font-bold">
                  2.4 <span className="text-[15px] text-mint">yrs</span>
                </p>
              </div>
              <div style={{ width: 130 }}>
                <Sparkline />
              </div>
              <div className="font-mono flex items-center gap-1 text-mint text-[12.5px] bg-mint/10 px-2.5 py-1 rounded-full">
                <TrendingUp size={13} /> growing
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 border-t border-line pt-5">
            {STATS.map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-[22px] font-bold text-primaryDeep">{num}</p>
                <p className="font-mono text-[11.5px] text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}