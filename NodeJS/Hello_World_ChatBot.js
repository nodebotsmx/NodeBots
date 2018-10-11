var restify = require('restify');
var builder = require('botbuilder');
var server = restify.createServer();
  
// Don't worry of this credentials for now, we are going to use it later.
var connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

// Dialogs
bot.dialog('/', [
    function (session) {
        builder.Prompts.text(session, '¿Cuál es tu nombre?');
    },
    function (session, results) {
        let msj = results.response;
        session.send(`Hola ${msj}!`);
    }
]);

server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url); 
 });