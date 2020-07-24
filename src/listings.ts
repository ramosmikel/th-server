interface Listing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}


export const listings : Listing[] = [
  {
    id: "001",
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
    id: "002",
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
    id: "003",
    title: "Clean house",
    image: "img_url",
    address: "Random address",
    price: 10000,
    numOfGuests: 2,
    numOfBeds: 1,
    numOfBaths: 2,
    rating: 5
  }
]