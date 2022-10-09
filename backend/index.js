const express = require("express");
const cors = require("cors");
var path = require('path');

const app = express();

// Public directory
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: "*"
};
app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// DB models
const db = require("./models");
// normal use. Doesn't delete the database data
db.sequelize.sync();

// In development, you may need to drop existing tables and re-sync database
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Cryptidpedia application."});
});

require("./routes/cryptid_entry.routes")(app);


// Sets port and listens for requests
const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});