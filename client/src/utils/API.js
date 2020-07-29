import axios from "axios";
import "dotenv";
const BASEURL = "https://www.googleapis.com/civicinfo/v2";
const APIKEY = process.env.GAPI_KEY;

export default {
    // Get all live upcoming elections
    // Doesn't req zip or address
    getElections: function() {
        return axios.get(BASEURL + "/elections?" + APIKEY);
    },
    // Get voters info (elections they can vote in and ballot drop off location's address and name)
    // Requires full address and only works if they have elections coming up
    // Address must be given with %20 in place of spaces and no punctuation
    getVoterInfo: function(address) {
        return axios.get(BASEURL + "/voterinfo?" + APIKEY + "&address=" + address);
    },
    // Get all reps for voter
    // Required zipcode and optional address for more results
    getRepInfo: function(zip) {
        return axios.get(BASEURL + "/representatives?" + APIKEY + "&address=" + zip);
    },
    // Get signed in user
    getUser: function(id) {
        return axios.get("/" + id);
    }
}