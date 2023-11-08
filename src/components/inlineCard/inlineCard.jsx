import { Card } from '../card/card';
import './inlineCard.css';

/**
 * Компонент InlineCard представляет карточку в виде строки.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @returns {JSX.Element} - Компонент InlineCard.
 */

export const InlineCard = (props) => {
    return (
        <Card {...props} className='inline-card'/>
    );
}
