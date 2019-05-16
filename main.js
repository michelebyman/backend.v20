//express is an http server
const express = require('express');
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 3000;

app.use('/', routes);

//response to the site.
// app.get("/", (req,res) => {
//     res.send({"Hello":"World"});
// });

//listen to port that is defined.
app.listen(port,() => {
    console.info(`server is listening on port ${port}.`);
});
