import './banner.css';

/**
 * Компонент Banner представляет баннер с изображением и ссылкой.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.src - URL изображения.
 * @param {string} props.href - URL ссылки.
 * @param {string} props.alt - Альтернативный текст для изображения.
 * @returns {JSX.Element} - Компонент Banner.
 */
export const Banner = ({href, src, alt}) => {
    return (
        <a href={href}>
            <img src={src} alt={alt} className='banner'/>
        </a>
    )
}
