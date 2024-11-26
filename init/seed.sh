#!/bin/bash
echo "Importing data into MongoDB..."
mongoimport --host localhost --db gofoodmern --collection food_items --file /docker-entrypoint-initdb.d/foodData2.json --jsonArray
mongoimport --host localhost --db gofoodmern --collection foodCategory --file /docker-entrypoint-initdb.d/foodCategory.json --jsonArray
echo "Data import completed!"