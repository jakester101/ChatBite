const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');
const path = require('path');
const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');
const cors = require('cors');
const routes = require("./routes");


const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({app});

    db.once('open', ()=> {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
};

startApolloServer(typeDefs, resolvers);