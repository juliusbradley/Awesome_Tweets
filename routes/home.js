const Express = require('express');
const router  = Express.Router();



router.get('/', function (req,res,next){
  res.render('index');
})
router.get('/new', function (req,res,next){
  res.render('posts/new')
})



module.exports = router;
