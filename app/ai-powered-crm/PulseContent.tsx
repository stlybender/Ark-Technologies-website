"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Mode = "prospect" | "fabtech";

interface FeatureBlock {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: { strong: string; rest: string }[];
  image: string;
  alt: string;
  reverse?: boolean;
  altBg?: boolean;
  compactImage?: boolean;
}

const FEATURES: FeatureBlock[] = [
  {
    eyebrow: "For sales executives",
    heading: "Every deal, briefed and ready.",
    body: "Open a lead and you see the whole relationship — every email, every call, every document, pinned notes, the AI's read on temperature and what to do next. No tab-hopping. No reading three threads to remember where you were.",
    bullets: [
      { strong: "AI briefing", rest: " on every lead — refreshed when activity changes" },
      { strong: "Draft reply with AI", rest: " — reads the thread, writes the response, human approves" },
      { strong: "Generate document", rest: " — quotation, proposal or invoice from the email thread, GST + amount-in-words, real PDF" },
      { strong: "Pinned notes & call logs", rest: " — every conversation lives on the lead, forever" },
      { strong: "AI Pulse", rest: " — deals going quiet get a follow-up task and a pre-drafted rescue email" },
    ],
    image: "/pulse/05-lead-detail.png",
    alt: "Lead detail view with AI briefing card and timeline",
  },
  {
    eyebrow: "AI document generation",
    heading: "Quotations the way your team actually quotes — in 90 seconds.",
    body: 'The AI reads the entire email thread, extracts the scope ("120 sq.m of ISO 7, 14 doors, 12 AHUs"), prices each line at market rates, computes subtotal + GST, writes the amount in words, and lays it out on your branded A4 letterhead. The document number comes from the database, so it\'s audit-trail clean.',
    bullets: [
      { strong: "Three document types", rest: " — Quotation, Proposal, Invoice" },
      { strong: "Real PDF rendering", rest: " — same template you saw in preview, attached to email" },
      { strong: "Database-assigned numbers", rest: " — no manual sequence to keep" },
      { strong: "Human approves before sending", rest: " — the AI proposes, the rep decides" },
    ],
    image: "/pulse/10-document.png",
    alt: "AI-generated quotation document with line items, GST and amount in words",
    reverse: true,
    altBg: true,
  },
  {
    eyebrow: "For sales managers",
    heading: "Team pulse, not team surveillance.",
    body: 'One screen tells you who\'s on track for their quarter, where pipeline is leaking, which deals went quiet. Ask the AI copilot a question in plain English — "who\'s behind?", "what\'s the risk on Stellar?" — and get an answer grounded in real numbers. The system computes; the AI explains.',
    bullets: [
      { strong: "Team Pulse dashboard", rest: " — target-vs-won, weighted pipeline, stale lists per rep" },
      { strong: "AI copilot", rest: " — context-aware over your team's data, never invents a number" },
      { strong: "Targets", rest: " — quarterly, Indian FY, attainment updates live" },
      { strong: "Duplicate detection", rest: " — side-by-side compare, reversible merge" },
      { strong: "Mail queue", rest: " — inbound mail that didn't match a lead, ready to triage" },
    ],
    image: "/pulse/02-manager-dashboard.png",
    alt: "Manager dashboard with team pulse, per-rep attainment and stale list",
  },
  {
    eyebrow: "AI copilot",
    heading: "Ask anything. Get an answer that survives a board review.",
    body: "Pulse's copilot is the only one in the room you can trust with numbers. The system computes attainment, pipeline weight, win rates and ageing in code. The AI only narrates them. That single architectural choice means a manager can ask \"who's behind on target?\" and the answer is right, every time.",
    bullets: [
      { strong: "Context-aware", rest: " — knows the open lead, the team, the quarter" },
      { strong: "Cited numbers", rest: " — every figure traceable to a row in the database" },
      { strong: "Per-role context", rest: " — exec sees their book, manager sees the team, owner sees everything" },
      { strong: "Quarterly report generation", rest: " — 3 questions, then a saved draft you finalise" },
    ],
    image: "/pulse/06-copilot.png",
    alt: "AI copilot answering a manager's question with real attainment numbers",
    reverse: true,
    altBg: true,
  },
  {
    eyebrow: "For business owners",
    heading: "The view you actually wanted from your CRM.",
    body: "Company-wide KPIs. Manager rollups. Region splits. Per-rep attainment. AI cost visibility. A full audit log of every change anyone made to assignments, stages, deal values or targets. And one button to invite new team members or external consultants.",
    bullets: [
      { strong: "Company-wide rollups", rest: " — owner, two managers, four execs, one assistant — one screen" },
      { strong: "Audit trail (board-grade)", rest: " — who changed what, before → after" },
      { strong: "Quarterly reports auto-drafted", rest: " — for you and every manager, on the FY boundary" },
      { strong: "Owner-only invite", rest: " — internal team or external consultants, with role and region" },
      { strong: "AI cost dashboard", rest: " — every call metered, per user, per route, in rupees" },
    ],
    image: "/pulse/03-owner-dashboard.png",
    alt: "Owner dashboard with manager rollup, region split and rep attainment",
  },
  {
    eyebrow: "Reports & audit",
    heading: "Quarter-end reports that draft themselves. Audit trails that survive a board review.",
    body: "On the last day of every fiscal quarter, Pulse generates a draft report for each manager and the owner — real metrics, AI-written narrative grounded in those metrics, branded PDF ready to download. They review, edit, finalise, send upward. No more weekend marathons in PowerPoint.",
    bullets: [
      { strong: "Auto-drafted per scope", rest: " — owner gets company-wide, each manager gets their team" },
      { strong: "Frozen metrics + AI narrative", rest: " — the numbers are code-computed, the story is written" },
      { strong: "Branded A4 PDF export", rest: " — same letterhead as your quotations" },
      { strong: "Audit log over everything", rest: " — assignments, stages, temperatures, values, targets, finalisations" },
    ],
    image: "/pulse/12-audit.png",
    alt: "Audit trail page showing before/after diffs of every important change",
    reverse: true,
    altBg: true,
  },
  {
    eyebrow: "For sales assistants & external consultants",
    heading: "Roles that finally make sense in a CRM.",
    body: 'Most CRMs only have "user" and "admin". Pulse models the reality: an assistant supports specific reps (and can log activity for them, but can\'t close deals); a consultant submits leads through a portal they enter from outside (and can never see anything internal).',
    bullets: [
      { strong: "Assistant workspace", rest: " — work queue across supported reps, data hygiene list, quick-add" },
      { strong: "Closes-as-Won-or-Lost blocked", rest: " — the assistant captures, the rep decides" },
      { strong: "Consultant portal", rest: " — outside-the-company, wall enforced at the database" },
      { strong: "Tested with 14 separate probes", rest: " — consultant can't read leads, contacts, activities, targets, anything" },
    ],
    image: "/pulse/04-assistant-workspace.png",
    alt: "Assistant workspace with task queue and data hygiene list",
  },
  {
    eyebrow: "Two-way email — per rep",
    heading: "Send from your own mailbox. Replies thread to the lead automatically.",
    body: 'Each rep connects their own work mailbox in Settings. From then on, replies they send from a lead go out from their actual address (and land in their Sent folder). Client replies thread back onto the lead timeline within three minutes. Mail that can\'t be matched lands in a "Mail queue" for a manager to attach.',
    bullets: [
      { strong: "Outlook & Gmail both supported", rest: " — pick one from Settings, switch any time" },
      { strong: "OAuth, never passwords", rest: " — credentials encrypted at rest, revocable by the rep" },
      { strong: "Threaded inbound", rest: " — matched to the lead's contact, idempotent on replays" },
      { strong: "Auto-reply detection", rest: " — out-of-office mail is skipped, not threaded" },
      { strong: "Mail queue for triage", rest: " — strangers and ambiguous matches land for a human" },
    ],
    image: "/pulse/11-settings.png",
    alt: "Settings page with mailbox connection for both Outlook and Gmail",
    reverse: true,
    altBg: true,
    compactImage: true,
  },
  {
    eyebrow: "Targets & forecasting",
    heading: "Quarterly targets, weighted pipeline, on one screen.",
    body: "Managers set per-rep targets each quarter (Indian FY by default). Live attainment updates as deals are won. Pipeline value is stage-weighted automatically — Salesforce's \"Enterprise feature\", out of the box. The forecast survives a CFO conversation because the math is in code, not a spreadsheet.",
    bullets: [
      { strong: "Indian FY by default", rest: " — Q1 = Apr–Jun, configurable per company" },
      { strong: "Stage-weighted forecast", rest: " — built into every pipeline view" },
      { strong: "Per-rep attainment", rest: " — owner sees the org, manager sees the team" },
      { strong: "Pipeline kanban", rest: " — drag deals between stages, every move audited" },
    ],
    image: "/pulse/08-targets.png",
    alt: "Targets page with per-rep quarterly target and live attainment",
  },
];

