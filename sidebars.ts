import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Phase 0 — Think Like an Engineer',
      items: [
        'phase-0/chapter-1-what-makes-an-engineer-different',
        'phase-0/chapter-2-first-principles-thinking',
        'phase-0/chapter-3-systems-thinking',
        'phase-0/chapter-4-abstraction',
        'phase-0/chapter-5-trade-offs',
        'phase-0/chapter-6-complexity',
        'phase-0/chapter-7-root-cause-analysis',
        'phase-0/chapter-8-modeling',
        'phase-0/chapter-9-constraints-optimization',
        'phase-0/chapter-10-engineering-decision-making',
        'phase-0/glossary',
      ],
    },
  ],
};

export default sidebars;
