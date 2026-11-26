// Chan – page logic. Reads the data from data.js.
// Each page sets <body data-page="..."> so the right function runs.

const STORAGE_KEY = "chanSelection";
const THEME_KEY = "chanTheme";

// ---------- small helpers ----------
function nameOf(list, id) {
  const item = list.find((x) => x.id === id);
  return item ? item.name : id;
}

function universitiesOf(major) {
  return major.universities
    .map((id) => UNIVERSITIES.find((u) => u.id === id))
    .filter(Boolean);
}

function majorsOf(university) {
  return MAJORS.filter((m) => m.universities.includes(university.id));
}

// ---------- light / dark mode ----------
function initTheme() {
  const button = document.getElementById("theme-toggle");
  if (!button) return;
  const root = document.documentElement;

  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) {
    // storage can be blocked; the theme then follows the device setting
  }

  function currentTheme() {
    const set = root.getAttribute("data-theme");
    if (set) return set;
    const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return dark ? "dark" : "light";
  }

  function updateLabel() {
    button.textContent = currentTheme() === "dark" ? "Light mode" : "Dark mode";
  }

  button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      // ignore
    }
    updateLabel();
  });
  updateLabel();
}

// ---------- Find My Major page ----------
function buildCheckboxes(containerId, items, groupName) {
  const container = document.getElementById(containerId);
  container.innerHTML = items
    .map(
      (item) => `
      <label class="chip">
        <input type="checkbox" name="${groupName}" value="${item.id}">
        <span>${item.name}</span>
      </label>`
    )
    .join("");
}

function initFind() {
  buildCheckboxes("subjects-list", SUBJECTS, "subject");
  buildCheckboxes("interests-list", INTERESTS, "interest");

  const form = document.getElementById("find-form");
  const errorBox = document.getElementById("error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const subjects = [...form.querySelectorAll('input[name="subject"]:checked')].map((i) => i.value);
    const interests = [...form.querySelectorAll('input[name="interest"]:checked')].map((i) => i.value);

    if (subjects.length === 0 && interests.length === 0) {
      errorBox.textContent = "Please choose at least one subject or interest.";
      errorBox.hidden = false;
      return;
    }
    errorBox.hidden = true;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ subjects, interests }));
    } catch (e) {
      // storage can be blocked; the Results page then asks the user to choose again
    }
    window.location.href = "results.html";
  });
}

// ---------- Results page ----------
function rankMajors(selection) {
  return MAJORS.map((major) => {
    const matchedSubjects = major.subjects.filter((s) => selection.subjects.includes(s));
    const matchedInterests = major.interests.filter((i) => selection.interests.includes(i));
    return { major, matchedSubjects, matchedInterests, score: matchedSubjects.length + matchedInterests.length };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.major.name.localeCompare(b.major.name));
}

function initResults() {
  const box = document.getElementById("results");
  let selection = null;
  try {
    selection = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  } catch (e) {
    selection = null;
  }

  if (!selection) {
    box.innerHTML = '<p>You have not chosen anything yet. <a href="find.html">Go to Find My Major</a>.</p>';
    return;
  }

  const ranked = rankMajors(selection);
  const total = selection.subjects.length + selection.interests.length;

  document.getElementById("summary").textContent =
    `You chose ${selection.subjects.length} subject(s) and ${selection.interests.length} interest(s).`;

  if (ranked.length === 0) {
    box.innerHTML = '<p>No majors matched your choices. <a href="find.html">Try different choices</a>.</p>';
    return;
  }

  box.innerHTML = ranked
    .map((r) => {
      const tags = [
        ...r.matchedSubjects.map((id) => `<span class="tag">${nameOf(SUBJECTS, id)}</span>`),
        ...r.matchedInterests.map((id) => `<span class="tag tag-interest">${nameOf(INTERESTS, id)}</span>`)
      ].join(" ");
      const unis = universitiesOf(r.major);
      const uniText = unis.length ? unis.map((u) => u.name).join(", ") : "None added yet";
      return `
        <article class="card">
          <h3>${r.major.name}</h3>
          <p class="score">${r.score} of your ${total} choices match</p>
          <p>${r.major.tagline}</p>
          <p><strong>Why it matched:</strong> ${tags}</p>
          <p><strong>Offered at:</strong> ${uniText}</p>
          <p class="card-links">
            <a href="majors.html#${r.major.id}">Read the full overview</a>
            <a href="universities.html#${r.major.id}">See universities</a>
          </p>
        </article>`;
    })
    .join("");
}

// ---------- Majors page ----------
function auppBox(m) {
  if (!m.aupp) return "";
  const a = m.aupp;
  return `
        <div class="aupp-box">
          <h4>At AUPP</h4>
          <p><strong>${a.faculty}</strong></p>
          <p>${a.degree}</p>
          ${a.credits ? `<p>Total credits: ${a.credits}</p>` : ""}
          ${a.concentrations ? `<p>Concentrations: ${a.concentrations.join(", ")}</p>` : ""}
          <p><a href="${a.url}" target="_blank" rel="noopener">AUPP program page</a></p>
        </div>`;
}

function majorCard(m) {
  const requires = m.requires
    .map((r) => `<li><strong>${r.name}</strong> – ${r.note}</li>`)
    .join("");
  return `
    <details class="major" id="${m.id}">
      <summary>
        <span class="major-head">
          <span class="major-name">${m.name}</span>
          <span class="muted">${m.tagline}</span>
        </span>
      </summary>
      <div class="major-body">
        <h4>What it is</h4>
        <p>${m.overview}</p>

        <h4>What you will study</h4>
        <ul>${m.covers.map((c) => `<li>${c}</li>`).join("")}</ul>

        <h4>What you will need to take</h4>
        <ul>${requires}</ul>

        <h4>Skills that help</h4>
        <p>${m.skills.map((s) => `<span class="tag">${s}</span>`).join(" ")}</p>

        <h4>Possible careers</h4>
        <p>${m.careers.join(", ")}</p>

        <h4>A good fit if&hellip;</h4>
        <p>${m.fit}</p>
        ${auppBox(m)}
        <p class="card-links"><a href="universities.html#${m.id}">Where can I study this?</a></p>
      </div>
    </details>`;
}

function initMajors() {
  const list = document.getElementById("majors-list");
  const search = document.getElementById("search");

  function openFromHash() {
    const id = window.location.hash.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      target.scrollIntoView();
    }
  }

  function render() {
    const text = search.value.trim().toLowerCase();
    const shown = MAJORS.filter(
      (m) => m.name.toLowerCase().includes(text) || m.tagline.toLowerCase().includes(text)
    );
    if (shown.length === 0) {
      list.innerHTML = "<p>No majors match your search.</p>";
      return;
    }
    list.innerHTML = shown.map(majorCard).join("");
  }

  search.addEventListener("input", render);
  window.addEventListener("hashchange", openFromHash);
  render();
  openFromHash();
}