const SOURCES = [
  {
    tag: "Source 1",
    title: "Website inquiries",
    body: 'Your inquiry form posts to a secured webhook. The lead lands tagged "Website", auto-routed to the region\'s rep, the moment the form is submitted.',
  },
  {
    tag: "Source 2",
    title: "Exhibition cards",
    body: "Rep snaps a photo of a visiting card on the spot. AI reads the card. Pre-filled form. Confirm. Saved. The end of the post-exhibition transcription marathon.",
  },
  {
    tag: "Source 3",
    title: "Projects Today portal",
    body: "Rep screenshots a listing from the portal. AI extracts the project, company, contact, region, value. Confirm and save. No automation against the portal, full compliance with its ToS.",
  },
  {
    tag: "Source 4",
    title: "Consultant submissions",
    body: "External consultants submit through their own portal. The submission becomes a lead behind the scenes; the consultant only ever sees their own form. Hard wall, database-enforced.",
  },
];

const PROBLEMS = [
  {
    icon: "📋",
    title: "The Excel sprawl",
    body: "Visiting cards transcribed by hand. Portal data screenshot, OCR'd, pasted. Each rep with their own spreadsheet, none of them in sync. Nothing searchable across the company.",
  },
  {
    icon: "📥",
    title: "The lost-reply problem",
    body: "Client replies sit in personal inboxes. Nobody else can see the thread. When the rep is on leave or quits, the relationship goes with them.",
  },
  {
    icon: "📝",
    title: "The quotation grind",
    body: "Every quotation rebuilt from scratch. Sales drafts numbers. Design questions the scope. Accounts re-types the totals. A 2-day quote becomes a 10-day quote.",
  },
  {
    icon: "🥶",
    title: "The cold-deal blindness",
    body: "Pharma cleanroom deals stay warm for years. Nobody pings them. They go cold. When the project finally moves, the buyer goes to whoever stayed in touch — usually not us.",
  },
];

