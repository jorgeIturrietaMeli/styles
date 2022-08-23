require('../pages/productList/styles.scss');
const React = require('react');
const hydrate = require('nordic/hydrate');
const ProductListView = require('../pages/productList/view')
const {
    products,
    size 
} = window.__PRELOADED_STATE__;

hydrate(<ProductListView products={products} size={size} /> 
    ,
    document.getElementById('root-app'),
);
