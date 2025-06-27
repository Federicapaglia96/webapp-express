//importo la connessione
import connection from "../db.js";

const index = (req, res) => {
    //prelevo tutti i dati dal database
    const sql = "SELECT * FROM `blog`";
    //eseguo la query
    connection.query(sql, (err, result) => {
        if (err) {
            console.log("error");
            return res.status(500).json({ error: "Errore nel server" });
        }
        res.status(200).json({
            data: result,
        });
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
      });
    } else {
      res.json({
        data: result[0],
      });
    }
  });
};

const controller = {
    index,
    show,
};

export default controller;