// ---------- Universities page ----------
function initUniversities() {
  const list = document.getElementById("uni-list");
  const search = document.getElementById("search");
  const citySelect = document.getElementById("city-filter");
  const majorSelect = document.getElementById("major-filter");

  const cities = [...new Set(UNIVERSITIES.map((u) => u.city))].sort();
  citySelect.innerHTML =
    '<option value="">All cities</option>' + cities.map((c) => `<option>${c}</option>`).join("");
  majorSelect.innerHTML =
    '<option value="">All majors</option>' +
    MAJORS.map((m) => `<option value="${m.id}">${m.name}</option>`).join("");

  // links like universities.html#cs pre-select that major
  const fromHash = window.location.hash.slice(1);
  if (MAJORS.some((m) => m.id === fromHash)) majorSelect.value = fromHash;

  function render() {
    const text = search.value.trim().toLowerCase();
    const city = citySelect.value;
    const major = majorSelect.value;

    const shown = UNIVERSITIES.filter((u) => {
      const offered = majorsOf(u);
      return (
        u.name.toLowerCase().includes(text) &&
        (city === "" || u.city === city) &&
        (major === "" || offered.some((m) => m.id === major))
      );
    });

    if (shown.length === 0) {
      list.innerHTML = "<p>No universities match your filters.</p>";
      return;
    }

    list.innerHTML = shown
      .map((u) => {
        const offered = majorsOf(u);
        const chips = offered.length
          ? offered.map((m) => `<a class="tag" href="majors.html#${m.id}">${m.name}</a>`).join(" ")
          : '<span class="muted">No majors added yet.</span>';
        return `
          <article class="card">
            <h3>${u.name}</h3>
            <p class="muted">${u.city}</p>
            ${u.note ? `<p>${u.note}</p>` : ""}
            ${u.faculties ? `<p><strong>Faculties:</strong> ${u.faculties.join(", ")}</p>` : ""}
            ${u.website ? `<p><a href="${u.website}" target="_blank" rel="noopener">Visit the website</a></p>` : ""}
            <h4>Majors offered</h4>
            <p>${chips}</p>
          </article>`;
      })
      .join("");
  }

  search.addEventListener("input", render);
  citySelect.addEventListener("change", render);
  majorSelect.addEventListener("change", render);
  render();
}

// ---------- start the right code for the page ----------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  const page = document.body.dataset.page;
  if (page === "find") initFind();
  if (page === "results") initResults();
  if (page === "majors") initMajors();
  if (page === "universities") initUniversities();
});
