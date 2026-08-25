import React from "react";
import { FolderGit2 } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";
import { PROJECTS } from "../data/resumeData.js";

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Build log" title="Academic & personal projects" icon={<FolderGit2 size={16} />} />
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <div className="card-hover bg-surface border border-line rounded-2xl p-6 h-full">
              <span className="font-mono text-[11px] text-coral bg-coral/10 px-2.5 py-1 rounded-full">
                {p.tag}
              </span>
              <p className="font-display font-bold text-[16px] mt-3.5">{p.title}</p>
              <p className="text-[13.5px] text-muted mt-2 leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
