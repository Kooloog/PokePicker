//Sets a new cookie
function setCookie(name, value) {
    var daysToExpire = new Date(2147483647 * 1000).toUTCString();
    document.cookie = name + "=" + value  + '; expires=' + daysToExpire;
}

//Gets a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function setTexts(lang) {
    if (lang == 'EN') {
        document.getElementById("duelCount").innerHTML =
            "You've played <span id='duelNum'>0</span> duels in this session";
        document.getElementById("skip").innerHTML = "SKIP DUEL";
        document.getElementsByClassName("ranking-title")[0].innerHTML = "WEEKLY RANKING";
        document.getElementsByClassName("ranking-title")[1].innerHTML = "GLOBAL RANKING";
        document.getElementsByClassName("full-ranking")[0].innerHTML = "Full Weekly Ranking";
        document.getElementsByClassName("full-ranking")[1].innerHTML = "Full Global Ranking";
        document.getElementsByClassName("button-rankings")[0].innerHTML = "UPDATE RANKINGS";
    }
    else if(lang == 'ES') {
        document.getElementById("duelCount").innerHTML =
            "Has jugado <span id='duelNum'>0</span> duelos en esta sesión";
        document.getElementById("skip").innerHTML = "SALTAR";
        document.getElementsByClassName("ranking-title")[0].innerHTML = "RANKING SEMANAL";
        document.getElementsByClassName("ranking-title")[1].innerHTML = "RANKING GLOBAL";
        document.getElementsByClassName("full-ranking")[0].innerHTML = "Ranking Semanal Completo";
        document.getElementsByClassName("full-ranking")[1].innerHTML = "Ranking Global Completo";
        document.getElementsByClassName("button-rankings")[0].innerHTML = "ACTUALIZAR RANKINGS";
    }

    if(document.getElementById("duelNum").innerHTML != 0)
        document.getElementById("duelNum").innerHTML = duelAmount;
}

function changeLang(id) {
    setCookie("lang", id);
    setTexts(id);
    refreshPokemonList(false);
}