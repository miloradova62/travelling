<div className='sign-form-row'>
                        <div className="form-box login">
                            <h2>Создать аккаунт</h2>
                            <form action="#">
                                <div className="mod-signin-input">
                                    <input type="text" required />
                                    <label>Ваше имя</label>
                                </div>
                                <div className="mod-signin-input">
                                    <input type="email" required />
                                    <label>Email</label>
                                </div>
                                <div className="mod-signin-input">
                                    <input type="password" required />
                                    <label>Пароль</label>
                                </div>
                                <div className="mod-signin-input">
                                    <input type="password" required />
                                    <label>Повторите пароль</label>
                                </div>
                                <button type='submit' className='mod-signin-button'>Создать</button>
                            </form>
                        </div>
                        <div>
                            <p>Если у Вас уже есть аккаунт, вы можете</p>
                            <button className='mod-signin-register-button' onClick={toggleChecked}>
                            
                                Войти
                            
                            </button>
            
                        </div>
                    </div>