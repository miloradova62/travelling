import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Button } from './Button';
import './Navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import SignForm from './SignForm';

function Navbar() {



  const [click, setClick] = useState(false);
  const [button, setButton] = useState (true);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <=960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const [signFormIsOpen, setSignFormIsOpen] = useState(false);

 

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
          <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Guliver 
                <FontAwesomeIcon icon={icon({name: 'mountain-sun', style: 'solid'})} />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Главная
                    </Link>
                </li>
                <li className='nav-item'>
                    <AnchorLink href='#offers' className='nav-links' onClick={closeMobileMenu}>
                      Офферы
                    </AnchorLink>
                </li>
                <li className='nav-item'>
                    <AnchorLink href='#footer' className='nav-links' onClick={closeMobileMenu}>
                      Контакты
                    </AnchorLink>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Войти
                    </Link>
                </li>
              </ul>
              {button && 
              <Button buttonStyle='btn-outline' onClick={()=> setSignFormIsOpen(true)}>
                  ВОЙТИ
                </Button>
               }

              <SignForm 
                isOpen={signFormIsOpen}
                onClose={()=> setSignFormIsOpen(false)}
              />

          </div>
        </nav>
    </>
  )
              }

export default Navbar