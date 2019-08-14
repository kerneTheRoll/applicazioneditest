const EmployeModel = require("../model/employe");
const Employe = {
  getEmployes: async (req, res) => {
    let negozio = await EmployeModel.find();

    res.json(negozio);
  },
  getEmploye: async (req, res) => {
    let negozio = await EmployeModel.find({ code: req.params.id });

    res.json({
      request: negozio,
      status: "ok"
    });
  },
  createEmploye: (req, res) => {
    let { code, name, gender, salarioAnnuale, annoDiNascita } = req.body;
    let negozio = new EmployeModel({
      code: code,
      name: name,
      gender: gender,
      salarioAnnuale: salarioAnnuale,
      annoDiNascita: annoDiNascita
    });
    negozio
      .save()
      .then(() => {
        console.log("salvato in db");
      })
      .catch(error => {
        console.log("errore in salvataggio", error);
      });
    res.json({
      request: `richiesta creazione employee`,
      status: "ok"
    });
  },
  modifyEmploye: (req, res) => {
    let { code, name, gender, salarioAnnuale, annoDiNascita } = req.body;
    let { id } = req.params;
    let negozio = {
      code: code,
      name: name,
      gender: gender,
      salarioAnnuale: salarioAnnuale,
      annoDiNascita: annoDiNascita
    };
    console.log(negozio);
    EmployeModel.findOneAndUpdate(
      { code: id },
      { $set: negozio },
      { new: true }
    )
      .then(() => {
        console.log("fatto");
      })
      .catch(error => {
        console.log("errore aggiornamento ", error);
      });
    res.json({
      request: `richiesta per modifica singolo id => ${id}`,
      status: "ok"
    });
  },
  deleteEmploye: async (req, res) => {
    let id = await req.params["id"];
    EmployeModel.findOneAndRemove({ code: id })
      .then(() => {
        console.log("eliminato");
      })
      .catch(() => {
        console.log("errore in eliminazione");
      });
    res.json({
      request: `richiesta per eliminazione singolo id => ${id}`,
      status: "ok"
    });
  }
};

module.exports = Employe;
