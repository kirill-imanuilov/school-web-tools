import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { MainPage } from './components/pages/Main';
import { DataSendingPage } from './components/pages/DataSending';
import { TimePage } from './components/pages/Time';
import { ClockPage } from './components/pages/Clock';
import { TimerPage } from './components/pages/Timer';
import { StopwatchPage } from './components/pages/Stopwatch';
import { UsefulMaterialsPage } from './components/pages/UsefulMaterials';
import { ForTeachersPage } from './components/pages/ForTeachers';
import { CoffeeDeliveryPage } from './components/pages/CoffeeDelivery';
import { OrderTrackingPage } from './components/pages/OrderTracking';
import { CoffeeDeliveryStaffPage } from './components/pages/CoffeeDeliveryStaff';
import { AboutPage } from './components/pages/About';
import { FeedbackPage } from './components/pages/Feedback';
import { StaffPage } from './components/pages/Staff';

function App() {
  return (
    <Routes>
      <Route path='/staff/' element={<StaffPage />} />

      <Route path='/data_sending/' element={<DataSendingPage />} />
      <Route path='/time/' element={<TimePage />} />
      <Route path='/time/clock/' element={<ClockPage />} />
      <Route path='/time/timer/' element={<TimerPage />} />
      <Route path='/time/stopwatch/' element={<StopwatchPage />} />
      <Route path='/useful_materials/' element={<UsefulMaterialsPage />} />
      <Route
        path='/for_teachers/coffee_delivery/staff/'
        element={<CoffeeDeliveryStaffPage />}
      />
      <Route
        path='/for_teachers/coffee_delivery/order_tracking/:id'
        element={<OrderTrackingPage />}
      />
      <Route
        path='/for_teachers/coffee_delivery/'
        element={<CoffeeDeliveryPage />}
      />
      <Route path='/for_teachers/' element={<ForTeachersPage />} />
      <Route path='/about/feedback/' element={<FeedbackPage />} />
      <Route path='/about/' element={<AboutPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
