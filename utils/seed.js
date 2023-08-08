const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
  {
    username: "melwang1",
    email: "melaniiewang@hotmail.com",
    thought: [],
  },
];

console.log(connection);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await User.collection.insertMany(users);


  console.table(users);
  console.info("Database seeded!");
  process.exit(0);
});