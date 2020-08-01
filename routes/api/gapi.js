require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/civicinfo/v2";
const APIKEY = process.env.REACT_APP_GAPI_KEY;

// Should match /api/getElections
router.get("/getElections", (req, res) => {
    axios.get(BASEURL + "/elections?key=" + APIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

// Should match /api/getVoterInfo
router.get("/getVoterInfo", (req, res) => {
    axios.get(BASEURL + "/voterinfo?key=" + APIKEY + "&address=" + req.query.location)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

// Should match /api/getRepInfo
router.get("/getRepInfo", (req, res) => {
    axios.get(BASEURL + "/representatives?key=" + APIKEY + "&address=" + req.query.location)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = router;