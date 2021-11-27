var mongoose = require("mongoose");
const express = require("express");
//const url_conexion =
//"mongodb+srv://crisjoleo:legolas24@dynaapp.qak7k.mongodb.net/dynaapp?retryWrites=true&w=majority";
const app = express();
//app.use(cors());
const port = 8888;
//mongoose.connect(url_conexion, {
//useNewUrlParser: true,
//useCreateIndex: true,
//useUnifiedTopology: true,
//});
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(process.env.PORT || port, () => {
  console.log(`puerto en http://localhost:${port}`);
});
