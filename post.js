let currentLang = "en";

const posts = [
  {
    id: 1,
    title: {
      en: "first entry",
      tr: "ilk kayıt",
      pl: "pierwszy wpis"
    },
    date: "2025-12-30",
    mood: "numb",
    tags: ["existence", "silence"],
    excerpt: {
      en: "sometimes existing is enough.",
      tr: "bazen var olmak yeterlidir.",
      pl: "czasem samo istnienie wystarczy."
    }
  },
  {
    id: 2,
    title: {
      en: "untitled",
      tr: "isimsiz",
      pl: "bez tytułu"
    },
    date: "2026-01-02",
    mood: "detached",
    tags: ["memory", "fog"],
    excerpt: {
      en: "i remember less, but feel heavier.",
      tr: "daha az hatırlıyorum ama daha ağır hissediyorum.",
      pl: "pamiętam mniej, ale czuję więcej."
    }
  }
];

/* -------- DATE -------- */

function daysAgo(date) {
  const now = new Date();
  const then = new Date(date);
  return Math.floor((now - then) / 86400000);
}

/* -------- LANGUAGE -------- */

function setLang(lang) {
  currentLang = lang;
  document.getElementById("language-overlay").style.display = "none";
  renderAll();
}

/* -------- RENDER -------- */

function renderAll() {
  renderPosts();
  renderRecent();
  renderTags();
  lastUpdated();
}

function renderPosts(filterTag = null) {
  const container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach(p => {
    if (filterTag && !p.tags.includes(filterTag)) return;

    document.body.className = `fade-in mood-${p.mood}`;

    const div = document.createElement("div");
    div.className = "post-preview";

    div.innerHTML = `
      <div class="post-meta">
        ${daysAgo(p.date)} days ago · <span class="mood">${p.mood}</span>
      </div>
      <h2><a href="post${p.id}.html">${p.title[currentLang]}</a></h2>
      <p>${p.excerpt[currentLang]}</p>
      <div class="tags">
        ${p.tags.map(t => `<span onclick="renderPosts('${t}')">#${t}</span>`).join("")}
      </div>
    `;

    container.appendChild(div);
  });
}

function renderRecent() {
  const list = document.getElementById("recent");
  list.innerHTML = "";

  posts.slice(0, 5).forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="post${p.id}.html">${p.title[currentLang]}</a>`;
    list.appendChild(li);
  });
}

function renderTags() {
  const box = document.getElementById("tagFilter");
  box.innerHTML = "";

  [...new Set(posts.flatMap(p => p.tags))].forEach(tag => {
    const span = document.createElement("span");
    span.innerText = `#${tag} `;
    span.onclick = () => renderPosts(tag);
    box.appendChild(span);
  });
}

function lastUpdated() {
  const latest = posts.reduce((a, b) =>
    new Date(a.date) > new Date(b.date) ? a : b
  );
  document.getElementById("lastUpdated").innerText =
    `${daysAgo(latest.date)} days ago`;
}

/* -------- INIT -------- */

renderAll();
