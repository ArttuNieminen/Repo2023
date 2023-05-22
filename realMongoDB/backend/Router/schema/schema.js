const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  time: Number,
});

userSchema.methods.speak = function speak() {
  const greeting = this.name
    ? "My name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};
const Person = mongoose.model("Person", userSchema);

module.exports = { Person };
