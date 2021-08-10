import React from 'react';

const StudCard = ( {data} ) => {
    return (
        <>
            <h3 className='center-align'>Данные о студенте</h3>
            <div className='box2'>
                <div className="row">
                    <div className="input-field col s5">
                        <label>ФИО</label><br/>
                        <p className='black-text '> {data[0].name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <label>Тип учереждения</label><br/>
                        <p className='black-text '> {data[0].types}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <label>Специальность</label><br/>
                        <p className='black-text '> {data[0].prof}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <label>Место учебы</label><br/>
                        <p className='black-text '> {data[0].place}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <label>Год окончания</label><br/>
                        <p className='black-text '> {data[0].lastYear}</p>
                    </div>
                </div>


            </div>
        </>

    );
};

export default StudCard;