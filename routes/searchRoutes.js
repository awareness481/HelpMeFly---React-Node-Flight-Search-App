const keys = require('../config/keys');
const unirest = require('unirest');
const _ = require ('lodash');

module.exports = (app) => {
  app.get('/flights',
    (req, res) => {
      unirest.post("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0")
        .header("X-RapidAPI-Host", keys.XRapidAPIHost)
        .header("X-RapidAPI-Key", keys.XRapidAPIKey)
        .header("Content-Type", "application/x-www-form-urlencoded")
        .send("inboundDate=2019-09-10")
        .send("cabinClass=business")
        .send("children=0")
        .send("infants=0")
        .send("country=UK")
        .send("currency=USD")
        .send("locale=en-US")
        .send("originPlace=LOND-sky")
        .send("destinationPlace=PARI-sky")
        .send("outboundDate=2019-09-01")
        .send("adults=1")
        .end(function (result) {
          const sessionId = result.headers.location.replace('http://partners.api.skyscanner.net/apiservices/pricing/uk2/v1.0/', '');
          unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/" + sessionId + "?pageIndex=0&pageSize=10")
            .header("X-RapidAPI-Host", keys.XRapidAPIHost)
            .header("X-RapidAPI-Key", keys.XRapidAPIKey)
            .end(function (result) {
              const values = _.map(result.body.Itineraries, (e) => {
                const ids = {
                  in: e.InboundLegId,
                  out: e.OutboundLegId,
                  price: e.PricingOptions[0].Price,
                  url: e.PricingOptions[0].DeeplinkUrl
                }
                return ids;
               })
               res.send(values);
            });
        })
    }
  );
};