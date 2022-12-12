import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header  from './components/header/Header';
import Main from './components/pages/main/Main';
import Profile from './components/pages/profile/Profile';
import Chat from './components/pages/chat/Chat';

function App() {
    return(
        <>
    <Routes>
        <Route path='/' element={<Header />} />
            <Route path='/home' element={<Main />} />

    </Routes>
        </>
    )

}


export default App