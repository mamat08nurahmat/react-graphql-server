const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;
const axios = require('axios');

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    image: {type: GraphQLString},
    price: {type: GraphQLInt}
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    product: {
      type: ProductType,
      args: {id: {type: GraphQLString} },
      resolve(parentValue, args){
        return axios.get(`http://localhost:3000/products/${args.id}`)
          .then(res => res.data);
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
