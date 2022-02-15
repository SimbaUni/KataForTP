//NPM Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const expressSession = require("express-session");
const flash = require("connect-flash");
process.unhandledRejections = "strict";
//===Config Imports=======
try {
  var config = require("./config");
} catch (error) {
  console.log(`error occured ${error}`);
}

//============================
//SETTINGS
//==============================
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

//============================
//DEVELOPMENT
//==============================
const medicationsRoutes = require("./routes/medications");
const mainRoutes = require("./routes/main");


app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

try {
  mongoose.connect(config.db.connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
} catch (error) {
  console.log("connection error not working locally" + error);
  mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}

//express sessions
app.use(
  expressSession({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  })
);
//flash
app.use(flash());


// routes
app.use("/medications", medicationsRoutes);
app.use(mainRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
