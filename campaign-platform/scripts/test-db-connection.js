const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testConnection() {
  console.log('🔍 Testing database connection...')
  
  try {
    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connection successful!')
    
    // Test if tables exist by trying to count records
    const userCount = await prisma.user.count()
    const adminCount = await prisma.admin.count()
    const analyticsCount = await prisma.analytics.count()
    
    console.log('📊 Database Statistics:')
    console.log(`   Users: ${userCount}`)
    console.log(`   Admins: ${adminCount}`)
    console.log(`   Analytics: ${analyticsCount}`)
    
    console.log('🎉 Database is ready!')
    
  } catch (error) {
    console.error('❌ Database connection failed:')
    console.error('Error:', error.message)
    
    if (error.message.includes('does not exist')) {
      console.log('\n💡 Solution: Run database setup:')
      console.log('   npm run setup:prod')
    }
    
    if (error.message.includes('Connection refused')) {
      console.log('\n💡 Solution: Check your DATABASE_URL environment variable')
    }
    
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
