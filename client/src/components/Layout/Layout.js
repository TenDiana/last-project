import React from 'react';
import Navbar from "../Navbar/Navbar";


const Layout = (props) => {
    return (
        <>
            <Navbar/>
            <main className='Layout-Content'>
                {props.children}
            </main>
        </>
    );
};

export default Layout;