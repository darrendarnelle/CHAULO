import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExploreCountries from './pages/ExploreCountries'
import LearningDashboard from './pages/LearningDashboard'
import MentorshipCommunity from './pages/MentorshipCommunity'
import Checklist from './pages/Checklist'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreCountries />} />
          <Route path="/dashboard" element={<LearningDashboard />} />
          <Route path="/mentorship" element={<MentorshipCommunity />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </AuthProvider>
  )
}

export default App
