# Ark Enterprise AI – Case Study System

## Overview
A reusable structure for showcasing customer stories across sectors. Each case study follows a consistent format that balances credibility (specific problems, solutions, integrations) with readability (Apple-like clarity, scannable structure).

---

## Part 1: Homepage Case Study Preview Cards

### Card Pattern (Reusable Component)

**Visual Structure:**
```
┌─────────────────────────────────────┐
│ [SECTOR TAG]                        │
│                                     │
│ [METRIC HEADLINE]                   │
│ Large, bold text                    │
│                                     │
│ [CLIENT TYPE]                       │
│ Small, secondary text               │
│                                     │
│ [IMPACT STATEMENT]                  │
│ 1-2 sentence summary                │
│                                     │
│ View full story →                   │
└─────────────────────────────────────┘
```

**Styling Notes:**
- Light background with subtle border or shadow
- Sector tag: small, colored badge (avoid purple-pink)
- Metric headline: 24–32px, bold, dark text
- Impact statement: 16–18px, comfortable line height
- Hover state: gentle lift (2–4px) + shadow increase
- CTA arrow: subtle animation on hover

---

### Card 1: Real Estate – AI Voice CRM & Site-Visit Automation

**Sector Tag:** Real Estate  
**Metric Headline:** Lead response time cut to under 60 seconds  
**Client Type:** Large residential real estate developer  
**Impact Statement:** Automated calling, qualification, and site-visit booking from digital leads. Real-time CRM sync and funnel visibility for sales leadership.  
**CTA:** View full story →  
**Link:** `/case-studies/real-estate-ai-voice-crm`

---

### Card 2: Automotive – AI Calling Assistant for Dealer Group

**Sector Tag:** Automotive  
**Metric Headline:** Fewer missed calls during peak load  
**Client Type:** Multi-brand car dealer group  
**Impact Statement:** AI assistant handles inbound queries, schedules test drives and service appointments, and automates reminders—all integrated with dealer DMS/CRM.  
**CTA:** View full story →  
**Link:** `/case-studies/automotive-ai-calling-assistant`

---

### Card 3: Banking / Wealth – Forms, Portfolios & Investor Engagement

**Sector Tag:** Banking & Wealth  
**Metric Headline:** Faster onboarding, lower NIGO rates  
**Client Type:** Mutual fund / wealth management firm  
**Impact Statement:** Document automation (IDP/OCR) pre-fills KYC and SIP forms. Portfolio intelligence and AI chatbots drive engagement and upsell opportunities.  
**CTA:** View full story →  
**Link:** `/case-studies/banking-wealth-forms-portfolios`

---

### Card 4: Healthcare – AI Prescription Assistant (AI Scribe)

**Sector Tag:** Healthcare – OPD  
**Metric Headline:** Reduced documentation time per patient  
**Client Type:** Multi-speciality hospital / clinic network  
**Impact Statement:** AI-powered prescription assistant captures details and writes structured data into EMR/EHR. Better data quality, smoother pharmacy and nursing workflows.  
**CTA:** View full story →  
**Link:** `/case-studies/healthcare-ai-prescription-assistant`

---

### Card 5: Healthcare – Radiology Report Intelligence & Efficiency

**Sector Tag:** Healthcare – Radiology  
**Metric Headline:** Improved radiology TAT and utilization  
**Client Type:** Hospital or diagnostic chain  
**Impact Statement:** NLP layer extracts structured data from PACS/RIS reports. Operational dashboards surface TAT, modality utilization, and cost-optimization insights.  
**CTA:** View full story →  
**Link:** `/case-studies/healthcare-radiology-intelligence`

---

## Part 2: Individual Case Study Page Template

### Page Structure (Reusable Layout)

```
1. Above-the-fold Hero
2. Context (The Problem)
3. Solution (What Ark Did)
4. Results (Measurable Outcomes)
5. Implementation Details (Integrations & Teams)
6. Lessons & Next Steps
7. Related Case Studies (Cross-links)
8. CTA (Book a Demo)
```

---

### Section 1: Above-the-Fold Hero

**Layout:** Centered or left-aligned with generous white space

**Elements:**
- **Sector tag** (small badge, top-left or top-center)
- **Client type** (1 line, secondary text)
- **Hero metrics** (1–2 large, bold stats)
- **One-line summary** (supporting detail)
- **Optional:** Client logo (if permission granted) or generic icon

