(function () {
  const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const isHome = page === "" || page === "index.html";
  const WA =
    "https://wa.me/917303397790?text=" +
    encodeURIComponent("Hi ADMA Solar, I want to know about rooftop solar subsidy");

  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");

  if (header) {
    header.className = "site-header" + (isHome ? "" : " solid");
    header.innerHTML = `
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="ADMA Solar home">
          <img src="images/adma-logo.webp" alt="ADMA Solar">
        </a>
        <nav class="nav" aria-label="Primary">
          <a href="index.html" data-page="index.html">Home</a>
          <a href="about.html" data-page="about.html">About Us</a>
          <a href="solutions.html" data-page="solutions.html">Services</a>
          <div class="nav-drop">
            <a href="on-grid.html" data-pages="on-grid.html off-grid.html hybrid.html">Systems</a>
            <div class="nav-drop-menu">
              <a href="on-grid.html">On-Grid Solar</a>
              <a href="off-grid.html">Off-Grid Solar</a>
              <a href="hybrid.html">Hybrid Solar</a>
            </div>
          </div>
          <a href="faq.html" data-page="faq.html">FAQs</a>
          <a href="calculator.html" data-page="calculator.html">Calculator</a>
          <a href="contact.html" data-page="contact.html">Contact</a>
        </nav>
        <div class="header-cta">
          <a class="btn btn-ghost" href="tel:+917303397790">Call +91 73033 97790</a>
          <a class="btn btn-gold" href="calculator.html">Calculate savings</a>
        </div>
        <button class="menu-toggle" type="button" aria-label="Open menu"><span></span></button>
      </div>
      <nav class="mobile-nav" id="mobile-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="solutions.html">Services</a>
        <a href="on-grid.html">On-Grid Solar</a>
        <a href="off-grid.html">Off-Grid Solar</a>
        <a href="hybrid.html">Hybrid Solar</a>
        <a href="faq.html">FAQs</a>
        <a href="calculator.html">Calculator</a>
        <a href="contact.html">Contact</a>
        <a class="btn btn-gold" href="tel:+917303397790">Call +91 73033 97790</a>
      </nav>
    `;
    header.querySelectorAll(".nav a").forEach((a) => {
      const pages = (a.dataset.page || a.dataset.pages || "").split(" ");
      if (pages.includes(page)) a.classList.add("active");
    });
    const toggle = header.querySelector(".menu-toggle");
    const mobile = header.querySelector("#mobile-nav");
    toggle.addEventListener("click", () => mobile.classList.toggle("open"));
    mobile.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mobile.classList.remove("open"))
    );
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    });
  }

  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html"><img src="images/adma-logo.webp" alt="ADMA Solar"></a>
            <p style="margin-top:16px;max-width:32ch">India's rooftop solar partner. N-Type TOPCon systems, PM Surya Ghar subsidy clearance, and 25-year performance care.</p>
            <p style="margin-top:12px"><a href="${WA}">WhatsApp +91 73033 97790</a></p>
          </div>
          <div>
            <h4>Company</h4>
            <p><a href="about.html">About Us</a></p>
            <p><a href="solutions.html">Services & Solutions</a></p>
            <p><a href="faq.html">Solar FAQs (57)</a></p>
            <p><a href="calculator.html">Savings Calculator</a></p>
          </div>
          <div>
            <h4>Systems</h4>
            <p><a href="on-grid.html">On-Grid Solar</a></p>
            <p><a href="off-grid.html">Off-Grid Solar</a></p>
            <p><a href="hybrid.html">Hybrid Solar</a></p>
            <p><a href="solutions.html#residential">Residential rooftop</a></p>
            <p><a href="solutions.html#commercial">Commercial & industrial</a></p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Plot 14, Industrial Area,<br>Ghaziabad, Uttar Pradesh 201001</p>
            <p><a href="tel:+917303397790">+91 73033 97790</a><br>Mon–Sat, 9 AM – 8 PM</p>
            <p><a href="mailto:info@admasolar.in">info@admasolar.in</a><br><a href="mailto:support@admasolar.in">support@admasolar.in</a></p>
          </div>
        </div>
        <div class="legal">
          <span>© <span id="y"></span> ADMA Solar. All rights reserved.</span>
          <span>PM Surya Ghar subsidy subject to MNRE / DISCOM eligibility.</span>
        </div>
      </div>
    `;
    const y = footer.querySelector("#y");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (!document.querySelector(".wa-float")) {
    const wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = WA;
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "WhatsApp ADMA Solar");
    wa.textContent = "WhatsApp";
    document.body.appendChild(wa);
  }

  const SUN = {
    DELHI: 5.0, MAHARASHTRA: 5.2, GUJARAT: 5.5, KARNATAKA: 5.3,
    "TAMIL NADU": 5.3, "UTTAR PRADESH": 5.0, "WEST BENGAL": 4.6, RAJASTHAN: 5.8,
    PUNJAB: 5.1, HARYANA: 5.1, KERALA: 4.8, "TELANGANA / ANDHRA PRADESH": 5.4,
    "MADHYA PRADESH": 5.3, ODISHA: 4.8, ASSAM: 4.4, BIHAR: 4.8, "OTHER STATE": 5.0
  };
  const TARIFF = {
    DELHI: 8, MAHARASHTRA: 10, GUJARAT: 7.5, KARNATAKA: 8.5,
    "TAMIL NADU": 8, "UTTAR PRADESH": 7.5, "WEST BENGAL": 8, RAJASTHAN: 8,
    PUNJAB: 7.5, HARYANA: 7.5, KERALA: 8, "TELANGANA / ANDHRA PRADESH": 9,
    "MADHYA PRADESH": 8, ODISHA: 7, ASSAM: 7.5, BIHAR: 8, "OTHER STATE": 8
  };

  function rupee(n) { return "₹" + Math.round(n).toLocaleString("en-IN"); }
  function capexFor(kw) {
    if (kw <= 1) return 65000 * kw;
    if (kw <= 2) return 65000 + 60000 * (kw - 1);
    if (kw <= 3) return 125000 + 55000 * (kw - 2);
    if (kw <= 5) return 180000 + 57500 * (kw - 3);
    return 295000 + 51000 * (kw - 5);
  }
  function subsidyFor(kw, residential) {
    if (!residential) return 0;
    if (kw <= 1) return 30000 * kw;
    if (kw <= 2) return 30000 + 30000 * (kw - 1);
    if (kw <= 3) return 60000 + 18000 * (kw - 2);
    return 78000;
  }

  function runCalc() {
    const billEl = document.getElementById("bill");
    const stateEl = document.getElementById("state");
    const typeEl = document.getElementById("useType");
    if (!billEl || !document.getElementById("r-kw")) return;
    const bill = Number(billEl.value) || 0;
    const state = stateEl ? stateEl.value : "UTTAR PRADESH";
    const residential = !typeEl || typeEl.value === "residential";
    const sun = SUN[state] || 5;
    const tariff = TARIFF[state] || 8;
    const units = bill / tariff;
    let kw = units / (sun * 30);
    kw = Math.max(1, Math.min(100, Math.round(kw * 2) / 2));
    const monthlyGen = kw * sun * 30;
    const annualSave = monthlyGen * 12 * tariff;
    const sub = subsidyFor(kw, residential);
    const cost = capexFor(kw);
    const net = Math.max(cost - sub, 0);
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set("r-kw", kw.toFixed(1) + " kW");
    set("r-gen", Math.round(monthlyGen).toLocaleString("en-IN") + " units");
    set("r-save", rupee(annualSave));
    set("r-sub", sub ? rupee(sub) : "—");
    set("r-cost", rupee(net));
    set("r-area", Math.round(kw * 90) + " sq ft");
  }

  window.admaCalculate = function (ev) {
    if (ev) ev.preventDefault();
    runCalc();
    const out = document.getElementById("calc-out");
    if (out) out.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return false;
  };

  ["bill", "state", "useType"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", runCalc);
    if (el) el.addEventListener("change", runCalc);
  });
  if (document.getElementById("r-kw")) runCalc();

  const form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const body = encodeURIComponent(
        `Name: ${d.get("name") || ""}\nPhone: ${d.get("phone") || ""}\nEmail: ${d.get("email") || ""}\nCity: ${d.get("city") || ""}\nRequirement: ${d.get("kind") || ""}\n\n${d.get("message") || ""}`
      );
      window.location.href =
        "mailto:info@admasolar.in?subject=" +
        encodeURIComponent("ADMA Solar enquiry — " + (d.get("name") || "")) +
        "&body=" +
        body;
      const ok = document.getElementById("form-success");
      if (ok) ok.classList.add("show");
      form.reset();
    });
  }
})();
