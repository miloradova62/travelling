import React, { useState } from 'react';
import { Button } from './Button';
import './MainSection.css';
import '../App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BrowserRouter, Link } from 'react-router-dom';

function MainSection() {

  

  return (
    <div className='main-container'> 
        <video src="videos/video-2.mp4" autoPlay loop muted />
        <h1>ПРИКЛЮЧЕНИЯ УЖЕ ЖДУТ</h1>
        <p>Так чего ждешь ТЫ?</p>
        <div className="main-btns">

           <AnchorLink href='#offers'>
            <Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'>
                ПОЕХАЛИ
            </Button>
           </AnchorLink>
           <Button onClick={
              (e) => {
                e.preventDefault();
                window.location.href='https://www.youtube.com/@DREAM_AND_TRAVEL';
                }
              } className='btns' buttonStyle='btn-prim' buttonSize='btn-large'>
                   СМОТРИ <i className='far fa-play-circle' />
                
            </Button>
           
            
            

            

        </div>

    </div>
  )
}

export default MainSection