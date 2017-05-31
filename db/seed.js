const db = require('./conn');
const faker = require('faker');
for (let i = 0; i < 20; i += 1) {
  db.query(`
    INSERT INTO posts (username, content) VALUES ($<name>, $<content>)
  `, {
    name: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    content: faker.hacker.phrase()
  }).then(function () {
    console.log(`ð¨ Create post`);

   if (i === 19) process.exit();
  })
}
