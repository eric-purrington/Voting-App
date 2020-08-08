const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        bcrypt.hash(req.body.password, 12, function(error, hash) {
            db.User
            .create({...req.body, password:hash})
            .then(dbUser => res.json(dbUser.id))
            .catch(err => console.log(err));
          });
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbUser => dbUser.remove())
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    // adds an event a user saves
    addEvent: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, {
                $push: {
                    savedEvents: {
                        name: req.body.name,
                        date: req.body.date
                    }
                }
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => console.log(err));
    },

    // add an official a user saves
    addOfficial: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, {
                $push: {
                    repDetails: {
                        name: req.body.Name,
                        email: req.body.Email,
                        phone: req.body.Phone,
                        title: req.body.Title
                    }
                }
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => console.log(err));
    },

    // add a polling site
    addPollingSite: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, {
                $push: {
                    pollingAddress: {
                        name: req.body.Name,
                        address: req.body.Address,
                        hours: req.body.Hours
                    }
                }
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => console.log(err));
    }
}