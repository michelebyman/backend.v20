//express http server
const express = require('express');
const routes = require("./routes");
const app = express(); 

app.use('/', routes);

//response to the site.
// app.get("/", (req,res) => {
//     res.send({"Hello":"World"});
// });

//listen to port that is defined.
app.listen(3000,() => {
    console.info(`server is listening on port 3000.`);
});
