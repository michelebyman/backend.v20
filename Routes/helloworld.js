hello = (req, res) => {
  response = {
    "hello": "world",
    "query": req.query,
    "params": req.params,
    "headers": req.headers
  }

  res.send(response);
}; 

// exports the function named hello as hello
module.exports = {
  hello: hello,
  params: hello
};