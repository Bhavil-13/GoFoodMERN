// const mongoose = require("mongoose");

// mongoose.set('strictQuery', true);

// const mongoULI =
//   "mongodb+srv://gofood:ssg2bhavil@cluster0.e9zbh.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

// const mongoDB = async () => {
//   await mongoose.connect(
//     mongoULI,
//     { useNewUrlParser: true,},
//     async (err, result) => {
//       if (err) {
//         console.log("----", err);
//       } else {
//         console.log("connected");
//         const fetched_data = await mongoose.connection.db.collection(
//           "food_items"
//         );
//         fetched_data.find({}).toArray(async function (err, data) {
//           const foodCategory = await mongoose.connection.db.collection(
//             "foodCategory"
//           );
//           foodCategory.find({}).toArray(function (err, catData) {
//             if (err) {
//               console.log(err);
//             } else {
//               global.food_items = data;
//               global.foodCategory = catData;
//               // console.log(global.food_items);
//             }
//           });
//         });
//         // console.log("fetched items");
//       }
//     }
//   );
// };

// module.exports = mongoDB;
const mongoose = require("mongoose");

// Enable strictQuery to suppress deprecation warnings
mongoose.set("strictQuery", true);

// const mongoULI =
//   "mongodb+srv://gofood:ssg2bhavil@cluster0.e9zbh.mongodb.net/gofoodmern?retryWrites=false&w=majority";

const mongoULI="mongodb://mongodb:27017/gofoodmern"


const mongoDB = async () => {
  try {
    // Use async/await for mongoose.connect
    await mongoose.connect(mongoULI, { /*useNewUrlParser: true, useUnifiedTopology: true*/ });
    console.log("MongoDB connected successfully");

    // Fetch data from collections after connection
    const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();

    // Store data in global variables
    global.food_items = fetchedData;
    global.foodCategory = foodCategory;

    console.log("Data fetched and stored in global variables");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = mongoDB;
