import React from 'react';
import './CardItem.css';
import ModalDetails from './ModalDetails';
import { useState } from 'react';

function CardItem(props) {

    const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState(false);

  return (
    <>
        <li className="cards__item">
            <div className="cards__item__link" to={props.path}>
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="travel " className="cards__item__img"/>
                    <div className='card-details'>
                <button onClick={()=> setModalDetailsIsOpen(true)} className='card-details-button'>
                    Подробнее
                    </button>
            </div>
                </figure>
                
                <div className="cards__item__info"> 
                    <h5 className='cards__item__text'> {props.text} </h5>
                </div>
            </div>
            <ModalDetails
                isOpen={modalDetailsIsOpen}
                onClose={()=> setModalDetailsIsOpen(false)} />
            
        </li>
    </>
  )
}

export default CardItem