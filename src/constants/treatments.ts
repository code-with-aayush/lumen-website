// src/constants/treatments.ts
import type { Treatment } from "@/types/treatment";

export const TREATMENTS: Treatment[] = [
  {
    slug: "botox-dysport",
    name: "Botox / Dysport",
    tagline: "Botox, considered.",
    category: "injectables",
    categoryLabel: "Injectables",
    typeLabel: "Neuromodulators",
    price: "from $14/unit",
    priceUnit: "$14 per unit",
    pricePackage: "Avg. session $280–$560",
    heroDescription:
      "A 20-minute appointment with a physician-grade injector. Targeted, measured, and designed to soften — not freeze. Return to your afternoon.",
    whatItIs:
      "Botox and Dysport are neuromodulators — purified proteins that temporarily relax the muscles responsible for dynamic facial lines. The 11s between your brows, the horizontal forehead lines, the crow's feet that deepen when you smile. These are the targets. Results settle fully within 14 days and last 3–4 months, at which point the muscle gradually regains its movement.",
    howWeApproach:
      "We map your facial anatomy before touching a needle. Every injection point is plotted against your natural expressions, your muscle mass, and the results you want. We use Botox (onabotulinumtoxinA) and Dysport (abobotulinumtoxinA) interchangeably depending on the area — each has anatomical advantages. No frozen foreheads. No eyebrow drops. Nothing that reads as 'done'.",
    whoItsFor: [
      "You're noticing lines that stay visible at rest, not just when you're expressive",
      "You want maintenance — not transformation",
      "You're interested in prevention as much as correction",
      "You've had Botox elsewhere and felt the results were too heavy or inconsistent",
    ],
    whatItIsnt:
      "A solution for volume loss, skin texture, or deep folds. Neuromodulators relax muscle — they don't add volume or resurface skin. If you have significant hollowing or static lines, we'll likely recommend combining with filler or a skin treatment.",
    session: "20–30 minutes",
    downtime: "None. Minimal pinpoint marks fade within hours.",
    onset: "3–7 days. Full effect at 14 days.",
    duration: "3–4 months",
    provider: "Dr. Elena Reyes, MD or Maya Chen, NP",
    faq: [
      {
        question: "Will I look frozen?",
        answer:
          "Not at Lumen. We use conservative dosing and anatomically precise placement. Our goal is that your friends notice you look well-rested, not that they know you had something done. If you want more movement preserved, tell us — we calibrate.",
      },
      {
        question: "How many units will I need?",
        answer:
          "It depends on your anatomy and the areas treated. Forehead typically takes 10–20 units. The 11s (glabella) 20–25 units. Crow's feet 10–15 units per side. We'll give you an accurate estimate during your consultation.",
      },
      {
        question: "Can I work out after?",
        answer:
          "We ask you to avoid strenuous exercise, lying flat, and facial massage for 4 hours post-treatment. After that, resume your normal routine.",
      },
      {
        question: "How often should I come in?",
        answer:
          "Most clients return every 3–4 months. If you stay on a consistent schedule, you may find you need slightly less product over time as the muscle trains to relax.",
      },
    ],
    relatedSlugs: ["dermal-filler", "sculptra", "hydrafacial"],
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1100&auto=format&fit=crop",
  },
  {
    slug: "dermal-filler",
    name: "Dermal Filler",
    tagline: "Volume, restored — not added.",
    category: "injectables",
    categoryLabel: "Injectables",
    typeLabel: "Hyaluronic Acid",
    price: "from $850/syringe",
    priceUnit: "$850 per syringe",
    heroDescription:
      "Restores volume where time has taken it — cheeks, under-eye, jawline, lips. Matched to your anatomy, not the current trend.",
    whatItIs:
      "Dermal fillers are gel-like substances — primarily hyaluronic acid (HA) — injected beneath the skin to restore lost volume, smooth deep folds, and refine contours. HA is naturally present in your skin; injecting it adds structure that your skin has lost over time. Results are immediate and last 9–18 months depending on the product and area treated.",
    howWeApproach:
      "We work from the principle of restoration, not augmentation. Before we discuss where to inject, we assess the whole face — how volume has redistributed with age, which structural changes are driving the concerns you're seeing. We use Restylane, Juvéderm, and RHA collections, selecting the formulation based on the viscosity needed for each area. Lips require a different product than cheeks. Under-eye requires a different technique than jawline. We don't have a preferred brand — we have the right tool for the anatomy.",
    whoItsFor: [
      "Volume loss in cheeks, temples, or under-eye area",
      "Nasolabial folds or marionette lines that bother you at rest",
      "Lip definition or mild enhancement (we do subtle — no duck lips)",
      "Jawline or chin definition",
      "Clients who want a refreshed appearance without looking 'done'",
    ],
    whatItIsnt:
      "A substitute for a face lift when significant skin laxity is present, or a treatment for dynamic lines caused by muscle movement (that's Botox's job). Overfilled faces look wrong — we'd rather under-treat and have you return than overshoot.",
    session: "30–60 minutes depending on areas",
    downtime: "Mild swelling and bruising possible, peaks at 48–72 hours. Plan around important events.",
    onset: "Immediate. Swelling resolves in 1–2 weeks, revealing the true result.",
    duration: "9–18 months depending on area and product",
    provider: "Dr. Elena Reyes, MD or Maya Chen, NP",
    faq: [
      {
        question: "Does it hurt?",
        answer:
          "Most fillers contain lidocaine, which numbs the area as we inject. We also apply topical numbing cream beforehand. Sensitive areas like lips are more uncomfortable — we manage this with dental blocks when needed.",
      },
      {
        question: "Can filler be reversed?",
        answer:
          "Hyaluronic acid filler can be dissolved with hyaluronidase (Hylenex). This is one reason we prefer HA fillers — it's our safety net. We keep this on hand at every appointment.",
      },
      {
        question: "How do I know I won't look overdone?",
        answer:
          "We'll show you what we're planning and why before we begin. We use a conservative approach — you can always add more at a follow-up. You cannot always take away.",
      },
    ],
    relatedSlugs: ["botox-dysport", "sculptra", "morpheus8"],
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "sculptra",
    name: "Sculptra",
    tagline: "Your own collagen, amplified.",
    category: "injectables",
    categoryLabel: "Injectables",
    typeLabel: "Biostimulator",
    price: "from $950/vial",
    priceUnit: "$950 per vial",
    pricePackage: "Most clients need 2–4 vials across 2 sessions",
    heroDescription:
      "Stimulates your own collagen production over 3–6 months. For gradual, natural volume restoration. The treatment that makes you look like yourself — just better.",
    whatItIs:
      "Sculptra (poly-L-lactic acid) is a biostimulator — not a filler, but a collagen stimulator. Injected into the deep dermis and subcutaneous tissue, it triggers your own fibroblasts to produce collagen over time. Results are gradual, building over 3–6 months, and can last up to 2 years. Because the volume comes from your own collagen, the result is uniquely natural-looking.",
    howWeApproach:
      "Sculptra requires careful dilution, precise placement, and a protocol-driven approach. We follow the FDA-approved technique — injecting in a diluted form across multiple points, then massaging thoroughly to distribute evenly. Most clients need 2–4 vials across 2 sessions, spaced 6 weeks apart. We photograph your face at each visit to track change systematically.",
    whoItsFor: [
      "Significant facial volume loss (cheeks, temples, jawline)",
      "Clients who prefer gradual, undetectable change over immediate results",
      "Those looking for longevity — Sculptra lasts longer than HA filler",
      "Clients interested in structural correction, not just surface treatment",
    ],
    whatItIsnt:
      "A quick fix. Results take time to develop and cannot be dissolved like HA filler. This treatment requires patience and commitment to the full protocol.",
    session: "45–60 minutes",
    downtime: "Mild swelling and redness for 24–48 hours. Massage protocol required for 5 days post-treatment.",
    onset: "Gradual over 3–6 months",
    duration: "Up to 2 years",
    provider: "Dr. Elena Reyes, MD",
    faq: [
      {
        question: "Why can't I see results immediately?",
        answer:
          "Sculptra works by stimulating your collagen — a biological process that takes time. You'll notice gradual improvement over several months. This is also why the results look so natural.",
      },
      {
        question: "What's the massage protocol?",
        answer:
          "For 5 days after treatment, you'll massage the treated areas for 5 minutes, 5 times per day. This ensures even distribution of the product and reduces the risk of nodule formation.",
      },
      {
        question: "How many vials will I need?",
        answer:
          "A common guideline is one vial per decade of age, but this varies significantly by individual. We'll assess at your consultation and recommend a protocol based on your specific anatomy and goals.",
      },
    ],
    relatedSlugs: ["dermal-filler", "botox-dysport", "morpheus8"],
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "morpheus8",
    name: "Morpheus8 RF Microneedling",
    tagline: "The deepest remodeling we offer.",
    category: "skin",
    categoryLabel: "Skin",
    typeLabel: "RF Microneedling",
    price: "from $1,200/session",
    priceUnit: "$1,200 per session",
    pricePackage: "Package of 3: $3,000",
    heroDescription:
      "Radiofrequency energy delivered through microneedles, remodeling collagen deep in the dermis. Our single most-requested treatment — and the one with the most visible return.",
    whatItIs:
      "Morpheus8 combines microneedling with fractional radiofrequency energy to remodel collagen in the deep dermis and subdermal tissue. The needles penetrate to 4mm — deeper than surface microneedling — and deliver RF energy at the tip, triggering a wound-healing response that produces new, organized collagen. The result: tighter skin, refined texture, softened scarring, and improved skin quality from the inside out.",
    howWeApproach:
      "We apply topical numbing for 45 minutes before the procedure. The treatment itself takes 30–45 minutes depending on the area. We adjust the needle depth and RF intensity based on your skin type, concerns, and tolerance. For significant skin laxity, we typically recommend a series of 3 treatments, spaced 4–6 weeks apart. We photograph and document at each session.",
    whoItsFor: [
      "Skin laxity — particularly jawline, neck, and lower face",
      "Acne scarring and textural irregularity",
      "Fine lines and early aging",
      "Enlarged pores and uneven skin tone",
      "Clients who want significant change without surgical downtime",
    ],
    whatItIsnt:
      "A substitute for surgical skin tightening when significant excess skin is present. Morpheus8 produces real, measurable improvement — but it works within the limits of the body's healing capacity.",
    session: "60–75 minutes (including numbing time)",
    downtime: "3–5 days. Expect redness, mild swelling, and pinpoint marks that resolve by day 4–5.",
    onset: "Initial improvement in 2–4 weeks. Full collagen remodeling at 3–6 months.",
    duration: "Results are long-lasting — new collagen persists for 1–2 years. Maintenance recommended annually.",
    provider: "Dr. Elena Reyes, MD or Maya Chen, NP",
    faq: [
      {
        question: "Is it painful?",
        answer:
          "With proper topical numbing, most clients describe a warm, prickling sensation — not pain. We allow full numbing time before starting and can pause or adjust if needed.",
      },
      {
        question: "How long until I see results?",
        answer:
          "You'll notice initial skin tightening and texture improvement within 2–4 weeks. The most significant results from collagen remodeling appear at 3–6 months post-treatment.",
      },
      {
        question: "Can it be done on any skin tone?",
        answer:
          "Yes. Morpheus8's fractional RF technology is safe on all Fitzpatrick skin types (I–VI) because it bypasses the epidermis — the energy is delivered below the skin's pigment-containing layer.",
      },
      {
        question: "How many treatments do I need?",
        answer:
          "For most skin laxity concerns, we recommend 3 sessions. For isolated texture improvement or mild concerns, 1–2 sessions may be sufficient. We'll make a specific recommendation during your consultation.",
      },
    ],
    relatedSlugs: ["halo-laser", "skinpen-microneedling", "coolpeel-co2"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "hydrafacial",
    name: "Hydrafacial MD",
    tagline: "The foundation of every skin ritual.",
    category: "skin",
    categoryLabel: "Skin",
    typeLabel: "Medical Resurfacing",
    price: "from $275",
    heroDescription:
      "Medical-grade resurfacing — cleanse, extract, hydrate — in 50 minutes. The finishing treatment before an event, or the foundation of a monthly ritual.",
    whatItIs:
      "Hydrafacial is a multi-step, machine-driven treatment that cleanses, exfoliates, extracts, and infuses the skin simultaneously. Using a patented vortex system, it removes congestion and dead cells while delivering serums (antioxidants, hyaluronic acid, peptides) directly into the cleansed skin. Unlike traditional facials, there's no manual extractions and no irritation — the suction is mechanical, making it suitable for sensitive skin.",
    howWeApproach:
      "We customize every Hydrafacial with boosters matched to your skin's current state — vitamin C for brightness, growth factors for aging skin, salicylic acid for congestion, or DermaBuilder for texture. We also assess whether the standard protocol needs modification for active acne, rosacea, or post-procedure skin. Sofia performs all Hydrafacial treatments and will walk you through what she's observing at each step.",
    whoItsFor: [
      "Anyone who wants immediate, visible skin improvement with no downtime",
      "Clients preparing for an event in the next 24–48 hours",
      "Those building a monthly maintenance routine",
      "Sensitive skin types who can't tolerate more aggressive treatments",
      "Clients post-laser or post-injectable wanting to optimize healing",
    ],
    whatItIsnt:
      "A treatment for deep scarring, significant pigmentation, or skin laxity. Hydrafacial improves surface quality — it doesn't remodel collagen or address structural concerns. For those goals, you want Morpheus8, Halo, or BBL.",
    session: "50 minutes",
    downtime: "None. Skin may appear slightly pink for 1–2 hours.",
    onset: "Immediately visible. Skin appears cleaner, smoother, and more luminous same day.",
    duration: "Results last 1–2 weeks at their peak. Monthly maintenance recommended.",
    provider: "Sofia Alvarez, LE",
    faq: [
      {
        question: "Can I get a Hydrafacial if I have active acne?",
        answer:
          "Yes, with modifications. We avoid the manual extraction step in areas with active breakouts and use the salicylic acid booster to address congestion. Let us know your current skin state when you book.",
      },
      {
        question: "Is there anything I should avoid before treatment?",
        answer:
          "Avoid retinol, AHAs, and active exfoliants for 24–48 hours before. Come in with clean skin if possible, though we'll cleanse at the start.",
      },
      {
        question: "Can I wear makeup after?",
        answer:
          "We recommend waiting 6–8 hours to let the serums absorb. Your skin will look good enough that you may not want to.",
      },
    ],
    relatedSlugs: ["chemical-peels", "skinpen-microneedling", "bbl-photofacial"],
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "chemical-peels",
    name: "Chemical Peels",
    tagline: "Prescribed to your skin. Not a formula.",
    category: "skin",
    categoryLabel: "Skin",
    typeLabel: "Chemical Exfoliation",
    price: "from $350",
    pricePackage: "Up to $600 for deep TCA",
    heroDescription:
      "TCA, glycolic, and Jessner peels, prescribed based on your skin goals. Not a one-size formula — every peel is built to your tolerance and timeline.",
    whatItIs:
      "Chemical peels use controlled acid solutions to exfoliate the skin, triggering cell turnover and revealing fresher, more even-toned skin beneath. The depth of the peel — superficial, medium, or deep — determines the results and the recovery. We use TCA (trichloroacetic acid), glycolic acid, lactic acid, and Jessner's solution, often in combination, to achieve targeted outcomes.",
    howWeApproach:
      "We don't have one peel. We prescribe the right acid, concentration, and layering approach based on your Fitzpatrick skin type, your tolerance for downtime, and your specific concerns. Someone with congestion and mild hyperpigmentation needs a different treatment than someone with significant sun damage and coarse texture. Sofia performs all peels and determines the endpoint by assessing your skin's response in real time.",
    whoItsFor: [
      "Hyperpigmentation and uneven skin tone",
      "Sun damage and surface discoloration",
      "Congestion, blackheads, and clogged pores",
      "Fine lines and early aging",
      "Clients who want consistent skin texture with regular maintenance",
    ],
    whatItIsnt:
      "A treatment for deep scarring or significant skin laxity. Peels address the epidermis and upper dermis — for deeper remodeling, Morpheus8, Halo, or CoolPeel CO2 are more appropriate.",
    session: "30–60 minutes",
    downtime: "Varies: superficial peels — 1–3 days of mild flaking. Medium peels — 5–7 days of visible peeling.",
    onset: "3–7 days post-peel as skin sheds and reveals new layer beneath.",
    duration: "Results vary. Monthly superficial peels recommended for ongoing maintenance.",
    provider: "Sofia Alvarez, LE",
    faq: [
      {
        question: "Will I peel visibly?",
        answer:
          "That depends on the depth of peel selected. Superficial glycolic or lactic peels produce subtle flaking that's not always visible. Medium TCA peels produce 5–7 days of visible, significant peeling. We'll set accurate expectations before you leave.",
      },
      {
        question: "Can I get a peel if I'm dark-skinned?",
        answer:
          "Yes, with appropriate selection. Darker skin tones (Fitzpatrick IV–VI) are at higher risk for post-inflammatory hyperpigmentation with aggressive peels — so we choose lower concentrations, shorter contact times, and gentler acids. We never rush with darker skin.",
      },
      {
        question: "What should I avoid after a peel?",
        answer:
          "Sun exposure (SPF is non-negotiable for 2 weeks post-peel), retinol, AHAs, physical exfoliation. Let the skin shed on its own — do not pick.",
      },
    ],
    relatedSlugs: ["hydrafacial", "bbl-photofacial", "halo-laser"],
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "skinpen-microneedling",
    name: "SkinPen Microneedling",
    tagline: "Texture, tone, and early aging — addressed.",
    category: "skin",
    categoryLabel: "Skin",
    typeLabel: "Medical Microneedling",
    price: "from $450",
    priceUnit: "$450 per session",
    pricePackage: "Package of 3: $1,200",
    heroDescription:
      "Medical microneedling with exosome boost available. For texture, tone, and early aging. Minimal downtime — consistent results.",
    whatItIs:
      "SkinPen is the first FDA-cleared medical microneedling device. It creates controlled micro-channels in the skin using a cartridge of fine needles, triggering the body's natural wound-healing response: collagen and elastin production. The result is improved skin texture, reduced pore size, softer acne scarring, and more even tone. Unlike Morpheus8, SkinPen works at the surface and upper dermis — ideal for texture concerns without the deeper laxity indications.",
    howWeApproach:
      "We apply topical numbing for 30 minutes before treatment. The SkinPen pass takes 20–30 minutes. We customize needle depth (0.25–2.5mm) and pass count by treatment zone. For clients seeking enhanced results, we offer an exosome serum (Benev or AnteAGE) applied immediately post-treatment — this accelerates healing and amplifies collagen stimulation. A series of 3 treatments, spaced 4–6 weeks apart, produces the best results.",
    whoItsFor: [
      "Textural irregularity and enlarged pores",
      "Mild to moderate acne scarring",
      "Fine lines and early aging concerns",
      "Uneven skin tone",
      "Clients who want collagen stimulation with 1–2 days of social downtime",
    ],
    whatItIsnt:
      "A substitute for Morpheus8 when skin laxity is the primary concern. SkinPen works at shallower depths — for tightening, Morpheus8 or Halo delivers greater impact.",
    session: "45–60 minutes including numbing",
    downtime: "24–48 hours of redness. Most clients are socially presentable within 48 hours.",
    onset: "Initial improvement in 1–2 weeks. Full results develop over 3–6 months.",
    duration: "Long-lasting collagen stimulation. Annual maintenance recommended.",
    provider: "Sofia Alvarez, LE",
    faq: [
      {
        question: "What's the difference between SkinPen and Morpheus8?",
        answer:
          "SkinPen uses mechanical needles only — no additional energy. Morpheus8 adds radiofrequency through the needle tips, reaching deeper tissue and producing greater skin-tightening. SkinPen is ideal for texture and tone; Morpheus8 is better for laxity and deeper remodeling.",
      },
      {
        question: "What are exosomes and should I add them?",
        answer:
          "Exosomes are extracellular vesicles derived from stem cells, loaded with growth factors and signaling proteins. Applied immediately post-needling, they accelerate healing and amplify collagen production. We recommend the exosome boost for clients focused on aging or scarring.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "For texture and tone, a series of 3 gives the best outcome. For mild scarring, 3–6 sessions depending on depth. We'll set a specific plan at your consultation.",
      },
    ],
    relatedSlugs: ["morpheus8", "hydrafacial", "chemical-peels"],
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "bbl-photofacial",
    name: "BBL Photofacial",
    tagline: "Clarity without downtime.",
    category: "laser-device",
    categoryLabel: "Laser & Device",
    typeLabel: "Broadband Light",
    price: "from $650",
    heroDescription:
      "Broadband light therapy for sun damage, redness, and pigmentation. Non-invasive, no downtime — visible results in two sessions.",
    whatItIs:
      "BroadBand Light (BBL) by Sciton delivers intense pulsed light to target chromophores in the skin — melanin (pigment) and oxyhemoglobin (redness). Heat selectively destroys these targets, causing pigmented lesions to darken and flake off over 1–2 weeks, and redness/broken capillaries to close and resolve. BBL also has a unique biological effect: Stanford research has shown that regular BBL treatments can alter gene expression to maintain a younger skin profile.",
    howWeApproach:
      "We take photos before every BBL treatment to document your baseline. Treatment settings are calibrated to your Fitzpatrick skin type and the specific targets — sunspots, redness, and diffuse pigmentation each respond to different wavelength filters. The procedure takes 20–30 minutes, feels like the snap of a rubber band (we apply topical numbing for sensitive clients), and causes no downtime beyond some immediate redness that resolves within a few hours.",
    whoItsFor: [
      "Freckles and sunspots (solar lentigines)",
      "Diffuse redness and facial flushing",
      "Rosacea management",
      "Broken capillaries and vascular lesions",
      "Early aging and dull, uneven tone",
    ],
    whatItIsnt:
      "Appropriate for darker skin tones (Fitzpatrick IV–VI) — the risk of hyperpigmentation is too high without proper settings. We assess at your consultation and may recommend an alternative. Also not a treatment for deep scarring or significant skin laxity.",
    session: "20–30 minutes",
    downtime: "None significant. Pigmented spots darken over 3–7 days before flaking off naturally.",
    onset: "Improvement visible in 1–2 weeks as treated lesions shed. Full results after 2 sessions.",
    duration: "Lasting — once treated spots are gone, they're gone. Maintenance annually for new sun damage.",
    provider: "Dr. Elena Reyes, MD or Sofia Alvarez, LE",
    faq: [
      {
        question: "Will my spots get darker before they get better?",
        answer:
          "Yes — this is expected and is actually a sign the treatment is working. Treated pigmented lesions form a temporary darkened crust ('coffee ground' appearance) and flake off over 7–14 days, revealing clear skin beneath.",
      },
      {
        question: "How many treatments do I need?",
        answer:
          "Two sessions, 4–6 weeks apart, produce visible results for most clients. Significant sun damage may require 3 sessions. Maintenance once a year keeps new damage in check.",
      },
      {
        question: "Can I get BBL if I have a tan?",
        answer:
          "No. Active tan significantly increases the risk of burns and pigmentation complications. You need to be fully protected from sun exposure for 4 weeks before treatment.",
      },
    ],
    relatedSlugs: ["halo-laser", "chemical-peels", "hydrafacial"],
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "halo-laser",
    name: "Halo Hybrid Laser",
    tagline: "The gold standard. Worth the recovery.",
    category: "laser-device",
    categoryLabel: "Laser & Device",
    typeLabel: "Hybrid Fractional Laser",
    price: "from $1,500",
    priceUnit: "$1,500 per session",
    pricePackage: "Package of 2: $2,800",
    heroDescription:
      "The gold-standard resurfacing laser. Corrects tone, texture, and fine lines in a single treatment. Real downtime: 5–7 days. Real results: lasting.",
    whatItIs:
      "Halo by Sciton is the world's first hybrid fractional laser — combining ablative (2940nm Er:YAG) and non-ablative (1470nm) wavelengths simultaneously. The ablative component resurfaces the skin's outer layer; the non-ablative component penetrates to the deeper dermis to stimulate collagen. This dual-action means Halo achieves what used to require separate treatments: surface resurfacing and deep collagen remodeling, in a single session.",
    howWeApproach:
      "Halo requires careful skin preparation (we recommend a 4-week retinol pause and strict sun avoidance beforehand) and skilled calibration on the day of treatment. We apply topical numbing for 60 minutes. The procedure takes 30–45 minutes, and the post-treatment care protocol is detailed — we'll walk you through everything before you leave. Most clients need only one treatment per year for significant maintenance, or a series of 2 for more dramatic correction.",
    whoItsFor: [
      "Comprehensive skin resurfacing — tone, texture, and fine lines in one session",
      "Sun damage and diffuse hyperpigmentation",
      "Large pores and rough texture",
      "Clients who can commit to 5–7 days of social downtime",
      "Those who want the most significant non-surgical result available",
    ],
    whatItIsnt:
      "Appropriate for summer — active tan is a contraindication. Also not a first treatment for clients new to aesthetics. We prefer clients to have had a consultation and, ideally, some preliminary skin prep before Halo.",
    session: "90 minutes including numbing time",
    downtime:
      "5–7 days. Skin will be red, swollen, and show a 'meze' texture (like nutmeg) as it heals. Day 3–4 is typically the most significant. Most clients are socially presentable by day 7.",
    onset: "Initial glow visible at day 7–10. Full collagen remodeling at 3 months.",
    duration: "Results can last 1–3 years with sun protection and annual maintenance.",
    provider: "Dr. Elena Reyes, MD",
    faq: [
      {
        question: "Is Halo painful?",
        answer:
          "With full numbing, most clients describe a warm, intense heat sensation during treatment — not sharp pain. The first few hours post-treatment can be uncomfortable (like a sunburn). We send you home with recovery instructions and cooling protocols.",
      },
      {
        question: "What does recovery actually look like?",
        answer:
          "Day 1–2: Red, swollen, warm. Day 3–4: Skin develops a bronzed, textured appearance ('meze') — this is the healing skin beneath. Day 5–7: Shedding begins and skin clears. Day 7+: Pink, smooth, glowing. Plan your social calendar accordingly.",
      },
      {
        question: "Do I need to prepare my skin beforehand?",
        answer:
          "Yes. We recommend stopping retinol 4 weeks before, protecting against sun exposure completely, and beginning a prescribed topical protocol (hydroquinone for some skin types) to reduce post-inflammatory hyperpigmentation risk. We provide full instructions at your consultation.",
      },
    ],
    relatedSlugs: ["bbl-photofacial", "morpheus8", "coolpeel-co2"],
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    tagline: "Done carefully. Done well.",
    category: "laser-device",
    categoryLabel: "Laser & Device",
    typeLabel: "Alexandrite / Nd:YAG",
    price: "from $125/session",
    priceUnit: "$125 per session",
    pricePackage: "Packages available — ask at consultation",
    heroDescription:
      "Alexandrite and Nd:YAG technology — safe on all skin tones. We do this well because we do it carefully.",
    whatItIs:
      "Laser hair removal uses targeted light energy to destroy hair follicles at the root, permanently reducing hair growth over a series of sessions. We use the Sciton JOULE platform with both Alexandrite (755nm, optimal for light skin) and Nd:YAG (1064nm, safe on all skin tones including dark skin) wavelengths, switching based on your Fitzpatrick type for maximum efficacy and safety.",
    howWeApproach:
      "Every first session begins with a patch test and skin type assessment. We select the appropriate wavelength and settings before any treatment. We move through treatment areas methodically — no rushing — and document settings at each session to track your response. Most clients need 6–8 sessions spaced 6–8 weeks apart, depending on the area and hair cycle.",
    whoItsFor: [
      "Anyone with unwanted hair on face, body, or bikini area",
      "All skin tones — our Nd:YAG wavelength is safe on Fitzpatrick IV–VI",
      "Those tired of regular shaving or waxing",
      "Clients with ingrown hair issues",
    ],
    whatItIsnt:
      "Effective on gray, white, blonde, or very light red hair — laser targets melanin in the hair follicle and is ineffective on hair without pigment. We'll tell you this honestly at your consultation.",
    session: "15–60 minutes depending on area",
    downtime: "None. Mild redness for a few hours.",
    onset: "Hair reduction visible after 2–3 sessions. Optimal results after 6–8 sessions.",
    duration: "Permanent reduction. Some clients require annual touch-up sessions.",
    provider: "Sofia Alvarez, LE or Dr. Elena Reyes, MD",
    faq: [
      {
        question: "Is it safe on dark skin?",
        answer:
          "Yes, with the right technology. Our Nd:YAG wavelength is specifically designed for darker skin tones, bypassing the epidermal melanin and targeting the follicle safely. Many clinics cannot safely treat skin tones above Fitzpatrick III — we can.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "Typically 6–8 for most areas. Hair grows in cycles, and laser can only target follicles in the active growth phase — which is why multiple sessions are required. We'll give you a realistic estimate at your consultation.",
      },
      {
        question: "What should I do before my appointment?",
        answer:
          "Shave the area 24 hours before (do not wax or pluck — we need the follicle intact). Avoid sun exposure and self-tanner for 4 weeks before treatment.",
      },
    ],
    relatedSlugs: ["bbl-photofacial", "hydrafacial", "chemical-peels"],
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
  },
  {
    slug: "coolpeel-co2",
    name: "CoolPeel CO2",
    tagline: "CO2 results. Manageable downtime.",
    category: "laser-device",
    categoryLabel: "Laser & Device",
    typeLabel: "Fractional CO2",
    price: "from $850",
    heroDescription:
      "Fractional CO2 laser with significantly reduced downtime. For fine lines, sun damage, and texture refinement — without a week off your life.",
    whatItIs:
      "CoolPeel is a fractional CO2 laser treatment using the Tetra CO2 system by Cartessa. Unlike traditional CO2 resurfacing — which ablates the entire surface and requires 7–14 days of recovery — CoolPeel delivers high-energy CO2 in extremely short pulses that ablate without residual heat spread. The result: targeted surface resurfacing with significantly less thermal damage and faster healing.",
    howWeApproach:
      "We apply topical numbing for 45 minutes before treatment. The laser pass takes 15–20 minutes. We calibrate energy delivery based on your skin type, laxity, and goals. Post-treatment, skin is red and feels like a mild sunburn. Most clients are presentable in 3–4 days. We provide a complete aftercare protocol including mineral-based SPF.",
    whoItsFor: [
      "Fine lines — particularly perioral (around the mouth) and periorbital (around the eyes)",
      "Sun damage and mild to moderate texture irregularity",
      "Clients who want CO2 results with 3–5 days of downtime instead of 7–10",
      "Those who've responded well to less aggressive resurfacing and are ready to step up",
    ],
    whatItIsnt:
      "A replacement for full CO2 or Halo in cases of significant skin laxity or deep scarring. CoolPeel addresses the surface with precision — for deeper remodeling, Morpheus8 or Halo are better tools.",
    session: "45–60 minutes including numbing",
    downtime: "3–5 days. Redness, mild peeling, pinpoint marks that resolve by day 4–5.",
    onset: "Visible improvement in 1 week. Progressive for 3 months.",
    duration: "Long-lasting surface improvements. Annual maintenance.",
    provider: "Dr. Elena Reyes, MD",
    faq: [
      {
        question: "How is CoolPeel different from Halo?",
        answer:
          "Halo combines ablative and non-ablative wavelengths to address both surface and deep dermis simultaneously — with 5–7 days of downtime. CoolPeel uses only an ablative CO2 wavelength at lower depths with ultra-short pulse durations — achieving meaningful surface results with 3–4 days of downtime. If you need deeper collagen remodeling, Halo is the better choice.",
      },
      {
        question: "Can I combine CoolPeel with other treatments?",
        answer:
          "Yes. CoolPeel is often combined with BBL in the same session ('BBL + CoolPeel') for comprehensive tone and texture correction. Ask about this combination at your consultation.",
      },
      {
        question: "What should I avoid after treatment?",
        answer:
          "Sun exposure is strictly off-limits for 2 weeks. No exfoliants, retinol, or active ingredients until skin is fully healed. Mineral SPF daily without exception.",
      },
    ],
    relatedSlugs: ["halo-laser", "bbl-photofacial", "morpheus8"],
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=900&auto=format&fit=crop",
  },
];

export const TREATMENT_CATEGORIES = [
  { key: "injectables", label: "Injectables" },
  { key: "skin", label: "Skin" },
  { key: "laser-device", label: "Laser & Device" },
] as const;

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(
  category: Treatment["category"]
): Treatment[] {
  return TREATMENTS.filter((t) => t.category === category);
}
