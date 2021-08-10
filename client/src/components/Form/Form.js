import React, {useEffect, useState, useContext} from 'react';
import {useHttp} from '../../hooks/httpHook'
import {useMessage} from "../../hooks/messageHook";
import './Form.css'
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from 'react-router-dom'


const Form = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { request, error, clearError} = useHttp()
    const [info, setInfo] = useState('')


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setInfo({ ...info, [event.target.name]: event.target.value})
    }

    const handleSave = async () => {
        try{
            const data = await request('/api/info/generate', 'POST', {...info}, {
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
                        id="companyName"
                        type="text"
                        className="validate"
                        name='companyName'
                        value={info.companyName}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Название компании</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="city"
                        type="text"
                        className="validate"
                        name='city'
                        value={info.city}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Город</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="occupation"
                        type="text"
                        className="validate"
                        name='occupation'
                        value={info.occupation}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Сфера деятельности</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="about"
                        type="text"
                        className="validate"
                        name='about'
                        value={info.about}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">О компании</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="name"
                        type="text"
                        className="validate"
                        name='name'
                        value={info.name}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">ФИО</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="position"
                        type="text"
                        className="validate"
                        name='position'
                        value={info.position}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Должность</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="address"
                        type="text"
                        className="validate"
                        name='address'
                        value={info.address}
                        onChange={changeHandler}
                    />
                    <label htmlFor="text">Адрес организации</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="phone"
                        type="tel"
                        className="validate"
                        name='phone'
                        value={info.phone}
                        onChange={changeHandler}
                    />
                    <label htmlFor="text">Телефон организации</label>
                </div>
            </div>
           <div className='box1'>
               <a
                   className="waves-effect waves-light btn"
                   onClick={handleSave}
               >
                   Сохранить
               </a>

               <a  className="waves-effect waves-light btn" href="/personal" onClick={logOutHandler}>Назад</a>
           </div>
        </div>
    );
};

export default Form;

// <input type="text" class="datepicker"> для др

// <div class="input-field col s12">
//     <select>
//       <option value="" disabled selected>Choose your option</option>
//       <option value="1">Option 1</option>
//       <option value="2">Option 2</option>
//       <option value="3">Option 3</option>
//     </select>
//     <label>Materialize Select</label>
//   </div> для выбора т=рода занятий
