import { useState } from 'react'
import { SearchForm } from '../searchForm/searchForm';
import './searchCard.css';

/**
 * Компонент SearchForm отображает поисковую строку.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.value - Значение поисковой строки.
 * @param {function} props.onChange - Обработчик изменения значения поисковой строки.
 * @param {function} props.onSubmit - Обработчик отправки формы поиска.
 * @param {string} props.className - Классы для стилизации компонента.
 * @returns {JSX.Element} - Компонент SearchForm.
 */

export const SearchCard = (props) => {
    const {products} = props;
    const [value, setValue] = useState('');

    return (
        <div className='search'>
            <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Yandex_logo_2021_Russian.svg' alt='Яндекс'/>
            <div className='search-body'>
                <div className='search-links'>
                    {products.map((o, index) =>
                    <a className={`h4 ${o.muted && 'muted'}`} href={o.href || '#'} key={index}>{o.text}</a>
                    )}
                </div>
                <SearchForm className='form' value={value} onChange={(value) => setValue(value)} onSubmit={()=>{}}/>
                <div className='search-footer'>
                    <span>{'Найдется всё. Например, '}</span>
                    <span className='muted'>{'фаза луны сегодня'}</span>
                </div>
            </div>
        </div>
    )
}
