import { GraphQLClient } from 'graphql-request'

const endpoint =
  'https://api-us-east-1.graphcms.com/v2/cksibrpfr1uf501z41pux2mwe/master'

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
