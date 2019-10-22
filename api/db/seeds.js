require('dotenv').config()

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

const Post = require('./models/Post')

const post1 = new Post({
  userId: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
})
const post2 = new Post({
  userId: 1,
  title: "qui est esse",
  body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
})
const post3 = new Post({
  userId: 1,
  title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
})
const post4 = new Post({
  userId: 2,
  title: "voluptate et itaque vero tempora molestiae",
  body: "eveniet quo quis laborum totam consequatur non dolor ut et est repudiandae est voluptatem vel debitis et magnam"
})
const post5 = new Post({
  userId: 2,
  title: "adipisci placeat illum aut reiciendis qui",
  body: "illum quis cupiditate provident sit magnam ea sed aut omnis veniam maiores ullam consequatur atque adipisci quo iste expedita sit quos voluptas"
})
const post6 = new Post({
  userId: 3,
  title: "est et quae odit qui non",
  body: "similique esse doloribus nihil accusamus omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus perspiciatis cum ut laudantium omnis aut molestiae vel vero"
})
const post7 = new Post({
  userId: 3,
  title: "quasi id et eos tenetur aut quo autem",
  body: "eum sed dolores ipsam sint possimus debitis occaecati debitis qui qui et ut placeat enim earum aut odit facilis consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
})

Idea.remove({})
.then(() => console.log('DB RESET!'))
.then(() => post1.save())
.then(() => post2.save())
.then(() => post3.save())
.then(() => post4.save())
.then(() => post5.save())
.then(() => post6.save())
.then(() => post7.save())
.then(() => console.log('DB SEEDED!'))
.then(() => mongoose.connection.close())
