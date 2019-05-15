//express http server
const express = require('express');
const app = express();

//port is defined in terminal or it will be 3000
const port = process.env.PORT || 3000;  

//response to the site.
app.get("/", (req,res) => {
    res.send({"Hello":"World"});
});

//listen to port that is defined.
app.listen(port,() => {
    console.info(`server isn listening on port ${port}.`);
});
