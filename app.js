/**
 * EZE NNAMDI PORTFOLIO — INTERACTIVE BLUEPRINT ENGINE
 * Concept: Machinist's Drawing Sheet & Parts Shelf
 */

document.addEventListener("DOMContentLoaded", () => {
  initRoleSwitcher();
  initPartsShelf();
  initEmailCopy();
  initContactForm();
  initKeyboardShortcuts();
});

/* ==========================================================================
   1. ROLE SWITCHER
   ========================================================================== */
const roleData = {
  design: {
    code: "SPEC: DE-01 // FIGMA-TO-CODE",
    text: "I design in Figma and ship it in code, so what you approve is what goes live. Clean layouts, accessible details, themes that just work."
  },
  web: {
    code: "SPEC: WD-02 // REACT & SERVERLESS",
    text: "I build responsive React apps end-to-end: auth, databases, payments and deployment, all handled solo and shipped fast."
  },
  ai: {
    code: "SPEC: AI-03 // GROQ & LLAMA 3.3",
    text: "I add AI to real products: chat, quiz and flashcard generation, and document analysis built on the Groq API."
  }
};

function initRoleSwitcher() {
  const roleButtons = document.querySelectorAll(".role-btn");
  const roleCode = document.getElementById("role-code");
  const roleText = document.getElementById("role-text");

  if (!roleButtons.length || !roleCode || !roleText) return;

  roleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.role;
      if (!roleData[selected]) return;

      roleButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      roleCode.textContent = roleData[selected].code;
      roleText.textContent = roleData[selected].text;
    });
  });
}

/* ==========================================================================
   2. PARTS ON THE SHELF & BLUEPRINT CAD VIEWER
   ========================================================================== */
