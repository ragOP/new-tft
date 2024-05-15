import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Csr from "./Pages/Csr";
import Investor from "./Pages/Investor";
import Newsroom from "./Pages/Newsroom";
import Internal from "./Pages/Int";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Helvetica+Neue+LT+W1G:ital,wght@0,400;1,400&display=swap"
/>;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/internal" element={<Internal />} />
      </Routes>
    </Router>
  );
}

export default App;
