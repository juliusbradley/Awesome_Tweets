const db = require ('./conn');
db.query(`
  CREATE TABLE posts(
    id SERIAL,
    username VARCHAR,
    content VARCHAR(255)
  )
`).then(function () {
console.log('created table')
process.exit();
}).catch(function(error){
console.error(error);
process.exit();
})
