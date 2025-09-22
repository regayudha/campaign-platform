export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Test Page</h1>
      <p>If you can see this, the basic Next.js setup is working.</p>
      <div className="mt-4">
        <p>Environment check:</p>
        <ul className="list-disc list-inside">
          <li>DATABASE_URL: {process.env.DATABASE_URL ? '✅ Set' : '❌ Not set'}</li>
          <li>NEXTAUTH_URL: {process.env.NEXTAUTH_URL ? '✅ Set' : '❌ Not set'}</li>
          <li>NEXTAUTH_SECRET: {process.env.NEXTAUTH_SECRET ? '✅ Set' : '❌ Not set'}</li>
        </ul>
      </div>
    </div>
  )
}
