import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExploreCountries from './pages/ExploreCountries'
import LearningDashboard from './pages/LearningDashboard'
import MentorshipCommunity from './pages/MentorshipCommunity'
import Checklist from './pages/Checklist'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreCountries />} />
          <Route path="/dashboard" element={<LearningDashboard />} />
          <Route path="/mentorship" element={<MentorshipCommunity />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
