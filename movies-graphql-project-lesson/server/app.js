const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors())

CONNECTION_URL = process.env.MONGODB_CONNECT;

mongoose.connect(CONNECTION_URL)
mongoose.connection.once('open', () => {
   console.log("Connection to database has been established successfully");
})


app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}));


app.listen(5000, () => {
   console.log('Server running on port 5000');
})