var express = require('express');
var router = express.Router();
const { trends,timeline,search,post } = require('../controllers/twattCont.js')

router.get('/trends', trends)
router.get('/timeline', timeline)
router.get('/search', search)
router.post('/post', post)


module.exports = router
