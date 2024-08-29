/*----- Dependencies ------*/
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const draftsOrderRouter = require("./routes/draftOrders")

/*----- Express App ------*/
const app = express();

// use port 80 unless there exists a preconfigured port
const PORT = process.env.PORT || 8000;

/*----- Middleware Pipe ------*/
app.use(cors());
app.use(logger("dev"));


/*----- Routes ------*/
app.get("/", (req, res) => {
    res.json({ serverStatus: "Online" });
  });

  app.use('/draftorders', draftsOrderRouter)

/*----- Listener ------*/
app.listen(PORT, function () {
  console.log(`'Server running on ${PORT}`);
});
