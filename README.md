# ANA Pharmaceutical – Stage 1 (Foundation)

Stack: Next.js 14 · TypeScript · Tailwind · PostgreSQL (Prisma)

## Included
- Database schema for all 10 tables (prisma/schema.prisma)
- Seed script: first admin, default categories, company settings (NO fake products)
- Secure admin login: bcrypt hashing, signed httpOnly session cookie, rate limiting, same-origin (CSRF) check
- /admin routes protected by middleware + server-side check; admin marked noindex
- Dashboard with live counts
- Security headers (HSTS, X-Frame-Options, etc.)

## Setup (on your computer or server, with Node 20+)
1. `npm install`
2. `cp .env.example .env` and fill values (DATABASE_URL, SESSION_SECRET, admin email/password)
3. `npx prisma migrate dev --name init`
4. `npm run db:seed`
5. `npm run dev` → open http://localhost:3000/admin/login

Change the seeded admin password after first login (password-change screen comes in Stage 5).

## Not tested yet
This code was written without the ability to install or run it. Run steps 1–5 and report any error to me.
