//express is an http server
const express = require('express');
const routes = require("./routes");
const db = require('./models')
const app = express();

const port = process.env.PORT || 3000;



//add middleware for parsing the body to req.body
//middlewares are axecuted in the order added, so add before routers.
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next) => {
    req.models = db.models;
    next();
});

app.use('/', routes);


//starts up the database then the server listens on request

db.connectDb().then(() => {
    const listener = app.listen(port, () => {
        console.info(`Server is listening on port ${listener.address().port}.`);
    })
});
