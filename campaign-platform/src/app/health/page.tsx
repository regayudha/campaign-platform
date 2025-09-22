// Simple health check page - no dependencies
export default function HealthCheck() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Health Check ✅</h1>
      <p>If you can see this, Next.js is working!</p>
      <p>Timestamp: {new Date().toISOString()}</p>
      
      <h2>Environment Status:</h2>
      <ul>
        <li>NODE_ENV: {process.env.NODE_ENV || 'not set'}</li>
        <li>VERCEL: {process.env.VERCEL || 'not set'}</li>
        <li>DATABASE_URL: {process.env.DATABASE_URL ? '✅ Set' : '❌ Missing'}</li>
        <li>NEXTAUTH_URL: {process.env.NEXTAUTH_URL ? '✅ Set' : '❌ Missing'}</li>
        <li>NEXTAUTH_SECRET: {process.env.NEXTAUTH_SECRET ? '✅ Set' : '❌ Missing'}</li>
      </ul>
    </div>
  )
}
