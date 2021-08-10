import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/httpHook";
import {useParams} from 'react-router-dom'
import Loader from "../Loader/Loader";
import Cart from "../Cart/Cart";

const WorkPage = () => {
    const {token} = useContext(AuthContext)
    const { request, loading} = useHttp()
    const [ships, setShip] = useState(null)

    const getShip = useCallback(async () => {
        try{
            const fetched = await request(`/api/work/all`, 'GET', null, {
                Authorization: `Bearer ${token}`,
            })
            console.log(fetched)
            setShip(fetched)

        }catch (e) {}

     }, [token, request])

    useEffect(() => {
        getShip()
    }, [getShip])

    if (loading){
        return <Loader/>
    }

    return (
        <div>
            {!loading && ships && ships.map( ship => <Cart ship={ship}/>)}
        </div>
    );
};
//эта стр открывается по клику на стажировку для более подробной инфы

export default WorkPage;