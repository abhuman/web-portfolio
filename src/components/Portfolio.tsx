export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />
        <div className="relative max-w-6xl mx-auto px-6 py-28">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur mb-8">
            <span className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse" />
            Open to Software Engineering &amp; AI Developer Experience Roles
          </div>

          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95] max-w-5xl">
            Building AI-native
            <br />
            developer experiences.
          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
            I&apos;m Abir Roy — a Software Engineer and Developer Advocate focused on scalable applications,
            AI-powered workflows, APIs, automation systems, and developer tooling.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://github.com/abhuman"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white text-black px-6 py-3 font-medium hover:scale-105 transition"
            >
              View GitHub
            </a>

            <a
              href="https://linkedin.com/in/theabirroy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 border-b border-white/10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">About</p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Engineer.
            <br />
            Builder.
            <br />
            Community Leader.
          </h2>
        </div>

        <div>
          <p className="text-zinc-400 leading-relaxed text-lg">
            Led a 500+ member Google Developer Student Club community and conducted 15+
            workshops impacting over 1,000 developers. I build scalable applications,
            AI-powered developer workflows, automation systems, and modern web experiences
            focused on performance, usability, and engineering excellence.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              'Python',
              'JavaScript',
              'React',
              'Node.js',
              'OpenAI APIs',
              'REST APIs',
              'SQL',
              'Automation'
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-300 backdrop-blur"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-white/10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Selected Work</p>
            <h2 className="text-5xl font-semibold tracking-tight">Projects</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'AI Developer Copilot',
              desc: 'AI-powered developer assistant for API debugging, workflow automation, and structured engineering support using OpenAI APIs.',
            },
            {
              title: 'Multimodal AI Knowledge Assistant',
              desc: 'Semantic retrieval and conversational AI system for technical documentation understanding and developer Q&A.',
            },
            {
              title: 'Creator Analytics Platform',
              desc: 'Real-time analytics dashboard using React, Node.js, APIs, and scalable reporting workflows.',
            },
            {
              title: 'Workflow Automation Engine',
              desc: 'Automation infrastructure integrating APIs, structured data pipelines, and intelligent orchestration systems.',
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-lg font-semibold">
                  ✦
                </div>
                <span className="text-zinc-500 text-sm">2026</span>
              </div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-zinc-200 transition">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {project.desc}
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                {['React', 'APIs', 'AI', 'Node.js'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-b border-white/10">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">Experience</p>

        <div className="space-y-12">
          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start">
            <div>
              <h3 className="text-3xl font-semibold">Google Developer Student Club</h3>
              <p className="text-zinc-400 mt-3 leading-relaxed max-w-3xl">
                Led a 500+ member engineering community and organized technical workshops,
                developer events, AI showcases, and hands-on engineering initiatives.
              </p>
            </div>
            <div className="text-zinc-500 md:text-right">2023 — 2024</div>
          </div>

          <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start">
            <div>
              <h3 className="text-3xl font-semibold">Freelance Software Engineer</h3>
              <p className="text-zinc-400 mt-3 leading-relaxed max-w-3xl">
                Built scalable automation systems, API-driven workflows, developer tooling,
                and backend engineering systems focused on reliability and usability.
              </p>
            </div>
            <div className="text-zinc-500 md:text-right">2024 — Present</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-10 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let&apos;s build something exceptional.
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Interested in software engineering, AI-native systems, developer platforms,
            or scalable applications? Let&apos;s connect.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <a
              href="mailto:royabir96321@gmail.com"
              className="rounded-2xl bg-white text-black px-6 py-3 font-medium hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/abhuman"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-6 py-3 font-medium hover:bg-white/5 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