const partsCatalog = {
  "p-001": {
    partNo: "DETAIL · P-001",
    status: "PROD SPEC APPROVED",
    category: "AI / FULL-STACK",
    title: "STED — AI Study Companion",
    desc: "A personal project for university students that brings AI study help, academic planning and personal finance into one app. The AI chat generates flashcards and quizzes and analyzes PDFs. A planner tracks streaks, an expense tracker handles money, and a rate-limited serverless API protects the backend. Designed and built solo, with auth, payments and push notifications.",
    tags: ["React", "Vite", "Firebase", "Groq · LLaMA 3.3 70B", "Paystack", "FCM", "PWA"],
    links: [
      { label: "Open live app", url: "https://sted-react.vercel.app/", primary: true }
    ],
    metric: "INFERENCE: ~300 T/S // LCP: 0.8s",
    svgContent: `
      <!-- Isometric CAD Drawing for STED -->
      <polygon points="120,50 260,20 380,50 240,80" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <polygon points="120,50 240,80 240,150 120,120" stroke="#B7B5AC" stroke-width="1.2" fill="#20211F" fill-opacity="0.7"/>
      <polygon points="240,80 380,50 380,120 240,150" stroke="#B7B5AC" stroke-width="1.2" fill="#20211F" fill-opacity="0.8"/>
      
      <line x1="160" y1="60" x2="160" y2="130" stroke="#E65B32" stroke-width="1.2" stroke-dasharray="3 3"/>
      <line x1="280" y1="70" x2="280" y2="140" stroke="#E65B32" stroke-width="1.2" stroke-dasharray="3 3"/>
      <circle cx="240" cy="80" r="3.5" fill="#E65B32"/>
      <circle cx="120" cy="50" r="3" fill="#B7B5AC"/>
      <circle cx="380" cy="50" r="3" fill="#B7B5AC"/>
      
      <path d="M 240 80 L 300 100 L 370 100" stroke="#E65B32" stroke-width="1"/>
      <text x="375" y="103" fill="#E65B32" font-family="'JetBrains Mono', monospace" font-size="9">LLM // GROQ 70B</text>
      
      <path d="M 120 120 L 70 140 L 40 140" stroke="#B7B5AC" stroke-width="1"/>
      <text x="10" y="143" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="9">AUTH & PWA</text>
    `
  },
  "p-002": {
    partNo: "DETAIL · P-002",
    status: "MULTI-APP CLUSTER",
    category: "SYSTEMS / WEB",
    title: "Kwik — Food Delivery Platform (4 Apps)",
    desc: "A full delivery platform split into the four apps each role needs: one for customers ordering, one for drivers on the road, one for restaurants managing orders, and an admin dashboard overseeing it all with coordinated lifecycle states.",
    tags: ["Multi-app system", "Role-based UI", "Vercel", "Real-time State", "Responsive"],
    links: [
      { label: "Customer App", url: "https://kwik-customer.vercel.app/", primary: true },
      { label: "Driver App", url: "https://kwik-driver.vercel.app/", primary: false },
      { label: "Restaurant App", url: "https://kwik-restaurant.vercel.app/", primary: false },
      { label: "Admin Console", url: "https://admin-delta-mauve-17.vercel.app/", primary: false }
    ],
    metric: "4 NODES SYNCHRONIZED // 0 RERENDERS",
    svgContent: `
      <!-- Multi-node Network CAD for Kwik -->
      <rect x="50" y="30" width="85" height="50" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <text x="60" y="60" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="9">CUSTOMER</text>
      
      <rect x="325" y="30" width="85" height="50" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <text x="345" y="60" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="9">DRIVER</text>
      
      <rect x="50" y="130" width="85" height="50" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <text x="54" y="160" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="9">RESTAURANT</text>
      
      <rect x="325" y="130" width="85" height="50" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <text x="350" y="160" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="9">ADMIN</text>
      
      <!-- Central Hub -->
      <circle cx="230" cy="105" r="28" stroke="#E65B32" stroke-width="1.5" fill="#20211F"/>
      <text x="208" y="108" fill="#E65B32" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="bold">SYNC HUB</text>
      
      <!-- Connectors -->
      <line x1="135" y1="55" x2="204" y2="92" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="325" y1="55" x2="256" y2="92" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="135" y1="155" x2="204" y2="118" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="3 3"/>
      <line x1="325" y1="155" x2="256" y2="118" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="3 3"/>
    `
  },
  "p-003": {
    partNo: "DETAIL · P-003",
    status: "PRODUCTION / HYBRID STUDIO",
    category: "STUDIO / FULL-STACK",
    title: "TechLearningHub — Software Studio & Tech Academy",
    desc: "TechLearningHub is a software studio and tech academy in one place. We build digital products for businesses, and we train the next generation of engineers to build them too. Our team ships real projects, then teaches what we learn in live, cohort-based programmes. We work in two-week sprints with live demos, so clients see progress early and often. Every project follows four stages: discovery, design and prototype, build and ship, then scale and support.",
    tags: ["Software Studio", "Academy / LMS", "Cohort Engine", "Two-Week Sprints", "Next.js / React", "Full-Stack", "Vercel"],
    links: [
      { label: "Open Studio & Academy", url: "https://learninghub-peach.vercel.app/", primary: true }
    ],
    metric: "4-STAGE DELIVERY PIPELINE // 2-WEEK SPRINTS",
    svgContent: `
      <!-- Dual Studio & Academy CAD Pipeline -->
      <rect x="50" y="30" width="160" height="70" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <rect x="58" y="38" width="55" height="12" fill="#E65B32"/>
      <text x="63" y="47" fill="#FFFFFF" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold">STUDIO</text>
      <text x="58" y="72" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">4-STAGE SPRINT ENGINE</text>
      <text x="58" y="86" fill="#8E9189" font-family="'JetBrains Mono', monospace" font-size="7">DISCOVERY → PROTOTYPE → SHIP</text>
      
      <rect x="250" y="30" width="160" height="70" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <rect x="258" y="38" width="65" height="12" fill="#20211F" stroke="#B7B5AC" stroke-width="1"/>
      <text x="263" y="47" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold">ACADEMY</text>
      <text x="258" y="72" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">LIVE COHORT PLATFORM</text>
      <text x="258" y="86" fill="#8E9189" font-family="'JetBrains Mono', monospace" font-size="7">INTERACTIVE CURRICULUM</text>
      
      <!-- Bridge / Feedback Loop -->
      <path d="M 210 65 L 250 65" stroke="#E65B32" stroke-width="1.5" stroke-dasharray="3 3"/>
      <polygon points="248,62 254,65 248,68" fill="#E65B32"/>
      
      <!-- Lower Process Milestones -->
      <rect x="50" y="130" width="80" height="45" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
      <text x="58" y="152" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">01. DISCOVER</text>
      <rect x="140" y="130" width="80" height="45" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
      <text x="148" y="152" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">02. PROTOTYPE</text>
      <rect x="230" y="130" width="80" height="45" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
      <text x="238" y="152" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">03. SHIP</text>
      <rect x="320" y="130" width="90" height="45" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
      <text x="328" y="152" fill="#E65B32" font-family="'JetBrains Mono', monospace" font-size="8">04. SCALE</text>
    `
  },
  "p-004": {
    partNo: "DETAIL · P-004",
    status: "PRODUCTION ECOSYSTEM",
    category: "CREATOR PLATFORM",
    title: "Africa Creators — Education & Monetization Suite",
    desc: "An end-to-end platform built for African digital creators, educators, and communities. Powers course creation & interactive video hosting, social feeds & gamified discussion threads, native multi-tier affiliate & ambassador management, tiered subscription memberships, and agency-level CRM marketing operations.",
    tags: ["Course Creation", "Community Feeds", "Affiliate Engine", "Tiered Memberships", "Marketing Funnels", "Vercel"],
    links: [
      { label: "Open Live Platform", url: "https://africa-creators.vercel.app/", primary: true }
    ],
    metric: "5-MODULE ECOSYSTEM // CRM & MONETIZATION",
    svgContent: `
      <!-- Africa Creators 5-Node Hub CAD -->
      <circle cx="230" cy="100" r="32" stroke="#E65B32" stroke-width="1.8" fill="#20211F"/>
      <text x="195" y="103" fill="#E65B32" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="bold">AFRICA CREATORS</text>
      
      <!-- Node 1: Courses -->
      <rect x="40" y="30" width="95" height="35" stroke="#B7B5AC" stroke-width="1" fill="none"/>
      <text x="48" y="52" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">COURSES & VIDEO</text>
      <line x1="135" y1="48" x2="202" y2="85" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2"/>
      
      <!-- Node 2: Community -->
      <rect x="325" y="30" width="95" height="35" stroke="#B7B5AC" stroke-width="1" fill="none"/>
      <text x="333" y="52" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">COMMUNITY FEED</text>
      <line x1="325" y1="48" x2="258" y2="85" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2"/>
      
      <!-- Node 3: Affiliate -->
      <rect x="40" y="145" width="95" height="35" stroke="#B7B5AC" stroke-width="1" fill="none"/>
      <text x="46" y="167" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">AFFILIATE ENGINE</text>
      <line x1="135" y1="162" x2="204" y2="118" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2"/>
      
      <!-- Node 4: Memberships -->
      <rect x="325" y="145" width="95" height="35" stroke="#B7B5AC" stroke-width="1" fill="none"/>
      <text x="331" y="167" fill="#B7B5AC" font-family="'JetBrains Mono', monospace" font-size="8">PAID MEMBERSHIP</text>
      <line x1="325" y1="162" x2="256" y2="118" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2"/>
      
      <!-- Node 5: Funnels -->
      <rect x="180" y="170" width="100" height="28" stroke="#E65B32" stroke-width="1" fill="none"/>
      <text x="188" y="188" fill="#E65B32" font-family="'JetBrains Mono', monospace" font-size="8">MARKETING CRM</text>
      <line x1="230" y1="132" x2="230" y2="170" stroke="#E65B32" stroke-width="1" stroke-dasharray="2 2"/>
    `
  },
  "p-005": {
    partNo: "DETAIL · P-005",
    status: "CLIENT DEPLOYED (2 SITES)",
    category: "DESIGN ENG",
    title: "School Website Template System",
    desc: "A reusable school website I designed and built as a modular production template. Optimized for institutional clarity, administrative announcements, admissions pipelines, and fast mobile navigation on low-bandwidth networks.",
    tags: ["Template system", "Responsive", "Client work", "Modular UI", "Accessibility"],
    links: [
      { label: "View live template", url: "https://school-website-three-beta.vercel.app/", primary: true }
    ],
    metric: "ADOPTED BY 2 INSTITUTIONS // LCP: 0.6s",
    svgContent: `
      <!-- Modular Block Layout CAD for School Template -->
      <rect x="60" y="25" width="340" height="170" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <line x1="60" y1="60" x2="400" y2="60" stroke="#B7B5AC" stroke-width="1"/>
      <rect x="80" y="38" width="60" height="10" fill="#E65B32"/>
      
      <!-- Columns -->
      <rect x="80" y="80" width="130" height="95" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
      <rect x="230" y="80" width="150" height="40" stroke="#B7B5AC" stroke-width="1" fill="none"/>
      <rect x="230" y="135" width="150" height="40" stroke="#B7B5AC" stroke-width="1" fill="none"/>
      
      <!-- Dimension Callouts -->
      <line x1="40" y1="25" x2="40" y2="195" stroke="#E65B32" stroke-width="1"/>
      <text x="12" y="115" fill="#E65B32" font-family="'JetBrains Mono', monospace" font-size="8">100% RESP</text>
    `
  },
  "p-006": {
    partNo: "DETAIL · P-006",
    status: "CLIENT APPROVED",
    category: "DESIGN ENG",
    title: "Stephanie's Portfolio",
    desc: "A bespoke portfolio built for a creative client. I designed the spatial aesthetic in Figma, developed the responsive components in VS Code, and leveraged AI planning workflows for rapid iteration and zero regressions.",
    tags: ["Figma", "Client project", "Responsive", "Custom Micro-interactions", "CSS Typography"],
    links: [
      { label: "View portfolio", url: "https://stephanie-s-portfolio.vercel.app/", primary: true }
    ],
    metric: "ZERO LAYOUT SHIFT (CLS: 0.00)",
    svgContent: `
      <!-- Editorial Portfolio Grid CAD -->
      <rect x="70" y="25" width="320" height="170" stroke="#B7B5AC" stroke-width="1" fill="none"/>
      <circle cx="130" cy="80" r="30" stroke="#E65B32" stroke-width="1.2" fill="none"/>
      <line x1="185" y1="65" x2="350" y2="65" stroke="#B7B5AC" stroke-width="2"/>
      <line x1="185" y1="85" x2="310" y2="85" stroke="#B7B5AC" stroke-width="1"/>
      <line x1="185" y1="98" x2="280" y2="98" stroke="#B7B5AC" stroke-width="1"/>
      
      <rect x="90" y="130" width="85" height="45" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
      <rect x="190" y="130" width="85" height="45" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
      <rect x="290" y="130" width="85" height="45" stroke="#B7B5AC" stroke-width="1" stroke-dasharray="2 2" fill="none"/>
    `
  },
  "p-007": {
    partNo: "DETAIL · P-007",
    status: "ACTIVE UTILITY",
    category: "CORE UX",
    title: "Contact Gateway",
    desc: "A purpose-built contact gateway engineered for personal social profiles. Protects direct inbox infrastructure from crawlers and spam while providing an unencumbered direct inquiry pipeline.",
    tags: ["Form UX", "Sanitization", "Personal Infrastructure", "Accessible"],
    links: [
      { label: "Open contact gateway", url: "https://contactnnamdi.vercel.app/", primary: true }
    ],
    metric: "100% SPAM-SCREENED TRANSMISSION",
    svgContent: `
      <!-- Form Gateway Pipeline CAD -->
      <rect x="60" y="45" width="130" height="130" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <line x1="80" y1="75" x2="160" y2="75" stroke="#B7B5AC" stroke-width="1"/>
      <line x1="80" y1="100" x2="160" y2="100" stroke="#B7B5AC" stroke-width="1"/>
      <rect x="80" y="125" width="50" height="20" fill="#E65B32"/>
      
      <!-- Verification Filter Node -->
      <path d="M 190 110 L 250 110" stroke="#E65B32" stroke-width="1.5" stroke-dasharray="3 3"/>
      <polygon points="250,90 280,110 250,130" stroke="#E65B32" stroke-width="1" fill="#20211F"/>
      
      <!-- Mail Destination -->
      <rect x="300" y="80" width="100" height="60" stroke="#B7B5AC" stroke-width="1.2" fill="none"/>
      <polyline points="300,80 350,115 400,80" stroke="#B7B5AC" stroke-width="1"/>
    `
  }
};

