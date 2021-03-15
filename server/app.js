const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors =  require('cors')

const app = express();
app.use(cors());

// connect DB mongo
mongoose.connect(
  "mongodb+srv://ninja020250:test123@gql-ninja.yg3fw.mongodb.net/race2021?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("connected mongoDB");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("server running on port 4000 - welcome nodejs");
});
