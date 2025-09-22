// Quick deployment fix script
// This helps identify common deployment issues

console.log('🔍 Deployment Diagnosis Script')
console.log('================================')

// Check environment variables
const requiredEnvVars = [
  'DATABASE_URL',
  'NEXTAUTH_URL', 
  'NEXTAUTH_SECRET',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD'
]

console.log('\n📋 Environment Variables Check:')
requiredEnvVars.forEach(varName => {
  const value = process.env[varName]
  const status = value ? '✅ Set' : '❌ Missing'
  const preview = value ? `(${value.substring(0, 20)}...)` : ''
  console.log(`   ${varName}: ${status} ${preview}`)
})

console.log('\n🔧 Quick Fixes:')
console.log('1. Make sure all environment variables are set in Vercel dashboard')
console.log('2. For quick fix, use: DATABASE_URL=file:./tmp/dev.db')
console.log('3. Check build logs in Vercel deployments tab')
console.log('4. Redeploy after setting environment variables')

console.log('\n🌐 Test URLs after deployment:')
console.log('- Landing: https://campaign-platform-delta.vercel.app/')
console.log('- Test page: https://campaign-platform-delta.vercel.app/test')
console.log('- Admin: https://campaign-platform-delta.vercel.app/admin/login')

// Test database connection if possible
if (process.env.DATABASE_URL) {
  console.log('\n🔌 Database connection test...')
  try {
    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()
    
    prisma.$connect()
      .then(() => {
        console.log('✅ Database connection successful!')
        return prisma.$disconnect()
      })
      .catch(err => {
        console.log('❌ Database connection failed:', err.message)
      })
  } catch (err) {
    console.log('⚠️  Prisma not available in this environment')
  }
}