function initPartsShelf() {
  const partRows = document.querySelectorAll(".part-row");
  const filterChips = document.querySelectorAll(".filter-chip");
  const detailPartNo = document.getElementById("detail-part-no");
  const detailStatus = document.getElementById("detail-status");
  const detailCat = document.getElementById("detail-cat");
  const detailTitle = document.getElementById("detail-title");
  const detailDesc = document.getElementById("detail-desc");
  const detailTags = document.getElementById("detail-tags");
  const detailLinks = document.getElementById("detail-links");
  const cadGraphics = document.getElementById("cad-dynamic-graphics");
  const cadMetric = document.getElementById("cad-meta-metric");

  function selectPart(id) {
    const data = partsCatalog[id];
    if (!data) return;

    // Update active row state
    partRows.forEach(row => {
      row.classList.toggle("active", row.dataset.id === id);
    });

    // Populate detail elements
    if (detailPartNo) detailPartNo.textContent = data.partNo;
    if (detailStatus) detailStatus.textContent = data.status;
    if (detailCat) detailCat.textContent = data.category;
    if (detailTitle) detailTitle.textContent = data.title;
    if (detailDesc) detailDesc.textContent = data.desc;
    if (cadMetric) cadMetric.textContent = data.metric;

    // Update CAD SVG graphics
    if (cadGraphics) {
      cadGraphics.innerHTML = data.svgContent;
    }

    // Update tags
    if (detailTags) {
      detailTags.innerHTML = data.tags
        .map(t => `<span class="tag">${t}</span>`)
        .join("");
    }

    // Update dispatch links
    if (detailLinks) {
      detailLinks.innerHTML = data.links
        .map(l => `
          <a href="${l.url}" target="_blank" rel="noopener" class="link-btn ${l.primary ? "primary" : ""}">
            <span>${l.label}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 10.5L10.5 1.5M10.5 1.5H3M10.5 1.5V9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        `)
        .join("");
    }
  }

  // Row click & keyboard selection
  partRows.forEach(row => {
    const id = row.dataset.id;
    row.addEventListener("click", () => selectPart(id));
    row.addEventListener("mouseenter", () => selectPart(id));
    row.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectPart(id);
      }
    });
  });

  // Filter chips
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;

      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");

      let firstVisible = null;
      partRows.forEach(row => {
        const cat = row.dataset.cat || "";
        const matches = filter === "all" || cat.includes(filter);
        row.classList.toggle("hidden", !matches);
        if (matches && !firstVisible) {
          firstVisible = row;
        }
      });

      if (firstVisible) {
        selectPart(firstVisible.dataset.id);
      }
    });
  });
}

