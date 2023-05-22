const mongoose = require("mongoose");
const { Person } = require("./schema");

/* listataan kaikki henkilöt */

async function getPeople(params) {
  const allPeople = await Person.find();
  return allPeople.map((p) => {
    return {
      id: p._id.toHexString(),
      name: p.name,
      time: p.time,
    };
  });
}

async function savePerson(person) {
  console.log("Person stringify: ", JSON.stringify(person));
  const birthday = new Date().getTime();
  const savePerson = await Person.create({
    name: person.name,
    time: birthday,
  });
  console.log("Saving person: "+ savePerson);

  const personId = savePerson._id.toHexString();
  return {
    id: personId,
    name: person.name,
    time: birthday,
  };
}

async function deletePerson(id){
  try{
    const x = await Person.remove({_id: mongoose.Types.ObjectId(id)});
    if(x&& !x.deletedCount){
      throw new Error("deleting failure");
    }
    console.log("deleting success: ",x);
  } catch (error){
    console.error("Failure: Deleting object", error);
  }
}

async function updatePerson(person){

  const x = await Person.findOneAndUpdate({_id: mongoose.Types.ObjectId(person.id)},{name: person.name});
    
  return {
    name: person.name,
    newName: person.newName,
    id: person.id,
    d: x,
  };
}
module.exports = { getPeople, savePerson, deletePerson, updatePerson };
