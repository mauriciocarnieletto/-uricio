const http = require("http");

async function fetch(options) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      res.setEncoding("utf8");

      let responseString = "";

      //accept incoming data asynchronously
      res.on("data", (chunk) => {
        responseString = responseString + chunk;
      });

      //return the data when streaming is complete
      res.on("end", () => {
        console.log(responseString);
        resolve(JSON.parse(responseString));
      });
    });
    req.end();
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function randomizeAnswer(possibleAnswers) {
  return possibleAnswers[getRandomInt(0, possibleAnswers.length)];
}

module.exports = {
  randomizeAnswer,
  getRandomInt,
  fetch,
};
