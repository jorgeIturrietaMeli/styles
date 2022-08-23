
const React = require('react')
const Script = require('nordic/script');
const serialize = require('serialize-javascript');
const ProductList = require('../../components/ProductList')
const Style = require('nordic/style');


function View({ products,size }) {
    const preloadedState = { products,size };
    return (
        <>
            <Script>
                {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('Demo page is loaded!');
        `}
            </Script>
            <Script src="vendor.js" />
            <Script src="productList.js" />
            <Style href="productList.css" />
            {products.length ? <ProductList products={products} size={size} />
                : <p>No se encontraron productos</p>
            }


        </>
    )
}

module.exports = View