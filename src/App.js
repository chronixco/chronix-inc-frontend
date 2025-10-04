import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentAppIndex, setCurrentAppIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextApp = () => {
    setCurrentAppIndex((prev) => (prev + 1) % 2);
  };

  const prevApp = () => {
    setCurrentAppIndex((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <h1 className="company-name">Chronix Inc</h1>
        </header>

        {/* Main Content */}
        <main className="main-content">
          {/* Company Description */}
          <section className="company-section">
            <h2 className="section-title">About Us</h2>
            <p className="company-description">
              We are a cutting-edge technology company focused on developing innovative AI solutions 
              that transform how people interact with technology. Our team of experts works on various 
              AI projects that push the boundaries of what's possible.
            </p>
          </section>

          {/* Apps Showcase */}
          <section className="app-showcase">
            <h2 className="section-title">Our Apps</h2>
            {isMobile ? (
              <div className="mobile-apps-container">
                <div className="mobile-apps-wrapper" style={{ transform: `translateX(-${currentAppIndex * 50}%)` }}>
                  {/* Verbo App Card */}
                  <div className="app-card mobile-app-card">
                    <div className="app-icon">
                      <img src="/icon.png" alt="Verbo App Icon" className="verbo-icon" />
                    </div>
                    <div className="app-info">
                      <h3 className="app-name">Verbo</h3>
                      <p className="app-description">
                        Your private video journal and audio diary. Record your thoughts and gain AI-powered insights.
                      </p>
                      <div className="app-links">
                        <a 
                          href="https://apps.apple.com/ca/app/verbo-journal-video-diary/id6743056567" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="store-link apple-store"
                        >
                          <span className="store-icon">🍎</span>
                          App Store
                        </a>
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.chronix.verbo" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="store-link google-play"
                        >
                          <span className="store-icon">📱</span>
                          Google Play
                        </a>
                        <a 
                          href="https://verboai.io/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="store-link website"
                        >
                          <span className="store-icon">🌐</span>
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* OnSwipe AI App Card */}
                  <div className="app-card mobile-app-card">
                    <div className="app-icon">
                      <img src="/onswipe-icon.png" alt="OnSwipe AI App Icon" className="verbo-icon" />
                    </div>
                    <div className="app-info">
                      <h3 className="app-name">OnSwipe AI</h3>
                      <p className="app-description">
                        AI-powered job applications. Swipe to apply, get tailored resumes and cover letters, 
                        and auto-fill forms - all in seconds.
                      </p>
                      <div className="app-links">
                        <a 
                          href="https://apps.apple.com/us/app/onswipe-ai-swipe-to-apply/id6751077897?platform=iphone" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="store-link apple-store"
                        >
                          <span className="store-icon">🍎</span>
                          App Store
                        </a>
                        <a 
                          href="https://onswipe.ai/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="store-link website"
                        >
                          <span className="store-icon">🌐</span>
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Navigation */}
                <div className="mobile-nav">
                  <button className="nav-btn prev-btn" onClick={prevApp}>
                    ‹
                  </button>
                  <button className="nav-btn next-btn" onClick={nextApp}>
                    ›
                  </button>
                </div>
              </div>
            ) : (
              <div className="apps-grid">
                {/* Verbo App Card */}
                <div className="app-card">
                  <div className="app-icon">
                    <img src="/icon.png" alt="Verbo App Icon" className="verbo-icon" />
                  </div>
                  <div className="app-info">
                    <h3 className="app-name">Verbo</h3>
                    <p className="app-description">
                      Your private video journal and audio diary. Record your thoughts and gain AI-powered insights.
                    </p>
                    <div className="app-links">
                      <a 
                        href="https://apps.apple.com/ca/app/verbo-journal-video-diary/id6743056567" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="store-link apple-store"
                      >
                        <span className="store-icon">🍎</span>
                        App Store
                      </a>
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.chronix.verbo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="store-link google-play"
                      >
                        <span className="store-icon">📱</span>
                        Google Play
                      </a>
                      <a 
                        href="https://verboai.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="store-link website"
                      >
                        <span className="store-icon">🌐</span>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* OnSwipe AI App Card */}
                <div className="app-card">
                  <div className="app-icon">
                    <img src="/onswipe-icon.png" alt="OnSwipe AI App Icon" className="verbo-icon" />
                  </div>
                  <div className="app-info">
                    <h3 className="app-name">OnSwipe AI</h3>
                    <p className="app-description">
                      AI-powered job applications. Swipe to apply, get tailored resumes and cover letters, 
                      and auto-fill forms - all in seconds.
                    </p>
                    <div className="app-links">
                      <a 
                        href="https://apps.apple.com/us/app/onswipe-ai-swipe-to-apply/id6751077897?platform=iphone" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="store-link apple-store"
                      >
                        <span className="store-icon">🍎</span>
                        App Store
                      </a>
                      <a 
                        href="https://onswipe.ai/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="store-link website"
                      >
                        <span className="store-icon">🌐</span>
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Chronix Inc. All rights reserved.</p>
          <p>contact@chronixinc.com</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
