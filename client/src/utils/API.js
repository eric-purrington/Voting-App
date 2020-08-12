import axios from "axios";

export default {

    // Get all live upcoming elections
    // Doesn't req zip or address
    getElections: function() {
        return axios.get("/api/getElections").catch(error => console.log(error));
    },

    // Get voters info (elections they can vote in and ballot drop off location's address and name)
    // Requires full address and only works if they have elections coming up
    // Address must be given with %20 in place of spaces and no punctuation
    getVoterInfo: function(location) {
        return axios.get("/api/getVoterInfo", {
            params: {
                location: location
            }
        }).catch(error => console.log(error));
    },
    
    // Get all reps for voter
    // Required zipcode and optional address for more results
    getRepInfo: function(location) {
        return axios.get("/api/getRepInfo", {
            params: {
                location: location
            }
        }).catch(error => console.log(error));
    },

    getLatLon: function(location) {
        return axios.get("/api/getLatLon", {
            params: {
                location: location
            }
        }).catch(error => console.log(error));
    }
}