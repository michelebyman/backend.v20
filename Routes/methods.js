get =  (req,res,next) => {
  req.models.User.find().then((users) => {
      return res.send(users);
  }).catch((error) => {
      next(error);
  });
};

post = (req, res, next) => {
  req.models.User.create({
      name: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age,
      userName: req.body.userName,
      email: req.body.email,
  }).then((user) => {
      return res.status(201).send(user);
  }).catch((error) => {
      next(error);
  });
};

// exports the function named hello as hello
module.exports = {
  get: get,
  post: post,
};