

 const { render } = require('./controller')
 const router = require('nordic/ragnar').router()
 
 router.get('/', render)
 
 
 module.exports = router