**Example (Real Estate):**
```
[REAL ESTATE]

Large residential real estate developer with multiple ongoing projects

Lead response time: minutes → under 60 seconds
Higher site-visit booking rate from digital leads

AI Voice CRM that auto-calls, qualifies, and books—integrated directly with CRM.
```

---

### Section 2: Context (The Problem)

**Headline:** The Challenge

**Copy Pattern:**
- 2–4 specific pain points, each in its own short paragraph or bullet
- Use domain language (DMS, SIP, KYC, EMR/EHR, PACS/RIS, TAT, NIGO, etc.)
- Avoid generic "inefficiency" language—be concrete

**Example (Real Estate):**
- Slow lead response time from portals and digital ads
- Manual calling and inconsistent qualification across sales teams
- Poor visibility into lead → site visit → booking funnel
- Fragmented data across CRM, WhatsApp, and spreadsheets

---

### Section 3: Solution (What Ark Did)

**Headline:** How Ark Helped

**Copy Pattern:**
- Lead with the core solution (e.g., "Deployed an AI Voice CRM to auto-call new leads within seconds")
- Break down 3–5 specific capabilities in short paragraphs or list
- Highlight integrations (CRM, DMS, SIP, WhatsApp, calendars, etc.)

**Example (Real Estate):**

Ark deployed an **AI Voice CRM** that auto-calls new leads within seconds of portal/ad submission.

**Structured qualification:** The AI asks about budget, location, move-in timeline, and project interest, then scores and routes leads.

**Automated site-visit booking:** Qualified leads are offered available slots, and confirmations are sent via WhatsApp with calendar links.

**Bi-directional CRM integration:** Lead creation, status updates, call summaries, and lead scores sync in real time—no manual data entry.

---

### Section 4: Results (Measurable Outcomes)

**Headline:** The Impact

**Copy Pattern:**
- Lead with 2–3 hero metrics (large, bold text)
- Follow with 2–3 qualitative outcomes (bullet list or short paragraphs)
- Use "directional" framing if exact numbers can't be shared

**Example (Real Estate):**

**Lead response time:** Reduced from minutes to **under 60 seconds**

**Site-visit booking rate:** Significant increase from digital leads (directional improvement tracked across all projects)

**Manual work:** Sales team spends 70% less time on dialing and data entry

**Funnel visibility:** Real-time dashboards give leadership clear visibility into lead → site visit → booking conversion

---

### Section 5: Implementation Details (Integrations & Teams)

**Headline:** Under the Hood

**Copy Pattern:**
- List key integrations (systems, APIs, data sources)
- Note teams involved (sales, ops, IT, leadership)
- Mention timeline if appropriate (e.g., "Live in 4 weeks")

**Example (Real Estate):**

**Integrations:**
- CRM (bi-directional API for lead creation, status updates, call summaries)
- WhatsApp Business API (confirmations, reminders, maps)
- Google Calendar / Outlook (site-visit scheduling)
- Lead portals (webhook-based inbound lead capture)

**Teams involved:**
- Sales leadership (funnel design, qualification criteria)
- Operations (calendar management, site logistics)
- IT (CRM API access, webhook setup)

**Timeline:** Pilot live in 4 weeks; scaled to all projects within 8 weeks.

---

### Section 6: Lessons & Next Steps

