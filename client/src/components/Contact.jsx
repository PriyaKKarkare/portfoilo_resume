import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Send } from "lucide-react";
import Reveal from "./shared/Reveal.jsx";
import { submitContact, resetContactStatus } from "../store/slices/contactSlice.js";
import { PROFILE } from "../data/resumeData.js";

export default function Contact() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.contact);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContact(form)).then((action) => {
      if (submitContact.fulfilled.match(action)) {
        setForm({ name: "", email: "", message: "" });
      }
    });
  };

  return (
    <section id="contact" className="py-20 border-t border-line">
      <Reveal>
        <div
          className="rounded-[28px] p-10 md:p-12 text-white"
          style={{ background: "linear-gradient(135deg, #10152B, #1B2450)" }}
        >
          <p className="font-mono text-mint text-[13px] tracking-widest">OPEN TO OPPORTUNITIES</p>
          <h2
            className="font-display font-bold mt-3 max-w-xl"
            style={{ fontSize: "clamp(26px,4vw,38px)" }}
          >
            Let's build something people trust with their money.
          </h2>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href={`mailto:${PROFILE.email}`} className="font-mono flex items-center gap-2 text-[13.5px]">
              <Mail size={15} /> {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="font-mono flex items-center gap-2 text-[13.5px]">
              <Phone size={15} /> {PROFILE.phone}
            </a>
            <span className="font-mono flex items-center gap-2 text-[13.5px] text-white/70">
              <MapPin size={15} /> {PROFILE.location}
            </span>
          </div>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono inline-flex items-center gap-2 mt-7 bg-mint text-ink px-6 py-3.5 rounded-xl text-[13.5px] font-semibold"
          >
            <Linkedin size={16} /> Connect on LinkedIn <ArrowUpRight size={14} />
          </a>

        </div>
      </Reveal>
    </section>
  );
}
