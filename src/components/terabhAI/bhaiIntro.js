import React from 'react';
import bhaiScreen from '../../assets/emptyPhoneScreen.png'
import './bhaiPage.css'

function Header() {
  return (
    <header>
      <div className="bhai-header">

        <div className="bhai-content">
            <h2 className="bhai-h2">TerabhAI</h2>
            <p className="bhai-text" >
                Welcome to TerabhAI, your friendly neighboorhood personal assistant!
            </p>
        </div>

        <div className='android-screen'>
          <img src={bhaiScreen} alt="" className="screen-img"/>
        </div>

      </div>
    </header>
  );
}

export default Header;