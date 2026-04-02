export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const portfolioData = {
  hero: {
    eyebrow: 'Senior QA Automation Portfolio',
    name: 'MOHAMMED SADDAM HUSSAIN',
    title: 'Associate Principal Engineer',
    subtitle: 'Senior QA Automation Leader for enterprise-grade UI, API, backend, and CI/CD quality engineering.',
    summary:
      'Associate Principal Engineer with 11+ years of experience building automation depth, improving release confidence, and leading quality execution across banking, CMS, manufacturing, ERP, logistics, healthcare, insurance, and aviation-linked enterprise systems.',
    ctas: [
      { label: 'View Experience', href: '#experience', kind: 'primary' },
      { label: 'Explore Projects', href: '#projects', kind: 'secondary' },
      { label: 'Download Resume', href: '/mohammed-saddam-hussain-resume.txt', kind: 'secondary', download: true },
      { label: 'Contact Me', href: '#contact', kind: 'secondary' },
    ],
    trustBadges: [
      '11+ Years Experience',
      'QA Automation',
      'API & Backend Testing',
      'Banking / Logistics / ERP',
    ],
    signalPoints: [
      'Framework design and implementation across modern automation stacks',
      'Business-aware testing leadership with agile sprint delivery discipline',
      'Hands-on strength across UI automation, APIs, backend validation, and CI/CD',
    ],
    metrics: [
      { value: '11+', label: 'Years driving software quality across enterprise environments' },
      { value: '7', label: 'Major domain programs highlighted in this portfolio' },
      { value: '10+', label: 'Core testing and delivery disciplines across UI, API, data, and CI/CD' },
      { value: '3', label: 'Leadership-oriented roles spanning senior engineer to associate principal level' },
    ],
    floatingCards: [
      {
        title: 'Framework Thinking',
        value: 'Designs automation for maintainability and release speed',
        description: 'Hands-on in Selenium, Cypress, Cucumber, Serenity BDD, SpecFlow, and enterprise workflow automation.',
      },
      {
        title: 'Quality Scope',
        value: 'Manual, automation, API, backend, performance, and security testing',
        description: 'Comfortable moving between exploratory depth, structured validation, and CI/CD-aligned automation coverage.',
      },
    ],
    proofStrip: [
      { value: '11+', label: 'Years in QA & Automation' },
      { value: 'Associate Principal', label: 'Current seniority level' },
      { value: 'Enterprise Domains', label: 'Banking, ERP, logistics, healthcare, CMS' },
    ],
  },
  about: {
    summary:
      'Mohammed Saddam Hussain brings a senior-level mix of hands-on automation depth, practical testing judgment, and delivery discipline. His profile stands out not only for tool familiarity, but for the ability to structure test frameworks, align quality work with sprint goals, and keep cross-functional teams moving with confidence.',
    highlights: [
      {
        title: 'Automation architect mindset',
        description:
          'Builds and improves automation frameworks with a focus on stability, maintainability, and practical execution value rather than test volume alone.',
      },
      {
        title: 'Business-aware quality execution',
        description:
          'Understands the importance of release confidence in enterprise environments, especially where financial workflows, logistics operations, and customer-facing systems need dependable validation.',
      },
      {
        title: 'Collaborative delivery leadership',
        description:
          'Experienced working across agile teams, coordinating testing activities, estimating work, supporting sub-teams, and maintaining strong communication with engineering and stakeholder groups.',
      },
    ],
    sidePanel: [
      { label: 'Experience', value: '11+ Years' },
      { label: 'Current Role', value: 'Associate Principal Engineer' },
      { label: 'Current Employer', value: 'Nagarro' },
      { label: 'Education', value: 'B.Tech in Computer Science & Engineering' },
      { label: 'Certification', value: 'ISTQB Foundation' },
      { label: 'Languages', value: 'English, Urdu, Hindi, German, Arabic, Bengali' },
    ],
  },
  skillGroups: [
    {
      kicker: 'Automation & Testing',
      title: 'Automation and Quality Engineering',
      coverage: 'UI + Functional + System',
      items: [
        { name: 'Selenium WebDriver', level: 'Expert', strength: 95 },
        { name: 'Cypress', level: 'Advanced', strength: 88 },
        { name: 'Ranorex', level: 'Advanced', strength: 82 },
        { name: 'Cucumber / Serenity BDD / SpecFlow', level: 'Advanced', strength: 87 },
        { name: 'TestNG', level: 'Advanced', strength: 84 },
        { name: 'Manual / Functional / Integration / Regression', level: 'Expert', strength: 94 },
        { name: 'System / White-box / UAT / Smoke Testing', level: 'Advanced', strength: 86 },
      ],
    },
    {
      kicker: 'Programming & Scripting',
      title: 'Programming and Scripting',
      coverage: 'Core automation stack',
      items: [
        { name: 'Java', level: 'Expert', strength: 92 },
        { name: 'JavaScript', level: 'Advanced', strength: 86 },
        { name: 'C#', level: 'Advanced', strength: 84 },
        { name: 'SQL', level: 'Advanced', strength: 88 },
        { name: 'Basic Python', level: 'Working Knowledge', strength: 62 },
        { name: 'PowerShell', level: 'Advanced', strength: 81 },
      ],
    },
    {
      kicker: 'API / Backend / Data',
      title: 'API, Backend, and Data Validation',
      coverage: 'Service and data quality',
      items: [
        { name: 'REST Assured', level: 'Advanced', strength: 86 },
        { name: 'Postman', level: 'Advanced', strength: 84 },
        { name: 'SOAP / SoapUI', level: 'Advanced', strength: 79 },
        { name: 'Backend Testing', level: 'Expert', strength: 92 },
        { name: 'Database Testing / ETL Validation', level: 'Advanced', strength: 87 },
        { name: 'SQL Server / Oracle / HBase / Hive / JSON / Web Services', level: 'Advanced', strength: 85 },
      ],
    },
    {
      kicker: 'Performance / Security / Delivery',
      title: 'Performance, Security, CI/CD, and Tools',
      coverage: 'Enterprise delivery readiness',
      items: [
        { name: 'JMeter', level: 'Advanced', strength: 78 },
        { name: 'OWASP ZAP', level: 'Working Knowledge', strength: 67 },
        { name: 'Jenkins / Azure DevOps / GitHub Actions', level: 'Advanced', strength: 83 },
        { name: 'TeamCity / Octopus', level: 'Advanced', strength: 77 },
        { name: 'Git / SVN', level: 'Advanced', strength: 84 },
        { name: 'Jira / Confluence / Zephyr / HP ALM / SharePoint / IDEs', level: 'Advanced', strength: 89 },
      ],
    },
  ],
  experience: [
    {
      company: 'Nagarro',
      title: 'Associate Principal Engineer',
      duration: 'Apr 2023 - Present',
      summary:
        'Leading automation quality efforts across high-value enterprise programs with strong emphasis on framework implementation, execution discipline, and stakeholder confidence.',
      tools: ['Selenium', 'Cypress', 'Java', 'JavaScript', 'Cucumber', 'Serenity BDD', 'GitHub Actions', 'Azure', 'Postman'],
      highlights: [
        'Contributed to automation strategy and execution for banking and CMS programs with delivery-focused quality ownership.',
        'Supported scalable test design, sprint planning, estimation, and cross-team alignment in fast-moving agile environments.',
        'Balanced UI, API, and backend validation to improve release confidence on business-critical workflows.',
        'Worked closely with engineering and stakeholders to keep quality execution practical, visible, and reliable.',
      ],
    },
    {
      company: 'Publicis Sapient',
      title: 'Senior Automation Engineer',
      duration: 'Feb 2022 - Mar 2023',
      summary:
        'Delivered end-to-end automation and backend validation for real-time notification workflows in a banking context where reliability and data confidence were critical.',
      tools: ['Java', 'BDD', 'Selenium', 'Cypress', 'Jenkins', 'HBase', 'Hive', 'Kafka'],
      highlights: [
        'Built and executed end-to-end automation scenarios across UI, API, and backend touchpoints.',
        'Handled backend validation and pipeline cleanup activities to strengthen execution reliability.',
        'Worked across functional automation with exposure to performance, visual, and chatbot testing areas.',
        'Supported quality delivery in a complex banking environment with cross-system dependencies.',
      ],
    },
    {
      company: 'Plex India Pvt Ltd',
      title: 'Senior Automation Engineer',
      duration: 'Jul 2020 - Dec 2021',
      summary:
        'Focused on API automation for ERP and manufacturing execution workflows, helping strengthen quality for integration-heavy enterprise systems.',
      tools: ['C#', 'Visual Studio', 'TFS', 'Git', 'JIRA', 'Confluence', 'PowerShell'],
      highlights: [
        'Automated service-level validation for ERP and MES integrations in a manufacturing environment.',
        'Worked closely with teams to align quality checks with evolving system integration requirements.',
        'Improved repeatability of API testing through cleaner automation workflows and scripting support.',
        'Contributed to delivery coordination across agile execution cycles.',
      ],
    },
    {
      company: 'Eaton India Innovation Centre',
      title: 'Senior Test Engineer - Embedded',
      duration: 'Apr 2019 - Jun 2020',
      summary:
        'Supported testing and automation activities for substation monitoring and control systems where reliability and system behavior mattered deeply.',
      tools: ['C#', 'REST Assured', 'TFS', 'Git', 'JIRA', 'Confluence', 'PowerShell'],
      highlights: [
        'Worked on testing and automation for utility-focused substation control and monitoring applications.',
        'Contributed to dependable validation practices in an engineering environment with operational sensitivity.',
        'Brought structured test execution to embedded and systems-oriented workflows.',
        'Collaborated with teams to ensure defect visibility and quality alignment during delivery.',
      ],
    },
    {
      company: 'Optym India Private Limited',
      title: 'Senior QA Engineer',
      duration: 'Sep 2016 - Mar 2019',
      summary:
        'Owned quality engineering work across route optimization workflows, blending automation, performance testing, and security-oriented validation.',
      tools: ['Java', 'Selenium', 'TestNG', 'SQL', 'JMeter', 'OWASP ZAP', 'TeamCity', 'Octopus', 'Ranorex', 'Postman'],
      highlights: [
        'Validated route planning and scheduling workflows tied to travel time, route optimization, and profitability KPIs.',
        'Worked across automation, SQL-backed validation, performance testing, and security tooling exposure.',
        'Helped maintain stable CI/CD quality checks through TeamCity and Octopus-supported pipelines.',
        'Strengthened testing depth in a logistics domain with analytical and operational complexity.',
      ],
    },
    {
      company: 'Siemens Healthcare Private Limited',
      title: 'Software Engineer',
      duration: 'Feb 2016 - Aug 2016',
      summary:
        'Contributed to healthcare-related quality engineering work with a focus on disciplined validation and team-based execution.',
      tools: ['Automation Testing', 'Manual Testing', 'Agile QA', 'Documentation'],
      highlights: [
        'Supported quality activities in a regulated and detail-sensitive healthcare environment.',
        'Worked on structured execution, issue tracking, and team coordination across testing cycles.',
      ],
    },
    {
      company: 'CGI',
      title: 'Software Engineer',
      duration: 'Dec 2013 - Jan 2016',
      summary:
        'Built an early enterprise QA foundation in marine logistics programs covering booking, scheduling, documentation, and payment-related workflows.',
      tools: ['HP ALM', 'SQL Server', 'Jenkins', 'Eclipse', 'SVN'],
      highlights: [
        'Tested cargo booking, schedules, bills of lading, and payment-related workflows in a marine logistics platform.',
        'Worked with SQL Server and enterprise QA tooling to support defect management and release readiness.',
        'Received onsite knowledge transfer exposure in Hamburg, strengthening domain understanding and collaboration.',
        'Established strong fundamentals in enterprise QA execution, analysis, and stakeholder support.',
      ],
    },
  ],
  projects: [
    {
      title: 'MCAP',
      domain: 'Banking / Capital Market',
      client: 'McKinsey',
      role: 'Associate Principal Engineer',
      duration: 'Sep 2024 - Present',
      summary:
        'Focused on automation support for financial transaction workflows involving buy, sell, dividend, and stock split scenarios for partners and stakeholders.',
      impact:
        'Strengthened confidence in capital market transaction flows through structured automation and business-aware validation coverage.',
      tools: ['Selenium', 'Java', 'Cucumber', 'GitHub', 'Serenity BDD'],
    },
    {
      title: 'CMS Automation',
      domain: 'CMS',
      client: 'McKinsey',
      role: 'Associate Principal Engineer',
      duration: 'Jun 2023 - Aug 2024',
      summary:
        'Automated content creation and publishing workflows for articles and blogs, improving repeatability across editorial and release paths.',
      impact:
        'Helped streamline validation for content publishing flows through Cypress-based automation, API checks, and CI-aligned execution.',
      tools: ['Cypress', 'JavaScript', 'GitHub Actions', 'Azure', 'Postman'],
    },
    {
      title: 'Real Time Notification Automation',
      domain: 'Banking',
      client: 'Lloyds Bank & Halifax',
      role: 'Senior Automation Engineer',
      duration: 'Mar 2022 - Apr 2023',
      summary:
        'Delivered end-to-end automation with backend validation support for notification workflows, including API and functional automation exposure.',
      impact:
        'Improved test coverage across UI, backend, and data-oriented flows while supporting pipeline cleanup and broader testing exposure areas.',
      tools: ['Java', 'BDD', 'Selenium', 'Cypress', 'Jenkins', 'HBase', 'Hive', 'Kafka'],
    },
    {
      title: 'Manufacturing Execution System API Automation',
      domain: 'Manufacturing / ERP',
      client: 'Plex',
      role: 'Senior Automation Engineer',
      duration: 'Jul 2020 - Feb 2022',
      summary:
        'Created API automation coverage for ERP and MES integrations where system-to-system quality validation was essential.',
      impact:
        'Improved confidence in manufacturing integration workflows through automation, scripting support, and cleaner validation routines.',
      tools: ['C#', 'Visual Studio', 'TFS', 'Git', 'JIRA', 'Confluence', 'PowerShell'],
    },
    {
      title: 'Substation Automation',
      domain: 'Electrical',
      client: 'Eaton',
      role: 'Senior Test Engineer - Embedded',
      duration: 'Apr 2019 - Jun 2020',
      summary:
        'Worked on testing and automation for utility substation monitoring and control systems with a strong reliability focus.',
      impact:
        'Supported quality discipline for operationally sensitive systems where robust validation and defect visibility mattered significantly.',
      tools: ['C#', 'REST Assured', 'TFS', 'Git', 'JIRA', 'Confluence', 'PowerShell'],
    },
    {
      title: 'Route Max',
      domain: 'Logistics',
      client: 'Optym',
      role: 'Senior QA Engineer',
      duration: 'Sep 2016 - Mar 2019',
      summary:
        'Validated route planning and scheduling workflows centered on travel time, routes, distance, and profitability KPIs.',
      impact:
        'Combined automation, SQL-backed checks, performance testing, and security tooling exposure to improve release readiness in a complex logistics product.',
      tools: ['Java', 'Selenium', 'TestNG', 'SQL', 'JMeter', 'OWASP ZAP', 'TeamCity', 'Octopus', 'Ranorex', 'Postman'],
    },
    {
      title: 'HSDG / Hamburg Sud',
      domain: 'Marine Logistics',
      client: 'Hamburg Sud',
      role: 'Software Engineer',
      duration: 'Dec 2013 - Jan 2016',
      summary:
        'Tested cargo booking, schedules, bills of lading, and payment-related workflows for a marine logistics platform.',
      impact:
        'Built strong enterprise QA foundations while gaining onsite knowledge transfer exposure and deeper understanding of logistics operations.',
      tools: ['HP ALM', 'SQL Server', 'Jenkins', 'Eclipse', 'SVN'],
    },
  ],
  achievementStats: [
    { value: 11, suffix: '+', label: 'Years of experience in IT and quality engineering' },
    { value: 8, suffix: '+', label: 'Enterprise domains across banking, CMS, logistics, manufacturing, and more' },
    { value: 3, suffix: '', label: 'Recognitions and appreciation highlights showcased below' },
    { value: 1, suffix: '', label: 'ISTQB Foundation certification supporting a strong practical track record' },
  ],
  achievements: [
    {
      title: 'ISTQB Foundation Certified',
      description: 'Formal testing certification that complements extensive hands-on enterprise automation and quality engineering experience.',
    },
    {
      title: 'Star Performer of the Sprint',
      description: 'Recognition for strong contribution, consistency, and delivery-minded execution within sprint-based team environments.',
    },
    {
      title: 'Pat on the Back Award',
      description: 'Acknowledged for dependable collaboration and meaningful project contribution.',
    },
    {
      title: 'Nominated in Caring Cheer Board',
      description: 'A reflection of team impact, positive collaboration, and strong peer perception.',
    },
    {
      title: 'Onsite Knowledge Transfer in Hamburg',
      description: 'International exposure that strengthened domain understanding, stakeholder collaboration, and project onboarding effectiveness.',
    },
  ],
  strengths: [
    {
      title: 'Automation Framework Design',
      description: 'Builds automation in a way that supports maintainability, reusability, and long-term delivery value rather than short-lived script growth.',
    },
    {
      title: 'End-to-End Test Strategy',
      description: 'Comfortable shaping validation across UI, services, backend logic, and data flows to improve overall release confidence.',
    },
    {
      title: 'API + Backend Validation',
      description: 'Experienced in service testing, backend data checks, and database-oriented validation that surfaces deeper quality issues early.',
    },
    {
      title: 'CI/CD Pipeline Stability',
      description: 'Understands how automation quality connects to build health, pipeline reliability, and predictable release execution.',
    },
    {
      title: 'Agile Sprint Delivery',
      description: 'Strong in planning, estimation, sprint execution, and practical prioritization in cross-functional agile environments.',
    },
    {
      title: 'Leadership & Cross-team Coordination',
      description: 'Has worked with sub-teams and broader engineering groups to align testing efforts, manage execution, and keep stakeholders informed.',
    },
    {
      title: 'Analytical Problem Solving',
      description: 'Comfortable diagnosing quality risks across workflows, environments, and data pathways with a structured engineering mindset.',
    },
    {
      title: 'Adaptability Across Domains',
      description: 'Able to ramp effectively in sectors ranging from banking and CMS to logistics, ERP, healthcare, insurance, and electrical systems.',
    },
  ],
  education: [
    {
      type: 'Degree',
      title: 'B.Tech, Computer Science & Engineering',
      institution: 'Guru Nanak Institute of Technology, Kolkata',
      year: '2012',
    },
    {
      type: 'Certification',
      title: 'ISTQB Foundation Level',
      institution: 'Professional testing certification',
      year: 'Completed',
    },
    {
      type: 'Certification',
      title: 'German A1 Level Certification',
      institution: 'Language credential',
      year: 'Completed',
    },
  ],
  contact: {
    details: [
      {
        label: 'Email',
        value: 'mdsaddamhussainn@gmail.com',
        href: 'mailto:mdsaddamhussainn@gmail.com',
        icon: 'email',
      },
      {
        label: 'Phone',
        value: '+91 7847011846',
        href: 'tel:+917847011846',
        icon: 'phone',
      },
      {
        label: 'WhatsApp',
        value: 'Chat on WhatsApp',
        href: 'https://wa.me/917847011846',
        icon: 'whatsapp',
        external: true,
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/samkhann',
        href: 'https://www.linkedin.com/in/samkhann/',
        icon: 'linkedin',
        external: true,
      },
    ],
    pitch:
      'Available for senior QA automation, SDET, and quality engineering conversations, including enterprise automation, API testing, framework design, and delivery-focused QA leadership.',
    formFields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about the role, team, or project.' },
    ],
    footerLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samkhann/', external: true },
      { label: 'WhatsApp', href: 'https://wa.me/917847011846', external: true },
      { label: 'Email', href: 'mailto:mdsaddamhussainn@gmail.com' },
    ],
  },
}
