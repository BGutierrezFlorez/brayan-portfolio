---
name: Modern Technical Minimal
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#b4c5ff'
  on-secondary: '#002a78'
  secondary-container: '#0053db'
  on-secondary-container: '#cdd7ff'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  mono-code:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: -0.01em
  label-mono:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4rem
  space-4xl: 6rem
  gutter: 1.5rem
  margin-mobile: 1.25rem
  margin-desktop: 3rem
  max-width: 1200px
---

## Brand & Style

This design system expresses high-craft software engineering, architectural precision, and editorial restraint. It targets developers, technical founders, and product design leaders who value clarity over decoration. 

The aesthetic fuses modern minimalism with technical precision: deep obsidian backdrops, hairline boundary articulation, monospaced metadata, and decisive electric accents. The mood is focused, authoritative, and quiet, letting work artifacts, code structures, and case studies emerge with clarity.

## Colors

The palette operates with strict hierarchical restraint:

- **Canvas & Surfaces:** Primary canvas is `#090a0f`. Elevated panels and interactive cards transition to `#0f1117`, with surface overlays reaching `#161922` for hover states and modal panels.
- **Structural Boundaries:** Borders, horizontal rules, and grid separators sit strictly at `#1f2430` (1px solid). Secondary subtle boundaries utilize `#161a23`.
- **Text & Foreground:** Core display text is `#f8fafc`. Secondary body content utilizes `#94a3b8`. Muted technical metadata, timestamps, and mono tags use `#64748b`.
- **Accent Signals:** The primary electric accent `#38bdf8` serves as an interactive beacon (focus indicators, terminal status lights, highlighted syntax tokens, active states). The cobalt tone `#2563eb` provides supporting visual grounding for interactive states, gradients, and primary selection fills.

## Typography

Typography establishes an editorial technical balance:

- **Headlines & Body:** Set in **Plus Jakarta Sans**, providing clarity, modern proportion, and tight letter-tracking for punchy headers.
- **Labels, Metrics & Code:** Set in **Geist**, introducing an engineer's workbench aesthetic for tags, code snippets, timestamps, metrics, and secondary attributes.
- **Weight Pairing:** Avoid heavy weights across long prose; reserve `700` for hero displays, `600` for sectional headers, and default body copy to `400`.

## Layout & Spacing

The layout is built on a responsive 12-column grid capped at a maximum width of 1200px to maintain editorial line lengths.

- **Desktop (1024px+):** 12-column grid with 24px (`1.5rem`) gutters and generous 48px (`3rem`) page margins. Section blocks use `space-3xl` or `space-4xl` vertical spacing to generate intentional, open pauses between technical narratives.
- **Tablet (768px - 1023px):** 8-column layout with 20px gutters. Vertical spacing compresses by one step.
- **Mobile (< 768px):** 4-column layout with 16px gutters and 20px outer margin padding. Content flows into unified vertical stacks. Cards shed horizontal internal padding to preserve reading width.

## Elevation & Depth

Depth is established strictly through **tonal layering** and **crisp 1px borders** rather than physical drop shadows.

- **Base Layer:** `#090a0f` canvas background.
- **Layer 1 (Cards, Code Blocks):** `#0f1117` background with a 1px solid `#1f2430` border.
- **Layer 2 (Hover States, Popovers):** `#161922` background with a 1px solid `#2d3545` border, accompanied by a subtle ambient radial glow (`0 0 24px rgba(56, 189, 248, 0.06)`).
- **Floating Overlays & Dialogs:** `#0f1117` with a 95% opacity backdrop blur (`backdrop-filter: blur(12px)`) and a 1px boundary of `#2d3545`. Heavy drop shadows are omitted entirely to keep the interface crisp, lightweight, and flat.

## Shapes

The design uses tight, technical corners (`roundedness: 1`):

- **Inputs, Chips, and Buttons:** `rounded` (4px / 0.25rem) to evoke precision-milled hardware panels.
- **Cards, Code Panels, and Containers:** `rounded-lg` (8px / 0.5rem) to cleanly frame content without appearing bubble-like or toy-like.
- **Modals & Flyouts:** `rounded-xl` (12px / 0.75rem) to distinguish parent floating states.

## Components

### Buttons
- **Primary:** Solid `#2563eb` or `#38bdf8` fill with high-contrast text (`#090a0f` or `#ffffff`), 4px border radius, 8px 16px padding, `label-mono` or `body-md` typography. Hover creates a subtle luminescent overlay without scaling up.
- **Secondary / Ghost:** Transparent background with a 1px `#1f2430` border, `#94a3b8` text. Hover shifts border to `#38bdf8` and text to `#f8fafc`.

### Cards & Project Containers
- Default background `#0f1117` enclosed in a 1px border of `#1f2430`. No default shadow.
- Inner padding fixed at 24px (`space-lg`).
- Hover state smoothly transitions the outer border to `#38bdf8` (at 40% opacity) and applies an internal highlight top-border line (1px gradient from `#38bdf8` to transparent).

### Chips & Tags
- Set in Geist Mono (`label-mono`, uppercase, tracked out).
- Background `#161922`, 1px border `#1f2430`, color `#94a3b8`.
- Status indicator tags integrate a 6px circular dot (`#38bdf8` or `#22c55e`).

### Input Fields
- Background `#090a0f`, border 1px `#1f2430`, color `#f8fafc`, placeholder `#64748b`.
- Focus state: border shifts to `#38bdf8`, with an outline offset of 0px and a 1px halo ring (`rgba(56, 189, 248, 0.25)`).

### Lists & Key-Value Technical Pairs
- Items separated by 1px horizontal borders (`#1f2430`).
- Left side displays Geist Mono metadata (`#64748b`), right side displays standard body content (`#f8fafc`).

### Checkboxes & Radios
- Box size 16px × 16px, background `#090a0f`, border 1px `#1f2430`.
- Checked state: `#2563eb` fill with a sharp white checkmark or center pip.