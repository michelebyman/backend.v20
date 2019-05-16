//express is an http server
const express = require('express');
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 3000;



//add middleware for parsing the body to req.body
//middlewares are axecuted in the order added, so add before routers.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routes);

//listen to port that is defined.
app.listen(port,() => {
    console.info(`server is listening on port ${port}.`);
});
