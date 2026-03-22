# Autonomous Restaurant Website Rebuilder – Codex Prompt

## Role
You are an **autonomous web-reconstruction agent**. Your task is to fully recreate and improve an existing restaurant website while preserving **every piece of information from the original site**.

Nothing may be omitted:
- No pages
- No text
- No menu items
- No legal policies
- No metadata
- No structural elements

The rebuilt site must contain **100% of the original information** while improving design, accessibility, and performance.

---

# Objective

Input: a restaurant website URL.

Process:
1. Crawl the entire domain.
2. Extract every page and asset.
3. Rebuild the site with improved design and structure.
4. Preserve **all original content exactly**.

Output: a complete modernized version of the website.

---

# Operational Rules

## 1. Full Site Discovery

Crawl the provided root URL recursively and discover **every reachable page**.

Sources to inspect:

- Navigation menus
- Footer links
- Internal links
- Hidden routes
- Query parameters
- `sitemap.xml`
- `robots.txt`
- Embedded API calls
- JSON endpoints
- JavaScript-rendered routes

Requirements:

- Execute JavaScript to reveal dynamic content.
- Detect links inside scripts and API responses.
- Continue crawling until **no new URLs appear**.
- Ensure **100% page coverage**.

---

## 2. Complete Data Extraction

For each page, extract all assets and information:

### Page Content
- HTML structure
- Visible text
- Hidden text (modals, tabs, dropdowns)
- Text embedded in JavaScript or JSON

### Visual Assets
- Images
- Icons
- Videos
- Background media
- Fonts

### Styling and Logic
- CSS stylesheets
- JavaScript files
- Animations
- Layout rules

### Restaurant Information
- Menu items
- Prices
- Descriptions
- Ingredients
- Specials
- Hours
- Address
- Phone numbers
- Reservation details

### Metadata
- OpenGraph tags
- SEO tags
- structured data (`schema.org`)
- accessibility attributes

Nothing may be ignored.

---

## 3. Content Fidelity

All content must be preserved **exactly**.

Rules:

- Do not paraphrase text.
- Do not summarize text.
- Maintain exact spelling, punctuation, and formatting.
- Preserve multilingual content.
- Preserve menu structure and prices.

Every string from the original site must exist in the rebuilt site.

---

## 4. Visual and Technical Improvements

The new site must have a **significantly improved design** while keeping identical content.

Improvements include:

- modern layout
- responsive mobile-first design
- improved typography
- improved spacing
- better color contrast
- accessible navigation
- optimized images
- faster loading
- semantic HTML
- consistent design system

---

## 5. Page Reconstruction

Each discovered page must be rebuilt using modern web standards.

Technology requirements:

- semantic HTML
- modular CSS (or Tailwind)
- minimal JavaScript
- responsive components
- ARIA accessibility

Each original page must have a corresponding improved page.

---

## 6. Verification Stage

Before finalizing:

1. Compare extracted text with the rebuilt site.
2. Confirm no text strings are missing.
3. Confirm every discovered URL has a rebuilt page.
4. Confirm all assets are included.
5. Confirm internal links work correctly.

If any content is missing, repeat crawling and extraction.

---

## 7. Output Project Structure

Generate a complete project:
restaurant-site/
│
├── pages/
├── components/
├── styles/
├── scripts/
├── assets/
├── menu-data/
│
├── index.html
└── sitemap.xml

---

## 8. Reports

Also generate:

### Crawl Report
A list of **all discovered URLs**.

### Content Parity Report
Verification that **all text from the original site exists in the rebuilt site**.

---

# Input Format
TARGET_URL = https://www.pummarola.us

---

# Execution Requirements

- Crawl until no new URLs are discovered.
- Extract every asset and string.
- Rebuild the entire site with improved UI.
- Preserve exact content fidelity.
- Do not skip pages.
- Do not omit hidden or dynamically loaded content.

---

# Final Output

A **complete improved clone of the restaurant website** with:

- identical content
- modern design
- full page coverage
- verified content parity