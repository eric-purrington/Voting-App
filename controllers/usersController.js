
const db = require("../models");

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
        db.User
            .create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => console.log(err));
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
                        Name: req.body.Name,
                        Date: req.body.Date
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
                        Name: req.body.Name,
                        Email: req.body.Email,
                        Phone: req.body.Phone,
                        Title: req.body.Title
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
                        Name: req.body.Name,
                        Address: req.body.Address,
                        Hours: req.body.Hours
                    }
                }
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => console.log(err));
    }
}