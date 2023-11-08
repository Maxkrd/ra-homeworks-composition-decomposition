import { News } from './components/news/news';
import { Card } from './components/card/card';
import { WeatherCard } from './components/weatherCard/weatherCard';
import { SearchCard } from './components/searchCard/searchCard';
import { Banner } from './components/banner/banner';
import './App.css';

const newsSections = [
  { text: 'Сейчас в СМИ', muted: false },
  { text: 'в Германии', muted: true },
  { text: 'Рекомендуем', muted: true },
];

const news = [
  { img: 'https://avatars.dzeninfra.ru/get-zen-logos/5398874/pub_61b741b1506c0d64b46e260f_649bc87ddcad58030bba1634/orig', text: 'Путин упростил получение автомобильных номеров'},
  { img: 'https://avatars.dzeninfra.ru/get-zen-logos/5398874/pub_61b741b1506c0d64b46e260f_649bc87ddcad58030bba1634/orig', text: 'В команде Зеленского раскрыли план реформ на Украине'},
  { img: 'https://avatars.dzeninfra.ru/get-zen-logos/5398874/pub_61b741b1506c0d64b46e260f_649bc87ddcad58030bba1634/orig', text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье'},
  { img: 'https://avatars.dzeninfra.ru/get-zen-logos/5398874/pub_61b741b1506c0d64b46e260f_649bc87ddcad58030bba1634/orig', text: 'Суд закрыл дело Демпартии США против России'},
  { img: 'https://avatars.dzeninfra.ru/get-zen-logos/5398874/pub_61b741b1506c0d64b46e260f_649bc87ddcad58030bba1634/orig', text: 'На Украине призвали создать ракеты для удара по Москве'},
];

const currencies = [
  { title: 'USD MOEX 63,52', textSecondary: '+0.09' },
  { title: 'EUR MOEX 70.86', textSecondary: '+0.14' },
  { title: 'НЕФТЬ 64,90', textSecondary: '+1,63%' },
  { textSecondary: '...' },
];

const topRightCard = {
  img: 'https://images.onlinetestpad.net/ac/10/f324eea9496fa4c0648df3c9b5a7.jpg',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
};

const GermanyMap = {
  title: 'Карта Германии',
  text: 'Расписания',
  href: '#',
};

const products = [
  { text: 'Видео', href: '#' },
  { text: 'Картинки', href: '#' },
  { text: 'Новости', href: '#' },
  { text: 'Карты', href: '#' },
  { text: 'Маркет', href: '#' },
  { text: 'Переводчик', href: '#' },
  { text: 'Эфир', href: '#' },
  { text: 'еще', href: '#' },
];

const banner = {
  src: 'https://media.filmz.ru/photos/big/filmz.ru_b_237845.jpg',
  alt: 'Movie',
  href: '#',
}

/**
 * Главное приложение
 * @returns {JSX.Element} Элемент главного приложения
 */

function App() {
  return (
    <div className="app">
      <div className='header'>
        <News {...{newsSections, news, currencies}}/>
        <Card {...topRightCard} style={{width: '15rem'}}/>
      </div>
      
      <SearchCard {...{products}} />

      <Banner {...banner}/>

      <div className='footer'>
        <WeatherCard/>
        <Card {...GermanyMap}/>
        
      </div>
    </div>
  );
}

export default App;
