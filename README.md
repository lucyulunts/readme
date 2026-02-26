# ReadMe - Reading List Tracker

A Pocket-style reading list app to save articles, posts, and content for later reading. Perfect for capturing interesting stuff that crosses your email/WhatsApp/Slack at the wrong time.

<img width="1081" height="521" alt="image" src="https://github.com/user-attachments/assets/126a2c07-2be6-4eda-bc6e-938378ed1cef" />


## Features

- **6 Categories**: Academic Articles, Podcasts, LinkedIn Posts, Reddit Threads, X Posts, Blog Posts
- **Auto-detect**: Category automatically selected based on URL
- **Full-text search**: Search across title, URL, and notes
- **Read/Unread tracking**: Keep track of what you've read
- **Notes**: Add personal notes to each item
- **Archive**: Move items to archive
- **Dark mode**: Easy on the eyes
- **Responsive**: Works on desktop, tablet, and mobile
- **Local storage**: Data stays in your browser
- **Chrome Extension**: One-click save from any page

## Categories

| Category | Detection |
|----------|-----------|
| Academic Article | arxiv.org, scholar.google |
| Podcast | spotify.com, youtube.com |
| LinkedIn Post | linkedin.com |
| Reddit Thread | reddit.com |
| X Post | x.com, twitter.com |
| Blog Post | (default) |

## Quick Start

1. Open `index.html` in any browser
2. Start saving articles!

Or deploy to Vercel:

```bash
npm i -g vercel
vercel
```

## Chrome Extension

Save pages to ReadMe with one click using the Chrome extension.

### Install

1. Go to `chrome://extensions` in Chrome
2. Enable **Developer mode** (top right)
3. Click **Load unpacked**
4. Select the folder `chrome-extension/readme-saver`

### Usage

- Go to any webpage you want to save
- Click the puzzle piece icon in Chrome toolbar
- Click **ReadMe Saver**
- Click **Save to ReadMe**
- The ReadMe app opens with the page URL and title pre-filled

## Tech

Single HTML file with vanilla JS and CSS. No build step required. Data persists in browser localStorage.
