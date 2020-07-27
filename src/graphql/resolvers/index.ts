import merge from 'lodash.merge';
import { bookingResolvers } from './Booking';
import { listingResolvers } from './Listing';
import { userResolver } from './User';
import { viewerRevolers } from './Viewer';


export const resolvers = merge(
  bookingResolvers,
  listingResolvers,
  userResolver,
  viewerRevolers
);
