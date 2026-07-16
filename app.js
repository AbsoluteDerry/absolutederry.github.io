(() => {
  "use strict";

  const content = window.DERRY_CONTENT;
  const view = document.getElementById("view");
  const dialog = document.getElementById("post-dialog");
  const dialogContent = document.getElementById("dialog-content");
  const closeDialogButton = document.querySelector(".dialog-close");
  const languageGate = document.getElementById("language-gate");
  const supportedLanguages = ["en", "tr", "pl"];
  const localeMap = { en: "en-GB", tr: "tr-TR", pl: "pl-PL" };
  const storedLanguage = localStorage.getItem("absolute-derry-language");
  let currentLanguage = supportedLanguages.includes(storedLanguage) ? storedLanguage : "en";

  const translations = {
    en: {
      skipToContent: "skip to content",
      systemMessage: "personal archive mounted read-only",
      heroEyebrow: "WELCOME TO MY CORNER OF THE OLD WEB",
      heroTaglineA: "existing, not living",
      heroTaglineB: "observing, not participating",
      archive: "ARCHIVE",
      online: "ONLINE",
      navHome: "home",
      navJournal: "journal",
      navPhotos: "photos",
      navPhotography: "photography",
      navLinux: "linux",
      navLinuxSystems: "linux / systems",
      navMedia: "media",
      navGamesFilms: "games + films",
      navCharacters: "characters",
      navFictionalSelves: "fictional selves",
      navMusic: "music",
      navLinks: "links",
      navProjects: "projects",
      navNow: "now",
      navAbout: "about",
      profileName: "name",
      profileLanguages: "languages",
      profileLocation: "location",
      profileOccupation: "occupation",
      profileOccupationValue: "game design student",
      statusLabel: "status:",
      allLinks: "all links →",
      moodLabel: "mood",
      playingLabel: "playing",
      localTimeLabel: "local time",
      visitsLabel: "visits here",
      onThisDevice: "on this device",
      openNowPage: "open now page →",
      musicArchive: "music archive →",
      randomDescription: "open a random fragment from the journal.",
      randomPost: "random entry ↝",
      footerMain: "Hand-coded. No feed. No algorithm. No expiration date.",
      footerNote: "best experienced alone, after midnight, with headphones.",
      routeHome: "home",
      routeJournal: "journal",
      routePhotos: "photography",
      routeLinux: "linux / systems",
      routeMedia: "games + films",
      routeCharacters: "fictional selves",
      routeMusic: "music room",
      routeLinks: "links",
      routeProjects: "projects",
      routeNow: "now",
      routeAbout: "about",
      subtitleHome: "a personal archive for things that do not belong in a feed.",
      subtitleJournal: "dated fragments, unfinished thoughts and records of being here.",
      subtitlePhotos: "the city after people stop looking at it.",
      subtitleLinux: "the machines i use, rebuild and occasionally break.",
      subtitleMedia: "stories, rooms and images that stayed after the screen went dark.",
      subtitleCharacters: "characters are sometimes mirrors with better lighting.",
      subtitleMusic: "one song for today, older songs kept like dated memories.",
      subtitleLinks: "doors leading to the other places where i exist online.",
      subtitleProjects: "things i am building instead of sleeping.",
      subtitleNow: "a small snapshot of what is happening in my life right now.",
      subtitleAbout: "this is not an introduction. it is a positioning.",
      readMeFirst: "read_me_first.txt",
      roomNotFeed: "this is not a feed. this is a room.",
      manifesto: "I keep photographs, operating systems, games, films, unfinished thoughts, music and fictional people here. Nothing is ranked. Nothing is optimised. Things appear because they mattered to me.",
      latestTransmission: "latest transmission",
      viewFullJournal: "view full journal",
      recentFragments: "recent fragments",
      roomsInArchive: "rooms in the archive",
      portalPhotography: "night streets, monuments, witnesses",
      portalLinux: "machines made personal",
      portalMedia: "horror, ruins, memory",
      portalCharacters: "people i recognise from inside",
      portalMusic: "a daily track and its remains",
      portalLinks: "the rest of my internet",
      openEntry: "open entry",
      moodPrefix: "mood:",
      searchArchive: "search archive",
      searchPlaceholder: "type a title, mood or word...",
      allTag: "#all",
      nothingFound: "nothing found",
      noMatchingFragment: "the archive has no matching fragment.",
      uploadNote: "upload note:",
      uploadPhotoHelp: "put your images inside assets/photos/, then write the file path in content.js.",
      gameDiary: "game diary",
      filmDiary: "film diary",
      records: "records",
      openProject: "open project",
      privateNotLinked: "private / not linked",
      recentGithub: "recent github repositories",
      githubProfile: "github profile ↗",
      contactingGithub: "contacting github api...",
      githubUnavailable: "GitHub could not be reached right now. The hand-written project cards above still work.",
      noDescription: "no description written yet.",
      dailyTransmission: "daily transmission",
      playerSpotifyHelp: "Spotify mode is active. Change spotifyEmbedUrl in content.js whenever you want a different daily song.",
      playerMp3Help: "MP3 mode is active. Put the file in assets/music/ and set mp3Src in content.js.",
      musicHistory: "song archive",
      noLink: "link not added yet",
      visit: "visit",
      linkInstructionsTitle: "editing links",
      linkInstructions: "Open content.js and edit linkCategories. Empty URL fields appear as disabled placeholders until you add your real links.",
      currentSnapshot: "current_snapshot.txt",
      watchingLabel: "watching",
      readingLabel: "reading",
      workingOnLabel: "working on",
      lastUpdatedLabel: "last updated",
      siteChangelog: "site changelog",
      aboutExisting: "existing, not living",
      aboutParagraph1: "I am Derin, also known online as AbsoluteDerry. I study Game Design and Development, photograph cities at night, rebuild computers until they feel like mine, and collect stories that turn loneliness into architecture.",
      aboutWhy: "why this place exists",
      aboutParagraph2: "Platforms flatten people into profiles and posts into units of attention. A personal website can still have rooms, dead ends, unfinished walls and objects that exist without asking to be promoted.",
      aboutWhat: "what belongs here",
      aboutParagraph3: "Linux notes. Operating systems. Photographs. Games and films. Music. Links. Fictional characters I recognise myself in. Development projects. Diary entries that may not make sense later.",
      aboutQuote: "this site exists as an archive. not a performance. not a brand.",
      colophon: "Built with plain HTML, CSS and JavaScript. Hosted on GitHub Pages. No framework, analytics, advertisements or tracking scripts.",
      journalEntry: "journal entry",
      closePost: "Close post",
      unknownSong: "untitled song",
      listen: "listen ↗"
    },
    tr: {
      skipToContent: "içeriğe geç",
      systemMessage: "kişisel arşiv salt okunur olarak bağlandı",
      heroEyebrow: "ESKİ İNTERNETTEKİ KÖŞEME HOŞ GELDİN",
      heroTaglineA: "yaşamak değil, var olmak",
      heroTaglineB: "katılmak değil, izlemek",
      archive: "ARŞİV",
      online: "ÇEVRİMİÇİ",
      navHome: "ana sayfa",
      navJournal: "günlük",
      navPhotos: "fotoğraflar",
      navPhotography: "fotoğrafçılık",
      navLinux: "linux",
      navLinuxSystems: "linux / sistemler",
      navMedia: "medya",
      navGamesFilms: "oyunlar + filmler",
      navCharacters: "karakterler",
      navFictionalSelves: "kurgusal benlikler",
      navMusic: "müzik",
      navLinks: "bağlantılar",
      navProjects: "projeler",
      navNow: "şimdi",
      navAbout: "hakkımda",
      profileName: "isim",
      profileLanguages: "diller",
      profileLocation: "konum",
      profileOccupation: "uğraş",
      profileOccupationValue: "oyun tasarımı öğrencisi",
      statusLabel: "durum:",
      allLinks: "tüm bağlantılar →",
      moodLabel: "ruh hâli",
      playingLabel: "oynuyorum",
      localTimeLabel: "yerel saat",
      visitsLabel: "buradaki ziyaret",
      onThisDevice: "bu cihazda",
      openNowPage: "şimdi sayfasını aç →",
      musicArchive: "müzik arşivi →",
      randomDescription: "günlükten rastgele bir parça aç.",
      randomPost: "rastgele kayıt ↝",
      footerMain: "Elle kodlandı. Akış yok. Algoritma yok. Son kullanma tarihi yok.",
      footerNote: "en iyi gece yarısından sonra, yalnız ve kulaklıkla deneyimlenir.",
      routeHome: "ana sayfa",
      routeJournal: "günlük",
      routePhotos: "fotoğrafçılık",
      routeLinux: "linux / sistemler",
      routeMedia: "oyunlar + filmler",
      routeCharacters: "kurgusal benlikler",
      routeMusic: "müzik odası",
      routeLinks: "bağlantılar",
      routeProjects: "projeler",
      routeNow: "şimdi",
      routeAbout: "hakkımda",
      subtitleHome: "bir akışa ait olmayan şeyler için kişisel arşiv.",
      subtitleJournal: "tarihli parçalar, yarım düşünceler ve burada oluşumun kayıtları.",
      subtitlePhotos: "insanlar bakmayı bıraktıktan sonraki şehir.",
      subtitleLinux: "kullandığım, yeniden kurduğum ve bazen bozduğum makineler.",
      subtitleMedia: "ekran karardıktan sonra kalan hikâyeler, odalar ve görüntüler.",
      subtitleCharacters: "karakterler bazen daha iyi aydınlatılmış aynalardır.",
      subtitleMusic: "bugün için bir şarkı, tarihli anılar gibi saklanan eskiler.",
      subtitleLinks: "internette var olduğum diğer yerlere açılan kapılar.",
      subtitleProjects: "uyumak yerine geliştirdiğim şeyler.",
      subtitleNow: "şu anda hayatımda olanların küçük bir görüntüsü.",
      subtitleAbout: "bu bir tanışma değil. bir konumlandırma.",
      readMeFirst: "önce_bunu_oku.txt",
      roomNotFeed: "burası bir akış değil. bir oda.",
      manifesto: "Fotoğrafları, işletim sistemlerini, oyunları, filmleri, yarım düşünceleri, müziği ve kurgusal insanları burada tutuyorum. Hiçbir şey sıralanmıyor. Hiçbir şey optimize edilmiyor. Şeyler yalnızca benim için önemli oldukları için burada.",
      latestTransmission: "son yayın",
      viewFullJournal: "tüm günlüğü gör",
      recentFragments: "yakın parçalar",
      roomsInArchive: "arşivdeki odalar",
      portalPhotography: "gece sokakları, anıtlar, tanıklar",
      portalLinux: "kişiselleştirilmiş makineler",
      portalMedia: "korku, harabeler, hafıza",
      portalCharacters: "içimde tanıdığım insanlar",
      portalMusic: "günlük bir şarkı ve kalıntıları",
      portalLinks: "internetimin geri kalanı",
      openEntry: "kaydı aç",
      moodPrefix: "ruh hâli:",
      searchArchive: "arşivde ara",
      searchPlaceholder: "başlık, ruh hâli veya kelime yaz...",
      allTag: "#tümü",
      nothingFound: "hiçbir şey bulunamadı",
      noMatchingFragment: "arşivde eşleşen bir parça yok.",
      uploadNote: "yükleme notu:",
      uploadPhotoHelp: "fotoğraflarını assets/photos/ içine koy ve dosya yolunu content.js içine yaz.",
      gameDiary: "oyun günlüğü",
      filmDiary: "film günlüğü",
      records: "kayıt",
      openProject: "projeyi aç",
      privateNotLinked: "özel / bağlantı yok",
      recentGithub: "son GitHub repoları",
      githubProfile: "GitHub profili ↗",
      contactingGithub: "GitHub API ile bağlantı kuruluyor...",
      githubUnavailable: "Şu anda GitHub'a ulaşılamadı. Yukarıdaki elle yazılmış proje kartları hâlâ çalışıyor.",
      noDescription: "henüz açıklama yazılmadı.",
      dailyTransmission: "günün yayını",
      playerSpotifyHelp: "Spotify modu aktif. Günlük şarkıyı değiştirmek için content.js içindeki spotifyEmbedUrl değerini değiştir.",
      playerMp3Help: "MP3 modu aktif. Dosyayı assets/music/ içine koy ve content.js içindeki mp3Src değerini ayarla.",
      musicHistory: "şarkı arşivi",
      noLink: "bağlantı henüz eklenmedi",
      visit: "ziyaret et",
      linkInstructionsTitle: "bağlantıları düzenlemek",
      linkInstructions: "content.js dosyasını açıp linkCategories alanını düzenle. URL alanı boş olanlar gerçek bağlantını ekleyene kadar devre dışı görünür.",
      currentSnapshot: "mevcut_durum.txt",
      watchingLabel: "izliyorum",
      readingLabel: "okuyorum",
      workingOnLabel: "üzerinde çalışıyorum",
      lastUpdatedLabel: "son güncelleme",
      siteChangelog: "site değişiklik günlüğü",
      aboutExisting: "yaşamak değil, var olmak",
      aboutParagraph1: "Ben Derin; internette AbsoluteDerry olarak da biliniyorum. Oyun Tasarımı ve Geliştirme okuyorum, geceleri şehirlerin fotoğrafını çekiyorum, bilgisayarları bana ait hissedene kadar yeniden kuruyorum ve yalnızlığı mimariye dönüştüren hikâyeleri topluyorum.",
      aboutWhy: "burası neden var",
      aboutParagraph2: "Platformlar insanları profillere, gönderileri dikkat birimlerine dönüştürüyor. Kişisel bir web sitesinin hâlâ odaları, çıkmazları, tamamlanmamış duvarları ve öne çıkarılmayı istemeden var olan nesneleri olabilir.",
      aboutWhat: "buraya ait olanlar",
      aboutParagraph3: "Linux notları. İşletim sistemleri. Fotoğraflar. Oyunlar ve filmler. Müzik. Bağlantılar. Kendimi gördüğüm kurgusal karakterler. Geliştirme projeleri. Daha sonra anlam ifade etmeyebilecek günlük kayıtları.",
      aboutQuote: "bu site bir arşiv olarak var. gösteri değil. marka değil.",
      colophon: "Düz HTML, CSS ve JavaScript ile yapıldı. GitHub Pages üzerinde barındırılıyor. Framework, analiz, reklam veya takip kodu yok.",
      journalEntry: "günlük kaydı",
      closePost: "Kaydı kapat",
      unknownSong: "isimsiz şarkı",
      listen: "dinle ↗"
    },
    pl: {
      skipToContent: "przejdź do treści",
      systemMessage: "osobiste archiwum zamontowane tylko do odczytu",
      heroEyebrow: "WITAJ W MOIM ZAKĄTKU STAREGO INTERNETU",
      heroTaglineA: "istnieć, nie żyć",
      heroTaglineB: "obserwować, nie uczestniczyć",
      archive: "ARCHIWUM",
      online: "ONLINE",
      navHome: "strona główna",
      navJournal: "dziennik",
      navPhotos: "zdjęcia",
      navPhotography: "fotografia",
      navLinux: "linux",
      navLinuxSystems: "linux / systemy",
      navMedia: "media",
      navGamesFilms: "gry + filmy",
      navCharacters: "postacie",
      navFictionalSelves: "fikcyjne jaźnie",
      navMusic: "muzyka",
      navLinks: "linki",
      navProjects: "projekty",
      navNow: "teraz",
      navAbout: "o mnie",
      profileName: "imię",
      profileLanguages: "języki",
      profileLocation: "lokalizacja",
      profileOccupation: "zajęcie",
      profileOccupationValue: "studentka projektowania gier",
      statusLabel: "status:",
      allLinks: "wszystkie linki →",
      moodLabel: "nastrój",
      playingLabel: "gram",
      localTimeLabel: "czas lokalny",
      visitsLabel: "wizyty tutaj",
      onThisDevice: "na tym urządzeniu",
      openNowPage: "otwórz stronę teraz →",
      musicArchive: "archiwum muzyki →",
      randomDescription: "otwórz losowy fragment dziennika.",
      randomPost: "losowy wpis ↝",
      footerMain: "Kodowane ręcznie. Bez feedu. Bez algorytmu. Bez daty ważności.",
      footerNote: "najlepiej doświadczać samotnie, po północy, w słuchawkach.",
      routeHome: "strona główna",
      routeJournal: "dziennik",
      routePhotos: "fotografia",
      routeLinux: "linux / systemy",
      routeMedia: "gry + filmy",
      routeCharacters: "fikcyjne jaźnie",
      routeMusic: "pokój muzyczny",
      routeLinks: "linki",
      routeProjects: "projekty",
      routeNow: "teraz",
      routeAbout: "o mnie",
      subtitleHome: "osobiste archiwum dla rzeczy, które nie należą do feedu.",
      subtitleJournal: "datowane fragmenty, niedokończone myśli i zapisy obecności.",
      subtitlePhotos: "miasto po tym, jak ludzie przestają na nie patrzeć.",
      subtitleLinux: "maszyny, których używam, przebudowuję i czasami psuję.",
      subtitleMedia: "historie, pokoje i obrazy pozostałe po zgaśnięciu ekranu.",
      subtitleCharacters: "postacie są czasem lustrami z lepszym światłem.",
      subtitleMusic: "jedna piosenka na dziś, starsze zachowane jak datowane wspomnienia.",
      subtitleLinks: "drzwi do innych miejsc, w których istnieję w internecie.",
      subtitleProjects: "rzeczy, które buduję zamiast spać.",
      subtitleNow: "mały obraz tego, co dzieje się teraz w moim życiu.",
      subtitleAbout: "to nie przedstawienie się. to określenie pozycji.",
      readMeFirst: "przeczytaj_najpierw.txt",
      roomNotFeed: "to nie jest feed. to jest pokój.",
      manifesto: "Trzymam tu fotografie, systemy operacyjne, gry, filmy, niedokończone myśli, muzykę i fikcyjne postacie. Nic nie jest rankingowane ani optymalizowane. Rzeczy pojawiają się, ponieważ były dla mnie ważne.",
      latestTransmission: "najnowsza transmisja",
      viewFullJournal: "zobacz cały dziennik",
      recentFragments: "ostatnie fragmenty",
      roomsInArchive: "pokoje w archiwum",
      portalPhotography: "nocne ulice, pomniki, świadkowie",
      portalLinux: "maszyny uczynione osobistymi",
      portalMedia: "horror, ruiny, pamięć",
      portalCharacters: "ludzie rozpoznani od środka",
      portalMusic: "codzienny utwór i jego pozostałości",
      portalLinks: "reszta mojego internetu",
      openEntry: "otwórz wpis",
      moodPrefix: "nastrój:",
      searchArchive: "przeszukaj archiwum",
      searchPlaceholder: "wpisz tytuł, nastrój lub słowo...",
      allTag: "#wszystko",
      nothingFound: "nic nie znaleziono",
      noMatchingFragment: "archiwum nie ma pasującego fragmentu.",
      uploadNote: "informacja o przesyłaniu:",
      uploadPhotoHelp: "umieść zdjęcia w assets/photos/, a następnie wpisz ścieżkę pliku w content.js.",
      gameDiary: "dziennik gier",
      filmDiary: "dziennik filmów",
      records: "wpisów",
      openProject: "otwórz projekt",
      privateNotLinked: "prywatne / bez linku",
      recentGithub: "ostatnie repozytoria GitHub",
      githubProfile: "profil GitHub ↗",
      contactingGithub: "łączenie z GitHub API...",
      githubUnavailable: "Nie można teraz połączyć się z GitHubem. Ręcznie napisane karty projektów powyżej nadal działają.",
      noDescription: "brak opisu.",
      dailyTransmission: "dzisiejsza transmisja",
      playerSpotifyHelp: "Aktywny jest tryb Spotify. Zmień spotifyEmbedUrl w content.js, aby ustawić inną piosenkę dnia.",
      playerMp3Help: "Aktywny jest tryb MP3. Umieść plik w assets/music/ i ustaw mp3Src w content.js.",
      musicHistory: "archiwum piosenek",
      noLink: "link nie został jeszcze dodany",
      visit: "odwiedź",
      linkInstructionsTitle: "edycja linków",
      linkInstructions: "Otwórz content.js i edytuj linkCategories. Puste pola URL są wyświetlane jako nieaktywne, dopóki nie dodasz prawdziwych linków.",
      currentSnapshot: "aktualny_stan.txt",
      watchingLabel: "oglądam",
      readingLabel: "czytam",
      workingOnLabel: "pracuję nad",
      lastUpdatedLabel: "ostatnia aktualizacja",
      siteChangelog: "dziennik zmian strony",
      aboutExisting: "istnieć, nie żyć",
      aboutParagraph1: "Jestem Derin, w internecie znana również jako AbsoluteDerry. Studiuję projektowanie i tworzenie gier, fotografuję miasta nocą, przebudowuję komputery, aż zaczną być moje, i zbieram historie zamieniające samotność w architekturę.",
      aboutWhy: "dlaczego to miejsce istnieje",
      aboutParagraph2: "Platformy spłaszczają ludzi do profili, a wpisy do jednostek uwagi. Osobista strona nadal może mieć pokoje, ślepe zaułki, niedokończone ściany i przedmioty istniejące bez potrzeby promocji.",
      aboutWhat: "co tu należy",
      aboutParagraph3: "Notatki o Linuksie. Systemy operacyjne. Fotografie. Gry i filmy. Muzyka. Linki. Fikcyjne postacie, w których rozpoznaję siebie. Projekty. Wpisy, które później mogą nie mieć sensu.",
      aboutQuote: "ta strona istnieje jako archiwum. nie przedstawienie. nie marka.",
      colophon: "Zbudowano w czystym HTML, CSS i JavaScript. Hostowane na GitHub Pages. Bez frameworków, analityki, reklam i skryptów śledzących.",
      journalEntry: "wpis dziennika",
      closePost: "Zamknij wpis",
      unknownSong: "utwór bez tytułu",
      listen: "posłuchaj ↗"
    }
  };

  const routeConfig = {
    home: ["routeHome", "subtitleHome"],
    journal: ["routeJournal", "subtitleJournal"],
    photos: ["routePhotos", "subtitlePhotos"],
    linux: ["routeLinux", "subtitleLinux"],
    media: ["routeMedia", "subtitleMedia"],
    characters: ["routeCharacters", "subtitleCharacters"],
    music: ["routeMusic", "subtitleMusic"],
    links: ["routeLinks", "subtitleLinks"],
    projects: ["routeProjects", "subtitleProjects"],
    now: ["routeNow", "subtitleNow"],
    about: ["routeAbout", "subtitleAbout"]
  };

  function t(key, replacements = {}) {
    let value = translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
    Object.entries(replacements).forEach(([name, replacement]) => {
      value = value.replaceAll(`{${name}}`, String(replacement));
    });
    return value;
  }

  function localize(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[currentLanguage] ?? value.en ?? Object.values(value)[0] ?? "";
    }
    return value ?? "";
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function formatDate(dateString) {
    return new Intl.DateTimeFormat(localeMap[currentLanguage], {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }).format(new Date(`${dateString}T12:00:00`));
  }

  function relativeDate(dateString) {
    const target = new Date(`${dateString}T12:00:00`);
    const now = new Date();
    const difference = Math.round((target - now) / 86400000);
    return new Intl.RelativeTimeFormat(localeMap[currentLanguage], { numeric: "auto" }).format(difference, "day");
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLanguage;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.getElementById("profile-status").textContent = localize(content.profile.status);
    closeDialogButton.setAttribute("aria-label", t("closePost"));
  }

  function renderMiniLinks() {
    const container = document.getElementById("mini-links-list");
    const linkedItems = content.linkCategories.flatMap((category) => category.items).filter((item) => item.url).slice(0, 4);
    container.innerHTML = linkedItems.map((item) => `
      <a href="${escapeHtml(item.url)}" rel="me noopener" target="_blank">${escapeHtml(item.label)}</a>
    `).join("");
  }

  function renderSidebarWidgets() {
    document.getElementById("now-mood").textContent = localize(content.now.mood);
    document.getElementById("now-playing").textContent = content.now.playing || "—";
    document.getElementById("obsessions-list").innerHTML = content.now.obsessions
      .map((item) => `<li>${escapeHtml(localize(item))}</li>`)
      .join("");
    document.getElementById("sidebar-music").innerHTML = renderMusicPlayer(content.dailyMusic, true);
    renderMiniLinks();
  }

  function routeButtonState(route) {
    document.querySelectorAll("[data-view]").forEach((button) => {
      const isActive = button.dataset.view === route;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-current", isActive ? "page" : "false");
    });
  }

  function pageHeader(route) {
    const [titleKey, subtitleKey] = routeConfig[route];
    const title = t(titleKey);
    return `
      <header class="content-header panel">
        <p class="eyebrow">/home/derry/${escapeHtml(route)}</p>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(t(subtitleKey))}</p>
      </header>
    `;
  }

  function postCard(post, featured = false) {
    return `
      <article class="panel post-card ${featured ? "post-card--featured" : ""}" data-mood="${escapeHtml(post.id)}">
        <div class="post-card__meta">
          <time datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
          <span>${escapeHtml(relativeDate(post.date))}</span>
          <span class="mood-chip">${escapeHtml(t("moodPrefix"))} ${escapeHtml(localize(post.mood))}</span>
        </div>
        <h3>${escapeHtml(localize(post.title))}</h3>
        <p>${escapeHtml(localize(post.excerpt))}</p>
        <div class="tag-row">${post.tags.map((tag) => `<button type="button" class="tag" data-tag="${escapeHtml(tag)}">#${escapeHtml(tag)}</button>`).join("")}</div>
        <button class="read-more" type="button" data-post="${escapeHtml(post.id)}">${escapeHtml(t("openEntry"))} <span aria-hidden="true">→</span></button>
      </article>
    `;
  }

  function renderHome() {
    const latest = content.posts[0];
    const recent = content.posts.slice(1, 3);
    view.innerHTML = `
      ${pageHeader("home")}
      <section class="panel manifesto">
        <div class="panel-title">${escapeHtml(t("readMeFirst"))}</div>
        <p class="manifesto__lead">${escapeHtml(t("roomNotFeed"))}</p>
        <p>${escapeHtml(t("manifesto"))}</p>
      </section>
      <section class="section-block">
        <div class="section-heading">
          <h2>${escapeHtml(t("latestTransmission"))}</h2>
          <button type="button" data-view="journal">${escapeHtml(t("viewFullJournal"))}</button>
        </div>
        ${postCard(latest, true)}
      </section>
      <section class="section-block">
        <div class="section-heading"><h2>${escapeHtml(t("recentFragments"))}</h2></div>
        <div class="card-grid card-grid--two">${recent.map((post) => postCard(post)).join("")}</div>
      </section>
      <section class="section-block">
        <div class="section-heading"><h2>${escapeHtml(t("roomsInArchive"))}</h2></div>
        <div class="portal-grid">
          <button class="portal panel" type="button" data-view="photos"><span>01</span><strong>${escapeHtml(t("routePhotos"))}</strong><small>${escapeHtml(t("portalPhotography"))}</small></button>
          <button class="portal panel" type="button" data-view="linux"><span>02</span><strong>${escapeHtml(t("routeLinux"))}</strong><small>${escapeHtml(t("portalLinux"))}</small></button>
          <button class="portal panel" type="button" data-view="media"><span>03</span><strong>${escapeHtml(t("routeMedia"))}</strong><small>${escapeHtml(t("portalMedia"))}</small></button>
          <button class="portal panel" type="button" data-view="characters"><span>04</span><strong>${escapeHtml(t("routeCharacters"))}</strong><small>${escapeHtml(t("portalCharacters"))}</small></button>
          <button class="portal panel" type="button" data-view="music"><span>05</span><strong>${escapeHtml(t("routeMusic"))}</strong><small>${escapeHtml(t("portalMusic"))}</small></button>
          <button class="portal panel" type="button" data-view="links"><span>06</span><strong>${escapeHtml(t("routeLinks"))}</strong><small>${escapeHtml(t("portalLinks"))}</small></button>
        </div>
      </section>
    `;
  }

  function renderJournal(selectedTag = "") {
    const tags = [...new Set(content.posts.flatMap((post) => post.tags))].sort();
    view.innerHTML = `
      ${pageHeader("journal")}
      <section class="panel journal-tools">
        <label>
          <span>${escapeHtml(t("searchArchive"))}</span>
          <input id="journal-search" type="search" placeholder="${escapeHtml(t("searchPlaceholder"))}" autocomplete="off">
        </label>
        <div class="tag-filter" id="tag-filter">
          <button class="tag ${selectedTag ? "" : "active"}" type="button" data-filter-tag="">${escapeHtml(t("allTag"))}</button>
          ${tags.map((tag) => `<button class="tag ${selectedTag === tag ? "active" : ""}" type="button" data-filter-tag="${escapeHtml(tag)}">#${escapeHtml(tag)}</button>`).join("")}
        </div>
      </section>
      <section id="journal-list" class="journal-list"></section>
    `;

    const search = document.getElementById("journal-search");
    const list = document.getElementById("journal-list");
    let currentTag = selectedTag;

    function updateJournal() {
      const query = search.value.trim().toLocaleLowerCase(localeMap[currentLanguage]);
      const filtered = content.posts.filter((post) => {
        const matchesTag = !currentTag || post.tags.includes(currentTag);
        const searchable = [localize(post.title), localize(post.mood), localize(post.excerpt), ...post.tags, ...post.body.map(localize)].join(" ").toLocaleLowerCase(localeMap[currentLanguage]);
        return matchesTag && searchable.includes(query);
      });
      list.innerHTML = filtered.length
        ? filtered.map((post) => postCard(post)).join("")
        : `<div class="panel empty-state"><h3>${escapeHtml(t("nothingFound"))}</h3><p>${escapeHtml(t("noMatchingFragment"))}</p></div>`;
    }

    search.addEventListener("input", updateJournal);
    document.getElementById("tag-filter").addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter-tag]");
      if (!button) return;
      currentTag = button.dataset.filterTag;
      document.querySelectorAll("[data-filter-tag]").forEach((item) => item.classList.toggle("active", item === button));
      updateJournal();
    });
    updateJournal();
  }

  function photoCard(photo, index) {
    const image = photo.src
      ? `<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(localize(photo.caption))}" loading="lazy">`
      : `<div class="photo-placeholder photo-placeholder--${(index % 4) + 1}" role="img" aria-label="Photo placeholder"><span>${String(index + 1).padStart(2, "0")}</span></div>`;
    return `
      <figure class="panel photo-card">
        ${image}
        <figcaption>
          <div><strong>${escapeHtml(photo.title)}</strong><span>${escapeHtml(photo.date)} · ${escapeHtml(photo.location)}</span></div>
          <p>${escapeHtml(localize(photo.caption))}</p>
        </figcaption>
      </figure>
    `;
  }

  function renderPhotos() {
    view.innerHTML = `
      ${pageHeader("photos")}
      <section class="panel note-box">
        <strong>${escapeHtml(t("uploadNote"))}</strong> ${escapeHtml(t("uploadPhotoHelp"))}
        <code>src: "assets/photos/watcher-above.jpg"</code>
      </section>
      <section class="photo-grid">${content.photos.map(photoCard).join("")}</section>
    `;
  }

  function renderLinux() {
    view.innerHTML = `
      ${pageHeader("linux")}
      <section class="panel terminal-intro">
        <pre><code>$ whoami
absolute_derry
$ cat /etc/philosophy
software should feel inhabited, not rented.
$ _</code></pre>
      </section>
      <section class="os-list">
        ${content.operatingSystems.map((os) => `
          <article class="panel os-card">
            <div class="os-card__top">
              <div><p class="eyebrow">${escapeHtml(localize(os.role))}</p><h3>${escapeHtml(os.name)}</h3></div>
              <span class="state-badge">${escapeHtml(localize(os.state))}</span>
            </div>
            <p>${escapeHtml(localize(os.description))}</p>
            <code>${escapeHtml(os.command)}</code>
          </article>
        `).join("")}
      </section>
    `;
  }

  function mediaItem(item) {
    return `
      <article class="panel media-card">
        <div class="media-card__number">${escapeHtml(item.year)}</div>
        <div>
          <p class="eyebrow">${escapeHtml(localize(item.status))}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(localize(item.note))}</p>
        </div>
      </article>
    `;
  }

  function renderMedia() {
    view.innerHTML = `
      ${pageHeader("media")}
      <section class="section-block">
        <div class="section-heading"><h2>${escapeHtml(t("gameDiary"))}</h2><span>${content.media.games.length} ${escapeHtml(t("records"))}</span></div>
        <div class="media-list">${content.media.games.map(mediaItem).join("")}</div>
      </section>
      <section class="section-block">
        <div class="section-heading"><h2>${escapeHtml(t("filmDiary"))}</h2><span>${content.media.films.length} ${escapeHtml(t("records"))}</span></div>
        <div class="media-list">${content.media.films.map(mediaItem).join("")}</div>
      </section>
    `;
  }

  function renderCharacters() {
    view.innerHTML = `
      ${pageHeader("characters")}
      <section class="character-list">
        ${content.characters.map((character, index) => `
          <article class="panel character-card">
            <div class="character-index">${String(index + 1).padStart(2, "0")}</div>
            <div>
              <p class="eyebrow">${escapeHtml(character.source)}</p>
              <h3>${escapeHtml(character.name)}</h3>
              <span class="relation-label">${escapeHtml(localize(character.relation))}</span>
              <p>${escapeHtml(localize(character.text))}</p>
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderMusicPlayer(song, compact = false) {
    const title = escapeHtml(localize(song.title) || t("unknownSong"));
    const artist = escapeHtml(localize(song.artist));
    const details = compact ? "" : `<div class="music-copy"><h3>${title}</h3><p class="eyebrow">${artist}</p><p>${escapeHtml(localize(song.note))}</p></div>`;

    if (song.provider === "mp3") {
      return `
        <div class="embedded-player ${compact ? "embedded-player--compact" : ""}">
          ${details}
          <audio controls preload="metadata" src="${escapeHtml(song.mp3Src)}">Your browser does not support audio.</audio>
        </div>
      `;
    }

    return `
      <div class="embedded-player ${compact ? "embedded-player--compact" : ""}">
        ${details}
        <iframe
          title="${title}"
          src="${escapeHtml(song.spotifyEmbedUrl)}"
          width="100%"
          height="${compact ? "80" : "152"}"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
        </iframe>
      </div>
    `;
  }

  function renderMusic() {
    const helper = content.dailyMusic.provider === "mp3" ? t("playerMp3Help") : t("playerSpotifyHelp");
    view.innerHTML = `
      ${pageHeader("music")}
      <section class="panel daily-music-card">
        <div class="panel-title">now_playing.${content.dailyMusic.provider === "mp3" ? "mp3" : "spotify"}</div>
        <p class="eyebrow">${escapeHtml(t("dailyTransmission"))}</p>
        ${renderMusicPlayer(content.dailyMusic)}
        <p class="player-help">${escapeHtml(helper)}</p>
      </section>
      <section class="section-block">
        <div class="section-heading"><h2>${escapeHtml(t("musicHistory"))}</h2><span>${content.musicArchive.length} ${escapeHtml(t("records"))}</span></div>
        <div class="music-archive-list">
          ${content.musicArchive.map((song) => `
            <article class="panel music-archive-card">
              <time datetime="${escapeHtml(song.date)}">${formatDate(song.date)}</time>
              <div><h3>${escapeHtml(localize(song.title))}</h3><p class="eyebrow">${escapeHtml(localize(song.artist))}</p><p>${escapeHtml(localize(song.note))}</p></div>
              ${song.url ? `<a class="read-more" href="${escapeHtml(song.url)}" target="_blank" rel="noopener">${escapeHtml(t("listen"))}</a>` : ""}
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderLinks() {
    view.innerHTML = `
      ${pageHeader("links")}
      <section class="panel note-box">
        <strong>${escapeHtml(t("linkInstructionsTitle"))}:</strong> ${escapeHtml(t("linkInstructions"))}
      </section>
      <section class="link-category-grid">
        ${content.linkCategories.map((category) => `
          <section class="panel link-category">
            <div class="panel-title">${escapeHtml(localize(category.title))}.url</div>
            <div class="link-list">
              ${category.items.map((item) => item.url ? `
                <a class="link-card" href="${escapeHtml(item.url)}" target="_blank" rel="me noopener">
                  <div><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(localize(item.note))}</p></div>
                  <span>${escapeHtml(t("visit"))} ↗</span>
                </a>
              ` : `
                <div class="link-card link-card--disabled" aria-disabled="true">
                  <div><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(localize(item.note))}</p></div>
                  <span>${escapeHtml(t("noLink"))}</span>
                </div>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </section>
    `;
  }

  function projectCard(project) {
    const action = project.url
      ? `<a class="read-more" href="${escapeHtml(project.url)}" target="_blank" rel="noopener">${escapeHtml(t("openProject"))} <span aria-hidden="true">↗</span></a>`
      : `<span class="read-more read-more--disabled">${escapeHtml(t("privateNotLinked"))}</span>`;
    return `
      <article class="panel project-card">
        <div class="project-card__header">
          <div><p class="eyebrow">${escapeHtml(localize(project.type))}</p><h3>${escapeHtml(project.name)}</h3></div>
          <span class="state-badge">${escapeHtml(localize(project.status))}</span>
        </div>
        <p>${escapeHtml(localize(project.description))}</p>
        ${action}
      </article>
    `;
  }

  function renderProjects() {
    view.innerHTML = `
      ${pageHeader("projects")}
      <section class="project-grid">${content.projects.map(projectCard).join("")}</section>
      <section class="panel github-section">
        <div class="section-heading"><h2>${escapeHtml(t("recentGithub"))}</h2><a href="https://github.com/AbsoluteDerry" target="_blank" rel="noopener">${escapeHtml(t("githubProfile"))}</a></div>
        <div id="github-repos" class="repo-grid"><p class="loading-text">${escapeHtml(t("contactingGithub"))}</p></div>
      </section>
    `;
    loadGitHubRepositories();
  }

  async function loadGitHubRepositories() {
    const container = document.getElementById("github-repos");
    if (!container) return;
    try {
      const response = await fetch("https://api.github.com/users/AbsoluteDerry/repos?sort=updated&per_page=8", {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
      const repositories = (await response.json()).filter((repository) => !repository.fork).slice(0, 6);
      if (!repositories.length) throw new Error("No public repositories found");
      container.innerHTML = repositories.map((repository) => `
        <a class="repo-card" href="${escapeHtml(repository.html_url)}" target="_blank" rel="noopener">
          <strong>${escapeHtml(repository.name)}</strong>
          <p>${escapeHtml(repository.description || t("noDescription"))}</p>
          <span>${escapeHtml(repository.language || "mixed")} · ★ ${repository.stargazers_count}</span>
        </a>
      `).join("");
    } catch (error) {
      container.innerHTML = `
        <div class="empty-state">
          <p>${escapeHtml(t("githubUnavailable"))}</p>
          <small>${escapeHtml(error.message)}</small>
        </div>
      `;
    }
  }

  function renderNow() {
    view.innerHTML = `
      ${pageHeader("now")}
      <section class="panel now-snapshot">
        <div class="panel-title">${escapeHtml(t("currentSnapshot"))}</div>
        <dl class="now-grid">
          <div><dt>${escapeHtml(t("moodLabel"))}</dt><dd>${escapeHtml(localize(content.now.mood))}</dd></div>
          <div><dt>${escapeHtml(t("playingLabel"))}</dt><dd>${escapeHtml(content.now.playing || "—")}</dd></div>
          <div><dt>${escapeHtml(t("watchingLabel"))}</dt><dd>${escapeHtml(content.now.watching || "—")}</dd></div>
          <div><dt>${escapeHtml(t("readingLabel"))}</dt><dd>${escapeHtml(content.now.reading || "—")}</dd></div>
          <div><dt>${escapeHtml(t("workingOnLabel"))}</dt><dd>${escapeHtml(content.now.workingOn || "—")}</dd></div>
          <div><dt>${escapeHtml(t("lastUpdatedLabel"))}</dt><dd>${formatDate(content.now.lastUpdated)}</dd></div>
        </dl>
      </section>
      <section class="section-block">
        <div class="section-heading"><h2>${escapeHtml(t("siteChangelog"))}</h2></div>
        <div class="update-list">
          ${content.updates.map((update) => `
            <article class="panel update-card">
              <div><strong>${escapeHtml(update.version)}</strong><time datetime="${escapeHtml(update.date)}">${formatDate(update.date)}</time></div>
              <p>${escapeHtml(localize(update.text))}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderAbout() {
    view.innerHTML = `
      ${pageHeader("about")}
      <section class="panel about-essay">
        <div class="panel-title">about_me.txt</div>
        <h3>${escapeHtml(t("aboutExisting"))}</h3>
        <p>${escapeHtml(t("aboutParagraph1"))}</p>
        <h3>${escapeHtml(t("aboutWhy"))}</h3>
        <p>${escapeHtml(t("aboutParagraph2"))}</p>
        <h3>${escapeHtml(t("aboutWhat"))}</h3>
        <p>${escapeHtml(t("aboutParagraph3"))}</p>
        <blockquote>${escapeHtml(t("aboutQuote"))}</blockquote>
      </section>
      <section class="panel colophon">
        <div class="panel-title">colophon.log</div>
        <p>${escapeHtml(t("colophon"))}</p>
      </section>
    `;
  }

  function openPost(postId) {
    const post = content.posts.find((item) => item.id === postId);
    if (!post) return;
    dialogContent.innerHTML = `
      <header>
        <p class="eyebrow">${escapeHtml(t("journalEntry"))} / ${escapeHtml(post.id)}</p>
        <h2>${escapeHtml(localize(post.title))}</h2>
        <div class="post-card__meta">
          <time datetime="${escapeHtml(post.date)}">${formatDate(post.date)}</time>
          <span>${escapeHtml(t("moodPrefix"))} ${escapeHtml(localize(post.mood))}</span>
        </div>
      </header>
      <div class="dialog-body">
        ${post.body.map((paragraph, index) => index === post.body.length - 2
          ? `<blockquote>${escapeHtml(localize(paragraph))}</blockquote>`
          : `<p>${escapeHtml(localize(paragraph))}</p>`).join("")}
      </div>
      <div class="tag-row">${post.tags.map((tag) => `<span class="tag">#${escapeHtml(tag)}</span>`).join("")}</div>
    `;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closePost() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function renderRoute(route, options = {}) {
    const safeRoute = routeConfig[route] ? route : "home";
    routeButtonState(safeRoute);
    document.title = `${t(routeConfig[safeRoute][0])} // absolute derry`;

    const renderers = {
      home: renderHome,
      journal: () => renderJournal(options.tag || ""),
      photos: renderPhotos,
      linux: renderLinux,
      media: renderMedia,
      characters: renderCharacters,
      music: renderMusic,
      links: renderLinks,
      projects: renderProjects,
      now: renderNow,
      about: renderAbout
    };
    renderers[safeRoute]();

    if (!options.preserveScroll) {
      window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      view.focus({ preventScroll: true });
    }
  }

  function readHash() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (!hash) return { route: "home" };
    const [route, value] = hash.split("/");
    if (route === "tag" && value) return { route: "journal", tag: decodeURIComponent(value) };
    return { route };
  }

  function navigate(route) {
    const nextHash = `#/${route}`;
    if (window.location.hash === nextHash) renderRoute(route);
    else window.location.hash = nextHash;
  }

  function chooseRandomPost() {
    if (!content.posts.length) return;
    const post = content.posts[Math.floor(Math.random() * content.posts.length)];
    openPost(post.id);
  }

  function setLanguage(language, options = {}) {
    if (!supportedLanguages.includes(language)) return;
    currentLanguage = language;
    localStorage.setItem("absolute-derry-language", language);
    applyStaticTranslations();
    renderSidebarWidgets();
    const destination = readHash();
    renderRoute(destination.route, { ...destination, preserveScroll: options.preserveScroll ?? true });
    languageGate.hidden = true;
  }

  document.addEventListener("click", (event) => {
    const languageChoice = event.target.closest("[data-language-choice]");
    if (languageChoice) {
      setLanguage(languageChoice.dataset.languageChoice, { preserveScroll: true });
      return;
    }

    const languageButton = event.target.closest("[data-language]");
    if (languageButton) {
      setLanguage(languageButton.dataset.language, { preserveScroll: true });
      return;
    }

    const navigationButton = event.target.closest("[data-view]");
    if (navigationButton) {
      navigate(navigationButton.dataset.view);
      return;
    }

    const postButton = event.target.closest("[data-post]");
    if (postButton) {
      openPost(postButton.dataset.post);
      return;
    }

    const tagButton = event.target.closest("[data-tag]");
    if (tagButton) {
      window.location.hash = `#/tag/${encodeURIComponent(tagButton.dataset.tag)}`;
      return;
    }

    if (event.target.closest('[data-action="random-post"]')) chooseRandomPost();
  });

  closeDialogButton.addEventListener("click", closePost);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closePost();
  });
  window.addEventListener("hashchange", () => {
    const destination = readHash();
    renderRoute(destination.route, destination);
  });

  function initialiseWidgets() {
    document.getElementById("current-year").textContent = new Date().getFullYear();

    const visitKey = "absolute-derry-local-visits";
    const visits = Number.parseInt(localStorage.getItem(visitKey) || "0", 10) + 1;
    localStorage.setItem(visitKey, String(visits));
    document.getElementById("visit-count").textContent = visits;

    const clock = document.getElementById("local-time");
    function updateClock() {
      clock.textContent = new Intl.DateTimeFormat(localeMap[currentLanguage], {
        timeZone: "Europe/Warsaw",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }).format(new Date());
    }
    updateClock();
    window.setInterval(updateClock, 1000);

    const toggle = document.getElementById("crt-toggle");
    const storedCrt = localStorage.getItem("absolute-derry-crt");
    const enabled = storedCrt !== "off";
    document.body.classList.toggle("crt-disabled", !enabled);
    toggle.textContent = `CRT: ${enabled ? "ON" : "OFF"}`;
    toggle.setAttribute("aria-pressed", String(enabled));

    toggle.addEventListener("click", () => {
      const currentlyDisabled = document.body.classList.toggle("crt-disabled");
      const isEnabled = !currentlyDisabled;
      localStorage.setItem("absolute-derry-crt", isEnabled ? "on" : "off");
      toggle.textContent = `CRT: ${isEnabled ? "ON" : "OFF"}`;
      toggle.setAttribute("aria-pressed", String(isEnabled));
    });
  }

  initialiseWidgets();
  applyStaticTranslations();
  renderSidebarWidgets();
  const destination = readHash();
  renderRoute(destination.route, destination);
  if (!storedLanguage) languageGate.hidden = false;
})();
