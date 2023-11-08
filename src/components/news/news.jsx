import { InlineCard } from '../inlineCard/inlineCard';
import { NewsHeader } from '../newsHeader/newsHeader';
import './news.css'

/**
 * Компонент News представляет блок с новостями.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {Array} props.newsSections - Массив объектов с информацией о разделах новостей.
 * @param {Array} props.news - Массив объектов с информацией о новостях.
 * @param {Array} props.currencies - Массив объектов с информацией о курсах валют.
 * @returns {JSX.Element} - Компонент News.
 */

export const News = ({newsSections, news, currencies, ...props}) => {
    return (
        <div className='news'> 
            <NewsHeader newsSections={newsSections} />
            <div className='news-body'>
                {news.map((o, index) => <InlineCard {...o} key={index}/>)}
            </div>
            <div className='news-footer'>
                {currencies.map((o, index) => <InlineCard {...o} key={index}/>)}
            </div>
        </div>
    )
}
