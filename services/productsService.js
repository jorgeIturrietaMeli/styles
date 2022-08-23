/**
 * Acá deberás implementar un servicio que haga un llamado a la API 
 * interna y devuelva un array de productos.
 */

 const normalizer = require('./transforms/normalizer');

 const restclient = require('nordic/restclient')({
   timeout: 5000,
 });
 
 class ProductsService { 
   static getProducts(siteId,q="iphone",offset=0,limit=10) {
     return restclient.get(`/sites/${siteId}/search`,{params:{q ,offset,
       limit}})
             .then( response => normalizer(response.data.results) )
             .catch(() =>[])
   } 
 }
 
 module.exports = ProductsService;
 