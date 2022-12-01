require("dotenv").config(); // Load env variables
const express = require("express"); // bring in express to make our app
const morgan = require("morgan"); // nice logger for our request
const methodOverride = require("method-override"); // allows us to override post request from our ejs/forms
const PORT = process.env.PORT || 4321;
const FruitRouter = require("./controllers/fruit");

const app = express();

//////////////////////////////////////////////
//////// Middlewares
///////////////////////////////////////////////

app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get('/', homeRoutes)
// app.get('/store', storeRoutes)
// app.get('/user', userRoutes)
app.use("/fruits", FruitRouter);

app.listen(PORT, () => console.log(`Who let the dogs out on port: ${PORT}`));
