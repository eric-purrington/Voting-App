export default {

    findDistanceBetween: function (lat1, lon1, lat2, lon2) {
        const earthR = 6371000;
        const phi1 = lat1 * Math.PI/180;
        const phi2 = lat2 * Math.PI/180;
        const changeInPhi = (lat2 - lat1) * Math.PI/180;
        const changeInLambda = (lon2 - lon1) * Math.PI/180;

        const a = Math.sin(changeInPhi / 2) * Math.sin(changeInPhi / 2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(changeInLambda / 2) * Math.sin(changeInLambda / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = (earthR * c) / 1609.344;
        const distanceRounded = Math.round(100 * distance) / 100;
        return distanceRounded;
    }
};