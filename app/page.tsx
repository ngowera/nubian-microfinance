"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, ExternalLink, MapPin, Phone, ShieldCheck, Sparkles, Store, UserRound } from "lucide-react";
import { asset } from "@/lib/site";

const phoneNumber = "265999647045";
const money = (value: number) => `MWK ${value.toLocaleString("en-MW")}`;

export default function Home() {
  const [amount, setAmount] = useState(1000000);
  const [term, setTerm] = useState<2 | 4>(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function bookAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = ["Hello Nubian Entrepreneurship Microfinance,", "", "I would like to book an appointment.", `Name: ${name}`, `Phone: ${phone}`, `Preferred date: ${date}`, `Preferred time: ${time}`].join("\n");
    setSubmitted(true);
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return <main className="nubian-site" id="top">
    <header className="nubian-nav">
      <a className="nubian-brand" href="#top" aria-label="Nubian Entrepreneurship Microfinance home"><span className="nubian-mark">N</span><span>Nubian<small>ENTREPRENEURSHIP<br />MICROFINANCE</small></span></a>
      <nav aria-label="Main navigation"><a href="#loans">Loans</a><a href="#why-nubian">Why Nubian</a><a href="#contact">Contact</a></nav>
      <a className="nubian-nav-cta" href="#appointment">Book appointment <ArrowRight size={16} /></a>
    </header>
    <section className="nubian-hero">
      <div className="nubian-hero-copy"><p className="nubian-kicker"><span /> ENTREPRENEURSHIP STARTS WITH A YES</p><h1>Back your next <em>big move.</em></h1><p className="nubian-lead">Practical financing for people building businesses, growing their income and moving forward in Malawi.</p><div className="nubian-actions"><a className="nubian-button" href="#appointment">Book an appointment <CalendarDays size={18} /></a><a className="nubian-text-link" href="#loans">Explore loans <ArrowRight size={18} /></a></div><div className="nubian-trust"><ShieldCheck size={18} /> We listen first, then help you find your way forward.</div></div>
      <div className="nubian-hero-image"><img src={asset("/images/tailor.webp")} alt="Entrepreneur working in a tailoring studio" /><div className="nubian-hero-card"><Sparkles size={21} /><span>From an idea to an income.<strong>Your ambition belongs here.</strong></span></div></div>
    </section>
    <div className="nubian-strip"><span><CheckCircle2 /> Loans from <strong>MWK 1,000,000</strong></span><span><CalendarDays /> Appointment-based support</span><span><MapPin /> Lilongwe, Malawi</span></div>
    <section className="nubian-section" id="loans"><p className="nubian-kicker"><span /> FUNDING FOR THE WORK AHEAD</p><h2>Finance shaped around your ambition.</h2><p className="nubian-intro">Whether you are expanding a business or taking care of an important personal need, we are ready to start the conversation.</p><div className="nubian-loan-grid">
      <article className="nubian-loan-card"><div className="nubian-icon"><UserRound /></div><p className="nubian-card-label">FOR YOU</p><h3>Personal loans</h3><p>Take the next step with support for meaningful goals and everyday priorities.</p><div className="nubian-tags"><span>Education</span><span>Home needs</span><span>Personal goals</span></div><a href="#appointment">Talk to us about a personal loan <ArrowRight size={17} /></a></article>
      <article className="nubian-loan-card nubian-business-card"><div className="nubian-icon"><Store /></div><p className="nubian-card-label">FOR BUSINESS</p><h3>Business loans</h3><p>Build momentum with finance for stock, equipment and the opportunities that move your business ahead.</p><div className="nubian-tags"><span>Stock & supplies</span><span>Equipment</span><span>Growth</span></div><a href="#appointment">Talk to us about a business loan <ArrowRight size={17} /></a></article>
    </div></section>
    <section className="nubian-feature" id="why-nubian"><div className="nubian-feature-image"><img src={asset("/images/grocer.webp")} alt="Small business owner at a grocery shop" /></div><div className="nubian-feature-copy"><p className="nubian-kicker light"><span /> BUILT FOR ENTREPRENEURS</p><h2>Growth looks different for every business.</h2><p>Tell us where you are headed. We’ll discuss financing that can help you stock up, invest in the tools of your trade, and keep your plans moving.</p><ul><li><CheckCircle2 /> Start from <strong>MWK 1,000,000</strong></li><li><CheckCircle2 /> Meet with our team before you apply</li><li><CheckCircle2 /> Clear terms discussed during consultation</li></ul><a className="nubian-button gold" href="#appointment">Book a consultation <ArrowRight size={18} /></a></div></section>
    <section className="nubian-calculator" aria-labelledby="calculator-title"><div><p className="nubian-kicker"><span /> PLAN WITH CONFIDENCE</p><h2 id="calculator-title">Plan your repayment.</h2><p>Loans start from MWK 1,000,000. Choose a term to see your estimated total repayment.</p></div><div className="nubian-calculator-card"><label htmlFor="loan-amount">Loan amount (MWK)</label><input id="loan-amount" type="range" min="1000000" max="10000000" step="100000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} /><output>{money(amount)}</output><div className="nubian-term-options"><button type="button" className={term === 2 ? "active" : ""} onClick={() => setTerm(2)}>2 weeks <strong>30%</strong></button><button type="button" className={term === 4 ? "active" : ""} onClick={() => setTerm(4)}>4 weeks <strong>40%</strong></button></div><div className="nubian-repayment"><span>Estimated total repayment</span><strong>{money(Math.round(amount * (term === 2 ? 1.3 : 1.4)))}</strong><small>Interest: {money(Math.round(amount * (term === 2 ? 0.3 : 0.4)))} · {term} weeks</small></div></div></section>
    <section className="nubian-appointment" id="appointment"><div className="nubian-appointment-copy"><p className="nubian-kicker"><span /> LET’S TALK</p><h2>Book a time with Nubian.</h2><p>Leave your phone number and preferred time. Our team will contact you to confirm your appointment.</p><div className="nubian-contact-short"><Phone size={19} /><div><strong>Call us</strong><a href="tel:+265999647045">+265 (0) 999 647 045</a><a href="tel:+265888100041">+265 (0) 888 100 041</a></div></div></div>
      <form className="nubian-form" onSubmit={bookAppointment}><label>Full name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" /></label><label>Phone number<input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. 0999 123 456" /></label><div className="nubian-form-row"><label>Preferred date<input required type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label><label>Preferred time<input required type="time" value={time} onChange={(e) => setTime(e.target.value)} /></label></div><button className="nubian-button" type="submit">Request appointment <ArrowRight size={18} /></button>{submitted && <p className="nubian-success" role="status">Your appointment request is ready in WhatsApp. Send the message and the Nubian team will contact you.</p>}</form>
    </section>
    <footer className="nubian-footer" id="contact"><div><div className="nubian-footer-brand"><span className="nubian-mark">N</span><span>Nubian<small>ENTREPRENEURSHIP<br />MICROFINANCE</small></span></div><p>Helping Malawi’s entrepreneurs turn possibility into progress.</p></div><div><h3>Visit us</h3><p>Area 47, Sector 3, Plot No. 394<br />Opposite Mlima Mgodi Radio Station<br />Lilongwe, Malawi</p></div><div><h3>Stay connected</h3><a href="https://web.facebook.com/Nubianentrepreneurshipandmicrofinance" target="_blank" rel="noreferrer"><ExternalLink size={17} /> Facebook</a><a href="tel:+265999647045"><Phone size={17} /> +265 (0) 999 647 045</a></div></footer><div className="nubian-copyright">© {new Date().getFullYear()} Nubian Entrepreneurship Microfinance. All rights reserved.</div>
  </main>;
}
