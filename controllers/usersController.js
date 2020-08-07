
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
                        eventName: req.body.eventName,
                        eventDate: req.body.eventDate
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
                        repName: req.body.repName,
                        repEmail: req.body.repEmail,
                        repPhone: req.body.repPhone,
                        repTitle: req.body.repTitle
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
                        placeName: req.body.placeName,
                        placeAddress: req.body.placeAddress
                    }
                }
            })
            .then(dbUser => res.json(dbUser))
            .catch(err => console.log(err));
    }
}