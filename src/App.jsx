import React from 'react';
import Banner from './sections/Banner';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import GetInTouch from './sections/GetInTouch';
import SocialMedia from './sections/SocialMedia';

const App = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <Banner />
      <AboutMe />
      <Experience />
      <Projects />
      <GetInTouch />
      <SocialMedia />
      <footer className="text-center py-8">
        <p className="text-catppuccin-overlay0 text-sm">
          Built with React + Tailwind &middot; Catppuccin Mocha
        </p>
      </footer>
    </div>
  );
};

export default App;
