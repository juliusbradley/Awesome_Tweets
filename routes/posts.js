const Express = require('express');
const router = Express.Router();
const db = require('../db/conn');

router.get('/', function (req, res, next) {
 // ORDER BY id DESC will reverse the order of the posts
 db.query(`SELECT * FROM posts ORDER BY id DESC`)
   // terminate a route inside the callback passed to
   // then and catch (e.g. res.send(), res.render())
   .then(function (posts) {
     // res.send is useful to use to simply test if you're
     // receiving the data you want
     // res.send(posts)
     res.render('posts/index', {posts: posts});
   })
 });

router.get('/new', function(req,res,next){
  db.query(`SELECT * FROM posts ORDER BY id DESC`)
    // terminate a route inside the callback passed to
    // then and catch (e.g. res.send(), res.render())
    .then(function (posts) {
      // res.send is useful to use to simply test if you're
      // receiving the data you want
      // res.send(posts)
      res.render('posts/new', {allposts: posts});
    })
})

router.post('/new', function (req, res, next) {
  const post = req.body;
  console.log (post)
  db.query(`
    INSERT INTO posts (username, content) VALUES ($<username>, $<content>)
  `, post
  ).then(function () {
    db.query(`SELECT * FROM posts ORDER BY id DESC`)
      .then( function(posts){
        res.render('posts/new',{post: post, allposts: posts})
        console.log('THESE R POSTS', posts)
      })


  }).catch(function (err) { res.send(err) })
})

module.exports = router;
