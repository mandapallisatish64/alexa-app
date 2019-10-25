const Alexa = require('alexa-sdk');
var express = require("express");
const app = express()
const port = 3000;

app.get('/', function (req, res) {
    console.log("enteredd");
exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = "amzn1.ask.skill.ff0aea71-d591-40c1-a108-93f01451fbbc";
   
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'satish' : function() {
        //build response first using responseBuilder and then emit
       

        this.response.speak('My name is satish');
this.emit(':responseReady');
 
this.response.speak('What would you like to do?')
            .listen('Please say that again?');
this.emit(':responseReady');
    }
}
});
app.listen(port,() => {
   console.log("listeningn on port")
   
  })