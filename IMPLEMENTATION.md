# Implementation Guide

Implement the portfolio as small, independent tasks. Complete the tasks in order; each task should change only the named files unless a necessary correction is discovered.

## 1. Semantic Page Shell

**Files:** `index.html`

- Create the document structure, language attribute, title, description, Open Graph metadata, and favicon reference.
- Add semantic `header`, `nav`, `main`, `section`, and `footer` elements.
- Add `about`, `projects`, and `contact` section IDs.
- Use clearly marked placeholders for the name, role, biography, email address, social URLs, and project data.

**Accept when:** the document is understandable and navigable without CSS or JavaScript.

## 2. Base Styles and Accessibility

**Files:** `style.css`

- Add a small CSS reset and custom properties for the dark palette, spacing, typography, borders, and focus treatment.
- Set responsive, mobile-first defaults with two-space indentation.
- Provide a visible `:focus-visible` style and a `prefers-reduced-motion` override.

**Accept when:** text has clear contrast, links and controls have visible focus, and no animation is required to understand content.

## 3. About and Navigation Layout

**Files:** `style.css`

- Style the header, compact navigation, and About section.
- Use editor-inspired framing or code details sparingly to introduce the developer and role.
- Keep primary navigation visible where space allows; do not add a hamburger menu without a demonstrated need.

**Accept when:** the layout is readable at 320 px and remains balanced on larger screens.

## 4. Project Tiles

**Files:** `index.html`, `style.css`

- Add three distinct project entries with a title, specific placeholder description, technology list, project link, and CSS-only preview.
- Make previews responsive and visually varied; they must not claim to be real project screenshots.
- Use cards only where they help scan projects, not as the page’s universal layout pattern.

**Accept when:** all tiles work by keyboard, links have meaningful labels, and the grid adapts cleanly from one to multiple columns.

## 5. Contact and Footer

**Files:** `index.html`, `style.css`

- Add a direct `mailto:` contact action and social profile links.
- Use explicit wording such as “Write an email”; do not add a form, backend, or unverified contact channel.

**Accept when:** every contact link has an intentional destination and clear accessible name.

## 6. Progressive Enhancement

**Files:** `script.js`

- Add smooth in-page navigation and active navigation state using progressive enhancement.
- Avoid animation libraries and universal entrance animations.

**Accept when:** the page remains fully functional without JavaScript and produces no browser console errors with JavaScript enabled.

## 7. Final Verification

**Files:** all relevant files, only for corrective changes.

- Check mobile widths from 320 px, tablet, and desktop.
- Verify keyboard navigation, focus states, contrast, links, reduced-motion behavior, and absence of horizontal overflow.
- Review the result against the anti-AI-slop guidelines in `AGENTS.md`: remove generic copy, invented claims, unnecessary effects, and filler UI.

**Accept when:** the result is credible, content-led, mobile-first, accessible, and distinctly personal.
