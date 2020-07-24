require('dotenv').config();

import {ObjectId} from 'mongodb';
import { connectDatabase } from '../src/database';
import { Listing } from '../src/lib/types'

const seed = async () => {
  try {
    console.log("[seed] : running...");

    const db = await connectDatabase();
    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title: "Clean house",
        image: "img_url",
        address: "Random address",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
      },
      {
        _id: new ObjectId(),
        title: "Clean house 2",
        image: "img_url",
        address: "Random address",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
      },
      {
        _id: new ObjectId(),
        title: "Clean house 3",
        image: "img_url",
        address: "Random address",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
      }
    ];

    for (const listing of listings) {
      await db.listings.insertOne(listing);
    }
    console.log('[seed] : successful...')

  } catch (error) {
    throw new Error('failed to seed database');
  }
}

seed();
