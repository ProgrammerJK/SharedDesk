import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Host from './pages/Host'
import Home from './pages/Home'
import Search from './pages/Search'
import WorkspaceDetail from './pages/WorkspaceDetail'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/workspace/:id" element={<WorkspaceDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/host" element={<Host />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App