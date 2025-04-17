import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { WorkPage } from './screens/WorkPage/WorkPage';
import { PortfolioAboutPage } from './screens/PortfolioAboutPage/PortfolioAboutPage';
import { ProjectPage } from './screens/ProjectPage/ProjectPage';
import { ContactPage } from './screens/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PortfolioAboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
