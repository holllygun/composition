import './App.css'

import { List } from './Components/List'
import { SearchBar } from './Components/SearchBar';
import { Widget } from './Components/Widget';
import { Section } from './Components/Section';
import { SectionItem } from './Components/SectionItem';
import { Advertisement } from './Components/Advertisement';

function App() {
  const news = ["Новость 1", "Новость 2", "Новость 3"];
  
    return (
    <>
      <aside>
        <List className="list_item options" items={['Сейчас в СМИ', 'В Германии', 'Рекомендуем']}></List>
      </aside>
      <main>
        <div className="top_content">
          <List items={news}/>
          <Advertisement image='https://placehold.co/100x100' header='Работа над ошибками' description='Смотрите в Яндексе и запоминайте'/>
        </div>
        <List className = "options" items={["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"]}/>
        <SearchBar content='Найти'/>
        <Advertisement image='https://placehold.co/1100x200'/>
        <div className='all_pages'>
          <Widget location='Москве' temperature={-12} description='Cold' iconUrl='https://placehold.co/50x50'/>
          <Section header='Карта Германии'> <SectionItem content='Расписание'/> </Section>
          <Section header='Посещаемое'> 
              <SectionItem name='Недвижимость ' content=' – о сталинках'/>
              <SectionItem name='Маркет ' content=' – люстры и светильники'/>
              <SectionItem name='Авто.ру ' content=' – привод 4х4 до 500 000'/>
          </Section>
          <Section header='Телепрограмма' button_name='Эфир'>
            <SectionItem name="2:00" content='ТНТ' comment='ТНТ International'/>
            <SectionItem name="2:15" content='Джинглики' comment='Карусель'/>
            <SectionItem name="2:25" content='Наедине со всеми' comment='2х2'/>
          </Section>
          <Section header='Эфир'>
            <SectionItem play_icon='▶️' content='Управление как искусство' comment='Успех'/>
            <SectionItem play_icon='▶️' content='Ночь. Мир в это время' comment='earthTV'/>
            <SectionItem play_icon='▶️' content='Андрей Вознесенский' comment='Совершенно секретно'/>
          </Section>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
