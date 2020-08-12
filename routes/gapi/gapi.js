require("dotenv").config();
const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/civicinfo/v2";
const GAPIKEY = process.env.REACT_APP_GAPI_KEY;
const MAPIKEY = process.env.MAPI_KEY;

// Should match /api/getElections
router.get("/getElections", (req, res) => {
    axios.get(BASEURL + "/elections?key=" + GAPIKEY)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

// Should match /api/getVoterInfo
router.get("/getVoterInfo", (req, res) => {
    axios.get(BASEURL + "/voterinfo?key=" + GAPIKEY + "&address=" + req.query.location)
    .then(response => res.send(response.data))
    .catch(err => res.json(err));
});

// Should match /api/getRepInfo
router.get("/getRepInfo", (req, res) => {
    axios.get(BASEURL + "/representatives?key=" + GAPIKEY + "&address=" + req.query.location)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

router.get("/getLatLon", (req, res) => {
    axios.get("http://open.mapquestapi.com/geocoding/v1/address?key=" + MAPIKEY + "&location=" + req.query.location)
    .then(response => res.send(response.data))
    .catch(err => console.log(err));
});

module.exports = router;