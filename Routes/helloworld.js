hello = (req, res) => {
  res.send({"Hello": "World"})
}; 

// exports the function named hello as hello
module.exports = {
  hello: hello
};