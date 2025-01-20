import './App.css'

import { List } from './Components/List'

function App() {
  const news = ["Новость 1", "Новость 2", "Новость 3"];
  
    return (
    <>
      <aside>
        <List className="list_item options" items={['Сейчас в СМИ', 'В Германии', 'Рекомендуем']}></List>
      </aside>
      <main>
        <List items={news}/>
        <List className = "options" items={["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"]}/>
        <div className="searchbar">
          <button className="searchbutton">Найти</button>
        </div>
        <div className='all_pages'>
          <List header="Погода" items={["днем +2","ночью -1"]}/>
          <List header="Карта Германии" items={["Расписание"]}/>
          <List header="Посещаемое" items={["Недвижисоть - о сталинках", "Маркет - люстры и светильники", "Авто.ру - привод 4х4 до 500 000"]}/>
          <List header="Телепрограмма" items={["2:00  ТНТ", "2:15  Джинглики", "2:25  Наедине со всеми"]}/>
          <List header="Эфир" items={["Управление как искусство", "Ночь. Мир в это время", "Андрекй Вознесенский"]}/>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
