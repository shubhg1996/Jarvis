const builder = require('botbuilder');

var connector = new builder.ChatConnector({
    appId: "",
    appPassword: ""
});

var bot = new builder.UniversalBot(connector);

var savedAddress = { 
channelId: 'skype',
conversation: { id: null },
serviceUrl: 'https://smba.trafficmanager.net/apis/' };

function sendProactiveMessage(uid, message) {
    savedAddress.conversation.id = uid;
    var msg = new builder.Message().address(savedAddress);
    msg.text(message);
    msg.textLocale('en-US');
    bot.send(msg);
}

