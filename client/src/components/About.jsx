import React from "react";
import Reveal from "./shared/Reveal.jsx";
import SectionHeading from "./shared/SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-line">
      <Reveal>
        <SectionHeading eyebrow="Overview" title="Profile summary" />
        <p className="text-muted text-base leading-loose w-full block mt-4">
          Front-End Developer with 2.4 years of experience in React.js, Next.js, JavaScript,
          HTML5 and CSS3 — skilled in building responsive UIs, reusable components, REST API
          integration and performance optimization. Most of that time has gone into{" "}
          <strong className="text-ink">NeoBank 1.5</strong>, a live NeoBanking application,
          where production stability and clean handoffs between frontend and backend teams
          mattered as much as pixel accuracy. Recently completed a Full Stack (MERN)
          certification to round out backend fundamentals.
        </p>
      </Reveal>
    </section>
  );
}
