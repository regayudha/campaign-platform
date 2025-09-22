# Free PostgreSQL Database Setup Options

## Option 1: Supabase (Recommended)

### Setup Steps:
1. Go to [supabase.com](https://supabase.com)
2. Create free account
3. Create new project
4. Copy connection string from Settings → Database
5. Update your Vercel environment variables

### Connection String Format:
```
postgresql://postgres:[password]@db.[project-id].supabase.co:5432/postgres
```

### Free Tier Limits:
- 500 MB database storage
- 1 GB bandwidth per month
- 2 concurrent connections
- 7 days of database backups

## Option 2: Railway

### Setup Steps:
1. Go to [railway.app](https://railway.app)
2. Create account with GitHub
3. Create new project → Add PostgreSQL
4. Copy DATABASE_URL from Variables tab
5. Update Vercel environment variables

### Free Tier Limits:
- 1 GB storage
- $5 credit per month (usually covers small apps)
- Automatic backups

## Option 3: Neon

### Setup Steps:
1. Go to [neon.tech](https://neon.tech)
2. Create free account
3. Create database
4. Copy connection string
5. Update environment variables

### Free Tier Limits:
- 512 MB storage
- 100 compute hours per month
- 1 database branch

## Migration Script

Use this to migrate from Vercel Postgres to any other provider:

```bash
# Export current data
npx prisma db pull
npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > migration.sql

# Update DATABASE_URL to new provider
# Then apply migration
npx prisma db push
npm run db:init
```
