import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Email from "./pages/Email";
import Chat from "./pages/Chat";
import ProofReader from "./pages/ProofReader";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/project/:id" element={<ProjectDisplay />} /> */}
          <Route path="/email" element={<Email />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/proofreader" element={<ProofReader />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );

  }
  
export default App;
