"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Store,
  UserRound,
} from "lucide-react";
import { asset } from "@/lib/site";

const companyName = "Your Microfinance Company";
const contactNumbers = ["0999xxxxxxxx", "088xxxxxxx"];
const demoNotice =
  "This is a demo form and does not send requests. Add a working WhatsApp number before publishing.";
const minimumLoanAmount = 100000;
const maximumLoanAmount = 5000000;
const loanTerms = [1, 2, 3, 4] as const;
type LoanTerm = (typeof loanTerms)[number];
const interestRates: Record<LoanTerm, number> = {
  1: 10,
  2: 20,
  3: 30,
  4: 40,
};
const money = (value: number) => `MWK ${value.toLocaleString("en-MW")}`;

export default function Home() {
  const [amount, setAmount] = useState(1000000);
  const [customAmount, setCustomAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [term, setTerm] = useState<LoanTerm>(3);
  const [appointment, setAppointment] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });
  const [application, setApplication] = useState({
    type: "personal",
    name: "",
    phone: "",
    amount: "1000000",
    business: "",
    purpose: "",
  });
  const [appointmentSent, setAppointmentSent] = useState(false);
  const [applicationSent, setApplicationSent] = useState(false);
  const interestRate = interestRates[term];
  const interest = Math.round((amount * interestRate) / 100);
  const totalRepayment = amount + interest;

  function bookAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAppointmentSent(true);
  }

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setApplicationSent(true);
  }

  function applyCustomAmount() {
    const parsedAmount = Number(customAmount);
    if (
      !Number.isInteger(parsedAmount) ||
      parsedAmount < minimumLoanAmount ||
      parsedAmount > maximumLoanAmount
    ) {
      setAmountError(
        `Enter a whole amount from ${money(minimumLoanAmount)} to ${money(maximumLoanAmount)}.`,
      );
      return;
    }

    setAmount(parsedAmount);
    setAmountError("");
  }

  return (
    <main className="nubian-site" id="top">
      <header className="nubian-nav">
        <a className="nubian-brand" href="#top">
          <span className="nubian-mark">M</span>
          <span>
            {companyName}
            <small>MICROFINANCE</small>
          </span>
        </a>
        <nav>
          <a href="#loans">Loans</a>
          <a href="#calculator">Calculator</a>
          <a href="#why-us">Why us</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nubian-nav-cta" href="#apply">
          Apply for a loan <ArrowRight size={16} />
        </a>
      </header>

      <section className="nubian-hero">
        <div className="nubian-hero-copy">
          <p className="nubian-kicker">
            <span /> ENTREPRENEURSHIP STARTS WITH A YES
          </p>
          <h1>
            Back your next <em>big move.</em>
          </h1>
          <p className="nubian-lead">
            Practical financing for people building businesses, growing their
            income and moving forward in Malawi.
          </p>
          <div className="nubian-actions">
            <a className="nubian-button" href="#apply">
              Apply for a loan <FileText size={18} />
            </a>
            <a className="nubian-text-link" href="#calculator">
              Calculate your loan <ArrowRight size={18} />
            </a>
          </div>
          <div className="nubian-trust">
            <ShieldCheck size={18} /> We listen first, then help you find your
            way forward.
          </div>
        </div>
        <div className="nubian-hero-image">
          <img
            src={asset("/images/landing-team.webp")}
            alt="Clients and team celebrating progress together"
          />
          <div className="nubian-hero-card">
            <Sparkles size={21} />
            <span>
              From an idea to an income.
              <strong>Your ambition belongs here.</strong>
            </span>
          </div>
        </div>
      </section>

      <div className="nubian-strip">
        <span>
          <CheckCircle2 /> Loans from <strong>{money(minimumLoanAmount)}</strong>
        </span>
        <span>
          <CalendarDays /> Appointment-based support
        </span>
        <span>
          <MapPin /> Malawi
        </span>
      </div>

      <section className="nubian-section" id="loans">
        <p className="nubian-kicker">
          <span /> FUNDING FOR THE WORK AHEAD
        </p>
        <h2>One application. The loan that fits.</h2>
        <p className="nubian-intro">
          Begin one simple application, then select whether you need finance
          for your business or for a personal goal.
        </p>
        <article className="nubian-loan-card nubian-combined-card">
          <img
            className="nubian-card-photo"
            src={asset("/images/loan-card-background.webp")}
            alt=""
          />
          <div className="nubian-card-content">
            <div className="nubian-icon">
              <Store />
            </div>
            <p className="nubian-card-label">MICROFINANCE LOANS</p>
            <h3>Personal or business loan</h3>
            <p>
              Choose the support that matches your plans. We will discuss your
              request, terms and next steps with you.
            </p>
            <div className="nubian-tags">
              <span>
                <UserRound size={13} /> Personal loan
              </span>
              <span>
                <Store size={13} /> Business loan
              </span>
              <span>From {money(minimumLoanAmount)}</span>
            </div>
            <a className="nubian-button" href="#apply">
              Apply for a loan <ArrowRight size={18} />
            </a>
          </div>
        </article>
      </section>

      <section className="nubian-feature" id="why-us">
        <div className="nubian-feature-image">
          <img
            src={asset("/images/consultation.webp")}
            alt="A representative consulting with a client"
          />
        </div>
        <div className="nubian-feature-copy">
          <p className="nubian-kicker light">
            <span /> BUILT FOR ENTREPRENEURS
          </p>
          <h2>Growth looks different for every business.</h2>
          <p>
            Tell us where you are headed. We’ll discuss financing that can help
            you stock up, invest in the tools of your trade, and keep your plans
            moving.
          </p>
          <ul>
            <li>
              <CheckCircle2 /> Start from <strong>{money(minimumLoanAmount)}</strong>
            </li>
            <li>
              <CheckCircle2 /> Meet with our team before you apply
            </li>
            <li>
              <CheckCircle2 /> Clear terms discussed during consultation
            </li>
          </ul>
          <div className="nubian-feature-actions">
            <a className="nubian-button gold" href="#appointment">
              Book a consultation <ArrowRight size={18} />
            </a>
            <a className="nubian-button feature-outline" href="#apply">
              Apply for a loan <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="nubian-calculator" id="calculator">
        <div className="nubian-calculator-heading">
          <p className="nubian-kicker">
            <span /> PLAN WITH CONFIDENCE
          </p>
          <h2>Loan repayment calculator</h2>
          <p>
            Adjust the amount and loan term to see your estimated repayment.
          </p>
        </div>
        <div className="nubian-calculator-controls">
          <div className="nubian-calculator-field">
            <label htmlFor="loan-amount-range">Loan Amount (MWK)</label>
            <div
              className="nubian-amount-presets"
              aria-label="Popular loan amounts"
            >
              {[100000, 500000, 1000000, 2000000, 5000000].map((preset) => (
                <button
                  type="button"
                  key={preset}
                  className={amount === preset ? "active" : ""}
                  aria-pressed={amount === preset}
                  onClick={() => {
                    setAmount(preset);
                    setAmountError("");
                  }}
                >
                  {preset >= 1000000
                    ? `${preset / 1000000}M`
                    : `${preset / 1000}K`}
                </button>
              ))}
            </div>
            <div className="nubian-custom-amount">
              <input
                type="number"
                min={minimumLoanAmount}
                max={maximumLoanAmount}
                step="1000"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    applyCustomAmount();
                  }
                }}
                aria-label="Enter a custom loan amount in Malawi Kwacha"
                aria-describedby={amountError ? "loan-amount-error" : undefined}
                placeholder="Or enter custom amount"
              />
              <button
                type="button"
                className="nubian-calc-set"
                onClick={applyCustomAmount}
              >
                Set
              </button>
            </div>
            {amountError && (
              <p
                className="nubian-calculator-error"
                id="loan-amount-error"
                role="alert"
              >
                {amountError}
              </p>
            )}
            <input
              id="loan-amount-range"
              className="nubian-calculator-range"
              type="range"
              min={minimumLoanAmount}
              max={maximumLoanAmount}
              step="1000"
              value={amount}
              onChange={(event) => {
                setAmount(Number(event.target.value));
                setAmountError("");
              }}
              aria-label="Adjust loan amount"
            />
            <div className="nubian-range-labels">
              <span>{money(minimumLoanAmount)}</span>
              <output htmlFor="loan-amount-range">{money(amount)}</output>
              <span>{money(maximumLoanAmount)}</span>
            </div>
          </div>
          <div className="nubian-calculator-field nubian-term-field">
            <label htmlFor="loan-term">Loan Term</label>
            <div className="nubian-term-options" aria-label="Select loan term">
              {loanTerms.map((weeks) => (
                <button
                  type="button"
                  key={weeks}
                  className={term === weeks ? "active" : ""}
                  aria-pressed={term === weeks}
                  onClick={() => setTerm(weeks)}
                >
                  <span>
                    {weeks} {weeks === 1 ? "Week" : "Weeks"}
                  </span>
                  <strong>{interestRates[weeks]}%</strong>
                </button>
              ))}
            </div>
            <input
              id="loan-term"
              className="nubian-calculator-range"
              type="range"
              min="1"
              max="4"
              step="1"
              value={term}
              onChange={(event) => {
                const selectedTerm = loanTerms.find(
                  (weeks) => weeks === Number(event.target.value),
                );
                if (selectedTerm) setTerm(selectedTerm);
              }}
              aria-label="Adjust loan term in weeks"
            />
            <div className="nubian-range-labels nubian-term-range-labels">
              <span>1 Week</span>
              <output>
                {term} {term === 1 ? "Week" : "Weeks"} — {interestRate}%
              </output>
              <span>4 Weeks</span>
            </div>
          </div>
          <div className="nubian-calculator-field nubian-rate-field">
            <label htmlFor="interest-rate">Interest Rate</label>
            <output id="interest-rate">{interestRate}%</output>
          </div>
        </div>
        <aside className="nubian-calculator-summary" aria-live="polite">
          <div>
            <span className="nubian-summary-label">Total Repayment</span>
            <strong className="nubian-summary-total">
              {money(totalRepayment)}
            </strong>
          </div>
          <dl className="nubian-summary-details">
            <div>
              <dt>Principal</dt>
              <dd>{money(amount)}</dd>
            </div>
            <div>
              <dt>Interest ({interestRate}%)</dt>
              <dd>{money(interest)}</dd>
            </div>
            <div>
              <dt>Duration</dt>
              <dd>
                {term} {term === 1 ? "Week" : "Weeks"}
              </dd>
            </div>
          </dl>
          <a
            className="nubian-summary-apply"
            href="#apply"
            onClick={() =>
              setApplication({
                ...application,
                type: "personal",
                amount: String(amount),
              })
            }
          >
            <UserRound size={16} /> Apply Personal
          </a>
          <a
            className="nubian-summary-apply secondary"
            href="#apply"
            onClick={() =>
              setApplication({
                ...application,
                type: "business",
                amount: String(amount),
              })
            }
          >
            <Store size={16} /> Apply Business
          </a>
          <p className="nubian-calculator-disclaimer">
            Estimates use a flat interest rate for the selected term. Confirm
            all fees and final terms before applying.
          </p>
        </aside>
      </section>

      <section className="nubian-application" id="apply">
        <div className="nubian-application-aside">
          <img
            src={asset("/images/loan-request.webp")}
            alt="Customers discussing a loan request"
          />
          <div className="nubian-application-note">
            <p className="nubian-kicker">
              <span /> APPLY ONLINE
            </p>
            <h2>Thank you for considering {companyName}.</h2>
            <p>
              Start with the essentials to preview a loan request. This demo
              form does not send your details.
            </p>
            <div className="nubian-contact-short">
              <Phone size={19} />
              <div>
                <strong>Contact us</strong>
                {contactNumbers.map((number) => (
                  <span key={number}>{number}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <form className="nubian-form" onSubmit={submitApplication}>
          <h2>Start your loan application.</h2>
          <label>
            Loan type
            <select
              value={application.type}
              onChange={(event) =>
                setApplication({ ...application, type: event.target.value })
              }
            >
              <option value="personal">Personal loan</option>
              <option value="business">Business loan</option>
            </select>
          </label>
          <label>
            Full name
            <input
              required
              value={application.name}
              onChange={(event) =>
                setApplication({ ...application, name: event.target.value })
              }
              placeholder="Your full name"
            />
          </label>
          <div className="nubian-form-row">
            <label>
              Phone number
              <input
                required
                type="tel"
                value={application.phone}
                onChange={(event) =>
                  setApplication({ ...application, phone: event.target.value })
                }
                placeholder="e.g. 0999 123 456"
              />
            </label>
            <label>
              Loan amount (MWK)
              <input
                required
                type="number"
                min={minimumLoanAmount}
                step="1000"
                value={application.amount}
                onChange={(event) =>
                  setApplication({ ...application, amount: event.target.value })
                }
              />
            </label>
          </div>
          {application.type === "business" && (
            <label>
              Business name
              <input
                required
                value={application.business}
                onChange={(event) =>
                  setApplication({
                    ...application,
                    business: event.target.value,
                  })
                }
                placeholder="Name of your business"
              />
            </label>
          )}
          <label>
            What will the loan help with?
            <textarea
              required
              value={application.purpose}
              onChange={(event) =>
                setApplication({ ...application, purpose: event.target.value })
              }
              placeholder="Briefly describe your plans"
              rows={3}
            />
          </label>
          <button className="nubian-button" type="submit">
            Test loan request <ArrowRight size={18} />
          </button>
          {applicationSent && (
            <p className="nubian-demo-notice" role="status">
              {demoNotice}
            </p>
          )}
        </form>
      </section>

      <section className="nubian-appointment" id="appointment">
        <div className="nubian-appointment-copy">
          <p className="nubian-kicker">
            <span /> LET’S TALK
          </p>
          <h2>Book a time with {companyName}.</h2>
          <p>
            Enter your contact details and preferred time to preview an
            appointment request.
          </p>
          <div className="nubian-contact-short">
            <Phone size={19} />
            <div>
              <strong>Contact us</strong>
              {contactNumbers.map((number) => (
                <span key={number}>{number}</span>
              ))}
            </div>
          </div>
        </div>
        <form className="nubian-form" onSubmit={bookAppointment}>
          <label>
            Full name
            <input
              required
              value={appointment.name}
              onChange={(event) =>
                setAppointment({ ...appointment, name: event.target.value })
              }
              placeholder="Your full name"
            />
          </label>
          <label>
            Phone number
            <input
              required
              type="tel"
              value={appointment.phone}
              onChange={(event) =>
                setAppointment({ ...appointment, phone: event.target.value })
              }
              placeholder="e.g. 0999 123 456"
            />
          </label>
          <div className="nubian-form-row">
            <label>
              Preferred date
              <input
                required
                type="date"
                value={appointment.date}
                onChange={(event) =>
                  setAppointment({ ...appointment, date: event.target.value })
                }
              />
            </label>
            <label>
              Preferred time
              <input
                required
                type="time"
                value={appointment.time}
                onChange={(event) =>
                  setAppointment({ ...appointment, time: event.target.value })
                }
              />
            </label>
          </div>
          <button className="nubian-button" type="submit">
            Test appointment request <ArrowRight size={18} />
          </button>
          {appointmentSent && (
            <p className="nubian-demo-notice" role="status">
              {demoNotice}
            </p>
          )}
        </form>
      </section>

      <footer className="nubian-footer" id="contact">
        <div>
          <div className="nubian-footer-brand">
            <span className="nubian-mark">M</span>
            <span>
              {companyName}
              <small>MICROFINANCE</small>
            </span>
          </div>
          <p>
            Helping entrepreneurs turn possibility into progress.
          </p>
        </div>
        <div>
          <h3>Our service area</h3>
          <p>Serving communities across Malawi</p>
        </div>
        <div>
          <h3>Contact</h3>
          {contactNumbers.map((number) => (
            <p key={number}>{number}</p>
          ))}
        </div>
      </footer>
      <div className="nubian-copyright">
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </div>
    </main>
  );
}
