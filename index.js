const express = require('express')
const { ApolloServer} = require('apollo-server-express')
const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')

const app = express()

module.exports = app

async function start() { 

  const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

await apolloServer.start()

apolloServer.applyMiddleware({app})

app.listen(3000, () => {  /*servidor http://localhost:3000/graphql*/
    console.log('server on port', 3000)
    })
}
start()