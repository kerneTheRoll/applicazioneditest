const router = require("express").Router();
const employeController = require("../controller/Employe.controller");

router.get("/", employeController.getEmployes);
router.get("/:id", employeController.getEmploye);
router.post("/", employeController.createEmploye);
router.put("/:id", employeController.modifyEmploye);
router.delete("/:id", employeController.deleteEmploye);
module.exports = router;
