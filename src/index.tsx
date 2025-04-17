import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PortfolioAboutPage } from "./screens/PortfolioAboutPage/PortfolioAboutPage";
import { WorkPage } from "./screens/WorkPage/WorkPage";
import { ProjectPage } from "./screens/ProjectPage/ProjectPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<WorkPage />} />
          <Route path="/about" element={<PortfolioAboutPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);