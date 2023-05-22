const express = require("express");
const app = require("../index");
const { Person } = require("./schema/schema");
const router = express.Router();
const person = require("./schema/backend.js");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const list = await person.getPeople();
  res.json({ list });
  /*  res.json({ name: "Mikko", time: Date.now() }); */
});

/* POST home page || POST index root */
router.post("/", async function (req, res, next) {
  /* TASO 0 */
  try {
    const body = req.body;
    const saving = await person.savePerson({
      name: body.people.name,
    });

    res.json({ status: "ok", person: saving });
    /* console.log("print: " + res.json); */
  } catch (error) {
    console.error("NOT OK :(", error);
    res.status(500).json({ status: "ERROR 500" });
  }
});


router.delete("/:id", async function (req, res, next) {
  try {
    const personid = req.params.id;
    const del= await person.deletePerson(personid);
    res.json({status: "ok"});
  } catch (error) {
    console.error("Failure: router delete -", error);
    res.status(500).json({ status: "ERROR 500" });
  }
});

router.put("/" , async function (req, res, next) {
  try {
    const body = req.body;
    const upd= await person.updatePerson({
      name: body.people.name,
      id: body.people.id
    });
    res.json({ status: "ok", person: upd });
  } catch (error) {
    console.error("Failure: router update -", error);
    res.status(500).json({ status: "ERROR 500" });
  }
});
module.exports = router;
