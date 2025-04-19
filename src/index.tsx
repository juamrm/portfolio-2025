import { StrictMode } from "react";
import { Root, createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n"; // Import i18n configuration
import { Layout } from "./components/Layout";
import { HomePage } from "./screens/HomePage/HomePage";
import { WorkPage } from "./screens/WorkPage/WorkPage";
import { ProjectPage } from "./screens/ProjectPage/ProjectPage";

const container = document.getElementById("app");
if (!container) throw new Error("Failed to find the root element");

const root: Root = createRoot(container);
root.render(
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
