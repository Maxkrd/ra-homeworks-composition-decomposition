import './card.css';

/**
 * Компонент Card представляет карточку с картинкой, заголовком,
 * текстом, дополнительным текстом и ссылкой.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @returns {JSX.Element} - Компонент Card.
 */
export const Card = ({ img, title, text, textSecondary, href, className, ...props }) => {
    return (
        <div {...props} className={`card ${className || ''}`}>
        <a href={href || '#'}>
            {img && <img className='card-image' src={img} alt=''/>}
            {title && <div className='card-title'>{title}</div>}
            {text && <div className='card-text-main'>{text}</div>}
            {textSecondary && <div className='card-text-secondery'>{textSecondary}</div>}
        </a>
        </div>
    );
}
