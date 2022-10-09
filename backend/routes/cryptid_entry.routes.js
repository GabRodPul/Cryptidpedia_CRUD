module.exports = app => {
    const cryptid_entries = require("../controllers/cryptid_entry.controller");
    var upload = require('../multer/upload');
    var router = require("express").Router();
  
    // Create a new Cryptid Entry
    router.post("/", upload.single('file'), cryptid_entries.create);
    router.post("/", cryptid_entries.create);
  
    // Retrieve all Cryptid Entries
    router.get("/", cryptid_entries.findAll);
  
    // Retrieve a single Cryptid Entry with id
    router.get("/:id", cryptid_entries.findOne);
  
    // Update a Cryptid Entry with id
    router.put("/:id", upload.single('file'), cryptid_entries.update);
  
    // Delete a Cryptid Entry with id
    router.delete("/:id", cryptid_entries.delete);
  
    app.use("/api/cryptid_entries", router);
  }