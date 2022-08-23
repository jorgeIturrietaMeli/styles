const React = require('react');
const PropTypes = require('prop-types');
const ProductCard = require('../ProductCard');
const Aside = require('../Aside');
const ProductList = ({ products, size }) => {
    const [favoriteList, setFavoriteList] = React.useState([])
    console.log(favoriteList)
    const handleProducts = (id) => {
        if (favoriteList.includes(id)) {
            const newProducts = favoriteList.filter(product => product !== id)
            setFavoriteList(newProducts)
        } else {
            setFavoriteList([...favoriteList, id])

        }

    }
    return (
        <div className='main-container'>
            <Aside/>
            <div className={`container-${size.type}`}>
                <h1>Listado de productos</h1>
                <ul>
                    {products.length > 0 ? products.map(product =>
                        <ProductCard key={product.id}
                            id={product.id}
                            title={product.title}
                            permalink={product.permalink}
                            price={product.price}
                            thumbnail={product.thumbnail}
                            handleProducts={handleProducts}
                            stock={product.available_quantity}
                        />)
                        : <p>No se encontraron productos</p>}
                </ul>

            </div>
        </div>
    );
};



module.exports = ProductList;
