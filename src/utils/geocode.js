const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJhdGljZ3VwdGEiLCJhIjoiY2t0emRnbHVvMXc1YzJzcW5uZWQ2bGF2NiJ9.S5Dqc9XzI9EZauXmf5zt9g&limit=1';
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to connect to location. Try another locaiton.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
}

module.exports = geocode