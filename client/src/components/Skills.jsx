import React from "react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";
import { SKILLS } from "../data/resumeData.js";

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Holdings" title="Technical skills" />
      </Reveal>
      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {SKILLS.map((g, i) => (
          <Reveal key={g.group} delay={i * 80}>
            <div className="card-hover bg-surface border border-line rounded-2xl p-6">
              <p className="font-mono text-[11.5px] text-muted tracking-wide">
                {g.group.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="chip font-mono text-[12.5px] border border-line rounded-full px-3 py-1.5 bg-base"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
