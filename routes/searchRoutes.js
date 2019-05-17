const keys = require('../config/keys');
const unirest = require('unirest');

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
        .send("country=US")
        .send("currency=USD")
        .send("locale=en-US")
        .send("originPlace=SFO-sky")
        .send("destinationPlace=LHR-sky")
        .send("outboundDate=2019-09-01")
        .send("adults=1")
        .end(function (result) {
          const sessionId = result.headers.location.replace('http://partners.api.skyscanner.net/apiservices/pricing/uk2/v1.0/', '');
          unirest.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/" + sessionId + "?pageIndex=0&pageSize=10")
            .header("X-RapidAPI-Host", keys.XRapidAPIHost)
            .header("X-RapidAPI-Key", keys.XRapidAPIKey)
            .end(function (result) {
              console.log(result.status, result.headers, result.body);
            });
        })
    }
  );
};