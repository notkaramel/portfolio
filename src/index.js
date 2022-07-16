import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/top-navbar';
import AboutMe from './components/about-me';
import MySkills from './components/my-skills';
import MyProjects from './components/my-projects';
import Citations from './components/citations';
import PastExperience from './components/past-exp';
import CopyRights from './components/copyrights';

const navbar = ReactDOM.createRoot(document.getElementById('navbar'));
navbar.render(
  <NavBar />
)

const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
  <React.StrictMode>
    <AboutMe />
    <MyProjects />
    <MySkills />
    <PastExperience />
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
  <React.StrictMode>
    <Citations />
    <CopyRights />
  </React.StrictMode>

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
