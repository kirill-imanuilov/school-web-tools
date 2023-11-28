interface lostThingLostData {
  id: number;
  date: string;
  createdAt: string;
  isThingFound: number;
  thingName: string;
  thingIMG: string;
  thingLossPlace: string;
  userContacts: string;
  userMessage: string;
}

interface lostThingsLostItemProps {
  lostThingLostData: lostThingLostData;
}

export function LostThingsLostItem(props: lostThingsLostItemProps) {
  async function thingFound(id: number) {
    await fetch(`http://localhost:8000/lost_things/lost/thing_found/${id}`);
  }

  const handleThingFoundButtonClick = (event: any, id: number) => {
    if (window.confirm('Вы уверены?')) {
      thingFound(id);
    }
  };

  return (
    <div className='lost-things-item'>
      <div className='lost-things-item-title'>
        {props.lostThingLostData.thingName} (№{props.lostThingLostData.id})
      </div>
      <div className='lost-things-item-content'>
        <ul>
          <li>
            <strong>Дата и время: </strong>
            {props.lostThingLostData.date}, {props.lostThingLostData.createdAt}
          </li>
          <li>
            <strong>Что потерялось: </strong>
            {props.lostThingLostData.thingName}
          </li>
          {props.lostThingLostData.thingLossPlace !== '' && (
            <li>
              <strong>Где вещь потерялась: </strong>
              {props.lostThingLostData.thingLossPlace}
            </li>
          )}
          <li>
            <strong>Связь с владельцем: </strong>
            {props.lostThingLostData.userContacts}
          </li>
          <li>
            <strong>Сообщение/описание: </strong>
            {props.lostThingLostData.userMessage}
          </li>
        </ul>
        {props.lostThingLostData.thingIMG !== '' && (
          <div className='lost-things-item-thing-img-container'>
            <img
              className='lost-things-item-thing-img'
              src={props.lostThingLostData.thingIMG}
            />
          </div>
        )}
        <button
          onClick={(event) =>
            handleThingFoundButtonClick(event, props.lostThingLostData.id)
          }
        >
          Владелец получил вещь
        </button>
      </div>
    </div>
  );
}
