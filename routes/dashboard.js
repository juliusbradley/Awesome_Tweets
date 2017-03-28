const Express = require('express');
const router = Express.Router();


router.get('/dashboard', function (req, res, next) {
/*  const {user, myTextBox} = request.cookies; */
  res.render('dashboard', {params: null });
})

router.post('/dashboard', function (req, res, next) {
response.cookie('user', user);
response.cookie('myTextBox', myTextBox);
(console.log ('user', 'myTextBox'))
})


router.get('/', function (req, res, next) {
       res.send(posts)
      res.render('/', {});
    })

    router.get('/dashboard', function (req,res,next){
      res.render('dashboard')
    })
/*
    router.post('/dashboard', function (req, res, next) {
      const params = req.body;
      console.log(params)
        res.render('dashboard', {params})
    })

*/


module.exports = router;
