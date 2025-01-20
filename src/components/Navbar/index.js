import Button from '../Button';
import './Navbar.scss';


function Navbar() {
  return (
    <div className='navWrap'>
      <div id='navbar'>
          <div className='logo'>
            <h3>IndoTravi</h3>
          </div>
          <div className='links'>
            <a href='#'>About</a>
            <a href='#'>How it Works?</a>
            <a href='#'>Tour Packages</a>
            <a href='#'>Services</a>
            <a href='#'>Contact</a>
          </div>
          <div>
            <div className='languageChange'>

            </div>
            <Button/>
          </div>
      </div>
    </div>
  );
}

export default Navbar;