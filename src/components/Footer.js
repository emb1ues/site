// import { Link, animateScroll as scroll } from 'react-scroll'
import { MdOutlineEmail } from "react-icons/md";


function Footer() {

  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-contact'>
          <h1 className="footer-company-name">TerabhAI</h1>
          <p className="footer-text">
            <MdOutlineEmail /> init.beyondcontrol@gmail.com
          </p>
        </div>
        <div className='footer-address'>
          {/* <p className="footer-title">Address</p> */}
          <p className="footer-text">Research and Entrepreneurship Park, IIT Bhubaneswar</p>
        </div>
        {/* <div>
          <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
        </div> */}
      </div>

    </footer>
  );
}
export default Footer;
