import React from "react";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import Contact from "./screens/Contact";
import Sidebar from "./components/Sidebar";
import Skillset from "./screens/Skillset";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <div className="content">
          <Sidebar />
          <main className="py-3 content-view">
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/skillset" element={<Skillset />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
