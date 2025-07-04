//importo la connessione
import connection from "../db.js";


const index = (req, res) => {
  console.log(req.imagePath)
  const sql = "SELECT * FROM `movies`";
  connection.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({error: "Errore di sistema", info: err});
    } else {
      const movies = result.map((curMovies) => {
        return {
          ...curMovies,// copio un array e collego l'immagine
          image: `${req.imagePath}/${curMovies.image}`
        }
      });
      res.json({
        data: movies,
      });
    }
  });
};


//SHOW prendo i dati di ogni singolo elemento
const show = (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM `movies` WHERE id = ?";
    connection.query(sql, [id], (err, result) => {
    if (result.length === 0) {
      res.status(404).json({
        error: "movies non trovato",
        info: {
            id: id
        }
      });
    } else {
      res.json({
        data: {
          ...result[0], // prendo il primo elemento dell'array
          image: `${req.imagePath}/${result[0].image}` // collego l'immagine  
        }
      });
    }
  });
};

const controller = {
    index,
    show,
};

export default controller;