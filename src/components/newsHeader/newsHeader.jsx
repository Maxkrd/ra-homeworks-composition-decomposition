import './newsHeader.css'

/**
 * Компонент NewsHeader представляет собой блок с заголовком новостей.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {Array} props.newsSections - Массив объектов с информацией о разделах новостей.
 * @returns {JSX.Element} - Компонент NewsHeader.
 */

export const NewsHeader = ({newsSections}) => {
    let options = {
        day: "numeric",
        weekday: "long",
        month: "long",
        hour: "numeric",
        minute: "numeric"
    }
    return (
        <div className='news-header'>
            {newsSections.map((o, index) =>
            <a className={`h3 ${o.muted && 'muted'}`} href={o.href || '#'} key={index}>{o.text}</a>
            )}
            <div className='header-date'>{new Date().toLocaleString('ru-RU', options)}</div>
        </div>   
    )
}
