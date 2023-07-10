import Button from "./components/Button";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Missing from "./pages/Missing";
import Team from "./pages/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<About />} />
          <Route path="what-were-doing" element={<Projects />} />
          <Route path="make-a-difference" element={<Help />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="teams-application" element={<Apply />} />
          <Route path="team/:teamId" element={<Team />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
