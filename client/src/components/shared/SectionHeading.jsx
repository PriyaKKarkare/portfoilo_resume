import React from "react";

export default function SectionHeading({ eyebrow, title, icon }) {
  return (
    <div>
      <p className="font-mono flex items-center gap-2 text-primary text-[12.5px] tracking-widest">
        {icon} {eyebrow.toUpperCase()}
      </p>
      <h2 className="font-display font-bold mt-2" style={{ fontSize: "clamp(22px,3vw,30px)" }}>
        {title}
      </h2>
    </div>
  );
}
