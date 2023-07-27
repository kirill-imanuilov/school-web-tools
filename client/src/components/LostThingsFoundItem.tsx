interface lostThingFoundData {
  id: string;
  date: string;
  createdAt: string;
  IsThingFound: number;
  thingName: string;
  thingIMG: string;
  thingDetectionPlace: string;
  thingReceiptPlace: string;
  userMessage: string;
}

interface lostThingsFoundItemProps {
  lostThingFoundData: lostThingFoundData;
}

export function LostThingsFoundItem(props: lostThingsFoundItemProps) {
  return (
    <div className='lost-things-found-item'>
      <div className='lost-things-found-item-title'>
        {props.lostThingFoundData.thingName} (№{props.lostThingFoundData.id})
      </div>
      <div className='lost-things-found-item-content'>
        <ul>
          <li>
            <strong>Дата и время: </strong>
            {props.lostThingFoundData.date},{' '}
            {props.lostThingFoundData.createdAt}
          </li>
          <li>
            <strong>Где вещь нашли: </strong>
            {props.lostThingFoundData.thingDetectionPlace}
          </li>
          <li>
            <strong>Где забрать владельцу: </strong>
            {props.lostThingFoundData.thingReceiptPlace}
          </li>
          {props.lostThingFoundData.userMessage !== '' && (
            <li>
              <strong>Сообщение/описание: </strong>
              {props.lostThingFoundData.userMessage}
            </li>
          )}
        </ul>
        <div className='lost-things-found-item-thing-img-container'>
          <img
            className='lost-things-found-item-thing-img'
            src={props.lostThingFoundData.thingIMG}
          />
        </div>
      </div>
    </div>
  );
}
