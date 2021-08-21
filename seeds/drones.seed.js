const mongoose = require("mongoose");

//* Requiring the model :)
const Drone = require("../models/Drone.model");

require("../db");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

//! Creating our drones in our db
Drone.create(drones)
  .then((drones) => {
    console.log(`Inserted ${drones.length} drones`);

    //! Closing the connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
