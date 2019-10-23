require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/User')
const Post = require('./models/Post')

// db connect
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
})
const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

// four users
const user1 = new User({
  first_name: "Leanne",
  last_name: "Graham",
  username: "Bret",
  email: "Sincere@april.biz"
})
const user2 = new User({
  first_name: "Ervin",
  last_name: "Howell",
  username: "Antonette",
  email: "Shanna@melissa.tv"
})
const user3 = new User({
  first_name: "Clementine",
  last_name: "Bauch",
  username: "Samantha",
  email: "Nathan@yesenia.net"
})
const user4 = new User({
  first_name: "Patricia",
  last_name: "Lebsack",
  username: "Karianne",
  email: "Julianne.OConner@kory.org"
})

// seven posts owned by users 1-3
const post1 = new Post({
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  user: user1.id
});

const post2 = new Post({
  title: "qui est esse",
  body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  user: user1.id
})
const post3 = new Post({
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  user: user1.id
})
const post4 = new Post({
  title: "voluptate et itaque vero tempora molestiae",
  body: "eveniet quo quis laborum totam consequatur non dolor ut et est repudiandae est voluptatem vel debitis et magnam",
  user: user2.id
})
const post5 = new Post({
  title: "adipisci placeat illum aut reiciendis qui",
  body: "illum quis cupiditate provident sit magnam ea sed aut omnis veniam maiores ullam consequatur atque adipisci quo iste expedita sit quos voluptas",
  user: user2.id
})
const post6 = new Post({
  title: "est et quae odit qui non",
  body: "similique esse doloribus nihil accusamus omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus perspiciatis cum ut laudantium omnis aut molestiae vel vero",
  user: user3.id
})
const post7 = new Post({
  title: "quasi id et eos tenetur aut quo autem",
  body: "eum sed dolores ipsam sint possimus debitis occaecati debitis qui qui et ut placeat enim earum aut odit facilis consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur",
  user: user3.id
})

Idea.remove({})
  .then(() => console.log('DB RESET!'))
  .then(() => user1.save())
  .then(() => user2.save())
  .then(() => user3.save())
  .then(() => user4.save())
  .then(() => post1.save())
  .then(() => post2.save())
  .then(() => post3.save())
  .then(() => post4.save())
  .then(() => post5.save())
  .then(() => post6.save())
  .then(() => post7.save())
  .then(() => console.log('DB SEEDED!'))
  .then(() => mongoose.connection.close())
