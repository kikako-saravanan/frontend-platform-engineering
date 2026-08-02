import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Build everything. Understand everything. Question everything.
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/phase-0/chapter-1-what-makes-an-engineer-different">
            Start Learning - Phase 0 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Learn Front End Platform Engineering from first principles. Master systems thinking, abstraction, trade-offs, and complexity management.">
      <HomepageHeader />
      <main>
        <div className="container">
          <div className={styles.content}>
            <Heading as="h2">Welcome</Heading>
            <p>
              Welcome to my engineering journey. This GitBook documents my goal of becoming a world-class Frontend Platform Engineer by rebuilding frontend engineering from first principles.
            </p>
            <p>
              This is not another tutorial that teaches frameworks or APIs. Instead, every concept is explored by answering one fundamental question: <strong>Why does this exist?</strong>
            </p>
            <p>
              Rather than memorizing technologies, I aim to understand the problems they solve, the trade-offs they introduce, and how they are used to build production systems at scale.
            </p>
            <p>
              By the end of this journey, I will have built a complete frontend platform from scratch and documented every architectural decision along the way.
            </p>

            <Heading as="h2">Mission</Heading>
            <p>
              The mission of this repository is to understand frontend engineering deeply enough that I can:
            </p>
            <ul>
              <li>Build production-grade frontend applications</li>
              <li>Design and maintain enterprise Design Systems</li>
              <li>Architect scalable frontend platforms</li>
              <li>Build developer tooling and frameworks</li>
              <li>Understand browser internals</li>
              <li>Lead frontend architecture discussions</li>
              <li>Clear Senior and Staff Frontend Engineer interviews at Fortune 100 companies</li>
              <li>Continuously learn by reasoning from first principles instead of memorizing APIs</li>
            </ul>

            <Heading as="h2">Learning Philosophy</Heading>
            <p>Everything in this repository follows one simple principle:</p>
            <div className={styles.learningFlow}>
              <div className={styles.flowStep}>Problem</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>First Principles</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>Mental Model</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>Theory</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>Implementation</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>Production Usage</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>Trade-offs</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>Interview Perspective</div>
              <div className={styles.flowArrow}>↓</div>
              <div className={styles.flowStep}>Revision Notes</div>
            </div>
            <p>Instead of asking <em>"How do I use React?"</em>, I will ask <em>"Why was React invented?"</em></p>
            <p>Instead of asking <em>"How do Design Tokens work?"</em>, I will ask <em>"What problem made Design Tokens necessary?"</em></p>
            <p>This philosophy applies to every technology covered in this repository.</p>

            <Heading as="h2">Course Roadmap</Heading>
            <p>The journey is divided into progressive phases.</p>
            
            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 0 — Engineering Mindset</Heading>
              <ul>
                <li>First Principles Thinking</li>
                <li>Systems Thinking</li>
                <li>Abstraction</li>
                <li>Trade-offs</li>
                <li>Complexity</li>
                <li>Root Cause Analysis</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 1 — Computer Science Foundations</Heading>
              <ul>
                <li>Computer Architecture</li>
                <li>Memory</li>
                <li>Processes</li>
                <li>Threads</li>
                <li>Networking</li>
                <li>Data Structures</li>
                <li>Algorithms for Frontend Engineers</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 2 — Browser Engineering</Heading>
              <ul>
                <li>How the Internet Works</li>
                <li>DNS</li>
                <li>HTTP</li>
                <li>Browser Architecture</li>
                <li>Rendering Pipeline</li>
                <li>DOM</li>
                <li>CSSOM</li>
                <li>Rendering Performance</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 3 — HTML</Heading>
              <ul>
                <li>Semantic HTML</li>
                <li>Forms</li>
                <li>Accessibility</li>
                <li>SEO</li>
                <li>Web Components</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 4 — CSS</Heading>
              <ul>
                <li>Cascade</li>
                <li>Specificity</li>
                <li>Layout</li>
                <li>Flexbox</li>
                <li>Grid</li>
                <li>Responsive Design</li>
                <li>Animations</li>
                <li>CSS Variables</li>
                <li>Rendering</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 5 — JavaScript</Heading>
              <ul>
                <li>Execution Context</li>
                <li>Closures</li>
                <li>Event Loop</li>
                <li>Promises</li>
                <li>Async Programming</li>
                <li>Objects</li>
                <li>Prototypes</li>
                <li>Modules</li>
                <li>Functional Programming</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 6 — TypeScript</Heading>
              <ul>
                <li>Type System</li>
                <li>Generics</li>
                <li>Utility Types</li>
                <li>Advanced Type Patterns</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 7 — React</Heading>
              <ul>
                <li>Rendering</li>
                <li>Reconciliation</li>
                <li>Fiber</li>
                <li>Hooks</li>
                <li>Suspense</li>
                <li>Server Components</li>
                <li>Concurrent Rendering</li>
                <li>Hydration</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 8 — Frontend Architecture</Heading>
              <ul>
                <li>Clean Architecture</li>
                <li>SOLID</li>
                <li>Feature-based Architecture</li>
                <li>Monorepos</li>
                <li>Nx</li>
                <li>Turborepo</li>
                <li>Module Federation</li>
                <li>Microfrontends</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 9 — Design Systems</Heading>
              <ul>
                <li>Design Tokens</li>
                <li>Theme Engine</li>
                <li>Component Library</li>
                <li>Storybook</li>
                <li>Accessibility</li>
                <li>Documentation</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 10 — Enterprise Components</Heading>
              <p>Build production-ready components from scratch:</p>
              <ul>
                <li>Button</li>
                <li>Input</li>
                <li>Checkbox</li>
                <li>Select</li>
                <li>Modal</li>
                <li>Table</li>
                <li>Tree</li>
                <li>Tooltip</li>
                <li>Date Picker</li>
                <li>Rich Text Editor</li>
                <li>Command Palette</li>
                <li>And many more</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 11 — Performance Engineering</Heading>
              <ul>
                <li>Critical Rendering Path</li>
                <li>Web Vitals</li>
                <li>Code Splitting</li>
                <li>Tree Shaking</li>
                <li>Lazy Loading</li>
                <li>Memory Optimization</li>
                <li>Profiling</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 12 — Testing</Heading>
              <ul>
                <li>Unit Testing</li>
                <li>Integration Testing</li>
                <li>Accessibility Testing</li>
                <li>End-to-End Testing</li>
                <li>Visual Regression</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 13 — Platform Engineering</Heading>
              <ul>
                <li>CLI Development</li>
                <li>Build Tools</li>
                <li>Vite Plugins</li>
                <li>Webpack Plugins</li>
                <li>Developer Experience</li>
                <li>Automation</li>
              </ul>
            </div>

            <div className={styles.phaseSection}>
              <Heading as="h3">Phase 14 — Staff Engineering</Heading>
              <ul>
                <li>Technical Leadership</li>
                <li>Architecture Decision Records (ADRs)</li>
                <li>RFC Writing</li>
                <li>Migration Planning</li>
                <li>Technical Strategy</li>
                <li>Engineering Influence</li>
                <li>Frontend System Design</li>
              </ul>
            </div>

            <Heading as="h2">Capstone Project</Heading>
            <p>
              Throughout this journey, I will continuously build one production-grade frontend platform. By the end, it will include:
            </p>
            <ul>
              <li>Enterprise Dashboard</li>
              <li>Authentication & Authorization</li>
              <li>Admin Portal</li>
              <li>Design System</li>
              <li>Storybook</li>
              <li>Theme Engine</li>
              <li>Component Library</li>
              <li>Accessibility</li>
              <li>Performance Optimization</li>
              <li>Internationalization</li>
              <li>Testing</li>
              <li>CI/CD</li>
              <li>Docker</li>
              <li>Production Deployment</li>
            </ul>
            <p>Every concept learned during the course will be applied to this project.</p>

            <Heading as="h2">Repository Structure</Heading>
            <p>This GitBook is organized into the following sections:</p>
            <ul>
              <li><strong>Documentation</strong> — Detailed engineering notes for every phase.</li>
              <li><strong>API Reference</strong> — Documentation for the libraries, components, utilities, and tools built during this journey.</li>
              <li><strong>Changelog</strong> — Milestones, progress updates, and version history.</li>
              <li><strong>Help Center</strong> — Frequently asked engineering questions, interview notes, and troubleshooting.</li>
            </ul>

            <Heading as="h2">How to Use This Repository</Heading>
            <p>Every chapter follows a consistent structure:</p>
            <ul>
              <li>Problem</li>
              <li>First Principles</li>
              <li>Mental Model</li>
              <li>Theory</li>
              <li>Implementation</li>
              <li>Production Usage</li>
              <li>Trade-offs</li>
              <li>Interview Perspective</li>
              <li>Exercises</li>
              <li>Revision Notes</li>
            </ul>
            <p>This makes the repository useful for both learning and long-term revision.</p>

            <Heading as="h2">Goals</Heading>
            <p>By the completion of this journey, I aim to:</p>
            <ul>
              <li>Think like an engineer instead of memorizing frameworks.</li>
              <li>Understand the "why" behind every frontend technology.</li>
              <li>Build production-quality software from first principles.</li>
              <li>Create a public portfolio demonstrating senior-level engineering skills.</li>
              <li>Be prepared for Senior and Staff Frontend Engineer interviews at Fortune 100 companies.</li>
            </ul>

            <Heading as="h2">Guiding Principles</Heading>
            <ul>
              <li>Understand before memorizing.</li>
              <li>Solve problems before choosing tools.</li>
              <li>Simplicity over unnecessary complexity.</li>
              <li>Build from first principles.</li>
              <li>Learn by building.</li>
              <li>Document everything.</li>
              <li>Optimize for long-term understanding rather than short-term speed.</li>
            </ul>

            <blockquote className={styles.quote}>
              "Technology changes. Engineering thinking does not."
            </blockquote>
          </div>
        </div>
      </main>
    </Layout>
  );
}
