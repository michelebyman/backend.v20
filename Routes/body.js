body = (req,res) => {
    res.json(req.body);
    console.log(req.body);
}

module.exports = {
    body: body
}