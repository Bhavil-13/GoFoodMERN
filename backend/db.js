const mongoose = require("mongoose");

const mongoULI =
  "mongodb+srv://gofood:ssg2bhavil@cluster0.e9zbh.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose.connect(
    mongoULI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) {
        console.log("----", err);
      } else {
        console.log("connected");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );
          foodCategory.find({}).toArray(function (err, catData) {
            if (err) {
              console.log(err);
            } else {
              global.food_items = data;
              global.foodCategory = catData;
              // console.log(global.food_items);
            }
          });
        });
        // console.log("fetched items");
      }
    }
  );
};

module.exports = mongoDB;
