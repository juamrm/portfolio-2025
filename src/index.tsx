import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./screens/HomePage/HomePage";
import { WorkPage } from "./screens/WorkPage/WorkPage";
import { ProjectPage } from "./screens/ProjectPage/ProjectPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
);
