const express = require('express');
const router = express.Router();
//import the helloworld.js with the hello()
const helloWorld = require('./helloworld.js');

const methods = require('./methods.js')

// middleware that is specific to this router.
// router.use((req, res, next) =>{
//  console.log('Time: ', Date.now());
//  next();
// });

// run the hello() that is exported from helloworld.js.

router.get("/:pathParameter", methods.get); 
router.post("/:methods", methods.post); 
router.put("/:methods", methods.put); 
router.delete("/:methods", methods.delete); 


router.get("/", helloWorld.hello); 
//Routes are evaluated in order so pathParameter has to come after get /methods otherwise it would match get / with the pathParameter "methods"
router.get("/:pathParameter", helloWorld.params); 

module.exports = router; 
