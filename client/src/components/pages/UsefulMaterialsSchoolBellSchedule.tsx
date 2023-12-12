import '../../index.css';
import { BackButton } from '../buttons/BackButton';
import { UsefulMaterialsSchoolBellScheduleMondayFriday } from '../UsefulMaterialsSchoolBellSchedule';
import { UsefulMaterialsSchoolBellScheduleSaturday } from '../UsefulMaterialsSchoolBellSchedule';
import { useState } from 'react';

export function UsefulMaterialsSchoolBellSchedulePage() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Расписание звонков</h1>
        <div className='container-content'>
          <div className='tab-row'>
            <div className='tab' onClick={() => setTabIndex(0)}>
              ПН-ПТ {tabIndex === 0 && <div className='tab-selected' />}
            </div>
            <div className='tab' onClick={() => setTabIndex(1)}>
              СБ {tabIndex === 1 && <div className='tab-selected' />}
            </div>
          </div>
          {tabIndex === 0 && <UsefulMaterialsSchoolBellScheduleMondayFriday />}
          {tabIndex === 1 && <UsefulMaterialsSchoolBellScheduleSaturday />}
          <BackButton />
        </div>
      </div>
    </div>
  );
}
