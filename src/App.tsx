import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { MainPage } from './components/pages/Main';
import { DataSendingPage } from './components/pages/DataSending';

function App() {
    return (
        <Routes>
            <Route path='/data_sending/' element={ <DataSendingPage/> }/>
            <Route path='/' element={ <MainPage/> }/>
            <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
    );
}

export default App;
