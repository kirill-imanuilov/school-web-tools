import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { MainPage } from './components/pages/Main';
import { DataSendingPage } from './components/pages/DataSending';
import { TimerPage } from './components/pages/Timer'
import { UsefulMaterialsPage } from './components/pages/UsefulMaterials';
import { ForTeachersPage } from './components/pages/ForTeachers';
import { CoffeeDeliveryPage } from './components/pages/CoffeeDelivery';
import { AboutPage } from './components/pages/About';

function App() {
    return (
        <Routes>
            <Route
                path='/data_sending/'
                element={ <DataSendingPage/> }/>
            <Route
                path='/timer/'
                element={ <TimerPage/> }/>
            <Route
                path='/useful_materials/'
                element={ <UsefulMaterialsPage/> }/>
            <Route
                path='/for_teachers/coffee_delivery/'
                element={ <CoffeeDeliveryPage/> }/>
            <Route
                path='/for_teachers/'
                element={ <ForTeachersPage/> }/>
            <Route
                path='/about/'
                element={ <AboutPage/> }/>
            <Route
                path='/'
                element={ <MainPage/> }/>
            <Route
                path='*'
                element={ <Navigate to='/'/> }/>
        </Routes>
    );
}

export default App;
