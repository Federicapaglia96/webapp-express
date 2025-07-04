import express from "express";
import moviesRouter from "./routers/movies.js"
import connection from "./db.js";
import cors from "cors";
import imagePath from "./middleware/imagePath.js"




const app = express();
const port = 3000;

app.use(
  cors({
    origin: process.env.FE_URL,
  })
);


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/movies",imagePath, moviesRouter)

app.use(express.json());

app.use(express.static("public"));


app.listen(port,()=>{
    console.log(` server in ascolto ${port}` )
});