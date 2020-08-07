import axios from "axios";

export default {

    // Get all live upcoming elections
    // Doesn't req zip or address
    getElections: function() {
        return axios.get("/api/getElections");
    },

    // Get voters info (elections they can vote in and ballot drop off location's address and name)
    // Requires full address and only works if they have elections coming up
    // Address must be given with %20 in place of spaces and no punctuation
    getVoterInfo: function(location) {
        return axios.get("/api/getVoterInfo", {
            params: {
                location: location
            }
        });
    },
    
    // Get all reps for voter
    // Required zipcode and optional address for more results
    getRepInfo: function(location) {
        return axios.get("/api/getRepInfo", {
            params: {
                location: location
            }
        });
    },

    // getDistance: function(location1, location2) {
    //     return axios.get("/api/getDistance", {
    //         params: {
    //             location1: location1,
    //             location2: location2
    //         }
    //     });
    // }
}