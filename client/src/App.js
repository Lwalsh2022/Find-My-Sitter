import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
// import About from './components/About';
// import Contact from './components/Contact';
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
// import Projects from './components/Projects';
import Sitters from "./components/Sitters";
import styled from "styled-components";
import RegisterSitterForm from "./components/RegisterSitterForm";
import Nav from "./components/Nav";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

// function App() {
//   return (
//     <AppContainer>
//     <AccountBox />
//   </AppContainer>
//   );
// }

function App() {
  return (
    <div className="appcontainer w-100 flex flex-column gap-3">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sitters" element={<Sitters />} />
          <Route path="/register">
            {/* <Route path='/' element={<Parent />}></Route> */}
            <Route path="sitter" element={<RegisterSitterForm />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