**Headline:** What Scaled (and What's Next)

**Copy Pattern:**
- 1–2 sentences on what worked well
- 1–2 sentences on future expansion or adjacent use cases

**Example (Real Estate):**

The AI Voice CRM scaled smoothly across multiple projects with minimal tuning. The biggest win was real-time CRM sync—sales teams trust the data, so adoption was immediate.

**Next steps:** Expanding to post-site-visit follow-up and nurture campaigns for leads not yet ready to buy.

---

### Section 7: Related Case Studies (Cross-links)

**Headline:** More Customer Stories

**Layout:** 2–3 cards (same pattern as homepage preview cards)

**Logic:** Show 2 related case studies from other sectors to encourage cross-sector exploration.

**Example (for Real Estate case study page):**
- Card: Banking / Wealth – Forms, Portfolios & Investor Engagement
- Card: Healthcare – AI Prescription Assistant

---

### Section 8: CTA (Book a Demo)

**Headline:** Ready to see Ark in action for your sector?

**Subheadline:** Book a 20-minute demo. No generic pitch—just your workflows, your data, your outcomes.

**CTA Button:** Book a Demo

---

## Part 3: Full Content for All 5 Case Studies

---

## Case Study 1: Real Estate – AI Voice CRM & Site-Visit Automation

### Hero
**Sector:** Real Estate  
**Client Type:** Large residential real estate developer with multiple ongoing projects  
**Hero Metrics:**  
- Lead response time: **under 60 seconds**  
- Higher site-visit booking rate from digital leads  

**One-line summary:** AI Voice CRM that auto-calls, qualifies, and books—integrated directly with CRM.

---

### Context: The Challenge

**Slow lead response time:** Leads from portals and digital ads were taking minutes (sometimes hours) to receive the first call, reducing conversion rates.

**Manual calling and inconsistent qualification:** Sales teams were manually dialing, with no standardized qualification script, leading to missed data and poor lead scoring.

**Poor funnel visibility:** Leadership had no real-time view into lead → site visit → booking conversion. Data was fragmented across CRM, WhatsApp, and spreadsheets.

---

### Solution: How Ark Helped

Ark deployed an **AI Voice CRM** that auto-calls new leads within seconds of portal/ad submission.

**Structured qualification:** The AI asks about budget, location, move-in timeline, and project interest, then scores and routes leads based on intent.

**Automated site-visit booking:** Qualified leads are offered available slots, and confirmations are sent via WhatsApp with calendar links and project location maps.

**Bi-directional CRM integration:** Lead creation, status updates, call summaries, and lead scores sync in real time—no manual data entry for sales teams.

---

### Results: The Impact

**Lead response time:** Reduced from minutes to **under 60 seconds**

**Site-visit booking rate:** Significant increase from digital leads (directional improvement tracked across all projects)

**Manual work:** Sales team spends significantly less time on dialing and data entry

**Funnel visibility:** Real-time dashboards give leadership clear visibility into lead → site visit → booking conversion at the project level

---

### Implementation: Under the Hood

**Integrations:**
- CRM (bi-directional API for lead creation, status updates, call summaries, lead scoring)
- WhatsApp Business API (confirmations, reminders, maps)
- Google Calendar / Outlook (site-visit scheduling with availability management)
- Lead portals (webhook-based inbound lead capture from 99acres, MagicBricks, etc.)

**Teams involved:**
- Sales leadership (funnel design, qualification criteria, scoring logic)
- Operations (calendar management, site logistics, booking rules)
- IT (CRM API access, webhook setup, data validation)

**Timeline:** Pilot live in 4 weeks; scaled to all active projects within 8 weeks.

---

### Lessons & Next Steps

The AI Voice CRM scaled smoothly across multiple projects with minimal tuning. The biggest win was real-time CRM sync—sales teams trust the data, so adoption was immediate.

**Next steps:** Expanding to post-site-visit follow-up and nurture campaigns for leads not yet ready to buy. Also exploring AI-powered WhatsApp chatbot for FAQs (pricing, floor plans, amenities).

---

## Case Study 2: Automotive – AI Calling Assistant for Dealer Group

### Hero
**Sector:** Automotive  
**Client Type:** Multi-brand car dealer group handling sales and service  
**Hero Metrics:**  
- **Fewer missed calls** during campaigns and weekends  
- Higher test-drive and workshop booking rates  

**One-line summary:** AI calling assistant for inbound & outbound calls, integrated with dealer DMS/CRM.

---

### Context: The Challenge

**High volume of missed calls:** During campaigns and weekends, the dealer group was missing a significant number of inbound enquiries.

**Low test-drive conversion:** Many enquiries didn't convert to scheduled test drives due to slow follow-up or lack of availability transparency.

**Manual reminders:** Service, insurance renewals, and post-service feedback were handled manually, with low completion rates.

**Incomplete DMS/CRM data:** Sales and service data was fragmented, making OEM reporting and internal analytics difficult.

---

### Solution: How Ark Helped

Ark deployed an **AI calling assistant** for inbound and outbound call flows.

**Inbound handling:** The AI answers queries about models, pricing, finance options, and availability, then schedules **test drives** into a shared calendar with instant WhatsApp confirmation.

**Outbound automation:** Automated call flows for **service reminders**, insurance renewals, and post-service feedback, with calendar integration for workshop bookings.

**DMS/CRM integration:** All call summaries, test-drive bookings, service appointments, and customer responses sync directly into dealer DMS/CRM.

**WhatsApp layer:** Confirmations, location maps, service offers, and feedback links sent via WhatsApp for higher engagement.

---

### Results: The Impact

**Missed calls:** Significant reduction during peak load (campaigns, weekends, evenings)

**Test-drive booking rate:** Higher conversion from enquiries to scheduled test drives

**Service retention:** Improved retention and repeat visits through automated reminders and easy rebooking

**DMS/CRM data quality:** Better, more complete data for OEM reporting and dealer analytics

---

### Implementation: Under the Hood

**Integrations:**
- Dealer DMS/CRM (bi-directional sync for leads, test drives, service history, bookings)
- SIP/telephony system (call routing, recording, and analytics)
- WhatsApp Business API (confirmations, maps, service offers, feedback)
- Google Calendar / internal scheduling system (test-drive and workshop availability)

**Teams involved:**
- Sales teams (test-drive scheduling logic, model/pricing scripts)
- Service teams (workshop availability, reminder cadence, feedback collection)
- IT (DMS API access, SIP integration, call flow configuration)

**Timeline:** Pilot with one brand live in 5 weeks; rolled out to all brands within 10 weeks.

---

### Lessons & Next Steps

The AI assistant handled a wide range of inbound queries with minimal fallback to human agents. Service reminders saw the highest ROI—rebooking rates improved significantly with automated WhatsApp follow-ups.

**Next steps:** Expanding to AI-powered trade-in valuation and finance eligibility checks during inbound calls. Also exploring post-purchase engagement (accessories, extended warranties).

---

## Case Study 3: Banking / Wealth – Forms, Portfolios & Investor Engagement

### Hero
**Sector:** Banking & Wealth Management  
**Client Type:** Mutual fund / wealth management firm with retail and HNI clients  
**Hero Metrics:**  
- Faster onboarding, **lower NIGO rates**  
- Increased SIP/upsell opportunities  

**One-line summary:** Document automation, portfolio intelligence, and AI chatbots for investors and RMs.

---

### Context: The Challenge

**Manual KYC and MF form filling:** Error-prone, time-consuming process with high **NIGO** (Not In Good Order) rejection rates.

**Slow SIP registration:** Manual data entry and validation delays for recurring investment setup.

**Generic investor communication:** Newsletters and updates were one-size-fits-all, leading to low engagement.

**RM time on manual reviews:** Relationship Managers spent hours on portfolio reviews and rebalancing suggestions that could be automated.

---

### Solution: How Ark Helped

Ark deployed **document and form automation** using IDP/OCR to extract data from scanned or photographed documents and pre-fill KYC, MF, and SIP forms.

**Portfolio intelligence:** AI layer analyzes holdings, risk profile, and market conditions to generate rebalancing suggestions and SIP recommendations for RMs.

**AI chatbots:** Investors can query portfolio performance, run scenarios, and request statements via web, app, or WhatsApp—24/7, in natural language.

**Personalized newsletters:** Content tuned to each investor's holdings, risk profile, and behavior (e.g., highlighting relevant funds or tax-saving opportunities).

---

### Results: The Impact

**Onboarding speed:** Faster KYC and MF form completion with significantly lower NIGO rates

**Investor engagement:** Higher open rates and click-through on personalized newsletters

**SIP/upsell opportunities:** RMs spend less time on manual analysis and more on high-value client conversations, leading to increased SIP registrations and fund switches

**RM efficiency:** Hours saved per week per RM on portfolio reviews and report generation

---

### Implementation: Under the Hood

**Integrations:**
- KYC aggregators (CKYC, FATCA validation)
- MF platforms (BSE Star, NSE, AMC APIs for form submission and SIP setup)
- Portfolio management system (holdings, transactions, NAV data)
- WhatsApp Business API (chatbot for investor queries, statement delivery)
- Email/CRM systems (personalized newsletter delivery, tracking)

**Teams involved:**
- Operations (KYC and form validation logic, NIGO handling)
- Relationship Managers (portfolio recommendation rules, client segmentation)
- Compliance (KYC/AML checks, audit trail requirements)
- IT (API access, data security, chatbot deployment)

**Timeline:** Pilot with document automation live in 6 weeks; portfolio intelligence and chatbots rolled out over 12 weeks.

---

### Lessons & Next Steps

Document automation (IDP/OCR) had the fastest ROI—NIGO rates dropped within the first month. Portfolio intelligence took longer to tune (risk models, recommendation logic) but became a key differentiator for RMs.

**Next steps:** Expanding chatbot to handle more complex queries (tax implications, fund comparison). Also exploring voice-based portfolio updates for HNI clients via AI calling assistant.

---

## Case Study 4: Healthcare – AI Prescription Assistant (AI Scribe)

### Hero
**Sector:** Healthcare – OPD  
**Client Type:** Multi-speciality hospital / clinic network with high OPD volume  
**Hero Metrics:**  
- **Reduced documentation time** per patient  
- Better EMR data quality  

**One-line summary:** AI-powered prescription assistant that captures details and writes structured data into EMR/EHR.

---

### Context: The Challenge

**Doctor time on documentation:** Doctors were spending excessive time writing prescriptions and updating EMR/EHR, reducing time available for patient care.

**Risk of missing critical fields:** Handwritten or rushed prescriptions often missed diagnosis, dosage, frequency, or follow-up dates.

**Downstream friction:** Handwritten prescriptions created friction for pharmacy teams (illegible handwriting, incomplete details) and nursing (missed follow-up reminders).

---

### Solution: How Ark Helped

Ark deployed an **AI-powered prescription assistant** (AI scribe) that captures key details from doctor inputs—via dictation, structured form, or combination.

**Auto-fill prescription fields:** The AI fills diagnosis, medications, dosage, frequency, duration, and follow-up date based on doctor's input.

**Structured EMR/EHR write:** Prescription data is written directly into the hospital's EMR/EHR system in a structured format—no manual copy-paste.

**Validation checks:** Optional checks for missing mandatory fields (diagnosis, dosage) and basic interaction warnings (common drug-drug interactions).

---

### Results: The Impact

**Documentation time:** Reduced time per patient on prescription writing and EMR updates

**EMR data quality:** Standardized, structured prescriptions with fewer missing fields and clearer medication details

**Pharmacy workflow:** Smoother handoff to pharmacy with legible, complete prescriptions

**Nursing workflow:** Better follow-up tracking with structured EMR data (follow-up dates, special instructions)

---

### Implementation: Under the Hood

**Integrations:**
- EMR/EHR system (HL7/FHIR APIs for prescription write, patient lookup, allergy checks)
- Speech-to-text engine (for doctor dictation, if used)
- Hospital formulary database (medication list, standard dosages, interaction database)
- Pharmacy management system (optional, for direct prescription push)

**Teams involved:**
- Doctors (prescription format preferences, dictation vs. form input)
- Pharmacy (formulary validation, prescription legibility feedback)
- Nursing (follow-up tracking, special instructions format)
- IT (EMR API access, data validation, security/HIPAA compliance)

**Timeline:** Pilot with 2 specialties live in 5 weeks; scaled to all OPD departments within 10 weeks.

---

### Lessons & Next Steps

Doctors adapted quickly—those using dictation saw the biggest time savings. The AI scribe's validation checks (missing dosage, interaction warnings) caught several potential issues early.

**Next steps:** Expanding to inpatient documentation (discharge summaries, progress notes). Also exploring AI-powered diagnostic suggestions based on symptoms and patient history (decision support, not replacement).

---

## Case Study 5: Healthcare – Radiology Report Intelligence & Efficiency

### Hero
**Sector:** Healthcare – Radiology  
**Client Type:** Hospital or diagnostic chain with CT/MRI/USG/X-ray services  
**Hero Metrics:**  
- Improved **radiology TAT** and utilization  
- Data-backed cost optimization  

**One-line summary:** NLP layer over radiology reports from PACS/RIS for structured insights and operational dashboards.

---

### Context: The Challenge

**Free-text reports hard to analyze:** Radiology reports were stored as unstructured text, making it difficult to spot patterns or track findings across patients.

**Limited operational visibility:** Management lacked real-time data on **TAT** (turnaround time), modality utilization (CT, MRI, USG), and referral patterns.

**No data-driven optimization:** Decisions around staffing, slot allocation, and protocol standardization were based on intuition, not data.

---

### Solution: How Ark Helped

Ark deployed an **NLP layer** over radiology reports from the hospital's **PACS/RIS** system to extract structured data: findings, impressions, severity, organ/system involved.

**Operational dashboards:** Real-time visibility into **turnaround time** by modality, radiologist, and shift; modality utilization (slots used vs. available); referral trends by department.

**Insight layer:** AI-powered suggestions for staffing adjustments, slot reallocation, and protocol standardization to improve throughput and reduce cost per scan.

---

### Results: The Impact

**Radiology TAT:** Improved turnaround time through better visibility and staffing adjustments

**Modality utilization:** Higher utilization of CT/MRI/USG equipment through slot optimization

**Cost optimization:** Data-backed decisions on staffing levels, peak-hour slot allocation, and protocol standardization

**Clinical decision support:** More consistent reporting and better visibility into findings for referring physicians

---

### Implementation: Under the Hood

**Integrations:**
- PACS/RIS (HL7/DICOM for report text extraction, modality data, scheduling)
- Hospital information system (HIS) for patient demographics, referral sources
- Radiology scheduling system (for slot utilization and TAT tracking)
- BI/analytics tools (for dashboard visualization and export)

**Teams involved:**
- Radiology department (report format, TAT benchmarks, protocol review)
- Operations/administration (staffing models, cost-per-scan targets)
- IT (PACS/RIS integration, data security, dashboard deployment)

**Timeline:** Pilot with CT/MRI reports live in 6 weeks; expanded to all modalities and full operational dashboards within 12 weeks.

---

### Lessons & Next Steps

The NLP layer worked well on structured sections (findings, impressions) but required tuning for highly specialized terminology (neuro, cardiac). Operational dashboards became the single source of truth for radiology management.

**Next steps:** Expanding NLP to pathology and lab reports. Also exploring AI-powered preliminary reads for high-volume modalities (chest X-rays) to flag critical findings for faster radiologist review.

---

## Part 4: Content Reuse & Terminology Consistency

### Key Terms to Reuse Across All Case Studies

**Real Estate:**
- Lead response time, site-visit booking, lead scoring, funnel visibility, CRM integration, DMS

**Automotive:**
- Test drives, service appointments, missed calls, dealer DMS/CRM, SIP integration, OEM reporting

**Banking/Wealth:**
- KYC, MF forms, SIP registration, NIGO (Not In Good Order), portfolio intelligence, rebalancing, HNI clients, RMs (Relationship Managers)

**Healthcare (OPD):**
- EMR/EHR, prescription assistant, AI scribe, documentation time, pharmacy workflow, nursing workflow, OPD volume

**Healthcare (Radiology):**
- PACS/RIS, radiology TAT (turnaround time), modality utilization, NLP, structured data extraction, operational dashboards, cost per scan

### Integration Terms (Cross-Sector)
- Bi-directional sync, API-first, WhatsApp Business API, calendar integration, real-time dashboards, audit trails, webhook-based capture

### Outcome Language Patterns
- "Cut to under 60 seconds" (specific, concrete)
- "Fewer missed calls during peak load" (directional, credible)
- "Lower NIGO rates" (uses domain term, measurable)
- "Reduced documentation time per patient" (outcome-focused)
- "Improved radiology TAT and utilization" (operational KPI)

---

## Part 5: Design & Layout Notes for Case Study Pages

### Typography
- Hero metrics: 48–64px, bold, dark text
- Section headlines: 32–40px, bold
- Body copy: 18–20px, comfortable line height (1.6–1.8)
- Domain terms (DMS, KYC, SIP, etc.): Regular weight, no special formatting unless first use (then optional light explanation in parentheses)

### Spacing
- Generous white space between sections (80–120px vertical)
- Comfortable paragraph spacing (24–32px between paragraphs)
- Wide content column (640–720px max-width) for readability

### Visuals (Optional Enhancements)
- Section 2 (Context): Icons or simple illustrations for each pain point
- Section 3 (Solution): Flow diagram showing Ark's integration points
- Section 4 (Results): Large, bold metric callouts with subtle background color
- Section 5 (Implementation): Integration logos or system architecture diagram

### Responsive Behavior
- **Desktop:** Side-by-side layout for Context/Solution sections if space allows
- **Tablet/Mobile:** Single column, stacked sections
- **Mobile hero metrics:** Stack vertically, maintain large font size for impact

### Navigation
- Sticky header with "Back to Case Studies" link
- Optional: In-page navigation (jump links to Context, Solution, Results, etc.)
- Footer: Same as homepage footer

---

## Part 6: SEO & Metadata (For Future Implementation)

### Page Titles
- "Case Study: [Sector] – [Hero Metric] | Ark Enterprise AI"
- Example: "Case Study: Real Estate – Lead Response Time Cut to Under 60 Seconds | Ark Enterprise AI"

### Meta Descriptions
- 150–160 characters, outcome-focused
- Example: "See how a large real estate developer cut lead response time to under 60 seconds with Ark's AI Voice CRM. Automated calling, qualification, and site-visit booking."

### Open Graph / Social Cards
- Use hero metric as headline
- Include sector tag and client type
- Ark logo + subtle background

This case study system is now ready to implement in your chosen tech stack (Next.js, React, etc.) with full content, structure, and design direction provided.

