import React from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";
import { EXPERIENCE } from "../data/resumeData.js";

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Statements" title="Work experience" icon={<Briefcase size={16} />} />
      </Reveal>
      <div className="mt-10 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-line" />
        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex gap-6">
                <div className="relative flex-shrink-0 w-4">
                  <div className="w-4 h-4 rounded-full bg-surface border-[3px] border-primary mt-1" />
                </div>
                <div className="card-hover bg-surface border border-line rounded-2xl px-5 py-5 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-display font-bold text-[16.5px]">{job.role}</p>
                    <p className="font-mono text-[12px] text-mint">{job.date}</p>
                  </div>
                  <p className="font-mono text-[12.5px] text-muted mt-1">
                    {job.company} · {job.place} · {job.project}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-[14.5px] leading-relaxed">
                        <ChevronRight size={14} className="text-primary mt-1 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
