import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { MainPage } from './components/pages/Main';

function App() {
    return (
        <Routes>
            <Route path='/' element={ <MainPage/> }/>
            <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
    );
}

export default App;
