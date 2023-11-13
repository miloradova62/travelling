import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Button } from './Button';
import './Footer.css'  ;
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalSubscribe from './ModalSubscribe';

function Footer() {

       


        const [modalIsOpen, setModalIsOpen] = useState(false);    

        return (
    <div className='footer-container' id='footer'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Получай еженедельную подборку самых интересных предложений в сфере туризма
            </p>
            <p className="footer-subscription-text">
                Ты можешь отписаться в любой момент.
            </p>
            <div className="input-areas">
                <form action='#' className='subsForm' >
                    <input type='email' name='email' placeholder='Ваш email' className='footer-input' id='subsEmail' required />
                    <button 
                    type='submit' id='subsBtn' onClick={()=> setModalIsOpen(true)} > Подписаться 
                    </button>
                </form>

                <ModalSubscribe
                isOpen={modalIsOpen}
                onClose={()=> setModalIsOpen(false)}
                >
                <h2>Спасибо за подписку!</h2>
                </ModalSubscribe>

            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Как нас найти:</h2>
                    <Link to='https://www.google.com/maps/place/%D0%9A%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%8F+%D0%B0%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D1%8F+Top/@54.627114,39.7313782,17z/data=!3m1!5s0x4149e236907d5c53:0x4a9ed112f4981a9!4m10!1m2!2m1!1z0LDQutCw0LTQtdC80LjRjyDRgtC-0L8g0YDRj9C30LDQvdGM!3m6!1s0x4149e35e40d2ae8f:0x30c1995a5d2a5e11!8m2!3d54.627114!4d39.7339531!15sCiTQsNC60LDQtNC10LzQuNGPINGC0L7QvyDRgNGP0LfQsNC90YxaJiIk0LDQutCw0LTQtdC80LjRjyDRgtC-0L8g0YDRj9C30LDQvdGMkgEYY29tcHV0ZXJfdHJhaW5pbmdfc2Nob29s4AEA!16s%2Fg%2F11ftx5vgnk?hl=ru&entry=ttu'>г.Рязань, ул.Маяковского, д.72</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Как нам позвонить:</h2>
                    <p>8 800 555 35 35</p>
                </div>
                <div className="footer-link-items">
                    <h2>Как нам написать:</h2>
                    <p>guliver@mail.com</p>
                </div>
                <div className="footer-link-items">
                    <h2>Мы в социальных сетях:</h2>
                    <div className='social-items-wrapper'>
                    <Link 
                    to='/'  
                    className="social-icon-link facebook"
                    target='_blank'
                    aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link 
                    to='/'  
                    className="social-icon-link instagram"
                    target='_blank'
                    aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link 
                    to='/'  
                    className="social-icon-link twitter"
                    target='_blank'
                    aria-label='Twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link 
                    to='/'  
                    className="social-icon-link telegram"
                    target='_blank'
                    aria-label='Telegram'>
                        <i className='fab fa-telegram'></i>
                    </Link>
                    <Link 
                    to='/'  
                    className="social-icon-link vk"
                    target='_blank'
                    aria-label='VK'>
                        <i className='fab fa-vk'></i>
                    </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        Guliver 
                        <FontAwesomeIcon icon={icon({name: 'mountain-sun', style: 'solid'})} />
                    </Link>
                </div>
                <small className='website-rights'>Guliver 2023
                <i class="fa-regular fa-copyright"></i>
                </small>
                
                <div className="social-icons">
               
                </div>
            </div>
        </section>
    </div>
  )
        }

export default Footer