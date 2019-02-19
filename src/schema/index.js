import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } from 'graphql'

const users = [
  {
    id: '1',
    firstName: 'Yo',
    age: 37
  },
  {
    id: '2',
    firstName: 'Yea',
    age: 32
  }
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve (_, args) {
        return users.find(user => user.id === args.id)
      }
    }
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
