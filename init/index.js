// const mongoose = require("mongoose");
// const initData = require("./data.js");
// const Listing = require("../Models/listing.js");

// const MONGO_URL = "mongodb://127.0.0.1:27017/WonderLust";

// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };

// initDB();

const {data} = require("./data.js");
const Listing = require("../Models/listing.js");
const User = require("../Models/user.js");

const initDB = async () => {
  await Listing.deleteMany({});

  const user = await User.findOne();

  if (!user) {
    console.log("No user found. Please signup first.");
    return;
  }

  const listingsWithOwner = data.map((listing) => ({
    ...listing,
    owner: user._id,
  }));

  await Listing.insertMany(listingsWithOwner);

  console.log("Data was initialized");
};

db.listings.updateMany(
  {},
  {
    $set: {
      owner: ObjectId("68abc1234567890123456789"),
    },
  },
);