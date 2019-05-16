getExemple = (req,res) => {
  res.append('Custom-response-header', 'yep');
  res.send('you sent a get request and got a custom response header');
}; 

postExemple = (req, res) => {
  response = `You sent a Post, I'll respond with a status of 201 (Created) even though I did't`;
  res.status(201).send(response);
};

putExemple = (req, res) => {
  response = `You sent a Put, I can respond with a 201 if it didn't exist or 200 if updated`;
  res.status(200).send(response);
};

deleteExemple = (req, res) => {
  response = `You sent a Delete, you won't see this because 204 doesn't allow content`;
  res.status(204).send(response);
};

module.exports = {
  get: getExemple,
  post: postExemple,
  put: putExemple,
  delete: deleteExemple,
};