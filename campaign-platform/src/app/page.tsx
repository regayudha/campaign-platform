// Simplified homepage to test deployment
export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          🚀 CampaignHub
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Marketing Campaign Platform
        </p>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '2rem', 
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          maxWidth: '600px'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>✅ Deployment Successful!</h2>
          <p style={{ marginBottom: '1rem' }}>
            Your Next.js app is now running on Vercel.
          </p>
          <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            <p>🔗 <a href="/health" style={{ color: 'white' }}>Check Health Status</a></p>
            <p>🔧 <a href="/admin/login" style={{ color: 'white' }}>Admin Login</a></p>
            <p>🧪 <a href="/test" style={{ color: 'white' }}>Environment Test</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
