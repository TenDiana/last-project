import React from 'react';
import './Cart.css'
import {useHistory} from "react-router-dom";


const Cart = ({ship}) => {
    const history = useHistory()

    const logOutHandler = (e) => {
        e.preventDefault()
        history.push('/personal')
    }

    return (

        <div>
            <div className='box5'>
                <div className="row">
                    <div className="input-field col s5">
                        <label>Название стажировки</label><br/>
                        <p className='black-text '> {ship.called}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <label>Требования к студенту</label><br/>
                        <p className='black-text '> {ship.request}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <label>Необходимые навыки</label><br/>
                        <p className='black-text '> {ship.skills}</p>
                    </div>
                </div>

                <button style={{marginLeft: '80%'}}>Подробнее</button>
            </div>
            <a  className="waves-effect waves-light btn" href="/personal" onClick={logOutHandler}>Назад</a>
        </div>
    );
};

export default Cart;
