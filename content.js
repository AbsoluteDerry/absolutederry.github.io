/*
  ABSOLUTEDERRY CONTENT FILE
  -------------------------
  Add posts, photographs, links, daily music, operating systems, games,
  films, series, anime, characters and projects here. Text can be a normal string or a
  multilingual object: { en: "...", tr: "...", pl: "..." }.
*/
window.DERRY_CONTENT = {
  profile: {
    status: {
      en: "Rebuilding my digital bedroom",
      tr: "Dijital yatak odamı yeniden kuruyorum",
      pl: "Odbudowuję swój cyfrowy pokój"
    }
  },

  now: {
    lastUpdated: "2026-07-16",
    mood: {
      en: "Restless / Rebuilding",
      tr: "Huzursuz / Yeniden Kuruyorum",
      pl: "Niespokojna / Odbudowuję"
    },
    playing: "Resident Evil Village",
    watching: "—",
    reading: "—",
    workingOn: "absolutederry.github.io v1.2",
    obsessions: [
      { en: "old web personal sites", tr: "eski internet kişisel siteleri", pl: "osobiste strony starego internetu" },
      { en: "linux desktops", tr: "linux masaüstleri", pl: "pulpity Linuksa" },
      { en: "psychological horror", tr: "psikolojik korku", pl: "horror psychologiczny" },
      { en: "night photography", tr: "gece fotoğrafçılığı", pl: "fotografia nocna" },
      { en: "building DerryOS", tr: "DerryOS geliştirmek", pl: "budowanie DerryOS" }
    ]
  },

  dailyMusic: {
    provider: "spotify",
    title: {
      en: "today's transmission",
      tr: "bugünün yayını",
      pl: "dzisiejsza transmisja"
    },
    artist: {
      en: "replace the Spotify link in content.js",
      tr: "content.js içindeki Spotify bağlantısını değiştir",
      pl: "zmień link Spotify w pliku content.js"
    },
    note: {
      en: "A song left playing in the room today.",
      tr: "Bugün odada çalmaya bıraktığım şarkı.",
      pl: "Piosenka pozostawiona dziś w pokoju."
    },
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/5VPaXkoOt3rJbVNa1j5wmy",
    mp3Src: "assets/music/today.mp3",
    cover: ""
  },

  musicArchive: [
    {
      date: "2026-07-16",
      title: { en: "first archived song", tr: "arşivlenen ilk şarkı", pl: "pierwsza zarchiwizowana piosenka" },
      artist: "add artist",
      note: {
        en: "Replace this entry with a song that belonged to the day.",
        tr: "Bu kaydı o güne ait bir şarkıyla değiştir.",
        pl: "Zastąp ten wpis piosenką należącą do tego dnia."
      },
      url: ""
    }
  ],

  linkCategories: [
    {
      title: { en: "social", tr: "sosyal medya", pl: "media społecznościowe" },
      items: [
        {
          label: "Instagram / Photography",
          url: "https://www.instagram.com/AbsoluteDerry",
          note: { en: "night photography and visual fragments", tr: "gece fotoğrafları ve görsel parçalar", pl: "fotografia nocna i wizualne fragmenty" }
        },
        {
          label: "Spotify",
          url: "",
          note: { en: "add your Spotify profile link here", tr: "Spotify profil bağlantını buraya ekle", pl: "dodaj tutaj link do profilu Spotify" }
        },
        {
          label: "Tumblr",
          url: "",
          note: { en: "optional future mirror", tr: "isteğe bağlı gelecek ayna sayfa", pl: "opcjonalne przyszłe lustro strony" }
        }
      ]
    },
    {
      title: { en: "code + projects", tr: "kod + projeler", pl: "kod + projekty" },
      items: [
        {
          label: "GitHub",
          url: "https://github.com/AbsoluteDerry",
          note: { en: "repositories, experiments and DerryOS", tr: "repolar, deneyler ve DerryOS", pl: "repozytoria, eksperymenty i DerryOS" }
        },
        {
          label: "This Website",
          url: "https://absolutederry.github.io",
          note: { en: "the live personal archive", tr: "canlı kişisel arşiv", pl: "aktywne osobiste archiwum" }
        }
      ]
    },
    {
      title: { en: "contact + elsewhere", tr: "iletişim + diğer yerler", pl: "kontakt + inne miejsca" },
      items: [
        {
          label: "Email",
          url: "mailto:absolutediary@outlook.com",
          note: { en: "for messages that should not disappear in a feed", tr: "akışta kaybolmaması gereken mesajlar için", pl: "dla wiadomości, które nie powinny zniknąć w strumieniu" }
        },
        {
          label: "SpaceHey",
          url: "",
          note: { en: "add a profile later if you make one", tr: "hesap açarsan profilini sonra ekle", pl: "dodaj profil później, jeżeli go utworzysz" }
        }
      ]
    }
  ],

  posts: [
    {
      id: "reopening-the-archive",
      date: "2026-07-16",
      title: {
        en: "reopening the archive",
        tr: "arşivi yeniden açmak",
        pl: "ponowne otwarcie archiwum"
      },
      mood: { en: "restless", tr: "huzursuz", pl: "niespokojna" },
      tags: ["site", "diary", "old-web"],
      excerpt: {
        en: "six months later, i came back to the room i abandoned online.",
        tr: "altı ay sonra internette terk ettiğim odaya geri döndüm.",
        pl: "sześć miesięcy później wróciłam do pokoju porzuconego w internecie."
      },
      body: [
        {
          en: "six months ago i started building a place that belonged only to me. then the code broke, the momentum disappeared, and the page stayed frozen in time.",
          tr: "altı ay önce yalnızca bana ait bir yer kurmaya başladım. sonra kodlar bozuldu, heves kayboldu ve sayfa zamanın içinde dondu.",
          pl: "sześć miesięcy temu zaczęłam budować miejsce należące wyłącznie do mnie. potem kod się popsuł, zniknął rozpęd, a strona zastygła w czasie."
        },
        {
          en: "i am opening it again now. not as a brand, not as content, and not as something designed to please an algorithm. this will be a personal archive: photographs, systems, games, films, fictional people i recognise myself in, and whatever remains after a day is over.",
          tr: "şimdi burayı yeniden açıyorum. bir marka, içerik veya algoritmayı memnun etmek için tasarlanmış bir şey olarak değil. burası kişisel bir arşiv olacak: fotoğraflar, sistemler, oyunlar, filmler, kendimi gördüğüm kurgusal insanlar ve bir gün bittikten sonra geriye kalan her şey.",
          pl: "teraz otwieram je ponownie. nie jako markę, treść ani rzecz stworzoną dla algorytmu. będzie to osobiste archiwum: fotografie, systemy, gry, filmy, fikcyjne postacie, w których rozpoznaję siebie, i wszystko, co zostaje po zakończeniu dnia."
        },
        {
          en: "the site is unfinished on purpose. rooms should look lived in.",
          tr: "site bilerek tamamlanmamış durumda. odalar yaşanmış görünmeli.",
          pl: "strona jest celowo niedokończona. pokoje powinny wyglądać na zamieszkane."
        }
      ]
    },
    {
      id: "untitled",
      date: "2026-01-02",
      title: { en: "untitled", tr: "isimsiz", pl: "bez tytułu" },
      mood: { en: "detached", tr: "kopuk", pl: "odłączona" },
      tags: ["memory", "fog"],
      excerpt: {
        en: "i remember less, but feel heavier.",
        tr: "daha az hatırlıyorum ama daha ağır hissediyorum.",
        pl: "pamiętam mniej, ale czuję większy ciężar."
      },
      body: [
        { en: "i remember less, but feel heavier.", tr: "daha az hatırlıyorum ama daha ağır hissediyorum.", pl: "pamiętam mniej, ale czuję większy ciężar." },
        { en: "memory does not disappear cleanly. it leaves stains where details used to be.", tr: "hafıza temiz biçimde kaybolmuyor. ayrıntıların olduğu yerde lekeler bırakıyor.", pl: "pamięć nie znika czysto. zostawia plamy tam, gdzie wcześniej były szczegóły." },
        { en: "sometimes the missing part becomes larger than the thing itself.", tr: "bazen eksik kalan parça, şeyin kendisinden daha büyük oluyor.", pl: "czasami brakująca część staje się większa od samej rzeczy." }
      ]
    },
    {
      id: "first-entry",
      date: "2025-12-30",
      title: { en: "first entry", tr: "ilk kayıt", pl: "pierwszy wpis" },
      mood: { en: "numb", tr: "hissiz", pl: "odrętwiała" },
      tags: ["existence", "silence", "record"],
      excerpt: {
        en: "sometimes existing is enough.",
        tr: "bazen yalnızca var olmak yeterlidir.",
        pl: "czasami samo istnienie wystarcza."
      },
      body: [
        { en: "sometimes existing is enough. not everything needs a reason.", tr: "bazen yalnızca var olmak yeterlidir. her şeyin bir sebebi olmak zorunda değil.", pl: "czasami samo istnienie wystarcza. nie wszystko potrzebuje powodu." },
        { en: "there are days when nothing hurts, but nothing feels alive either. the silence does not scream — it just stays.", tr: "hiçbir şeyin acıtmadığı ama hiçbir şeyin canlı da gelmediği günler var. sessizlik çığlık atmıyor — yalnızca kalıyor.", pl: "są dni, kiedy nic nie boli, ale nic nie wydaje się żywe. cisza nie krzyczy — po prostu zostaje." },
        { en: "i do not call this sadness. it is closer to neutrality, stretched too far.", tr: "buna üzüntü demiyorum. fazla uzatılmış bir tarafsızlığa daha yakın.", pl: "nie nazywam tego smutkiem. to raczej neutralność rozciągnięta zbyt daleko." },
        { en: "maybe consciousness itself is the sickness.", tr: "belki de hastalığın kendisi bilinçtir.", pl: "może chorobą jest sama świadomość." },
        { en: "i write these things not to be understood, but to remain traceable.", tr: "bunları anlaşılmak için değil, iz bırakmak için yazıyorum.", pl: "piszę to nie po to, by mnie zrozumiano, lecz by pozostał ślad." }
      ]
    }
  ],

  photos: [
    {
      title: "Watcher Above",
      date: "2026",
      location: "Rzeszów",
      caption: { en: "A monument watching the city after dark.", tr: "Hava karardıktan sonra şehri izleyen bir anıt.", pl: "Pomnik obserwujący miasto po zmroku." },
      src: ""
    },
    {
      title: "Relic at the Parking Lot",
      date: "2026",
      location: "Subcarpathia",
      caption: { en: "Concrete, sodium light and something left behind.", tr: "Beton, sodyum ışığı ve geride bırakılmış bir şey.", pl: "Beton, sodowe światło i coś pozostawionego." },
      src: ""
    },
    {
      title: "Wandering Pilgrim",
      date: "2026",
      location: "Rzeszów",
      caption: { en: "Night street photography from a city that becomes quieter after midnight.", tr: "Gece yarısından sonra sessizleşen bir şehirden sokak fotoğrafı.", pl: "Nocna fotografia uliczna z miasta, które cichnie po północy." },
      src: ""
    },
    {
      title: "Beneath Her Gaze",
      date: "2026",
      location: "Rzeszów",
      caption: { en: "Architecture turned into a witness.", tr: "Bir tanığa dönüşen mimari.", pl: "Architektura przemieniona w świadka." },
      src: ""
    },
    {
      title: "Untitled Night No. 01",
      date: "2026",
      location: "Rzeszów",
      caption: { en: "Replace this placeholder with one of your photographs.", tr: "Bu yer tutucuyu kendi fotoğraflarından biriyle değiştir.", pl: "Zastąp to miejsce jednym ze swoich zdjęć." },
      src: ""
    },
    {
      title: "Untitled Night No. 02",
      date: "2026",
      location: "Rzeszów",
      caption: { en: "Replace this placeholder with one of your photographs.", tr: "Bu yer tutucuyu kendi fotoğraflarından biriyle değiştir.", pl: "Zastąp to miejsce jednym ze swoich zdjęć." },
      src: ""
    }
  ],

  operatingSystems: [
    {
      name: "Arch Linux",
      role: { en: "main laptop / daily system", tr: "ana laptop / günlük sistem", pl: "główny laptop / system codzienny" },
      state: { en: "active", tr: "aktif", pl: "aktywny" },
      description: {
        en: "The system I shape around myself instead of adapting myself to it. KDE Plasma, terminal tools, custom workflows and constant rebuilding.",
        tr: "Kendimi ona uydurmak yerine kendi çevremde şekillendirdiğim sistem. KDE Plasma, terminal araçları, özel iş akışları ve sürekli yeniden kurma.",
        pl: "System, który kształtuję wokół siebie zamiast dostosowywać się do niego. KDE Plasma, narzędzia terminalowe, własne procesy i ciągła przebudowa."
      },
      command: "sudo pacman -Syu"
    },
    {
      name: "Windows 11",
      role: { en: "dual boot / games and compatibility", tr: "dual boot / oyunlar ve uyumluluk", pl: "dual boot / gry i kompatybilność" },
      state: { en: "active", tr: "aktif", pl: "aktywny" },
      description: {
        en: "Kept for games, software that refuses to cooperate elsewhere, and the occasional return to a familiar desktop.",
        tr: "Oyunlar, başka yerde çalışmayı reddeden yazılımlar ve bazen tanıdık bir masaüstüne dönmek için tutuluyor.",
        pl: "Zostawiony dla gier, oprogramowania odmawiającego współpracy gdzie indziej i sporadycznego powrotu do znajomego pulpitu."
      },
      command: "winget upgrade --all"
    },
    {
      name: "Bazzite",
      role: "Lenovo Legion Go S",
      state: { en: "active", tr: "aktif", pl: "aktywny" },
      description: {
        en: "A console-shaped Linux machine: gaming mode, KDE desktop, EmuDeck and the ongoing attempt to make a handheld feel personal.",
        tr: "Konsol biçiminde bir Linux makinesi: oyun modu, KDE masaüstü, EmuDeck ve el konsolunu kişisel hissettirme çabası.",
        pl: "Linuksowa maszyna w kształcie konsoli: tryb gier, KDE, EmuDeck i ciągła próba nadania urządzeniu osobistego charakteru."
      },
      command: "ujust update"
    },
    {
      name: "Parrot OS",
      role: { en: "security laboratory", tr: "güvenlik laboratuvarı", pl: "laboratorium bezpieczeństwa" },
      state: { en: "lab", tr: "laboratuvar", pl: "laboratorium" },
      description: {
        en: "An isolated environment for learning security, reverse engineering and building a personal cyber range without turning the daily system into a toolbox drawer.",
        tr: "Günlük sistemi alet çekmecesine çevirmeden güvenlik, tersine mühendislik ve kişisel cyber range öğrenmek için izole ortam.",
        pl: "Odizolowane środowisko do nauki bezpieczeństwa, inżynierii wstecznej i budowy własnego cyber range bez zamieniania codziennego systemu w szufladę narzędzi."
      },
      command: "sudo parrot-upgrade"
    },
    {
      name: "Kali Linux",
      role: { en: "non-persistent live USB", tr: "kalıcılıksız live USB", pl: "Live USB bez zapisu" },
      state: { en: "portable", tr: "taşınabilir", pl: "przenośny" },
      description: {
        en: "A temporary toolset that leaves with the USB. Useful when I want a clean session without carrying the whole laboratory everywhere.",
        tr: "USB ile birlikte giden geçici bir araç seti. Tüm laboratuvarı her yere taşımadan temiz bir oturum istediğimde kullanışlı.",
        pl: "Tymczasowy zestaw narzędzi odchodzący razem z USB. Przydatny, gdy chcę czystej sesji bez noszenia całego laboratorium."
      },
      command: "sudo apt update && sudo apt full-upgrade -y"
    }
  ],

  media: {
    games: [
      { title: "Milk outside a bag of milk outside a bag of milk", year: "2021", status: { en: "formative", tr: "beni şekillendiren", pl: "kształtująca" }, note: { en: "A visual language of fractured thought, uncomfortable intimacy and damaged interfaces.", tr: "Parçalanmış düşüncenin, rahatsız edici yakınlığın ve hasarlı arayüzlerin görsel dili.", pl: "Wizualny język pękniętej myśli, niewygodnej bliskości i uszkodzonych interfejsów." } },
      { title: "Resident Evil Village", year: "2021", status: { en: "playing", tr: "oynuyorum", pl: "gram" }, note: { en: "Gothic spectacle, hostile rooms and the pleasure of being trapped somewhere beautiful.", tr: "Gotik gösteri, düşmanca odalar ve güzel bir yerde kapalı kalmanın hazzı.", pl: "Gotycki spektakl, wrogie pokoje i przyjemność uwięzienia w pięknym miejscu." } },
      { title: "Metro 2033 Redux", year: "2014", status: { en: "playing", tr: "oynuyorum", pl: "gram" }, note: { en: "Tunnels, ideology, survival and a world reduced to stations and stories.", tr: "Tüneller, ideoloji, hayatta kalma ve istasyonlarla hikâyelere indirgenmiş bir dünya.", pl: "Tunele, ideologia, przetrwanie i świat zredukowany do stacji oraz opowieści." } },
      { title: "Elden Ring", year: "2022", status: { en: "returning", tr: "geri dönüyorum", pl: "wracam" }, note: { en: "Ruins that feel older than memory and landscapes that make loneliness look sacred.", tr: "Hafızadan eski hissettiren harabeler ve yalnızlığı kutsal gösteren manzaralar.", pl: "Ruiny starsze od pamięci i krajobrazy czyniące samotność czymś świętym." } }
    ],
    films: [
      { title: "Ring", year: "1998", status: { en: "favourite", tr: "favori", pl: "ulubiony" }, note: { en: "Technology as a curse, grief as an image, and horror that moves quietly.", tr: "Bir lanet olarak teknoloji, bir görüntü olarak yas ve sessiz hareket eden korku.", pl: "Technologia jako klątwa, żałoba jako obraz i horror poruszający się cicho." } },
      { title: "Silent Hill", year: "2006", status: { en: "favourite", tr: "favori", pl: "ulubiony" }, note: { en: "Ash, rust, maternal horror and a town that behaves like an emotion.", tr: "Kül, pas, annelik korkusu ve bir duygu gibi davranan kasaba.", pl: "Popiół, rdza, macierzyński horror i miasto zachowujące się jak emocja." } },
      { title: "Perfect Blue", year: "1997", status: { en: "favourite", tr: "favori", pl: "ulubiony" }, note: { en: "Identity watched until it breaks.", tr: "Kırılana kadar izlenen kimlik.", pl: "Tożsamość obserwowana aż do pęknięcia." } },
      { title: "The Blair Witch Project", year: "1999", status: { en: "archive", tr: "arşiv", pl: "archiwum" }, note: { en: "The forest as a system with rules nobody understands.", tr: "Kimsenin anlamadığı kuralları olan bir sistem olarak orman.", pl: "Las jako system z zasadami, których nikt nie rozumie." } }
    ],
    series: []
  },

  characters: [
    {
      name: "Milk-chan",
      source: "Milk inside / outside a bag of milk",
      relation: { en: "fractured interior voice", tr: "parçalanmış iç ses", pl: "pęknięty głos wewnętrzny" },
      text: { en: "I recognise the effort of translating thought into sentences while reality keeps slipping out of alignment.", tr: "Gerçeklik hizasından kayıp giderken düşünceleri cümlelere çevirme çabasını tanıyorum.", pl: "Rozpoznaję wysiłek tłumaczenia myśli na zdania, gdy rzeczywistość ciągle wypada z osi." }
    },
    {
      name: "Lain Iwakura",
      source: "Serial Experiments Lain",
      relation: { en: "the self inside the network", tr: "ağın içindeki benlik", pl: "jaźń wewnątrz sieci" },
      text: { en: "A person can be shy, distant and almost invisible while still becoming enormous in the digital space.", tr: "Bir insan utangaç, uzak ve neredeyse görünmezken dijital alanda yine de devasa olabilir.", pl: "Człowiek może być nieśmiały, odległy i niemal niewidzialny, a jednocześnie stać się ogromny w przestrzeni cyfrowej." }
    },
    {
      name: "Dahlia Dawson",
      source: "Where the Flowers Watch — original character",
      relation: { en: "the self rewritten as fiction", tr: "kurgu olarak yeniden yazılmış benlik", pl: "jaźń przepisana jako fikcja" },
      text: { en: "A frightened girl moving through a forest made from guilt, memory and the things nobody protected her from.", tr: "Suçluluk, hafıza ve kimsenin onu korumadığı şeylerden oluşan bir ormanda ilerleyen korkmuş bir kız.", pl: "Przestraszona dziewczyna idąca przez las zbudowany z winy, pamięci i rzeczy, przed którymi nikt jej nie ochronił." }
    }
  ],

  projects: [
    {
      name: "DerryOS",
      type: { en: "operating system", tr: "işletim sistemi", pl: "system operacyjny" },
      status: { en: "in development", tr: "geliştiriliyor", pl: "w budowie" },
      description: { en: "A personal operating system project growing from a bootable kernel into a complete gothic desktop world.", tr: "Önyüklenebilir bir çekirdekten eksiksiz gotik masaüstü dünyasına büyüyen kişisel işletim sistemi projesi.", pl: "Osobisty projekt systemu operacyjnego rosnący od uruchamialnego jądra do kompletnego gotyckiego świata pulpitu." },
      url: "https://github.com/AbsoluteDerry"
    },
    {
      name: "Where the Flowers Watch",
      type: { en: "psychological horror game concept", tr: "psikolojik korku oyunu konsepti", pl: "koncepcja gry psychologicznego horroru" },
      status: { en: "design archive", tr: "tasarım arşivi", pl: "archiwum projektu" },
      description: { en: "A story about two missing girls, a forest that remembers, and a protagonist forced to revisit what she failed to stop.", tr: "Kayıp iki kız, hatırlayan bir orman ve durduramadığı şeyle yeniden yüzleşmek zorunda kalan bir ana karakter hakkında hikâye.", pl: "Historia dwóch zaginionych dziewczyn, pamiętającego lasu i bohaterki zmuszonej wrócić do tego, czego nie zdołała zatrzymać." },
      url: ""
    },
    {
      name: "Personal Cyber Range",
      type: { en: "security laboratory", tr: "güvenlik laboratuvarı", pl: "laboratorium bezpieczeństwa" },
      status: { en: "building", tr: "kuruluyor", pl: "w budowie" },
      description: { en: "An isolated place for reverse engineering, Active Directory practice and learning security tools responsibly.", tr: "Tersine mühendislik, Active Directory pratiği ve güvenlik araçlarını sorumlu biçimde öğrenmek için izole alan.", pl: "Odizolowane miejsce do inżynierii wstecznej, ćwiczeń Active Directory i odpowiedzialnej nauki narzędzi bezpieczeństwa." },
      url: ""
    },
    {
      name: "absolutederry.github.io",
      type: { en: "personal website", tr: "kişisel web sitesi", pl: "strona osobista" },
      status: { en: "online", tr: "çevrimiçi", pl: "online" },
      description: { en: "This archive: blog, photography, Linux notes, media diary, fictional selves, music, links and public projects.", tr: "Bu arşiv: blog, fotoğrafçılık, Linux notları, medya günlüğü, kurgusal benlikler, müzik, bağlantılar ve açık projeler.", pl: "To archiwum: blog, fotografia, notatki o Linuksie, dziennik mediów, fikcyjne jaźnie, muzyka, linki i publiczne projekty." },
      url: "https://github.com/AbsoluteDerry/absolutederry.github.io"
    }
  ],

  updates: [
    {
      date: "2026-07-16",
      version: "v1.2.0",
      text: {
        en: "Locked the original colour palette, set CRT to OFF by default with a much stronger ON mode, added the Milk-chan profile image, corrected the name to Derry, improved capitalization, and reorganised the archive into eight grouped rooms.",
        tr: "Orijinal renk paleti kilitlendi; CRT varsayılan olarak KAPALI yapıldı ve AÇIK modu belirginleştirildi; Milk-chan profil görseli eklendi; isim Derry olarak düzeltildi; büyük-küçük harfler düzenlendi ve arşiv sekiz gruplandırılmış odaya ayrıldı.",
        pl: "Zablokowano oryginalną paletę kolorów, ustawiono domyślnie wyłączony CRT z wyraźniejszym trybem włączonym, dodano obraz profilowy Milk-chan, poprawiono imię na Derry, uporządkowano wielkie litery i podzielono archiwum na osiem pogrupowanych pokoi."
      }
    },
    {
      date: "2026-07-16",
      version: "v1.1.0",
      text: {
        en: "Added English, Turkish and Polish language selection, personal links, a Spotify/MP3 daily player, a Now page, random journal entry and a small site changelog.",
        tr: "İngilizce, Türkçe ve Lehçe dil seçimi; kişisel bağlantılar; Spotify/MP3 günlük oynatıcı; Now sayfası; rastgele günlük kaydı ve küçük site değişiklik günlüğü eklendi.",
        pl: "Dodano wybór języka angielskiego, tureckiego i polskiego, linki osobiste, codzienny odtwarzacz Spotify/MP3, stronę Now, losowy wpis oraz mały dziennik zmian."
      }
    },
    {
      date: "2026-07-16",
      version: "v1.0.0",
      text: {
        en: "Rebuilt the abandoned archive as a static old-web personal site.",
        tr: "Terk edilmiş arşiv statik eski internet kişisel sitesi olarak yeniden kuruldu.",
        pl: "Przebudowano porzucone archiwum jako statyczną osobistą stronę starego internetu."
      }
    }
  ]
};
