const express = require("express");
const knex = require("knex");
const router = express.Router();

const knexConfiguration = {
  client: "sqlite3",
  connection: {
    filename: "./data/car-dealer.db3"
  },
  useNullAsDefault: true
};

const db = knex(knexConfiguration);

module.exports = router; 