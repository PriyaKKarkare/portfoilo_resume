import React from "react";
import { Award } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";
import { ACHIEVEMENTS } from "../data/resumeData.js";

export default function Achievements() {
  return (
    <section className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Highlights" title="Achievements" icon={<Award size={16} />} />
      </Reveal>
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="card-hover flex gap-3 bg-surface border border-line rounded-2xl p-4">
              <div className="font-mono flex items-center justify-center w-6.5 h-6.5 rounded-lg bg-primary/10 text-primary text-[12px] flex-shrink-0">
                {i + 1}
              </div>
              <p className="text-[14px] leading-relaxed">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
