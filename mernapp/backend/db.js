const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:mern123@cluster0.0wnti1j.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected");
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("food_Category");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.food_Category = catData;

                    }
                })


                // if(err) console.log(err);
                // else {
                //     global.food_items = data;

                // }

            })
        }
    });
}

module.exports = mongoDB;
