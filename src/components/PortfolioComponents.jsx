import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, BriefcaseBusiness, Building2, CalendarRange, Layers3, Sparkles } from 'lucide-react'

const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
}

const subtleReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }),
}

export function SectionShell({ id, children }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="section-divider relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  )
}

export function SectionHeading({ icon: Icon, eyebrow, title, description }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10 max-w-5xl text-center sm:mb-12 sm:text-left"
    >
      <motion.div
        variants={subtleReveal}
        custom={0}
        className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-100 sm:gap-3 sm:px-4 sm:text-[11px] sm:tracking-[0.28em]"
      >
        <Icon size={16} />
        <span className="truncate">{eyebrow}</span>
      </motion.div>
      <motion.h2
        variants={subtleReveal}
        custom={0.08}
        className="text-balance mt-5 max-w-4xl font-display text-[2rem] leading-[1.03] text-white sm:mt-6 sm:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={subtleReveal}
        custom={0.14}
        className="mx-auto mt-5 max-w-3xl text-[15px] leading-7 text-slate-300 sm:mx-0 sm:mt-6 sm:text-base sm:leading-8"
      >
        {description}
      </motion.p>
    </motion.div>
  )
}

export function GlowButton({ children, kind = 'primary', href, onClick, download = false }) {
  const reduceMotion = useReducedMotion()
  const baseClass =
    'inline-flex min-h-12 items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold tracking-[0.04em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:px-5 sm:py-3.5'

  const styleClass =
    kind === 'primary'
      ? 'border border-cyan-200/30 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 text-slate-950 shadow-glow hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(39,170,255,0.35)]'
      : 'border border-white/12 bg-white/[0.04] text-white shadow-inset hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/10'

  return (
    <motion.a
      href={href}
      onClick={onClick}
      download={download}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`${baseClass} ${styleClass}`}
    >
      {children}
    </motion.a>
  )
}

export function BadgePill({ icon: Icon, children }) {
  return (
    <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-glow sm:px-4 sm:text-[11px] sm:tracking-[0.26em]">
      <Icon size={14} />
      <span className="truncate">{children}</span>
    </div>
  )
}

export function StatCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.7 })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setCount(value)
      return
    }

    const duration = 1000
    const start = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, reduceMotion, value])

  return (
    <div ref={ref} className="font-display text-4xl font-bold text-white sm:text-5xl">
      {count}
      {suffix}
    </div>
  )
}

export function TimelineItem({ role }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, x: -24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
      whileHover={reduceMotion ? undefined : hoverLift.hover}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="relative md:pl-14"
    >
      <div className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950 shadow-glow md:flex">
        <div className="h-3 w-3 rounded-full bg-cyan-300" />
      </div>
      <div className="premium-panel spotlight-card p-5 sm:p-7">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/80 sm:text-xs sm:tracking-[0.28em]">{role.company}</p>
            <h3 className="mt-3 text-xl font-semibold text-white sm:text-[1.85rem]">{role.title}</h3>
            <p className="mt-2 text-sm text-slate-400 sm:mt-3">{role.duration}</p>
          </div>
          <div className="premium-subpanel max-w-xl px-4 py-3 text-sm leading-7 text-slate-300 lg:flex-1">
            {role.summary}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {role.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.18em]"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {role.highlights.map((item) => (
            <div key={item} className="premium-subpanel p-4 text-sm leading-7 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export function SkillCard({ group }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : hoverLift.hover}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="premium-panel spotlight-card p-5 sm:p-7"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/80 sm:tracking-[0.28em]">{group.kicker}</p>
          <h3 className="mt-3 text-xl font-semibold text-white sm:text-[1.85rem]">{group.title}</h3>
        </div>
        <div className="w-fit rounded-2xl border border-cyan-300/18 bg-cyan-300/10 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-cyan-100 sm:text-xs sm:tracking-[0.18em]">
          {group.coverage}
        </div>
      </div>
      <div className="mt-6 grid gap-4">
        {group.items.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={reduceMotion ? undefined : { scale: 1.01, y: -2 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="premium-subpanel p-4"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <p className="text-sm font-medium text-white sm:text-[15px]">{skill.name}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{skill.level}</p>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-white/6">
              <div
                className="h-2.5 rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-400 shadow-[0_0_24px_rgba(70,215,255,0.45)]"
                style={{ width: `${skill.strength}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : hoverLift.hover}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group premium-panel spotlight-card p-5 sm:p-7 transition hover:border-cyan-300/28 hover:bg-white/[0.055] sm:hover:-translate-y-1.5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
        <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-indigo-400/10 blur-3xl" />
      </div>
      <div className="relative grid gap-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
              Case Study
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
              {project.tools.length} tools
            </span>
          </div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white shadow-inset transition group-hover:border-cyan-300/35 group-hover:bg-cyan-300/10 sm:w-auto sm:justify-start sm:py-2"
          >
            <span>Case Study</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
            {project.domain}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">
            {project.duration}
          </span>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h3 className="text-balance text-xl font-semibold text-white sm:text-[1.9rem]">{project.title}</h3>
            <p className="mt-4 text-sm leading-8 text-slate-300">{project.summary}</p>
          </div>

          <div className="premium-subpanel grid gap-4 p-4">
            <div className="flex items-start gap-3">
              <Building2 size={16} className="mt-1 text-cyan-200" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Client</p>
                <p className="mt-1 text-sm font-medium text-white">{project.client}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BriefcaseBusiness size={16} className="mt-1 text-cyan-200" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Role</p>
                <p className="mt-1 text-sm font-medium text-white">{project.role}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarRange size={16} className="mt-1 text-cyan-200" />
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Duration</p>
                <p className="mt-1 text-sm font-medium text-white">{project.duration}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="premium-subpanel p-4 sm:p-5">
            <div className="flex items-center gap-2 text-cyan-100">
              <Sparkles size={16} />
              <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-100">Business Impact</p>
            </div>
            <p className="mt-3 text-sm leading-8 text-slate-300">{project.impact}</p>
          </div>

          <div className="premium-subpanel p-4 sm:p-5">
            <div className="flex items-center gap-2 text-slate-200">
              <Layers3 size={16} className="text-cyan-200" />
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-300">Technology Stack</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-slate-200 transition group-hover:border-cyan-300/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function StrengthCard({ strength }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : hoverLift.hover}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="premium-panel spotlight-card p-5 transition hover:border-cyan-300/28 sm:p-6 sm:hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-white sm:text-xl">{strength.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300 sm:mt-4 sm:leading-8">{strength.description}</p>
    </motion.div>
  )
}
