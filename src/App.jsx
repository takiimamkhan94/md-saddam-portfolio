import { useEffect, useState } from 'react'
import {
  ArrowUp,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Contact,
  Download,
  Linkedin,
  FolderKanban,
  GraduationCap,
  Home,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { portfolioData, navItems } from './data/portfolioData'
import {
  SectionHeading,
  SectionShell,
  GlowButton,
  StatCounter,
  BadgePill,
  TimelineItem,
  SkillCard,
  ProjectCard,
  StrengthCard,
} from './components/PortfolioComponents'

const iconMap = {
  home: Home,
  about: Sparkles,
  skills: Code2,
  experience: Briefcase,
  projects: FolderKanban,
  achievements: Award,
  strengths: ShieldCheck,
  education: GraduationCap,
  contact: Contact,
}

const sectionIcons = {
  about: Sparkles,
  skills: Layers3,
  experience: Briefcase,
  projects: FolderKanban,
  achievements: Award,
  strengths: ShieldCheck,
  education: BookOpen,
  contact: Contact,
}

const contactIconMap = {
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-45% 0px -40% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  const fadeInUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: 'easeOut' },
        }

  return (
    <div className="relative overflow-hidden bg-base-950 text-slate-100 selection:bg-cyan-400/20 selection:text-cyan-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(51,133,255,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(70,215,255,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(107,123,255,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:72px_72px] opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_20%_10%,rgba(70,215,255,0.17),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(91,108,255,0.16),transparent_28%)]" />

      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/72 px-3 py-3 shadow-[0_20px_60px_rgba(2,8,23,0.38)] backdrop-blur-2xl sm:rounded-full sm:px-5 sm:py-4 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="group flex min-w-0 items-center gap-3 text-left"
            aria-label="Go to top"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-white/5 shadow-glow transition duration-300 group-hover:scale-[1.03] group-hover:border-cyan-300/50 group-hover:bg-cyan-300/10 sm:h-11 sm:w-11">
              <span className="font-display text-base font-bold tracking-[0.22em] text-cyan-200 sm:text-lg sm:tracking-[0.28em]">MS</span>
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-xs tracking-[0.18em] text-slate-200 sm:text-sm sm:tracking-[0.28em]">
                MOHAMMED SADDAM HUSSAIN
              </p>
              <p className="hidden text-xs text-slate-400 sm:block">Associate Principal Engineer</p>
            </div>
          </button>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map(({ id, label }) => {
              const Icon = iconMap[id]
              const isActive = activeSection === id

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? 'bg-cyan-400/12 text-cyan-100 shadow-[0_0_0_1px_rgba(103,232,249,0.18)]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon size={15} />
                  <span>{label}</span>
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-3 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 shadow-inset sm:h-11 sm:w-11 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/10 bg-slate-950/95 px-4 py-4 shadow-card backdrop-blur xl:hidden lg:hidden sm:px-5"
            >
              <div className="mx-auto grid max-w-7xl gap-2">
                {navItems.map(({ id, label }) => {
                  const Icon = iconMap[id]

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => scrollToSection(id)}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${
                        activeSection === id
                          ? 'bg-cyan-400/12 text-cyan-100'
                          : 'bg-white/[0.03] text-slate-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{label}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative isolate px-3 pt-5 sm:px-5 sm:pt-8">
          <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-1 pb-16 pt-10 sm:gap-14 sm:px-1 sm:pb-24 sm:pt-14 lg:min-h-screen lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-32 lg:pt-20">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -14, 0], opacity: [0.5, 0.8, 0.5] }}
              transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute left-[6%] top-24 hidden h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl lg:block"
            />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 16, 0], opacity: [0.4, 0.72, 0.4] }}
              transition={reduceMotion ? undefined : { duration: 11, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute right-[8%] top-40 hidden h-56 w-56 rounded-full bg-indigo-400/12 blur-3xl lg:block"
            />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative z-10 max-w-4xl text-center lg:text-left"
            >
              <motion.div {...fadeInUp(0.02)}>
                <BadgePill icon={Sparkles}>{portfolioData.hero.eyebrow}</BadgePill>
              </motion.div>
              <motion.div
                {...fadeInUp(0.08)}
                className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm sm:mt-7 sm:gap-3 lg:justify-start"
              >
                <span className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-100 shadow-glow sm:px-4 sm:text-sm sm:tracking-[0.16em]">
                  {portfolioData.hero.title}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] leading-5 text-slate-300 shadow-inset sm:px-4 sm:text-sm">
                  QA Automation | SDET | Enterprise Quality Engineering
                </span>
              </motion.div>

              <motion.h1
                {...fadeInUp(0.14)}
                className="mt-6 max-w-5xl font-display text-[2.55rem] font-bold uppercase leading-[0.88] tracking-[0.02em] text-white sm:mt-8 sm:text-[4.35rem] lg:text-[6rem]"
              >
                <span className="block text-slate-100/96">MOHAMMED</span>
                <span className="block bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent">
                  SADDAM
                </span>
                <span className="block text-slate-300">HUSSAIN</span>
              </motion.h1>

              <motion.p
                {...fadeInUp(0.2)}
                className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200 sm:mt-6 sm:text-2xl sm:leading-10 lg:mx-0"
              >
                {portfolioData.hero.subtitle}
              </motion.p>

              <motion.p
                {...fadeInUp(0.26)}
                className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:mt-7 sm:text-lg sm:leading-9 lg:mx-0"
              >
                {portfolioData.hero.summary}
              </motion.p>

              <div className="mx-auto mt-7 grid max-w-2xl gap-3 text-left sm:mt-8 lg:mx-0">
                {portfolioData.hero.signalPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    {...fadeInUp(0.32 + index * 0.06)}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base"
                  >
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-200" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-start lg:gap-4">
                {portfolioData.hero.ctas.map((cta, index) => {
                  const icon =
                    cta.label === 'View Experience' ? ArrowRight : cta.label === 'Download Resume' ? Download : cta.label === 'Contact Me' ? Mail : Briefcase

                  const Icon = icon

                  return (
                    <motion.div
                      key={cta.label}
                      {...fadeInUp(0.5 + index * 0.05)}
                    >
                      <GlowButton
                        kind={cta.kind}
                        href={cta.href}
                        download={cta.download}
                        onClick={cta.href.startsWith('#') ? () => scrollToSection(cta.href.slice(1)) : undefined}
                      >
                        <span className="flex items-center gap-2">
                          <span>{cta.label}</span>
                          <motion.span
                            whileHover={reduceMotion ? undefined : { x: 2 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                          >
                            <Icon size={16} />
                          </motion.span>
                        </span>
                      </GlowButton>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3 lg:justify-start">
                {portfolioData.hero.trustBadges.map((badge, index) => (
                  <motion.span
                    key={badge}
                    {...fadeInUp(0.62 + index * 0.05)}
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-200 shadow-inset sm:px-4 sm:py-2.5 sm:text-xs sm:tracking-[0.16em]"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
              className="relative order-first lg:order-none"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_20%,rgba(70,215,255,0.28),transparent_38%),radial-gradient(circle_at_50%_80%,rgba(107,123,255,0.2),transparent_38%)] blur-2xl" />
              <div className="premium-panel relative p-4 sm:p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                <div className="grid gap-5">
                  <div className="premium-subpanel rounded-[1.4rem] border-cyan-300/15 bg-slate-900/72 p-4 sm:rounded-[1.6rem] sm:p-6">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-200/80">Executive Snapshot</p>
                        <h2 className="text-balance mt-3 font-display text-xl leading-tight text-white sm:text-[2rem]">
                          Senior-level test leadership with hands-on automation credibility.
                        </h2>
                      </div>
                      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-2.5 text-cyan-100 sm:p-3">
                        <ShieldCheck size={22} className="sm:h-[26px] sm:w-[26px]" />
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:mt-6 sm:gap-4 sm:grid-cols-2">
                      {portfolioData.hero.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="premium-subpanel p-4"
                        >
                          <p className="font-display text-3xl font-bold text-white">{metric.value}</p>
                          <p className="mt-2 text-sm leading-7 text-slate-300">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
                    {portfolioData.hero.proofStrip.map((item, index) => (
                      <motion.div
                        key={item.label}
                        whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: index * 0.02 }}
                        className="premium-subpanel p-4"
                      >
                        <p className="font-display text-xl font-semibold text-white">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                    {portfolioData.hero.floatingCards.map((card, index) => (
                      <motion.div
                        key={card.title}
                        animate={reduceMotion ? {} : { y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
                        transition={{
                          duration: 6 + index,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="premium-subpanel rounded-[1.6rem] p-5"
                      >
                        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{card.title}</p>
                        <p className="mt-3 text-lg font-semibold leading-7 text-white">{card.value}</p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <SectionShell id="about">
          <SectionHeading
            icon={sectionIcons.about}
            eyebrow="Profile"
            title="A senior automation engineer trusted for framework depth and delivery clarity."
            description={portfolioData.about.summary}
          />

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="premium-panel p-6 sm:p-8">
              <div className="grid gap-6">
                {portfolioData.about.highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.42, delay: index * 0.06 }}
                    className="premium-subpanel p-5 sm:p-6"
                  >
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-8 text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="premium-panel bg-gradient-to-b from-cyan-300/10 to-transparent p-6 shadow-glow">
              <p className="text-[11px] uppercase tracking-[0.34em] text-cyan-100/90">Professional Facts</p>
              <div className="mt-6 grid gap-4">
                {portfolioData.about.sidePanel.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="premium-subpanel p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-base font-semibold leading-7 text-white">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="skills">
          <SectionHeading
            icon={sectionIcons.skills}
            eyebrow="Core Capabilities"
            title="Deep technical coverage across automation, APIs, backend validation, and enterprise delivery."
            description="The portfolio is organized around real execution strengths rather than keyword stuffing, so recruiters can scan the stack quickly and still understand the depth."
          />
          <div className="grid gap-5 sm:gap-6 xl:grid-cols-2">
            {portfolioData.skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="experience">
          <SectionHeading
            icon={sectionIcons.experience}
            eyebrow="Career Journey"
            title="A progression shaped by enterprise scale, domain complexity, and hands-on automation leadership."
            description="From marine logistics and healthcare to banking and capital markets, each role expanded scope across test strategy, automation, backend validation, and team coordination."
          />

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300/40 via-indigo-400/20 to-transparent md:block" />
            <div className="grid gap-4 sm:gap-6">
              {portfolioData.experience.map((role) => (
                <TimelineItem key={`${role.company}-${role.duration}`} role={role} />
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="projects">
          <SectionHeading
            icon={sectionIcons.projects}
            eyebrow="Featured Work"
            title="Programs and platforms where automation quality translated into delivery confidence."
            description="Each project card highlights the business domain, tooling, and the kind of testing impact senior leaders care about: reliability, efficiency, and stronger release readiness."
          />

          <div className="grid gap-5 sm:gap-6 xl:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="achievements">
          <SectionHeading
            icon={sectionIcons.achievements}
            eyebrow="Credentials"
            title="Recognition built through consistency, enterprise exposure, and delivery-focused quality ownership."
            description="A snapshot of the experience depth, formal credentials, and recognitions that reinforce seniority without overselling the profile."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                {portfolioData.achievementStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.42, delay: index * 0.05 }}
                  className="premium-panel p-6"
                >
                  <StatCounter value={item.value} suffix={item.suffix} />
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="premium-panel bg-gradient-to-br from-cyan-300/10 via-white/[0.04] to-indigo-400/10 p-6 shadow-glow">
              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100">Recognition Highlights</p>
              <div className="mt-6 grid gap-4">
                {portfolioData.achievements.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="premium-subpanel p-4"
                  >
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="strengths">
          <SectionHeading
            icon={sectionIcons.strengths}
            eyebrow="Professional Strengths"
            title="The areas that make this profile particularly valuable for senior QA, SDET, and quality engineering leadership roles."
            description="These strengths combine delivery execution, technical depth, and business awareness, which is often the differentiator for senior-level recruiter conversations."
          />

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.strengths.map((strength) => (
              <StrengthCard key={strength.title} strength={strength} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="education">
          <SectionHeading
            icon={sectionIcons.education}
            eyebrow="Learning"
            title="Academic foundation and certifications that complement a strong hands-on engineering track record."
            description="Presented clearly for recruiters who want a quick credential check without losing sight of the deeper delivery experience."
          />

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {portfolioData.education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                className="premium-panel p-6"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/80">{item.type}</p>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.institution}</p>
                <p className="mt-4 text-sm font-medium text-slate-200">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="contact">
          <SectionHeading
            icon={sectionIcons.contact}
            eyebrow="Let's Connect"
            title="Open to conversations around senior QA automation, SDET leadership, and enterprise quality engineering roles."
            description="The form is structured for future EmailJS or Formspree integration, while the direct contact panel keeps recruiter outreach friction low."
          />

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="premium-panel bg-gradient-to-b from-cyan-300/10 to-transparent p-6 shadow-glow">
              <p className="text-[11px] uppercase tracking-[0.32em] text-cyan-100">Direct Contact</p>
              <div className="mt-6 grid gap-3 sm:gap-4">
                {portfolioData.contact.details.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    aria-label={item.label}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                    whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="premium-subpanel group p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100 transition group-hover:border-cyan-300/35 group-hover:bg-cyan-300/16">
                        {(() => {
                          const Icon = contactIconMap[item.icon]
                          return Icon ? <Icon size={18} /> : null
                        })()}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                        <p className="mt-2 text-base font-semibold leading-7 text-white transition group-hover:text-cyan-50">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="premium-subpanel mt-6 p-4">
                <p className="text-sm font-semibold text-white">Recruiter-Friendly Intro</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{portfolioData.contact.pitch}</p>
              </div>
            </div>

            <form className="premium-panel p-6">
              <div className="grid gap-5">
                {portfolioData.contact.formFields.map((field) => (
                  <label key={field.name} className="grid gap-2">
                    <span className="text-sm font-medium text-slate-200">{field.label}</span>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        rows={6}
                        placeholder={field.placeholder}
                        className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-slate-950"
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-slate-950"
                      />
                    )}
                  </label>
                ))}
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-6 text-slate-400">
                  Open to discussing QA automation, test strategy, engineering quality, and leadership opportunities.
                </p>
                <GlowButton kind="primary" href="#contact">
                  Send Message
                </GlowButton>
              </div>
            </form>
          </div>
        </SectionShell>

        <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="premium-panel bg-gradient-to-r from-cyan-300/10 via-white/[0.04] to-indigo-400/10 p-5 shadow-glow sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100">Recruiter Call To Action</p>
                  <h2 className="text-balance mt-3 max-w-3xl font-display text-[1.85rem] leading-tight text-white sm:text-4xl">
                    Looking for a senior QA automation engineer who combines test strategy, framework depth, and release discipline?
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300">
                    This profile is strongest in environments where automation quality needs to scale across UI, API, backend, and CI/CD pipelines without losing business context.
                  </p>
                </div>
                <div className="grid w-full gap-3 sm:flex sm:w-auto sm:flex-wrap sm:gap-4">
                  <GlowButton kind="primary" href="#contact" onClick={() => scrollToSection('contact')}>
                    Start a Conversation
                  </GlowButton>
                  <GlowButton kind="secondary" href="#experience" onClick={() => scrollToSection('experience')}>
                    Review Experience
                  </GlowButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/85 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-base tracking-[0.06em] text-white sm:text-lg sm:tracking-[0.08em]">MOHAMMED SADDAM HUSSAIN</p>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Associate Principal Engineer | Building confidence through quality engineering.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 sm:justify-start">
            {portfolioData.contact.footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="transition hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <motion.button
        type="button"
        onClick={() => scrollToSection('home')}
        whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        className="fixed bottom-4 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/80 text-cyan-100 shadow-glow backdrop-blur transition hover:bg-cyan-300/12 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12 sm:hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </motion.button>
    </div>
  )
}

export default App
