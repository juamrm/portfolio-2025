import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./screens/HomePage/HomePage";
import { WorkPage } from "./screens/WorkPage/WorkPage";
import { UnderConstructionPage } from "./screens/UnderConstructionPage/UnderConstructionPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/project/:id" element={<UnderConstructionPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
