import { IResolvers } from 'apollo-server-express';

export const viewerRevolers: IResolvers = {
  Query: {
    authUrl: () => {
      return "Query.authUrl";
    }
  },
  Mutation: {
    logIn: () => {
      return "MUtation.logIn";
    },
    logOut: () => {
      return "MUtation.logOut";
    }
  }
}