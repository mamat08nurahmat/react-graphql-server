const express = require('express');
const expresGraphQL = require('express-graphql');
const schema = require('./schema/index');

const app = express();

app.use('/graphql', expresGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log('Listening on Port 4000...');
});
