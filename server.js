const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const db = require('./models');  
const app = express();
// app.use(logger("dev")); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// app.use(routes); // Connected 
// app.use(require('./routes/index.js'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

app.use(require('./routes/static.js'));
app.use(require('./routes/workouts.js'));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
