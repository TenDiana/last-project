import React, {useState, useEffect, useContext} from 'react';
import {useHttp} from "../../hooks/httpHook";
import {useMessage} from "../../hooks/messageHook";
import {AuthContext} from "../../context/AuthContext";


const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const registerHandle = async () => {
        try{
          const data = await request('/api/auth/register', 'POST', {...form})
          message(data.message)
        }catch (e){}
    }
    const loginHandle = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId, data.userRole)
        }catch (e){}
    }
    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }
    return(
        <div className='row' style={{marginTop: '13%'}}>
            <div className="col s6 offset-s3">
                <div className="card indigo darken-4">
                    <div className="card-content white-text">
                        <span className="card-title center-align" style={{fontSize: '30px'}}>Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите email"
                                    id="email"
                                    type="text"
                                    name='email'
                                    value={form.email}
                                    className='yellow-input white-text'
                                    onChange={changeHandler}
                                />
                                    <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="password"
                                    name='password'
                                    value={form.password}
                                    className='yellow-input white-text'
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <form action="#">
                            <p>
                                <label >
                                    <input
                                        type="checkbox"
                                        name='roles'
                                        onChange={changeHandler}
                                        value='STUDENT'
                                        className="filled-in" />
                                    <span className='white-text'>Студент</span>
                                </label>
                            </p>
                            <p>
                                <label >
                                    <input
                                        type="checkbox"
                                        name='roles'
                                        onChange={changeHandler}
                                        value='EMPLOYER'
                                        className="filled-in" />
                                    <span className='white-text'>Работодатель</span>
                                </label>
                            </p>
                        </form>
                    </div>
                    <div className="card-action">
                        <button
                            className='btn orange accent-3'
                            style={{marginRight:10}}
                            disabled={loading}
                            onClick={loginHandle}
                        >
                            Войти
                        </button>
                        <button
                            className='btn grey lighten-1 black-text'
                            disabled={loading}
                            onClick={registerHandle}
                        >
                            Регистрация
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthPage;