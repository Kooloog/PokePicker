const typeColors = document.styleSheets[0].cssRules[0].style;
const defaultTextSize = document.getElementsByClassName("pkmnName")[0].style.fontSize;
const duelCells = document.getElementsByClassName("duel-cell");

let shinyChance = 4096;
let duelAmount = -1;
let animationInProgress = false;
let popUpOpen = false;
let language = '';
let pkmnList = [];

function showPopup(name) {
    if(!popUpOpen) {
        popUpOpen = true;
        document.getElementById(name).style.visibility = 'visible';
        document.getElementById(name).style.opacity = 1;
    }
}

function hidePopup(name) {
    if(popUpOpen) {
        document.getElementById(name).style.visibility = 'hidden';
        document.getElementById(name).style.opacity = 0;
        popUpOpen = false;
    }
}

function updateScore(cell) {
    if(!animationInProgress) {
        animationInProgress = true;
        var pkmnNumbers = document.getElementsByClassName("pkmnNumber");
        var obj = {};
        obj["winner"] = pkmnNumbers[cell].innerHTML;
        obj["loser"] = pkmnNumbers[(cell + 1) % 2].innerHTML;
        document.getElementById("skip-duel").style.opacity = 0;

        fetch("/update", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(obj)
        });

        changeLeftCell();
        changeRightCell();
        setTimeout(loadNewPokemon, 250);
        setTimeout(removeAnimations, 550);
    }
}

function skipDuel() {
    if(!animationInProgress) {
        animationInProgress = true;
        document.getElementById("skip-duel").style.opacity = 0;
        changeLeftCell();
        changeRightCell();

        setTimeout(() => {
            document.getElementById("duelNum").innerHTML = --duelAmount;
            loadNewPokemon();
        }, 250)
        setTimeout(() => {
            removeAnimations();
        }, 550);
    }
}

function loadNewPokemon() {
    var pkmnNumbers = document.getElementsByClassName("pkmnNumber");
    var pkmnNames = document.getElementsByClassName("pkmnName");
    var pkmnTypes = document.getElementsByClassName("pkmnTypes");
    var pkmnPokedex = document.getElementsByClassName("pkmnPokedex");
    var pkmnImages = document.getElementsByClassName("pkmnImage");
    var pkmnCells = document.getElementsByClassName("duel-cell");
    var lastPokemon = 0;

    for(var i=0; i<=1; i++) {
        if(pkmnTypes[i].children.length == 2) pkmnTypes[i].removeChild(pkmnTypes[i].lastChild);
        pkmnNames[i].style.filter = "none";
        duelCells[i].style.backgroundImage = "";

        do {
            var pkmnNumber = Math.floor(Math.random() * 1025) + 1;
        } while(pkmnNumber == lastPokemon)
        lastPokemon = pkmnNumber;

        //Updating Pokémon info
        var pkmnData = pkmnList[pkmnNumber - 1].split('|');
        pkmnNumbers[i].innerHTML = "#" + ("0000" + pkmnData[0]).slice(-4);
        pkmnNames[i].innerHTML = pkmnData[1];

        if(pkmnData[3] != "-") {
            let newType = new Image();
            newType.src = "/resources/types/" + pkmnData[3].toLowerCase() + ".png";
            pkmnTypes[i].appendChild(newType)
        }
        pkmnTypes[i].children[0].src = "/resources/types/" + pkmnData[2].toLowerCase() + ".png";

        pkmnPokedex[i].innerHTML = pkmnData[4];
        
        //Updating background colors depending on type
        var bgColor = lightenDarkenColor(
            rankingColors.getPropertyValue("--" + pkmnData[2].toLowerCase()), -10);
        pkmnCells[i].style.backgroundColor = bgColor;

        //Shiny check
        var isShiny = (Math.floor(Math.random() * shinyChance) === 0);
        if(isShiny) {
            pkmnImages[i].src = ("files/img/shiny/" + pkmnNumber + ".png");
            pkmnCells[i].style.backgroundColor = "#00000000";
            pkmnCells[i].style.backgroundImage = "url(/resources/shinyEffect.jpg)";
            pkmnCells[i].style.backgroundPosition = "center";
            pkmnNames[i].style.filter = "drop-shadow(0px 0px 5px #111)";
            if(window.screen.width < 800) pkmnCells[i].style.backgroundSize = "550%";
            else pkmnCells[i].style.backgroundSize = "150%";
        } else {
            pkmnImages[i].src = ("files/img/normal/" + pkmnNumber + ".png");
            pkmnCells[i].style.backgroundImage = "none";
            pkmnNames[i].style.filter = "none";
        }

        currentEvent(pkmnData[1], i);
    }

    setPokedexTextSize(pkmnPokedex);
    if(window.screen.width < 800) setNameTextSize(pkmnNames);
    else setDefaultNameTextSize(pkmnNames);

    if(!animationInProgress) {
        document.getElementById("skip-duel").style.opacity = 1;
        document.getElementById("main").removeChild(document.getElementById("loading"));
    } 

    document.getElementById("duelNum").innerHTML = ++duelAmount;

    if(duelAmount == 100) shinyChance = 3072;
    else if(duelAmount == 200) shinyChance = 2048;
    else if(duelAmount == 300) shinyChance = 1024;
    else if(duelAmount == 400) shinyChance = 512;
}

