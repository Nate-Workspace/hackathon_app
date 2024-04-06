import { LeftNav } from "./components/LeftNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import LoginTab from "./components/LoginTab";

function App() {
  return (
    <div className="App">
      <Router>
        <LeftNav />
        <Routes>
          <Route path="/" />
          <Route path="/Products" />
          <Route path="/Services" />
          <Route path="/Events" />
          <Route path="/Saved" />
          <Route path="/Create" />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
      <LoginTab />
    </div>
  );
}

export default App;