/* ==========================================================================
   3. EMAIL COPY FUNCTIONALITY WITH TOAST
   ========================================================================== */
function initEmailCopy() {
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast");
  const email = "nnamdis.space@gmail.com";

  if (!copyBtn || !toast) return;

  copyBtn.addEventListener("click", async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const temp = document.createElement("textarea");
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }
      showToast("Email copied to clipboard: " + email);
    } catch (err) {
      showToast("Copied: " + email);
    }
  });

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }
}

/* ==========================================================================
   4. KEYBOARD SHORTCUTS
   ========================================================================== */
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // If user is inside an input, ignore
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    if (e.key === "m" || e.key === "M") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
}

/* ==========================================================================
   5. INTERACTIVE MESSAGE DISPATCH FORM
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const botcheck = form.botcheck ? form.botcheck.checked : false;

    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.className = "form-feedback error";
      return;
    }

    feedback.textContent = "Transmitting message...";
    feedback.className = "form-feedback";

    // If served locally on file:// protocol, redirect to mailto
    if (window.location.protocol === "file:") {
      window.location.href = `mailto:nnamdis.space@gmail.com?subject=Project Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
      feedback.textContent = "Opening your mail client...";
      feedback.className = "form-feedback success";
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, botcheck })
      });
      const data = await res.json();
      if (res.ok && data.success !== false) {
        feedback.textContent = "✓ Transmission received. I will reply shortly.";
        feedback.className = "form-feedback success";
        form.reset();
      } else {
        feedback.textContent = data.message || "Transmission error. Please email nnamdis.space@gmail.com directly.";
        feedback.className = "form-feedback error";
      }
    } catch (err) {
      feedback.textContent = "Network error. Please email nnamdis.space@gmail.com directly.";
      feedback.className = "form-feedback error";
    }
  });
}
