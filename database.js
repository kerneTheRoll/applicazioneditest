const mongoose = require("mongoose");

const URLDB = "mongodb://admin:admin1234@ds161397.mlab.com:61397/employ";

mongoose
  .connect(URLDB, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connessione avvenuta con successo");
  })
  .catch(error => {
    console.log("errore in connessione -> ", error);
  });
