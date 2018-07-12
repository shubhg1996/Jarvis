
const express = require('express');
const app = express();
const PythonShell = require('python-shell');


app.use(express.json());

app.post('/', (req, res) => helloHttp(req, res));

app.listen((process.env.PORT || 8000), () => console.log(`App listening on port ${process.env.PORT} or 8000`));

var helloHttp = function(request, response) {
    var action_var = request.body.queryResult.action;
    console.log("Recieved command: "+action_var);
   
    var dataString;
    var options;

    if(action_var=="anime_web"){
        options = {args: [request.body.queryResult.parameters.name]};
    }
    else{
        options = {args: []};
    }

    PythonShell.run(`${action_var}.py`, options, function (err, results) {
        if (err) console.log(err);
        console.log('finished');
        dataString = results;
        fmsgs = [];
        text_json = {
            "text": {
            "text": [
                dataString
            ]
        }};
    fmsgs.push(text_json);
    response.json({fulfillmentMessages:fmsgs});
    });
    if(action_var=="episode_notif"){
        PythonShell.run(`episode_update.py`, function (err, results) {
            if (err) console.log(err);
            console.log(results);
        });
    }
};