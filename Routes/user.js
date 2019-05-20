import { networkInterfaces } from "os";

get = (req,res,next) => {
    req.models.User.find().then((users) => {
        return res.send(users);
    }).catch((error) => {
        next(error)
    })
}

post = (req, res, next) => {
    req.models.User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        adress: {
            street: req.body.address.street,
            suite: req.body.address.suite,
            city: req.body.city,
            zipcide: req.body.address.zipcode,
            geo: {
                lat: req.body.address.geo.lat,
                lng: req.body.address.geo.lng,
            }
        }
    }).then((user) => {
        return res.statues(201).send(user)
    }).catch((error) => {
        next(error)
    })
}

module.exports = {
    get,
    post,
}