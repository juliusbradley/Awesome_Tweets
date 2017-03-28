const Express = require('express');
const router  = Express.Router();


router.get('/dashboard', function (request, response,next) {
response.render('dashboard');
})

router.get('/', function (req,res,next){
  res.render('index');
})
router.get('/dashboard', function (req,res,next){
  res.render('dashboard', {params: null});
})

router.post('/dashboard', function (req, res, next) {
  const params = req.body;
  console.log(params)
    res.render('dashboard', {params})
})


module.exports = router;
