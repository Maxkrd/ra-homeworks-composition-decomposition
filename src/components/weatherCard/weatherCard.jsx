import { nanoid } from 'nanoid';
import { Card } from '../card/card';
import './weatherCard.css';

/**
 * Компонент WeatherCard отображает информацию о погоде.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.className - Классы для стилизации компонента.
 * @param {string} props.title - Заголовок карточки.
 * @param {Array} props.text - Содержимое карточки.
 * @returns {JSX.Element} - Компонент WeatherCard.
 */

export const WeatherCard = (props) => {
    return (
        <Card
            {...props}
            className='weather-card'
            title='Погода'
            text={[
                <img className='weather-pic' src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png' alt='rainy' key={nanoid()} />,
                <span className='weather-temp' key={nanoid()}>+17°</span>,
                <div className='weather-text' key={nanoid()}>Утром +17, днём +20</div>,
            ]}
        />
    );
}
