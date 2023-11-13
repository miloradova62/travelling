import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {

    
    

  return (
    <div className='cards' id='offers'>
        <h1 >Узнай больше об удивительных местах!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Исследуй скрытый от человеческих глаз в лесах Амазонии водопад прямо изнутри'
                    label='Приключения'
                    path='/service'
                    />
                    <CardItem 
                    src='images/img-2.jpg'
                    text='Тур по секретным местам острова Бали, которых нет на карте'
                    label='VIP'
                    path='/service'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src='images/img-3.jpg'
                    text='"Поднять паруса!" или морская прогулка по Атлантическому морю к таинственным водам'
                    label='Неизведанное'
                    path='/service'
                    />
                    <CardItem 
                    src='images/img-4.jpg'
                    text='Попробуй сыграть в футбол на вершине Гималайских гор'
                    label='Приключение'
                    path='/service'
                    />
                    <CardItem 
                    src='images/img-8.jpg'
                    text='Ислледуй пустыню Сахара, проехавшись верхом на верблюде'
                    label='Приключение'
                    path='/service'
                    />
                </ul>
               
            </div>
        </div>
    </div>
  )
}

export default Cards