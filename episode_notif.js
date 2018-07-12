const builder = require('botbuilder');

var connector = new builder.ChatConnector({
    appId: "4887dfd6-0673-4f6b-bc72-f6364986ecee",
    appPassword: "TGI5140)$wtdwhppIQKY1;#"
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

