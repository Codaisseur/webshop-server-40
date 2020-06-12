const express = require("express");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => console.log("server started"));
