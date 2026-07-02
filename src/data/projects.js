export const PROJECTS = [
  {
    title: 'SuperDead',
    period: 'Personal Project',
    summary: 'Native C++20 multiplayer FPS game engine & AI-orchestrated dev pipeline.',
    highlights: [
      'Engineered client-server multiplayer shooter over UDP (ENet) with client-side prediction and server reconciliation.',
      'Integrated server-authoritative Jolt Physics for player capsules, dynamic stances, wall-running, and ledge climbing.',
      'Programmed PBR shader pipeline (Albedo/Normal/ORM) and GLSL post-processing (FXAA, Bloom, soft shadows).',
      'Used multi-agent LLM framework with MCP servers for self-healing code edits.',
    ],
    tech: ['C++20', 'ENet', 'Jolt Physics', 'GLSL', 'Raylib'],
  },
  {
    title: 'Bookworm',
    period: 'Razonica',
    summary: 'Multi-tenant AI RAG platform with streaming conversational agents.',
    highlights: [
      'React canvas frontend (PixelForge) with Django backend (DataSmith).',
      'LangGraph pipeline streaming real-time status and completions over SSE.',
      'Multi-tenant architecture with pgvector-indexed semantic search.',
    ],
    tech: ['React', 'Django', 'LangGraph', 'LlamaIndex', 'pgvector', 'SSE'],
  },
  {
    title: 'Fashion Intelligence Engine',
    period: 'Razonica',
    summary: 'Merchandiser decision-support system with AI design brief generation.',
    highlights: [
      'Aggregated internal sales and inventory with external competitor pricing.',
      'AI Design Brief Generator reconstructing product specs and images from attribute taxonomies.',
    ],
    tech: ['Python', 'Django', 'AI', 'ETL'],
  },
  {
    title: 'VerifAI',
    period: 'Contract',
    summary: 'AI Toolkit for automated API testing and test generation.',
    highlights: [
      'Secure multi-model AI gateway (OpenAI, Azure, Anthropic, Google).',
      'Postman ingestion and AI-assisted test generation with background processing.',
      'Deployed to Oracle Cloud with zero-downtime release procedures.',
    ],
    tech: ['Django', 'DRF', 'Oracle Cloud', 'OpenAI', 'Gemini'],
  },
  {
    title: 'Oracle Cloud Infrastructure',
    period: 'DevOps Toolkit',
    summary: 'Multi-environment production provisioning framework with Ansible.',
    highlights: [
      'Bastion-hardened multi-host topologies with Nginx reverse proxies.',
      'GitHub Actions CI/CD with isolated multi-key SSH management.',
      'Scripted playbooks for Nginx config syncing, TLS updates, and PostgreSQL security.',
    ],
    tech: ['Ansible', 'Oracle Cloud', 'Docker', 'Nginx', 'GitHub Actions'],
  },
  {
    title: 'ComBuyn',
    period: 'Contract',
    summary: 'Multi-vendor e-commerce & service booking platform.',
    highlights: [
      'Dual payment gateway integration with idempotency and webhook reconciliation.',
      'Order-state transitions modeled with django-fsm for auditability.',
    ],
    tech: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Payment Gateways'],
  },
  {
    title: 'GTorq',
    period: 'Personal Project',
    summary: 'Alembic-free migration tool for SQLModel with a Django-style CLI.',
    highlights: [
      'Auto-detects model/column create and delete from SQLModel metadata diffs.',
      'Generates Python migration files with forward and rollback support.',
      'Tracks migration progress in a database table with per-operation status.',
      'Django-style CLI: makemigrations, migrate, showmigrations.',
    ],
    tech: ['Python', 'SQLModel', 'SQLAlchemy', 'Poetry', 'CLI'],
  },
  {
    title: 'Aqueduct',
    period: 'Personal Project',
    summary: 'Lightweight macOS window manager with dynamic grid layouts and workspace snapshots.',
    highlights: [
      'Dynamic screen-adaptive grid layout with configurable rows (Ripples) and columns (Channels).',
      'Workspace Snapshots — capture and restore window layouts with one click.',
      'Global hotkeys for snap, maximize, center/float, and cross-monitor moves.',
      'Uses macOS AXUIElement accessibility APIs — no private APIs.',
    ],
    tech: ['Swift', 'macOS', 'Accessibility APIs'],
  },
];
