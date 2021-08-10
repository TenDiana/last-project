import React from 'react';
import Form from "../Form/Form";
import {useAuth} from "../../hooks/auth.hook";
import StudentInfo from "../StudentInfo/StudentInfo";
import CreateShips from "../CreateShips/CreateShips";
import {NavLink} from "react-router-dom";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import StudInfo from "../StudInfo/StudInfo";



const PersonalPage = () => {
    const {userRole} = useAuth()

    console.log(userRole, 'Personal')
    return(
        <div>
            {userRole == 'STUDENT' &&
            <>
                <div className='box3'>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><NavLink to='/data'>данные студента</NavLink></li>

                    </ul>
                    <StudInfo/>
                </div>

            </>}
            {userRole == 'EMPLOYER' &&
                <>
                    <div className='box3'>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><NavLink to='/generate'>Редактировать данные компании</NavLink></li>
                            <li><NavLink to='/ship'> Создать новую стажировку </NavLink></li>
                            <li><NavLink to='/all'> Все стажировки </NavLink></li>
                            {/*<li><NavLink to='/all'></NavLink></li>*/}
                        </ul>


                        <CompanyInfo/>
                    </div>



                </>

            }

        </div>
    )
};
//личный кабинет

export default PersonalPage;