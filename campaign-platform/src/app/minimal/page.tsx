// Minimal page without external dependencies
export default function MinimalPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          CampaignHub
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Marketing Campaign Platform
        </p>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          padding: '2rem', 
          borderRadius: '10px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2>🎉 Deployment Working!</h2>
          <p>This minimal page confirms your Vercel deployment is successful.</p>
          <p><strong>Next step:</strong> Fix environment variables for full functionality.</p>
        </div>
      </div>
    </div>
  )
}
