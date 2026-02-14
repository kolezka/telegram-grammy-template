# Grammy Telegram Bot Template

A ready-to-use template for building Telegram bots with [grammy](https://grammy.dev/) - the modern, TypeScript-first Telegram Bot framework.

## Features

- **grammy** - Modern Telegram Bot framework with excellent TypeScript support
- **Monorepo** - Organized workspace using pnpm workspaces
- **TypeScript** - Full type safety across the project
- **Prisma** - Type-safe database ORM with PostgreSQL support
- **Sessions** - Built-in session management with typed session data
- **i18n** - Internationalization support using Fluent syntax (en, pl included)
- **Logging** - Request timing middleware for debugging
- **Popular grammy extensions**:
  - `@grammyjs/commands` - Command handling
  - `@grammyjs/conversations` - Multi-step conversations
  - `@grammyjs/files` - File handling
  - `@grammyjs/hydrate` - Context hydration
  - `@grammyjs/i18n` - Internationalization
  - `@grammyjs/menu` - Inline menus
  - `@grammyjs/ratelimiter` - Rate limiting

## Project Structure

```
.
├── apps/
│   └── bot/                 # Main bot application
│       ├── src/
│       │   ├── index.ts     # Bot entry point
│       │   ├── config.ts    # Configuration
│       │   ├── types.ts     # TypeScript types (MyContext, SessionData)
│       │   ├── i18n.ts      # i18n configuration
│       │   └── locales/     # Translation files (Fluent .ftl)
│       │       ├── en.ftl   # English translations
│       │       └── pl.ftl   # Polish translations
│       └── .env.example     # Environment variables template
├── packages/
│   ├── database/            # Shared database package
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── src/
│   │       └── generated/   # Generated Prisma client
│   └── utils/               # Shared utilities
│       └── src/
│           └── index.ts
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js (see `.nvmrc` for recommended version)
- pnpm (install via `npm install -g pnpm`)
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd telegram-grammy-template
```

2. Install dependencies:
```bash
pnpm install
```

3. Configure environment variables:
```bash
cp apps/bot/.env.example apps/bot/.env
```

Edit `apps/bot/.env` and add your Telegram bot token:
```
TELEGRAM_BOT_TOKEN=your_bot_token_here
```

4. Set up the database:
```bash
cd packages/database
pnpm prisma:push
```

### Development

Run the bot in development mode with hot reload:

```bash
cd apps/bot
pnpm dev
```

### Build

Build the bot for production:

```bash
pnpm build
```

### Start

Run the built bot:

```bash
pnpm start
```

## Database

The template uses Prisma ORM with PostgreSQL. To manage your database:

```bash
cd packages/database

# Generate Prisma client
pnpm prisma:generate

# Push schema changes to database
pnpm prisma:push

# Run migrations
pnpm prisma:migrate

# Reset database
pnpm prisma:migrate:reset

# Open Prisma Studio
pnpm prisma:studio
```

## Built-in Features

### Sessions

Session data is typed via `SessionData` in `src/types.ts`. Add your session properties there:

```typescript
export type SessionData = {
  step: number;
  userId: string;
};
```

Use in handlers:

```typescript
bot.use(async (ctx) => {
  ctx.session.step = 1;
});
```

### i18n

Translations use Fluent syntax in `src/locales/`. To add a new language:

1. Create a new `.ftl` file in `src/locales/` (e.g., `de.ftl`)
2. Add the language code to `localeNegotiator` in `src/i18n.ts`

Use translations in handlers:

```typescript
bot.use(async (ctx) => {
  ctx.reply(ctx.t('hello')); // Uses 'hello' from .ftl files
});
```

### Logging

The template includes `telegraf-middleware-console-time` which logs each update with execution time:

```
[console-time] update_id=123 text="/start" - 15ms
```

## Available Scripts

### Bot (`apps/bot`)

| Command | Description |
|---------|-------------|
| `pnpm dev` | Run bot in development mode with hot reload |
| `pnpm build` | Build the bot |
| `pnpm start` | Run the built bot |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm type-check` | Run TypeScript type checking |

## Resources

- [grammy Documentation](https://grammy.dev/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Telegram Bot API](https://core.telegram.org/bots/api)

## License

ISC
