require('dotenv').config();

import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql'
import { connectDatabase } from './database';

const mount = async (app: Application) => {
  const db = await connectDatabase();

  app.use(cookieParser(process.env.SECRET));

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res })
  });

  server.applyMiddleware({ app, path: '/api' });
  app.listen(process.env.PORT);

  console.log(`[app]: http://localhost:${process.env.PORT}`);
};

mount(express());
