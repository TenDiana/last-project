import React, {useState, useEffect, useContext} from 'react';
import {useHttp} from "../../hooks/httpHook";
import {useMessage} from "../../hooks/messageHook";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from 'react-router-dom'
import './StudentInfo.css'



const StudentInfo = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [studInfo, setStudInfo] = useState('')

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = (event) => {
        setStudInfo({...studInfo, [event.target.name]: event.target.value})
    }

    const handleSave = async () => {
        try{
            const data = await request('/api/stud/data', 'POST', {...studInfo}, {
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
                        id="name"
                        type="text"
                        className="validate"
                        name='name'
                        value={studInfo.name}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">ФИО</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="types"
                        type="text"
                        className="validate"
                        name='types'
                        value={studInfo.types}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">ВУЗ / Колледж</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="prof"
                        type="text"
                        className="validate"
                        name='prof'
                        value={studInfo.prof}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Специальность</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="place"
                        type="text"
                        className="validate"
                        name='place'
                        value={studInfo.place}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Учебное заведение</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input
                        id="lastYear"
                        type="text"
                        className="validate"
                        name='lastYear'
                        value={studInfo.lastYear}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">год окончания</label>
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

export default StudentInfo;