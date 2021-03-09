const mongoose = require('mongoose');
//mongodb+srv://<username>:<password>@cluster0.l2onv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const server = process.env.MONGO_SERVER;
const db = process.env.MONGO_BD_NAME;
const mongoDbUri = `mongodb+srv://${user}:${password}@${server}/${db}?retryWrites=true&w=majority`

mongoose.connect(mongoDbUri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
