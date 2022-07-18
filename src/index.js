import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar';
import AboutMe from './components/about-me';
import MySkills from './components/my-skills';
import MyProjects from './components/my-projects';
import PastExperience from './components/past-exp';
import Footer from './components/footer';

// Navigation bar section
const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
)

// Content section
const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
  <React.StrictMode>
    <AboutMe />
    <MyProjects />
    <MySkills />
    <PastExperience />
  </React.StrictMode>
);

// Footer section (citations and copyrights)
const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);