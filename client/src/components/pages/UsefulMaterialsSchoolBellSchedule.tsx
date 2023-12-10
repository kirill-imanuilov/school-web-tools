import '../../index.css';
import { BackButton } from '../buttons/BackButton';
import { UsefulMaterialsSchoolBellScheduleMondayFriday } from '../UsefulMaterialsSchoolBellSchedule';

export function UsefulMaterialsSchoolBellSchedulePage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className='container-title'>Расписание звонков</h1>
        <div className='container-content'>
          <UsefulMaterialsSchoolBellScheduleMondayFriday />
          <BackButton />
        </div>
      </div>
    </div>
  );
}
