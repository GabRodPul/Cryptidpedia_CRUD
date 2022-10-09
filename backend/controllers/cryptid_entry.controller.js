const { Sequelize } = require("../models");
const db = require("../models");
const CryptidEntry = db.cryptid_entry;
const Op = db.Sequelize.Op;

// Create and Save a new CryptidEntry
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title || !req.body.category) {
    res.status(400).send({
      message: "Must at least provide title and category!"
    });
    return;
  }


  // Create a Cryptid Entry
  const cryptid_entry = {
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    filename: req.file ? req.file.filename : ""
  }

  // Save Cryptid Entry in the database
  CryptidEntry.create(cryptid_entry)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ?? "Some error occurred while creating the cryptid_entry"
      })
    });
};

// Retrieve all Cryptid Entries from the database.
exports.findAll = (req, res) => {
  CryptidEntry.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ?? "Some error occurred while retrieving all Cryptid Entries"
      })
    })
};

// Find a single CryptidEntry with an id
exports.findOne = (req, res) => {
  CryptidEntry.findOne({where: { id : req.params.id }})
    .then(data => {
      if (!data) {
        throw new Error('No entry found');
      }

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ?? "Some error occurred while retrieving Cryptid Entry with id " + req.body.id
      })
    })
}

// Update a CryptidEntry by the id in the request
exports.update = (req, res) => {

  // console.log(`${JSON.stringify(req.body)}`)

  // Validate request
  if (!req.body.title || !req.body.category) {
    res.status(400).send({
      message: "Must at least provide title and category!"
    });
    return; // Close header
  }

  CryptidEntry.findOne({where: { id : req.params.id }}) // Object
    .then(data => {
      if (!data) {
        throw new Error('No entry found');
      }

      req.body.updatedAt = Date.now()

      data.update(req.body).then(updatedEntry => {
        console.log(`updated entry ${JSON.stringify(updatedEntry, null, 2)}`);
      });

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ?? "Some error occurred while updating Cryptid Entry with id " + req.params.id
      })
    })
};

// Delete a CryptidEntry with the specified id in the request
exports.delete = (req, res) => {
  CryptidEntry.destroy({where: { id : req.params.id }})
    .then(data => {
      if (!data) {
        throw new Error('No entry found');
      }

      res.status(204).send({message : "Succesfully deleted"})
    })
    .catch(err => {
      res.status(500).send({
        message: err.message ?? "Some error occurred while retrieving Cryptid Entry with id " + req.body.id
      })
    })
};
