const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;
const _ = require('lodash');

const products = [
  {id: "1", name: "dompet", image: "", price: 20000},
  {id: "2", name: "tas", image: "", price: 100000},
];

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
        return _.find(products, {id: args.id});
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
