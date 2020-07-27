import merge from 'lodash.merge';
import { userResolver } from './User';
import { viewerRevolers } from './Viewer';

export const resolvers = merge(userResolver, viewerRevolers);
