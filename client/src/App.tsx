import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { MainPage } from './components/pages/Main';
import { DataSendingPage } from './components/pages/DataSending';
import { TimePage } from './components/pages/Time';
import { ClockPage } from './components/pages/Clock';
import { TimerPage } from './components/pages/Timer';
import { StopwatchPage } from './components/pages/Stopwatch';
import { UsefulMaterialsPage } from './components/pages/UsefulMaterials';
import { UsefulMaterialsSchoolServicesPage } from './components/pages/UsefulMaterialsSchoolServices';
import { UsefulMaterialsLearningSitesPage } from './components/pages/UsefulMaterialsLearningSites';
import { UsefulMaterialsSchoolBellSchedulePage } from './components/pages/UsefulMaterialsSchoolBellSchedule';
import { LostThingsPage } from './components/pages/LostThings';
import { LostThingsFoundPage } from './components/pages/LostThingsFound';
import { LostThingsLostPage } from './components/pages/LostThingsLost';
import { ForTeachersPage } from './components/pages/ForTeachers';
import { CoffeeDeliveryPage } from './components/pages/CoffeeDelivery';
import { OrderTrackingPage } from './components/pages/OrderTracking';
import { CoffeeDeliveryStaffPage } from './components/pages/CoffeeDeliveryStaff';
import { AboutPage } from './components/pages/About';
import { FeedbackPage } from './components/pages/Feedback';
import { FeedbackThanksPage } from './components/pages/FeedbackThanks';
import { StaffPage } from './components/pages/Staff';
import { FeedbackStaffPage } from './components/pages/FeedbackStaff';

function App() {
  return (
    <Routes>
      <Route
        path='/staff/coffee_delivery'
        element={<CoffeeDeliveryStaffPage />}
      />
      <Route path='/staff/feedback' element={<FeedbackStaffPage />} />
      <Route path='/staff' element={<StaffPage />} />

      <Route path='/data_sending' element={<DataSendingPage />} />
      <Route path='/time' element={<TimePage />} />
      <Route path='/time/clock' element={<ClockPage />} />
      <Route path='/time/timer' element={<TimerPage />} />
      <Route path='/time/stopwatch' element={<StopwatchPage />} />
      <Route
        path='/useful_materials/school_services'
        element={<UsefulMaterialsSchoolServicesPage />}
      />
      <Route
        path='/useful_materials/learning_sites'
        element={<UsefulMaterialsLearningSitesPage />}
      />
      <Route
        path='/useful_materials/school_bell_schedule'
        element={<UsefulMaterialsSchoolBellSchedulePage />}
      />
      <Route path='/useful_materials' element={<UsefulMaterialsPage />} />
      <Route path='/lost_things/found' element={<LostThingsFoundPage />} />
      <Route path='/lost_things/lost' element={<LostThingsLostPage />} />
      <Route path='/lost_things' element={<LostThingsPage />} />
      <Route
        path='/for_teachers/coffee_delivery/order_tracking/:id'
        element={<OrderTrackingPage />}
      />
      <Route
        path='/for_teachers/coffee_delivery'
        element={<CoffeeDeliveryPage />}
      />
      <Route path='/for_teachers' element={<ForTeachersPage />} />
      <Route path='/about/feedback/thanks' element={<FeedbackThanksPage />} />
      <Route path='/about/feedback' element={<FeedbackPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
