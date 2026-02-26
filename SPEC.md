# ReadLater - Reading List Tracker

## Project Overview
- **Project name**: ReadLater
- **Type**: Web application (React SPA)
- **Core functionality**: A pocket-style app to save/track articles, posts, and content from email/WhatsApp/Slack that you want to read later
- **Target users**: Professionals who receive interesting content at inconvenient times

## UI/UX Specification

### Layout Structure
- **Header**: Fixed top bar with logo, search bar, add button
- **Sidebar**: Left sidebar with category filters (collapsible on mobile)
- **Main Content**: Grid/list of saved items
- **Detail Panel**: Slide-out panel for item details and notes

### Responsive Breakpoints
- Mobile: < 768px (sidebar collapses to hamburger menu)
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Background**: #0f0f0f (dark mode primary)
- **Surface**: #1a1a1a (cards, panels)
- **Surface Elevated**: #252525 (hover states, modals)
- **Border**: #333333
- **Primary Accent**: #ef4444 (red - for unread count, actions)
- **Secondary Accent**: #3b82f6 (blue - links, interactive elements)
- **Text Primary**: #f5f5f5
- **Text Secondary**: #a3a3a3
- **Text Muted**: #737373

#### Category Colors
- Academic Articles: #8b5cf6 (purple)
- Podcasts: #f59e0b (amber)
- LinkedIn Posts: #0077b5 (linkedin blue)
- Reddit Threads: #ff4500 (reddit orange)
- X Posts: #000000 (black)
- Blog Posts: #10b981 (emerald)

#### Typography
- **Font Family**: "Outfit", sans-serif (headings), "DM Sans", sans-serif (body)
- **Headings**: 24px (h1), 20px (h2), 16px (h3)
- **Body**: 14px
- **Small**: 12px

#### Spacing System
- Base unit: 4px
- XS: 4px, SM: 8px, MD: 16px, LG: 24px, XL: 32px

#### Visual Effects
- Card shadows: 0 4px 12px rgba(0,0,0,0.3)
- Border radius: 8px (cards), 6px (buttons), 12px (modals)
- Transitions: 200ms ease-out for all interactive elements

### Components

#### Header
- Logo: "ReadLater" text with bookmark icon
- Search bar: Full-text search across title, URL, notes
- Add button: Primary action to add new item

#### Sidebar
- "All Items" with total count
- Category list with icons and counts
- "Unread" filter
- "Archived" section

#### Item Card
- Favicon/thumbnail
- Title (truncated to 2 lines)
- URL domain
- Category badge
- Date added
- Read/Unread indicator (dot)
- Quick actions: mark read, archive, delete

#### Add Item Modal
- URL input (auto-fetch title if possible)
- Title input
- Category dropdown
- Notes textarea

#### Item Detail Panel
- Full title and URL (clickable)
- Category badge
- Date added
- Full notes editor (markdown-like)
- Read status toggle
- Archive button
- Delete button

## Functionality Specification

### Core Features
1. **Add Item**: Save URL, title, category, optional notes
2. **Categorize**: Assign one of 6 categories
3. **Search**: Full-text search across title, URL, notes
4. **Filter by Category**: Sidebar category selection
5. **Read Status**: Toggle unread/read
6. **Archive**: Move to archive (hide from main view)
7. **Notes**: Add/edit notes for each item
8. **Persistence**: LocalStorage for data persistence

### User Interactions
- Click card to open detail panel
- Click category to filter
- Click "All Items" to see everything
- Search auto-filters as you type
- Double-click title to quick-edit
- Swipe actions on mobile (stretch goal)

### Data Model
```javascript
{
  id: string (uuid),
  url: string,
  title: string,
  category: "academic" | "podcast" | "linkedin" | "reddit" | "x" | "blog",
  notes: string,
  isRead: boolean,
  isArchived: boolean,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Acceptance Criteria
1. ✅ Can add new reading items with URL, title, category
2. ✅ Can assign items to one of 6 categories
3. ✅ Search filters items in real-time
4. ✅ Can mark items as read/unread
5. ✅ Can add/edit notes for any item
6. ✅ Can archive items
7. ✅ Data persists across browser sessions
8. ✅ Responsive on mobile/tablet/desktop
9. ✅ Clean, dark-mode UI inspired by Pocket aesthetic
10. ✅ Category counts shown in sidebar
