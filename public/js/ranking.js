var rankingRows = document.getElementsByClassName('ranking-row');
var rankingPkmn = document.getElementsByClassName('ranking-pkmn');
var rankingPopup = document.getElementsByClassName('ranking-popup')[0];
const rankingColors = document.styleSheets[0].cssRules[0].style;
const totalPokemon = 1025;
var updateInProgress = false;
var fullRankingOpen = false;

var lastWeeklyRanking = '';
var lastGlobalRanking = '';

function lightenDarkenColor(col, amt) {
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);

    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

async function readFile(file) {
    var ranking = [];
    fetch(file).then(response => response.text()).then(text => {
        var lines = text.split('\n');
        for (var line = 0; line < lines.length; line++) {
            lineData = lines[line].split('|');

            if(lineData[2] == '0' && lineData[3] == '0') lines[line] += '0|';
            else if(lineData[2] == lineData[3]) lines[line]+= '100|';
            else lines[line] += ((parseFloat(lineData[2]) / parseFloat(lineData[3]) * 100) + '|');

            ranking.push(lines[line]);
        }

        for(var i = 0; i < (totalPokemon - 1); i++) {
            for(var j = 0; j < (totalPokemon - 1); j++) {
                var dataCurrent = ranking[j].toString().split('|');
                var dataNext = ranking[j+1].toString().split('|');
        
                if(parseFloat(dataCurrent[4]) < parseFloat(dataNext[4])) {
                    var aux = ranking[j+1];
                    ranking[j+1] = ranking[j];
                    ranking[j] = aux;
                }
                else if(parseFloat(dataCurrent[4]) == parseFloat(dataNext[4])) {
                    if(parseInt(dataCurrent[2]) < parseInt(dataNext[2])) {
                        var aux = ranking[j+1];
                        ranking[j+1] = ranking[j];
                        ranking[j] = aux;
                    }
                }
            }
        }

        var count = 0;
        var start = 0;
        if(!file.includes("weekly")) {
            start = 10;
            lastGlobalRanking = ranking;
        }
        else lastWeeklyRanking = ranking;

        fetch("files/cache.txt").then(response => response.text()).then(cache => {
            for(var i = start; i < (start+10); i++) {
                cache.split('\n').forEach(line => {
                    if(line.match('/\|' + ranking[count].split('|')[1] + '\|/gi')) {
                        var darkenedColor = lightenDarkenColor(
                            rankingColors.getPropertyValue("--" + line.split('|')[2].toLowerCase()), -20);
                        rankingRows[i].style.backgroundColor = darkenedColor;
                    }
                });

                rankingPkmn[i].innerHTML = ranking[count++].split('|')[1];
            }
        });
        
        updateInProgress = false;
    });
} 

function openRankingPopup(mode) {
    rankingPopup.style.visibility = 'visible';
    rankingPopup.style.opacity = 1;

    fetch("files/cache.txt").then(response => response.text()).then(cache => {
        var color = '';
        var rows = "<div class='ranking-popup-contents'>";
        var ranking = lastGlobalRanking;

        if(mode == "weekly") {
            ranking = lastWeeklyRanking;
            rows += "<p>Weekly Ranking</p>";
        }
        else rows += "<p>Global Ranking</p>";

        for(var i = 0; i < 1025; i++) {
            cache.split('\n').forEach(line => {
                if(line.match('/\|' + ranking[i].split('|')[1] + '\|/gi')) {
                    color = lightenDarkenColor(
                        rankingColors.getPropertyValue("--" + line.split('|')[2].toLowerCase()), -20);
                }
            });

            var newRow = "<div style='background-color: " + color + "' class='ranking-row'>\n";
            newRow += "<div class='ranking-number-popup'>" + (i+1) + "</div>\n"
            newRow += "<div class='ranking-pkmn'>" + ranking[i].split('|')[1] + "</div></div>\n";
            rows += newRow;
        }

        rows += "</div>";
        rows += "<span onclick='closeRankingPopup()'>X</span>"
        rankingPopup.innerHTML = rows;
        fullRankingOpen = true;
    });
}

function closeRankingPopup() {
    if(fullRankingOpen) {
        rankingPopup.style.opacity = 0;
        rankingPopup.style.visibility = 'hidden';
        rankingPopup.firstChild.innerHTML = "Loading...";
        fullRankingOpen = false;
    }
}

function updateRankings() {
    if(!updateInProgress) {
        updateInProgress = true;

        for(var i = 0; i < 20; i++) {
            rankingRows[i].style.backgroundColor = "black";
            rankingPkmn[i].innerHTML = "Updating...";
        }

        var weeklyFile = readFile('files/weekly.txt');
        var globalFile = readFile('files/score.txt');
    }
}

updateRankings();