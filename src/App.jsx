import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import EpisodePage from './pages/EpisodePage'
import AllEpisodesPage from './pages/AllEpisodesPage'
import BeginHierPage from './pages/BeginHierPage'
import TopicPage from './pages/TopicPage'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/begin-hier" element={<BeginHierPage />} />
        <Route path="/onderwerpen/:slug" element={<TopicPage />} />
        <Route path="/afleveringen" element={<AllEpisodesPage />} />
        <Route path="/afleveringen/:slug" element={<EpisodePage />} />
      </Routes>
    </Layout>
  )
}

export default App
