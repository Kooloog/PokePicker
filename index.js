const schedule = require('node-schedule');
const bodyParser = require('body-parser');
const express = require('express'); 
const app = express();              
const port = process.env.PORT || 5000;  
var router = express.Router();
var path = require('path');
var jsonParser = bodyParser.json();
var fs = require('fs');
var globalFile = "public/files/score.txt";
var weeklyFile = "public/files/weekly.txt";

//Need to implement clustering this is just me being a bad coder
var tempFix = false;

router.post("/update", jsonParser, function(req, res) {
    var regex = new RegExp('\#0*');
    var winner = (req.body.winner).replace(regex, "");
    var loser = (req.body.loser).replace(regex, "");

    var files = [globalFile, weeklyFile];

    files.forEach(scoreFile => {
        if(!tempFix) {
            tempFix = true;
            fs.readFile(scoreFile, 'utf8', function(err, data) {
                var lines = data.split('\n');
                    try {
                    var winnerData = lines[winner - 1].split('|');
                    var winnerReplace = winnerData[0] + '|' 
                                        + winnerData[1] + '|'
                                        + (parseInt(winnerData[2]) + 1) + '|'
                                        + (parseInt(winnerData[3]) + 1) + '|';

                    var replace = (winnerData[0] + '|' + winnerData[1] + '|' + winnerData[2] 
                                  + '|' + winnerData[3] + '|');
                    var newWinnerLine = data.replace(replace, winnerReplace);
                        
                    fs.writeFile(scoreFile, newWinnerLine, 'utf8', function(err) {
                        if (err) return console.log(err);
                    });

                    data = newWinnerLine;
                    var loserData = lines[loser - 1].split('|');
                    var loserReplace = loserData[0] + '|' 
                                        + loserData[1] + '|'
                                        + loserData[2] + '|'
                                        + (parseInt(loserData[3]) + 1) + '|';

                    var replace = (loserData[0] + '|' + loserData[1] + '|' + loserData[2] + '|' + loserData[3] + '|');
                    var newLoserLine = data.replace(replace, loserReplace);
                        
                    fs.writeFile(scoreFile, newLoserLine, 'utf8', function(err) {
                        if (err) return console.log(err);
                    });
                }
                catch(error) {
                    console.error(error);
                    tempFix = false;  
                }
            });
            tempFix = false;  
        }
    });

    res.status(200).send("OK");
})

schedule.scheduleJob('0 6 * * 0', () => { 
    console.log("running task");
    fs.unlinkSync('public/files/weekly.txt');
    fs.copyFileSync('public/files/template.txt', 'public/files/weekly.txt');
});

app.get('/', function (req, res) {
    res.sendFile('views/index.html', {root: __dirname});
})
 
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", router);