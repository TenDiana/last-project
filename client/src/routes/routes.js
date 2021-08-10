import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import PersonalPage from "../components/PersonalPage/PersonalPage";
import WorkPage from "../components/WorkPage/WorkPage";
import MainPage from "../components/MainPage/MainPage";
import AuthPage from "../components/AuthPage/AuthPage";
import Form from "../components/Form/Form";
import CreateShips from "../components/CreateShips/CreateShips";
import StudentInfo from "../components/StudentInfo/StudentInfo";



export const useRoutes = (isAuthenticated, userRole) => {
    if(isAuthenticated){
        console.log(userRole)
        if (userRole == 'STUDENT'){
            return (
                <Switch>
                    <Route path='/personal' exact>
                        <PersonalPage/>
                    </Route>
                    <Route path='/main' exact>
                        <MainPage/>
                    </Route>
                    <Route path='/all'>
                        <WorkPage/>
                    </Route>
                    <Route path='/data'>
                        <StudentInfo/>
                    </Route>
                    <Redirect to='/main'/>
                </Switch>
            )
        } else{
            return (
                <Switch>
                    <Route path='/personal' exact>
                        <PersonalPage/>
                    </Route>
                    <Route path='/main' exact>
                        <MainPage/>
                    </Route>
                    <Route path='/generate' >
                        <Form />
                    </Route>
                    <Route path='/all'>
                        <WorkPage/>
                    </Route>
                    <Route path='/ship'>
                        <CreateShips />
                    </Route>
                    <Redirect to='/main'/>
                </Switch>
            )
        }


    }

    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}