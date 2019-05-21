const express = require('express');
const router = express.Router();
//import the methods.js with the methods
const user = require('./methods.js');
// const body = require('./body.js')

// middleware that is specific to this router.
router.use((req, res, next) =>{
 console.log('Time: ', Date.now());
 next();
});


router.get("/", user.get);
router.post("/", user.post);


module.exports = router; 
