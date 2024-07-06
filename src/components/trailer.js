import React, { useState } from 'react';
import './App.css'; // Make sure to have appropriate styles

const App = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleWatchTrailer = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="App">
      <div className="hero-section">
        <img src="img-8.jpg" alt="Desert" className="hero-image" />
        <button className="trailer-button" onClick={handleWatchTrailer}>
          Watch Trailer
        </button>
      </div>

      {isVideoOpen && (
        <div className="video-modal">
          <div className="video-container">
            <button className="close-button" onClick={handleCloseVideo}>
              X
            </button>
            <video controls>
              <source src="videos/video-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
