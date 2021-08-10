import React from 'react';

const CompCard = ( {data} ) => {
    return (
        <>
            <h3 className='center-align'>Данные компании</h3>
            <div className='box2'>

            <div className="row">
                <div className="input-field col s5">
                    <label>Название компании</label><br/>
                    <p className='black-text '> {data[0].companyName}</p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s5">
                    <label>Город</label><br/>
                    <p className='black-text '> {data[0].city}</p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s5">
                    <label>Сфера деяельности</label><br/>
                    <p className='black-text '> {data[0].occupation}</p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s5">
                    <label>О компании</label><br/>
                    <p className='black-text '> {data[0].about}</p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s5">
                    <label>ФИО</label><br/>
                    <p className='black-text '> {data[0].name}</p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s5">
                    <label>Должность</label><br/>
                    <p className='black-text '> {data[0].position}</p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s5">
                    <label>Телефон компании</label><br/>
                    <p className='black-text '> {data[0].phone}</p>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s5">
                    <label>Адрес </label><br/>
                    <p className='black-text '> {data[0].address}</p>
                </div>
            </div>


        </div>
        </>

    );
};

export default CompCard;