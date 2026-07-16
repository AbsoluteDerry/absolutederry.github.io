# absolute derry — personal archive v1.1

A static multilingual personal blog for GitHub Pages. It uses plain HTML, CSS and JavaScript, so there is no build step.

## Included

- Tumblr / SpaceHey-inspired three-column layout
- Original dark gothic psychological-horror interface
- First-visit language screen: English, Turkish and Polish
- Language switcher that remembers the visitor's choice
- Journal with search, tags, random entry and post dialog
- Photography gallery with placeholders
- Linux / operating systems page
- Games and films diary
- Fictional characters page
- Daily Spotify or local MP3 player plus song archive
- Editable personal/social link directory
- Now page and site changelog
- Projects page with live GitHub repository cards
- Responsive mobile layout
- Optional CRT scanline/noise effect
- Local device visit counter; it is not a global visitor counter

## Install on GitHub Pages

Back up the old repository first, then copy every file from this folder into the repository root.

```bash
git clone https://github.com/AbsoluteDerry/absolutederry.github.io.git
cd absolutederry.github.io

# Copy the new files into this folder, then:
git add .
git commit -m "Rebuild personal archive v1.1"
git push origin main
```

GitHub Pages normally updates within a few minutes.

## Main file to edit

Most personal content lives in `content.js`. Text may be written as a normal string or in three languages:

```js
title: {
  en: "English title",
  tr: "Türkçe başlık",
  pl: "Polski tytuł"
}
```

When a translation is missing, the site falls back to English.

## Add a new blog post

Open `content.js`, find the `posts` array and add a new object at the top:

```js
{
  id: "a-unique-url-safe-name",
  date: "2026-07-16",
  title: { en: "post title", tr: "yazı başlığı", pl: "tytuł wpisu" },
  mood: { en: "restless", tr: "huzursuz", pl: "niespokojna" },
  tags: ["diary", "linux"],
  excerpt: {
    en: "one sentence shown on the journal page.",
    tr: "günlük sayfasında gösterilen bir cümle.",
    pl: "jedno zdanie widoczne na stronie dziennika."
  },
  body: [
    { en: "first paragraph.", tr: "ilk paragraf.", pl: "pierwszy akapit." },
    { en: "second paragraph.", tr: "ikinci paragraf.", pl: "drugi akapit." }
  ]
}
```

## Add a photograph

1. Put the image in `assets/photos/`.
2. Open `content.js`.
3. Set the image path in one of the photo entries:

```js
src: "assets/photos/watcher-above.jpg"
```

Use compressed JPEG, AVIF or WebP files so the page loads quickly.

## Add social and Spotify links

Edit `linkCategories` in `content.js`. An empty `url` is intentionally shown as a disabled placeholder:

```js
{
  label: "Spotify",
  url: "https://open.spotify.com/user/YOUR_PROFILE",
  note: { en: "my playlists", tr: "çalma listelerim", pl: "moje playlisty" }
}
```

## Change the daily song

### Spotify mode

Keep:

```js
provider: "spotify"
```

Open a song in Spotify, choose **Share → Embed track**, and copy the embed URL into:

```js
spotifyEmbedUrl: "https://open.spotify.com/embed/track/TRACK_ID"
```

### Local MP3 mode

Put your audio file in `assets/music/`, then change:

```js
provider: "mp3",
mp3Src: "assets/music/today.mp3"
```

Browsers require the visitor to press Play; autoplay is intentionally not forced.

## Reset the language screen while testing

The selected language is stored in the browser. To see the first-visit screen again, open the browser console and run:

```js
localStorage.removeItem("absolute-derry-language");
location.reload();
```

## Personalise next

The profile avatar is currently an original CSS placeholder. Replace the `.avatar` element in `index.html` with your own image later.

The sample posts, music, media entries, status and descriptions are starter content. Rewrite them directly in `content.js` as the archive grows.
