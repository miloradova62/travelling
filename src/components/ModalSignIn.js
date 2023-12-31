import React from 'react';
import './ModalSignIn.css';
import { Link } from 'react-router-dom';

const ModalSignIn = ({isOpen, onClose}) => {

  return (
    <>
    {isOpen && (
        <>
        <div className="mod-signin-wrapper">
            <span className="mod-signin-icon">
                <button className='mod-signin-close-button' onClick={()=> onClose()}><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
           
            </span>
            <div className="form-box login">
                <h2>Войти</h2>
                <form action="#">
                    <div className="mod-signin-input">
                        <input type="email" required />
                        <label>Email</label>
                    </div>
                    <div className="mod-signin-input">
                        <input type="password" required />
                        <label>Пароль</label>
                    </div>
                    <button type='submit' className='mod-signin-button'>Войти</button>
                </form>
            </div>
            <div>
            <p>Если у Вас еще нет аккаунта, вы можете его</p>
                <button className='mod-signin-register-button'>
                    <Link className='register-link' to='/sign-up'>
                        Создать
                        </Link>
                </button>
            
        </div>
        </div>
        
        </>
  )}
    </>
        )
  }

export default ModalSignIn