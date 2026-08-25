import React from "react";
import { Link2, ExternalLink } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";
import { PROJECT_LINKS } from "../data/resumeData.js";

export default function LiveProjectLinks() {
  return (
    <section id="live-projects" className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Deployed" title="Live project links" icon={<Link2 size={16} />} />
        <p className="text-muted text-[14.5px] mt-2.5 max-w-xl">
          Deployed builds you can open and click through directly.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {PROJECT_LINKS.map((p, i) => (
          <Reveal key={p.url} delay={i * 60}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="chip card-hover flex items-center justify-between gap-3 bg-surface border border-line rounded-2xl px-6 py-5 no-underline"
            >
              <span>
                <p className="font-display font-bold text-[14.5px]">{p.name}</p>
                <p className="font-mono text-[11.5px] text-primary mt-1">View live</p>
              </span>
              <ExternalLink size={16} className="text-muted flex-shrink-0" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
