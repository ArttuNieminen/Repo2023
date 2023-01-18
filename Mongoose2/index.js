import mongoose from "mongoose";
import User from "./model/user.js";

mongoose.connect("mongodb+srv://testikayttaja:KissaPuussa42@tietokanta-001.mjivkfv.mongodb.net/test")

//luodaan persoona objekti

const person = await User.create({ 
    name: "Mikko",
    age: 18,
    email: "mikko.sahkoposti@email.fi"
});

//lisätään henkilö tietokantaan

await person.save();