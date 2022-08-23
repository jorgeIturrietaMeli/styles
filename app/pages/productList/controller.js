const React = require('react')
const View = require('./view')
const productService = require('../../../services/productsService')

// Middleware Definition
exports.fetchProductList = function fetchProductList(req, res, next) {
    const {name,offset,limit} =req.query
    productService.getProducts(req.platform.siteId,name,offset,limit)
        .then(data => {
            res.locals.products = data
            
            next()
        })
        .catch(e => next(e))
}

exports.render = function render(req, res) {
    const ProductsList = props => (
        <View {...props} />
    )
    // Render view
    res.render(ProductsList, {
        products: res.locals.products,
        size: req.device
     
    })
}