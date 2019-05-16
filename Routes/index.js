const express = require('express');
const router = express.Router();
//import the helloworld.js with the hello()
const helloWorld = require('./helloworld.js');

// middleware that is specific to this router.
// router.use((req, res, next) =>{
//  console.log('Time: ', Date.now());
//  next();
// });

// run the hello() that is exported from helloworld.js.
router.get("/", helloWorld.hello); 
router.get("/:pathParameter", helloWorld.params)
module.exports = router; 
