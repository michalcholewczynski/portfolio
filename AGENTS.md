# Repository Guidelines

## Project Structure & Module Organization

This repository is the source for a lightweight, single-page developer portfolio. Keep the project dependency-free and organized around standard web entry points:

- `index.html` contains the page structure, content, metadata, and accessible landmarks.
- `style.css` contains all visual styling, responsive rules, and editor-inspired UI details.
- `script.js` contains progressive-enhancement interactions such as navigation state and motion effects.
- Place local images, icons, and other static files in `assets/`; use descriptive names such as `project-dashboard.webp`.

Do not introduce a build system or framework unless the project requirements change. Keep third-party resources to a minimum.

## Build, Test, and Development Commands

There is currently no package manager, build step, or automated test suite. Develop by opening `index.html` in a browser or serving the directory with any static-file server, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Check the page at narrow mobile widths as well as desktop widths before submitting changes.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Prefer semantic HTML (`header`, `main`, `section`, `nav`, `footer`) and native controls over custom interactive elements. Keep CSS mobile-first; add `min-width` media queries only when layout needs to expand.

Use lowercase kebab-case for CSS classes and asset filenames, for example `.project-card` and `editor-tabs.css`. Use `const` by default in JavaScript, early returns for guard clauses, and named functions only when reuse improves clarity. Preserve keyboard focus states and honor `prefers-reduced-motion` for animation.

## Anti-AI-slop frontend guidelines

These guidelines apply to new pages, components, and substantial visual redesigns. They are defaults, not bans: follow explicit user requirements and established project conventions when they intentionally call for a different approach.

### Design for this portfolio

- Design around a developer and web creator’s work, personality, and real projects—not a generic SaaS product. The code-editor motif should support that story rather than become a decorative costume.
- Give the page one clear, context-driven visual idea. For this site, an editor-inspired workspace, code-like details, or project previews may be appropriate when they improve the presentation of the author’s work.
- Keep the three intended sections purposeful: introduce the person, show the work, and make contact easy. Do not add pricing, testimonials, fake partner logos, a newsletter, feature grids, an FAQ, or other standard landing-page sections without a stated need.
- Avoid copying the visual language of Linear, Vercel, Stripe, Notion, Apple, or popular portfolio templates by default.

### Content and project presentation

- Write specific, honest copy about the developer, their services, and each project. Avoid interchangeable claims such as “build faster,” “unlock your potential,” “next-generation,” or “built for the future.”
- Calls to action must describe the result, such as “View project,” “Open GitHub profile,” or “Write an email.” Do not use vague duplicate CTAs.
- Never invent clients, project outcomes, traffic, ratings, testimonials, technologies, or case-study details. When project information is incomplete, use clearly marked placeholders or omit the claim.
- Prefer real project screenshots and accurate metadata. Until those exist, use lightweight CSS mockups that read as placeholders rather than pretending to be completed client work.

### Visual restraint and hierarchy

- Do not put every block in a rounded card or repeat the same heading–paragraph–three-card rhythm. Establish separation through spacing, alignment, typography, color, and selective surfaces.
- Do not treat gradients, glassmorphism, blur, glowing blobs, soft shadows, neon, or decorative grids as default signals of quality. Use them only when they strengthen the editor concept or the personal brand.
- Avoid decorative icon boxes, status pills, and badges unless they convey useful information. Icons should clarify an action or technology, not fill empty space.
- Use a small, deliberate palette with accessible contrast. Build typographic hierarchy with size, line height, measure, spacing, and weight—not oversized headings or weight alone.
- Do not assume that a modern portfolio must use a dark theme, monospace type everywhere, or a terminal animation. Use these choices only where they fit the chosen direction.

### Responsive interaction and accessibility

- Start with mobile. Reconsider content order, navigation, project preview density, type scale, and contact actions for narrow screens; do not merely compress the desktop layout.
- Keep simple navigation visible when it fits. Do not add a hamburger menu, scroll animation, or JavaScript dependency by default.
- Motion must explain a change or guide attention. Avoid universal fade-up and card-lift effects; honor `prefers-reduced-motion`.
- Use semantic HTML and correct controls. Maintain keyboard navigation, visible focus indicators, accessible names, sufficient contrast, and meaningful alternative text. Never remove an outline without an equivalent focus treatment.

### Maintainability and final review

- Keep the static HTML, CSS, and JavaScript implementation simple. Do not introduce dependencies, generic component abstractions, or design-system layers for effects that the existing stack can express clearly.
- Before completing substantial frontend work, ask: Does this feel specific to this developer and their projects? Are any claims or previews misleading? Can cards, decoration, motion, or copy be removed for a clearer result? Does the mobile layout feel intentional and remain fully accessible?
- Priority order: explicit user requirements, existing repository conventions and brand, usability and accessibility, these guidelines, then implementation preferences.

## Testing Guidelines

Manually verify each change in a current Chromium- or WebKit-based browser. Test keyboard navigation, visible focus, link targets, readable contrast, and layouts from 320 px upward. When changing JavaScript, confirm it works without console errors and that the page remains usable if the script is unavailable.

## Commit & Pull Request Guidelines

The repository has no commit history yet; use concise, imperative commit subjects, such as `Add responsive project cards` or `Fix mobile navigation focus`. Keep unrelated changes in separate commits.

Pull requests should explain the user-facing result, list validation performed, link the relevant issue when one exists, and include before/after screenshots for visual changes. Call out any new external asset, font, or service and its licensing or privacy impact.
