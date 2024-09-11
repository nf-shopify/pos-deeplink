/*----- Dependencies ------*/
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const draftsOrderRouter = require("./routes/draftOrders");

/*----- Express App ------*/
const app = express();

// use port 80 unless there exists a preconfigured port
const PORT = process.env.PORT || 8001;

/*----- Middleware Pipe ------*/
app.use(cors());
app.use(logger("dev"));
//Serving up Static HTML, JS ,CSS from public folder
app.use(express.static('public'))
//Handle POST/PUT Requests
app.use(express.json());

/*----- Routes ------*/
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/draftordersim", (req, res) => {
  res.sendFile(__dirname + "/public/draftOrderSim.html");
});


app.use("/api/draftorders", draftsOrderRouter);

/*----- Listener ------*/
app.listen(PORT, function () {
  console.log(`'Server running on ${PORT}`);
});
