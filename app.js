import express from "express";
import moviesRouter from "./routers/movies.js"
import connection from "./db.js";


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// rotta per ogni singolo movies
app.get('/movies', (req, res) => {
  res.send('Movies root!!');
});


app.use("/movies", moviesRouter)
app.use(express.json());
app.use(express.static("public"));

app.listen(port,()=>{
    console.log(` server in ascolto ${port}` )
});