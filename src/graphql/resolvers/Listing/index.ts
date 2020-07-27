import { IResolvers, IResolverObject } from "apollo-server-express";
import { Listing, ListingType } from "../../../lib/types";

export const listingResolvers: IResolvers = {
  Query: {
    listing: () => {
      return "Query.listing";
    }
  },
  Listing: {
    id: (listing: Listing): string => {
      return listing._id.toString();
    }
  }
};