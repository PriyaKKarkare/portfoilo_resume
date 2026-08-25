import React from "react";
import { GraduationCap } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";
import { EDUCATION } from "../data/resumeData.js";

export default function Education() {
  return (
    <section id="education" className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Foundation" title="Education & certification" icon={<GraduationCap size={16} />} />
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.school} delay={i * 90}>
            <div className="card-hover bg-surface border border-line rounded-2xl p-6 h-full">
              <p className="font-display font-bold text-[15px] leading-snug">{e.school}</p>
              <p className="font-mono text-[12px] text-muted mt-1.5">{e.place}</p>
              <p className="text-[13.5px] mt-2.5">{e.degree}</p>
              <p className="font-mono text-[12px] text-mint mt-2">{e.date}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
