import { ArrowUpRight, Check, Mail } from 'lucide-react';
import Twin from '@/components/twin';

const stats = [
    { value: '14 yrs', label: 'engineering rigor in quality systems' },
    { value: '500K+', label: 'lines migrated with LLM assistance in ~3 months' },
    { value: '3,500', label: 'validation scenarios across 50+ modules' },
];

const projects = [
    {
        title: 'RAG knowledge agent',
        body: 'Embeds scattered enterprise knowledge (PRDs, Jira tickets, user guides) into a vector knowledge base, then drafts grounded, traceable test cases. It cut authoring effort across the org.',
        tags: ['RAG', 'Embeddings', 'Semantic search'],
    },
    {
        title: 'Self-correcting multi-agent coder',
        body: 'A LangGraph-orchestrated system that generates executable Playwright code, with self-review and self-correction stages that reduce defects and rework.',
        tags: ['LangGraph', 'Multi-agent', 'TypeScript'],
    },
    {
        title: 'LLM-assisted modernization',
        body: 'Translated, refactored and validated a 500K+ line legacy codebase from Java/Selenium to TypeScript/Playwright. Delivered and stabilized in about 3 months.',
        tags: ['Claude', 'GPT', 'Migration'],
    },
];

const evaluationChecks = [
    'Evaluation frameworks',
    'Guardrails',
    'Hallucination measurement',
    'Regression harnesses for agent outputs',
    'Output-consistency checks',
    'Flakiness measurement for generated code',
];

const stack = [
    'LangGraph', 'LangChain', 'AutoGen', 'RAG', 'MCP', 'Python', 'TypeScript',
    'Claude & GPT APIs', 'Ollama', 'Hugging Face', 'Docker', 'Jenkins', 'AWS',
];

const career = [
    { period: '2025 – now', role: 'Principal Engineer, Agentic AI', company: 'LogiNext' },
    { period: '2021 – 2024', role: 'QA Test Lead', company: 'S&P Dow Jones Indices' },
    { period: '2017 – 2021', role: 'Sr Analyst', company: 'S&P Dow Jones Indices' },
    { period: '2016 – 2017', role: 'Senior Software Engineer', company: 'Rolta BI and Big Data' },
    { period: '2011 – 2016', role: 'Senior Software Test Engineer', company: 'Capgemini' },
];

const credentials = [
    'AWS Cloud Practitioner',
    'ISTQB Certified',
    'Anthropic: Claude Code in Action',
    'Anthropic: Building with the Claude API',
    'German A1 (Goethe)',
    'B.E. Information Technology, University of Mumbai',
];

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted mb-5">
            {children}
        </h2>
    );
}

export default function Home() {
    return (
        <main className="flex-1 mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(380px,440px)] lg:grid-rows-[auto_1fr] lg:gap-x-16">
            {/* Introduction */}
            <header className="pt-10 pb-10 lg:pt-20 lg:pb-14">
                <p className="inline-flex items-center gap-2 font-mono text-xs text-accent">
                    <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                    Open to AI, GenAI and LLM Engineer roles in Germany &amp; EU
                </p>

                <h1 className="font-display text-6xl sm:text-7xl xl:text-8xl leading-none tracking-tight mt-6">
                    Vaibhav Sawant
                </h1>

                <p className="text-xl sm:text-2xl leading-snug mt-6 max-w-2xl text-balance">
                    I build agentic AI systems, and I test them with 14 years of quality
                    engineering behind me.
                </p>

                <p className="text-muted leading-relaxed mt-4 max-w-2xl">
                    Most AI engineers are strong at building and weak at evaluation. As LLM
                    systems move into production, that is the gap teams feel first, and it is
                    the one I close.
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-7 text-sm">
                    <a
                        href="https://www.linkedin.com/in/sawant-vaibhav"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
                    >
                        LinkedIn
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                        href="mailto:vaibhav26sawant@gmail.com"
                        className="inline-flex items-center gap-1.5 font-medium underline decoration-line underline-offset-4 hover:decoration-accent"
                    >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        vaibhav26sawant@gmail.com
                    </a>
                    <span className="text-muted">Munich, Germany · Immediate joining</span>
                </div>
            </header>

            {/* Digital twin */}
            <aside className="lg:col-start-2 lg:row-start-1 lg:row-span-2" aria-label="Chat with my digital twin">
                <div className="h-[600px] lg:h-[calc(100dvh-3rem)] lg:max-h-[820px] lg:sticky lg:top-6 lg:mt-6">
                    <Twin />
                </div>
            </aside>

            {/* Background */}
            <div className="pt-12 lg:pt-0 pb-12 space-y-14">
                <dl className="grid sm:grid-cols-3 border-y border-line divide-y sm:divide-y-0 sm:divide-x divide-line">
                    {stats.map((stat) => (
                        <div key={stat.value} className="py-5 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                            <dd className="font-display text-4xl">{stat.value}</dd>
                            <dt className="text-sm text-muted mt-1">{stat.label}</dt>
                        </div>
                    ))}
                </dl>

                <section>
                    <SectionLabel>What I&apos;ve built</SectionLabel>
                    <div className="divide-y divide-line border-y border-line">
                        {projects.map((project) => (
                            <article key={project.title} className="py-6">
                                <h3 className="font-display text-3xl">{project.title}</h3>
                                <p className="text-muted leading-relaxed mt-2">{project.body}</p>
                                <p className="font-mono text-xs text-accent mt-3">
                                    {project.tags.join(' · ')}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section>
                    <SectionLabel>How I keep agents honest</SectionLabel>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                        {evaluationChecks.map((check) => (
                            <li key={check} className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded bg-accent-soft text-accent flex items-center justify-center">
                                    <Check className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
                                </span>
                                {check}
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <SectionLabel>Stack</SectionLabel>
                    <ul className="flex flex-wrap gap-2">
                        {stack.map((item) => (
                            <li key={item} className="font-mono text-xs border border-line rounded px-2.5 py-1.5">
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                <section>
                    <SectionLabel>Career</SectionLabel>
                    <ol className="divide-y divide-line border-y border-line">
                        {career.map((job) => (
                            <li key={job.period} className="py-3.5 grid sm:grid-cols-[7.5rem_1fr] gap-x-4">
                                <span className="font-mono text-xs text-muted sm:pt-1">{job.period}</span>
                                <span>
                                    <span className="font-medium">{job.role}</span>
                                    <span className="text-muted"> · {job.company}</span>
                                </span>
                            </li>
                        ))}
                    </ol>
                </section>

                <section>
                    <SectionLabel>Credentials</SectionLabel>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-muted">
                        {credentials.map((credential) => (
                            <li key={credential}>{credential}</li>
                        ))}
                    </ul>
                </section>

                <footer className="border-t border-line pt-6 text-sm text-muted space-y-2">
                    <p>Away from the keyboard: certified yoga instructor and mental health advocate in tech.</p>
                    <p className="font-mono text-xs">
                        This site: Next.js on S3 → API Gateway → AWS Lambda → gpt-4o-mini
                    </p>
                </footer>
            </div>
        </main>
    );
}
