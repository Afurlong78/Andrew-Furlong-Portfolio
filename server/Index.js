const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*", credentials: true }));
const dotenv = require("dotenv");

//import routes
const contactRoute = require("./Routes/Contact");

//importing dotenv
dotenv.config();

//server
app.get("/api", (req, res) => {
  res.send("hello from the server");
});

//accepting json
app.use(express.json());
app.use("/api", contactRoute);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => console.log("Express server is running."));