const DAY_STEPS = [
  {
    title: "Open the dashboard",
    body: "AI read every lead and every email overnight. Top of the page: today's 5 priorities, named and actionable.",
  },
  {
    title: "Open the first lead",
    body: "3-sentence briefing of the whole relationship + suggested next step. Never re-read a thread before a call again.",
  },
  {
    title: 'Click "Draft with AI"',
    body: "AI writes the reply from the thread. Rep edits one word and sends — from their own mailbox, logged on the lead.",
  },
  {
    title: "Generate the quotation",
    body: "One click. AI extracts the scope from the thread, prices it, builds a branded A4 PDF with GST and amount-in-words. Attached and sent.",
  },
];

const TRUST_CARDS = [
  {
    badge: "Data isolation",
    title: "Row-level security, every table",
    body: "The database itself enforces who sees what. Owners see all; managers see their subtree; executives see their own; assistants see who they support. Consultants see only their own portal.",
  },
  {
    badge: "Auditability",
    title: "Every important change is logged",
    body: "Assignments, stages, temperatures, deal values, targets, report finalisations, team structure — captured with before-and-after, by who, at when. Survives any board diligence.",
  },
  {
    badge: "No deletes",
    title: "Nothing is permanently destroyed",
    body: "Leads can be merged (reversibly). Reports can be finalised. Activities can be pinned. But nothing in the system can be deleted by any user. Your sales history is forever.",
  },
  {
    badge: "Token security",
    title: "Mailbox credentials encrypted at rest",
    body: 'OAuth refresh tokens are AES-256-GCM encrypted in a service-role-only table. Disconnect revokes the token at the provider too — "disconnected" means the credential is gone.',
  },
  {
    badge: "AI cost control",
    title: "Every AI call is metered",
    body: '"Unlimited AI" is defensible because the cost ceiling is measured, not hoped for. Every call logged with route, model, tokens, latency. Owner sees a per-user, per-route, per-rupee dashboard.',
  },
  {
    badge: "Verification",
    title: "Eight verify suites, every release",
    body: "RLS, security, capture pipelines, intelligence, email, hardening, AI smoke, browser usability. Every gate must be green before a deploy. Independent code review on the email layer + the audit trail.",
  },
];

