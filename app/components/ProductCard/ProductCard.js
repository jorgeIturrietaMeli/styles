const React = require('react');
const PropTypes = require('prop-types');
const Image = require('nordic/image')


function ProductCard({ id, title, price, thumbnail, stock, permalink, handleProducts }) {
    const [favorite, setFavorite] = React.useState(true)
    const handleClick = (id) => {
        setFavorite(!favorite)
        handleProducts(id)
    }

    return (<li className='card'>
        <div className='card-container'>
            <p className='product-title'>{title}</p>
            <p>$ {price}</p>
            <p>Disponible: {stock} </p>

        </div>
        <a target="_blank" href={permalink}>
            <Image src={thumbnail} alt={title} lazyload="off" />
        </a>
        <div>
        <button onClick={() => handleClick(id)}>{favorite ? "Agregar a favoritos" : "Quitar de favoritos"}</button>
        </div>

    </li>)
}
ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
};



module.exports = ProductCard