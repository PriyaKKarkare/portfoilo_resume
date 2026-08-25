import React from "react";
import { BookOpen } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";
import { PUBLICATIONS } from "../data/resumeData.js";

export default function Publications() {
  return (
    <section className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Research" title="Publications" icon={<BookOpen size={16} />} />
      </Reveal>
      <div className="flex flex-col gap-4 mt-8">
        {PUBLICATIONS.map((p, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="card-hover bg-surface border border-line rounded-2xl px-7 py-6.5">
              <p className="text-[14.5px] font-semibold leading-relaxed">{p.title}</p>
              <p className="font-mono text-[12px] text-muted mt-2">{p.venue}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
