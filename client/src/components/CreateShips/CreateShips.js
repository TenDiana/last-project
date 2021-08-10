import React, {useEffect, useState, useContext} from 'react';
import {useHttp} from '../../hooks/httpHook'
import {useMessage} from "../../hooks/messageHook";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from 'react-router-dom'
import './CreateShips.css'


const CreateShips = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { request, error, clearError} = useHttp()
    const [ships, setShips] = useState('')

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setShips({ ...ships, [event.target.name]: event.target.value})
    }
    const handleSave = async () => {
        try{
            const data = await request('/api/work/ship', 'POST', {...ships}, {
                Authorization: `Bearer ${auth.token}`
            })
            message(data.message)
        }catch (e){}
    }

    const logOutHandler = (e) => {
        e.preventDefault()
        history.push('/personal')

    }

    return (
        <div className='box'>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="1"
                        type="text"
                        className="validate"
                        name='called'
                        value={ships.called}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Название стажировки</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="2"
                        type="text"
                        className="validate"
                        name='request'
                        value={ships.request}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Требования к кондидату</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="3"
                        type="text"
                        className="validate"
                        name='time'
                        value={ships.time}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">График работы</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="5"
                        type="text"
                        className="validate"
                        name='salary'
                        value={ships.salary}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Зарплата / Неоплачиваемая</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea
                        id="textarea2"
                        className="materialize-textarea"
                        data-length="60"
                        name='skills'
                        value={ships.skills}
                        onChange={changeHandler}
                    />
                    <label htmlFor="textarea2">Необходимые навыки</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <textarea
                        id="textarea4"
                        className="materialize-textarea"
                        data-length="60"
                        name='work'
                        value={ships.work}
                        onChange={changeHandler}
                    />
                    <label htmlFor="textarea4">Какие задачи выполнять</label>
                </div>
            </div>
           <div className='box1'>
               <a
                   className="waves-effect waves-light btn"
                   style={{margin: '0 1rem 0 0 '}}
                   onClick={handleSave}
               >
                   Сохранить
               </a>

               <a  className="waves-effect waves-light btn" href="/personal" onClick={logOutHandler}>Назад</a>
           </div>
            
        </div>
    );
};

export default CreateShips;