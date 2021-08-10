import React, {useState, useCallback, useContext, useEffect} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/httpHook";
import Loader from "../Loader/Loader";
import CompCard from "../CompCard/CompCard";

const CompanyInfo = () => {
    const {token} = useContext(AuthContext)
    const { request, loading} = useHttp()
    const [data, setData] = useState(null)

    const getData = useCallback(async () => {
        try{
            const fetched = await request(`/api/info/info`, 'GET', null, {
                Authorization: `Bearer ${token}`,
            })
            console.log(fetched)
            setData(fetched)

        }catch (e) {}

    }, [token, request])

    useEffect(() => {
        getData()
    }, [getData])

    if (loading){
        return <Loader/>
    }

    return (
        <div>
            {!loading && data && <CompCard data={data}/>}

        </div>
    );
};

export default CompanyInfo;