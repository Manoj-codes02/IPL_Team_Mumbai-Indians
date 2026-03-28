import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Matches from "./pages/Matches";
import Players from "./pages/Players";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/players" element={<Players />} />
      </Routes>

    </Router>
  );
}

export default App;