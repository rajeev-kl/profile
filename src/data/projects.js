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
      'Workspace Snapshots - capture and restore window layouts with one click.',
      'Global hotkeys for snap, maximize, center/float, and cross-monitor moves.',
      'Uses macOS AXUIElement accessibility APIs - no private APIs.',
    ],
    tech: ['Swift', 'macOS', 'Accessibility APIs'],
  },
  {
    title: 'SignalWarden',
    period: 'Personal Project',
    summary: 'FastAPI-based SMS gateway powered by a Raspberry Pi 4 and SIMCom A7670C modem.',
    highlights: [
      'REST API (POST /send-sms/) with API key authentication and hashed key storage.',
      'AT-command modem control with configurable timeouts and port settings.',
      'SQLite-based logging of all send attempts for audit and debugging.',
      'Poetry-managed Python project with systemd service integration for production.',
    ],
    tech: ['Python', 'FastAPI', 'Raspberry Pi', 'SQLite', 'AT Commands', 'systemd'],
  },
  {
    title: 'bulk-email-sender',
    period: 'Personal Project',
    summary: 'Django management command for sending bulk emails with round-robin sender rotation.',
    highlights: [
      'JSON-driven bulk email dispatch via Django management command.',
      'Round-robin sender pool with per-domain SMTP profile selection.',
      'Dry-run mode for testing before actual delivery.',
      'Poetry-managed Django project with django-extensions.',
    ],
    tech: ['Python', 'Django', 'SMTP', 'Poetry'],
  },
];