function setNameTextSize(name) {
    for(var i=0; i<=1; i++) {
        size = 23;
        if (name[i].innerHTML.length < 5)  size = 40;
        else if (name[i].innerHTML.length < 7)  size = 35;
        else if (name[i].innerHTML.length < 9)  size = 30;

        if(window.screen.width < 450) size /= 1.3;

        name[i].style.fontSize = size + "px";
    }
}

function setDefaultNameTextSize(name) {
    for(var i=0; i<=1; i++) {
        name[i].style.fontSize = defaultTextSize;
    }
}

function setPokedexTextSize(pokedex) {
    for(var i=0; i<=1; i++) {
        if(window.screen.width >= 800) {
            var size = 6.5;
            if (pokedex[i].innerHTML.length < 120) size += 3.25;
            else if (pokedex[i].innerHTML.length < 140) size += 2.25;
            else if (pokedex[i].innerHTML.length < 160) size += 1;
            
            pokedex[i].style.fontSize = (size + "cqmin");
        } else {
            var size = 4;
            if (pokedex[i].innerHTML.length > 120) size = 2.5;

            pokedex[i].style.fontSize = (size + "cqmin");
        }
    }
}

function changeLeftCell() {
    var cell = duelCells[0];
    cell.style.animationFillMode = 'forwards';
    cell.style.animationDuration = '550ms';
    cell.style.animationTimingFunction = 'ease-in-out';
    cell.style.animationName = 'change-left';
}

function changeRightCell() {
    var cell = duelCells[1];
    cell.style.animationFillMode = 'forwards';
    cell.style.animationDuration = '550ms';
    cell.style.animationTimingFunction = 'ease-in-out';
    cell.style.animationName = 'change-right';
}

function removeAnimations() {
    duelCells[0].style.animationName = '';
    duelCells[1].style.animationName = '';
    document.getElementById("skip-duel").style.opacity = 1;
    animationInProgress = false;
}

function refreshPokemonList(load) {
    pkmnList = [];
    
    if(getCookie("lang") == null) setCookie("lang", "EN")
    var cacheFile = "files/cache.txt";
    if(getCookie("lang") == "ES") cacheFile = "files/cache_es.txt";

    console.log(getCookie("lang"));

    fetch(cacheFile).then(response => response.text()).then(text => {
        var lines = text.split('\n');
        for (var line = 0; line < lines.length; line++) {
            pkmnList.push(lines[line]);
        }
    }).then(() => {
        if(load) loadNewPokemon()
    });
}

//Initial configurations
document.getElementsByClassName("pkmnNumber")[0].style.left = "0%";
document.getElementsByClassName("pkmnNumber")[1].style.right = "0%";
setTexts(getCookie('lang'));

refreshPokemonList(true);