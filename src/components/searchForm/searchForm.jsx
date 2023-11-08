import './searchForm.css';

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

export const SearchForm = ({ value, onChange, onSubmit, className }) => {
    return (
        <form className={className + ' search-form'} onSubmit={onSubmit}>
            <input
                className='search-input'
                name='request'
                type='text'
                onChange={(evt) => onChange(evt.target.value)}>
            </input>
            <img className='search-keyboard' src='https://img.freepik.com/free-vector/keyboard-realistic_78370-506.jpg' alt='search keyboard'/>
            <button type='submit'>{'Найти'}</button>
        </form>
    );
}
