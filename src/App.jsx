import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Hello from CI/CD 🌐</h1>
      <p>This React app is built with Vite, tested using GitHub Actions, and deployed automatically with Vercel.</p>
      <p style={{ color: '#888', fontSize: '0.9rem' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

export default App
