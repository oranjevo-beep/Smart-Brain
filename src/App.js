import React from 'react';

import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ParticlesBg from 'particles-bg';

function App() {
  return (
    <div className="container mx-auto px-4 min-h-screen">
      <ParticlesBg type="lines" bg={true} />
      <Navigation />
      <ImageLinkForm />
    </div>
  );
}

export default App;
