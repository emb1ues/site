import React from 'react';
import Intro from './intro';
// import homeBg from '../../assets/video.mp4'
import './homepage.css';

function Header() {
  return (
    <header className='intro-header'>
      <div 
        style={{
            marginLeft: '0px', 
            textAlign: 'center', 
            marginBottom: '50px',
          }}
      >
        <Intro />
      </div>
      <div className='alpha-button-container'>
        <a href='/registration'>
          <button target="_self" className="alpha-btn" style={{ cursor: 'pointer' }}>
            α - registration
          </button>
        </a> 
      </div>
    </header>
  );
}

export default Header;