const OUTCOMES = [
  {
    stat: "0",
    title: "Manual portal logins for lead lists",
    body: "Reps used to log into Projects Today twice a week, screenshot listings, paste into Excel. Now: AI morning digest covers the new + temperature-changed leads, region-filtered to each rep.",
  },
  {
    stat: "1",
    title: "Database for every lead across every source",
    body: "Exhibitions, consultants, Projects Today, website — all four pipes land in the same tagged, region-routed, audit-trailed database. Searchable, attributable, complete.",
  },
  {
    stat: "~90s",
    title: 'From "send the quotation" to "quotation sent"',
    body: "AI reads the email thread, extracts the scope, prices it, drafts the branded PDF. Rep reviews and approves. The 2-day round-trip between sales, design and accounts is done in seconds.",
  },
  {
    stat: "∞",
    title: "Activity history. Forever.",
    body: "Every email, every call, every note, every document, every stage change — on the lead, in chronological order, visible to anyone who can see the lead. Reps change. Knowledge stays.",
  },
];

export default function PulseContent() {
  const [mode, setMode] = useState<Mode>("prospect");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("pulse-audience");
      if (saved === "fabtech" || saved === "prospect") setMode(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("pulse-audience", mode);
    } catch {}
  }, [mode]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  const isFabtech = mode === "fabtech";

  function openLightbox(src: string, alt: string) {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }

  return (
    <>
      {/* ── Audience toggle (floats below the site header) ───────────────── */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur border-b border-border-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-3 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest font-semibold text-ARK-cyan-dark">
            Pulse · the AI-native CRM
          </span>
          <div
            className="inline-flex p-1 gap-0.5 bg-bg-tertiary rounded-full text-xs"
            role="tablist"
            aria-label="Audience mode"
          >
            <button
              onClick={() => setMode("prospect")}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
                !isFabtech ? "bg-white text-text-primary shadow-sm" : "text-text-tertiary"
              }`}
              role="tab"
              aria-selected={!isFabtech}
            >
              Prospect
            </button>
            <button
              onClick={() => setMode("fabtech")}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
                isFabtech ? "bg-white text-text-primary shadow-sm" : "text-text-tertiary"
              }`}
              role="tab"
              aria-selected={isFabtech}
            >
              Fab Technologies
            </button>
          </div>
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-white via-ARK-blue-pale to-white pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-ARK-cyan rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-ARK-blue rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-ARK-cyan-pale text-ARK-cyan-dark rounded-full text-xs font-semibold mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-ARK-cyan-dark animate-pulse" />
            {isFabtech ? "Your platform is live" : "AI-native B2B CRM — live in production"}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight max-w-5xl mx-auto mb-6">
            {isFabtech ? (
              <>
                FabTech Pulse — every lead, every reply,{" "}
                <span className="bg-gradient-to-r from-ARK-blue to-ARK-cyan bg-clip-text text-transparent">
                  every quotation
                </span>
                . In one place. Finally.
              </>
            ) : (
              <>
                A CRM that honours how your sales team{" "}
                <span className="bg-gradient-to-r from-ARK-blue to-ARK-cyan bg-clip-text text-transparent">
                  actually works
                </span>
                .
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            {isFabtech
              ? "The platform you signed off on is live. Exhibitions, consultants, Projects Today and the website now land in one tagged, region-routed, audit-trailed database. Reps get an AI digest each morning. Managers get team pulse and quarterly reports drafted automatically. Every word built to your spec."
              : "Pulse captures leads from every channel your team uses today, drafts replies and quotations from the email thread, and keeps deals moving with AI that never invents a number. Purpose-built for B2B sales teams who don't want their workflow flattened into someone else's template."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
            <a
              href={isFabtech ? "#capabilities" : "/contact"}
              className="bg-ARK-blue hover:bg-ARK-blue-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              {isFabtech ? "Take the tour →" : "Book a demo →"}
            </a>
            <a
              href="#trust"
              className="border-2 border-ARK-cyan text-ARK-cyan-dark hover:bg-ARK-cyan-pale px-7 py-3.5 rounded-lg font-semibold transition-all duration-200"
            >
              How it&apos;s built
            </a>
          </div>

          <button
            onClick={() => openLightbox("/pulse/01-exec-dashboard.png", "Pulse executive dashboard")}
            className="block w-full max-w-5xl mx-auto cursor-zoom-in"
            aria-label="Enlarge dashboard screenshot"
          >
            <Image
              src="/pulse/01-exec-dashboard.png"
              alt="Pulse executive dashboard — AI morning digest, weighted forecast, stale-deal radar, tasks"
              width={1440}
              height={900}
              className="w-full rounded-2xl shadow-2xl border border-border-light"
              priority
            />
          </button>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
      <div className="border-y border-border-light py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "4", label: "Lead sources captured" },
            { num: "2 in 1", label: "Outlook + Gmail, switchable" },
            { num: "100%", label: "RLS-enforced data wall" },
            { num: "0", label: "Lead data ever deleted" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight leading-none mb-1">
                {s.num}
              </div>
              <div className="text-xs text-text-tertiary">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6">
            B2B sales doesn&apos;t fail at acquisition. It fails between touchpoints.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-12">
            Leads come in from four places. They get typed into Excel by hand. Replies wait on the wrong inbox. Quotations get rebuilt every time because nobody can find the last one. Deals go cold and nobody notices until the quarter closes. A generic CRM doesn&apos;t fix this — it just adds another tab to keep open.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="p-7 bg-bg-secondary border border-border-light rounded-2xl"
              >
                <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-border-light grid place-items-center text-xl mb-4">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── A DAY IN THE LIFE (dark) ─────────────────────────────────────── */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <Eyebrow dark>A sales rep&apos;s morning, on Pulse</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            From &ldquo;what&apos;s on today?&rdquo; to &ldquo;first reply sent&rdquo; — in 7 minutes.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12">
            No portal logins. No inbox triage. No retyping. The AI did the reading overnight.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DAY_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="w-7 h-7 rounded-full bg-ARK-cyan text-white font-semibold text-sm grid place-items-center mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CAPABILITIES (alternating feature blocks) ────────────────────── */}
      <section id="capabilities" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center mb-16">
          <Eyebrow>Built for every role</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Four distinct workspaces. One shared truth.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Each role sees what they need, and only what they need. The database itself enforces it — not the UI.
          </p>
        </div>

        {FEATURES.map((f, i) => (
          <FeatureRow key={i} feature={f} onZoom={openLightbox} />
        ))}
      </section>

      {/* ── LEAD CAPTURE ─────────────────────────────────────────────────── */}
      <Section alt>
        <div className="max-w-6xl mx-auto text-center">
          <Eyebrow>Lead capture</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Every channel your team uses. Captured automatically. Tagged by source.
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
            No more manual transcription. No more screenshots-into-Excel. No more emails that never make it to the CRM. Whatever channel a lead arrives on, it lands in one tagged, region-routed database.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {SOURCES.map((s) => (
              <div
                key={s.title}
                className="p-7 bg-white border border-border-light rounded-2xl hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span className="inline-block text-[10.5px] font-semibold uppercase tracking-widest text-ARK-cyan-dark bg-ARK-cyan-pale px-2.5 py-1 rounded-full mb-4">
                  {s.tag}
                </span>
                <h3 className="text-base font-semibold text-text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-text-tertiary leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TRUST / ARCHITECTURE ─────────────────────────────────────────── */}
      <section id="trust" className="py-16 md:py-24 bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6 lg:px-20 text-center mb-12">
          <Eyebrow>How it&apos;s built</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Hardened where it has to be. Open where it should be.
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Pulse runs in your own controlled database. Every access decision is enforced at the row level by Postgres, not by the UI. Every important change is audit-logged. Nothing is deletable. Eight separate verification scripts run before every release. An independent code reviewer audited the final commits.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TRUST_CARDS.map((t) => (
            <div
              key={t.title}
              className="p-7 bg-white border border-border-light rounded-2xl"
            >
              <span className="inline-block text-[10.5px] font-semibold uppercase tracking-widest text-text-secondary bg-bg-tertiary px-2.5 py-1 rounded-full mb-3">
                {t.badge}
              </span>
              <h3 className="text-base font-semibold text-text-primary mb-2">{t.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUTCOMES ─────────────────────────────────────────────────────── */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Eyebrow>What you stop doing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-12">
            The things this replaces, on day one.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {OUTCOMES.map((o) => (
              <div
                key={o.title}
                className="p-8 bg-gradient-to-br from-ARK-cyan-pale to-white border border-ARK-cyan-pale rounded-2xl"
              >
                <div className="text-4xl font-bold text-ARK-cyan-dark tracking-tight leading-none mb-3">
                  {o.stat}
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-3">{o.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── PRICING (prospect mode only) ─────────────────────────────────── */}
      {!isFabtech && (
        <Section alt>
          <div className="max-w-4xl mx-auto text-center">
            <Eyebrow>How an engagement works</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
              One instance per company. Built once, operated for you.
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Pulse is delivered as a managed deployment — your own database, your own subdomain, your own controlled instance. Not a multi-tenant SaaS. The build is a fixed-scope engagement; the operation is a monthly seat fee.
            </p>

            <div className="max-w-2xl mx-auto bg-white border border-border-light rounded-2xl shadow-lg p-10 text-left">
              {[
                {
                  label: "Build & implementation",
                  sub: "Foundation → capture pipelines → email → AI → reports → hardening",
                  price: "Fixed-scope milestones",
                },
                {
                  label: "Per-seat monthly",
                  sub: "Hosting, support, maintenance, AI usage",
                  price: "Below Zoho One pricing",
                },
                {
                  label: "AI usage",
                  sub: "Briefings, drafts, document generation, copilot, digests",
                  price: "Unlimited, on us",
                },
                {
                  label: "Bring-your-own AI (optional)",
                  sub: "Self-hosted model, OpenAI key, Claude key — your choice",
                  price: "Configurable per company",
                },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex items-baseline justify-between gap-4 py-4 ${
                    i < arr.length - 1 ? "border-b border-border-light" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-medium text-text-primary text-sm">{row.label}</div>
                    <div className="text-xs text-text-tertiary mt-0.5">{row.sub}</div>
                  </div>
                  <div className="font-semibold text-text-primary text-sm text-right whitespace-nowrap">
                    {row.price}
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-ARK-cyan-pale rounded-lg text-sm text-ARK-cyan-dark leading-relaxed">
                <strong>Why &ldquo;unlimited AI&rdquo; is defensible:</strong> CRM-text tasks are tiny on a cost-per-call basis. Every call is metered and logged. Average active user costs us roughly ₹100–200/month in AI; even an abusive user stays well under the seat fee.
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* ── ABOUT ARK ────────────────────────────────────────────────────── */}
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <Eyebrow dark>About ARK Networks</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            We don&apos;t sell software. We build the platform that runs your sales operation, and we run it with you.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12">
            Most software vendors want as many clients as they can get. We want a few that we know well. A relationship-sold, deeply-customised, instance-per-client platform. We can do this with you the way we did it with Fab Technologies.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "One instance per company",
                body: "Your own database. Your own deployment. Your own subdomain. Zero noisy neighbours. Strongest possible data isolation, by architecture rather than policy.",
              },
              {
                title: "Configured to your workflow",
                body: "The role hierarchy, the lead pipes, the document templates, the targets and reports — all configured around your actual operation, not a generic template.",
              },
              {
                title: "Operated, not abandoned",
                body: "We deploy it, we run the crons, we monitor the queues, we hold the runbook, we do the restore drill. You sell. We run the platform.",
              },
            ].map((p) => (
              <div key={p.title}>
                <h4 className="text-base font-semibold text-white mb-2">{p.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ARK-blue via-ARK-blue-dark to-ARK-cyan-dark text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5 max-w-3xl mx-auto">
            {isFabtech ? "Your platform is live. Let's get your team into it." : "Want to see this run on your own data?"}
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10">
            {isFabtech
              ? "Onboarding sessions are 30 minutes per role. Reps, managers, the assistant — each session walks the team through their own workspace, signs them in, connects their mailbox. Pick the dates that work."
              : "A 30-minute demo on a real instance. We walk through your team's workflow, your lead sources, your quotation format. If it fits, we scope a build."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="bg-white text-ARK-blue hover:bg-bg-tertiary px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Talk to ARK →
            </a>
            <a
              href="/how-we-work"
              className="border-2 border-white/30 text-white hover:border-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-200"
            >
              See how we work
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {lightboxSrc && (
        <button
          type="button"
          onClick={() => setLightboxSrc(null)}
          className="fixed inset-0 z-50 bg-ARK-blue-dark/95 backdrop-blur-md flex items-center justify-center p-8 cursor-zoom-out"
          aria-label="Close enlarged image"
        >
          <Image
            src={lightboxSrc}
            alt={lightboxAlt}
            width={1920}
            height={1200}
            className="max-w-full max-h-full w-auto h-auto rounded-lg shadow-2xl object-contain"
          />
        </button>
      )}
    </>
  );
}

// ── Small layout primitives ─────────────────────────────────────────────

function Section({ children, dark, alt }: { children: React.ReactNode; dark?: boolean; alt?: boolean }) {
  return (
    <section
      className={`py-16 md:py-24 ${
        dark ? "bg-text-primary" : alt ? "bg-bg-secondary" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">{children}</div>
    </section>
  );
}

function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest mb-4 ${
        dark ? "text-ARK-cyan-light" : "text-ARK-cyan-dark"
      }`}
    >
      {children}
    </span>
  );
}

function FeatureRow({
  feature,
  onZoom,
}: {
  feature: FeatureBlock;
  onZoom: (src: string, alt: string) => void;
}) {
  const { eyebrow, heading, body, bullets, image, alt, reverse, altBg, compactImage } = feature;
  return (
    <div className={`py-16 md:py-20 ${altBg ? "bg-bg-secondary" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
            reverse ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className={reverse ? "lg:[direction:ltr]" : ""}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="text-2xl md:text-4xl font-bold text-text-primary tracking-tight mb-5">
              {heading}
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-2">
              {body}
            </p>
            <ul className="mt-6 space-y-0">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="relative pl-7 py-2.5 text-sm text-text-secondary border-b border-border-light last:border-0"
                >
                  <span className="absolute left-0 top-[18px] w-3.5 h-3.5 rounded-full bg-ARK-cyan-pale border-[3px] border-ARK-cyan" />
                  <strong className="text-text-primary font-semibold">{b.strong}</strong>
                  {b.rest}
                </li>
              ))}
            </ul>
          </div>
          <div className={reverse ? "lg:[direction:ltr]" : ""}>
            <button
              type="button"
              onClick={() => onZoom(image, alt)}
              className={`block cursor-zoom-in ${compactImage ? "max-w-md mx-auto" : ""}`}
              aria-label={`Enlarge ${alt}`}
            >
              <Image
                src={image}
                alt={alt}
                width={1440}
                height={900}
                className="w-full rounded-2xl shadow-lg border border-border-light"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
