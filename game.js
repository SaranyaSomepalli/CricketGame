var game = /** @class */ (function () {
    function game() {
        this.Teams = [];
        this.scores_teams = [];
        for (var i = 1; i <= 2; i++) {
            var a_1 = new Team(i);
            this.Teams.push(a_1);
            this.team_name = "Team" + String(i);
            this.scores_teams.push(a_1.Team_score);
        }
        var a = Math.max.apply(Math, this.scores_teams);
        this.Winner_team = this.scores_teams.indexOf(Math.max.apply(Math, this.scores_teams)) + 1;
    }
    return game;
}());
var Team = /** @class */ (function () {
    function Team(id) {
        this.Players = [];
        this.Team_score = 0;
        this.Highscore = 0;
        this.high_scorer = 0;
        this.player_scores = [];
        this.Team_number = id;
        for (var i = 1; i <= 10; i++) {
            var a_2 = new players(i);
            this.Players.push(a_2);
            this.Team_score = this.Team_score + a_2.score;
            this.player_scores.push(a_2.score);
        }
        this.high_scorer = this.player_scores.indexOf(Math.max.apply(Math, this.player_scores));
        this.Highscore = Math.max.apply(Math, this.player_scores);
    }
    return Team;
}());
var players = /** @class */ (function () {
    function players(id) {
        this.score = 0;
        this.balls = 0;
        this.ballscore = [];
        this.id = id;
        this.name = "player" + String(id);
        for (var i = 1; i <= 6; i++) {
            var run = Math.floor(Math.random() * 7);
            if (run == 0) {
                this.ballscore.push(run);
                this.balls = this.balls + 1;
                break;
            }
            else {
                this.ballscore.push(run);
                this.score = this.score + run;
                this.balls = this.balls + 1;
            }
        }
    }
    return players;
}());
var title = document.createElement("div");
title.setAttribute("class", "container");
title.innerHTML = "cricket10";
title.style.position = "relative";
title.style.left = "600px";
var row = document.createElement("div");
row.setAttribute("class", "row");
row.style.position = "relative";
row.style.left = "200px";
var col1 = document.createElement("div");
col1.setAttribute("class", "col-lg-4");
col1.setAttribute("padding", "100px");
var score1 = document.createElement("div");
score1.innerHTML = "score";
col1.innerHTML = "team1";
col1.append(score1);
var bt = document.createElement("button");
bt.setAttribute("class", "btn btn-primary");
bt.type = "button";
bt.innerHTML = "hit";
col1.append(bt);
var table1 = document.createElement("table");
table1.style.border = "2px solid black";
var rowtab = document.createElement("tr");
var coltab = document.createElement("td");
var data1 = document.createElement("th");
data1.style.border = "2px solid black";
var data2 = document.createElement("th");
data2.style.border = "2px solid black";
data1.innerHTML = "TEAM 1";
table1.append(data1);
for (var i = 1; i <= 6; i++) {
    var data3 = document.createElement("th");
    data3.style.border = "2px solid black";
    data3.setAttribute("id", "headtab" + String(i));
    data3.innerHTML = "ball" + String(i);
    table1.append(data3);
}
data2.innerHTML = "TOTAL";
table1.append(data2);
for (var i = 1; i <= 10; i++) {
    var tab_row = document.createElement("tr");
    tab_row.style.border = "2px solid black";
    tab_row.setAttribute("id", "tr" + String(i));
    var player = document.createElement("td");
    player.setAttribute("class", "player" + String(i));
    player.innerHTML = "player" + String(i);
    tab_row.append(player);
    for (var j = 1; j <= 6; j++) {
        var tab_d = document.createElement("td");
        tab_d.style.border = "2px solid black";
        tab_d.setAttribute("id", "td" + String(i) + String(j));
        tab_row.append(tab_d);
    }
    var total = document.createElement("td");
    total.setAttribute("id", "total" + String(i));
    tab_row.append(total);
    table1.append(tab_row);
}
col1.append(table1);
var col2 = document.createElement("div");
col2.setAttribute("class", "col-lg-4");
col2.setAttribute("padding", "100px");
col2.innerHTML = "TIMER";
var time = document.createElement("h2");
time.innerHTML = "60";
col2.append(time);
var b = document.createElement("button");
b.setAttribute("id", "myid");
b.setAttribute("class", "btn btn-primary");
b.type = "button";
b.innerHTML = "Generate Result";
var a = new game();
b.addEventListener("click", function () {
    console.log(a);
    var winner = document.createElement("div");
    winner.innerHTML = "Team" + String(a.Winner_team);
    var winner_score = document.createElement("div");
    winner_score.innerHTML = "Score : " + String(Math.max.apply(Math, a.scores_teams));
    var mom = document.createElement("div");
    mom.innerHTML = "Man of the match : Player" + String(a.Teams[a.Winner_team - 1].high_scorer + 1);
    col2.append(winner);
    col2.append(winner_score);
    col2.append(mom);
});
col2.append(b);
var col3 = document.createElement("div");
col3.setAttribute("class", "col-lg-4");
col3.setAttribute("padding", "100px");
col3.innerHTML = "Team2";
var score2 = document.createElement("div");
score2.innerHTML = "score";
col3.append(score2);
var bt2 = document.createElement("button");
bt2.setAttribute("class", "btn btn-primary");
bt2.type = "button";
bt2.innerHTML = "hit";
col3.append(bt2);
var tab2 = document.createElement("table");
tab2.style.border = "2px solid black";
var rowtab2 = document.createElement("tr");
var coltab2 = document.createElement("td");
var headtab1_2 = document.createElement("th");
headtab1_2.style.border = "2px solid black";
var headtab2_2 = document.createElement("th");
headtab2_2.style.border = "2px solid black";
headtab1_2.innerHTML = "TEAM 2";
tab2.append(headtab1_2);
for (var i = 1; i <= 6; i++) {
    var headtab_2 = document.createElement("th");
    headtab_2.style.border = "2px solid black";
    headtab_2.setAttribute("id", "headtab2" + String(i));
    headtab_2.innerHTML = "ball" + String(i);
    tab2.append(headtab_2);
}
headtab2_2.innerHTML = "TOTAL";
tab2.append(headtab2_2);
for (var i = 1; i <= 10; i++) {
    var tr2 = document.createElement("tr");
    tr2.style.border = "2px solid black";
    tr2.setAttribute("id", "tr2" + String(i));
    var player2 = document.createElement("td");
    player2.setAttribute("class", "2player" + String(i));
    player2.innerHTML = "player" + String(i);
    tr2.append(player2);
    for (var j = 1; j <= 6; j++) {
        var td2 = document.createElement("td");
        td2.style.border = "2px solid black";
        td2.setAttribute("id", "2td" + String(i) + String(j));
        tr2.append(td2);
    }
    var total2 = document.createElement("td");
    total2.setAttribute("id", "total2" + String(i));
    tr2.append(total2);
    tab2.append(tr2);
}
col3.append(tab2);
bt.addEventListener("click", function () {
    var _loop_1 = function (i) {
        var _loop_2 = function (j) {
            if (typeof (a.Teams[0].Players[i - 1].ballscore[j - 1]) == "undefined") {
                setTimeout(function () {
                    document.getElementById("td" + String(i) + String(j)).innerHTML = "";
                }, 1000);
            }
            else {
                setTimeout(function () {
                    document.getElementById("td" + String(i) + String(j)).innerHTML = String(a.Teams[0].Players[i - 1].ballscore[j - 1]);
                }, 1000);
            }
        };
        for (var j = 1; j <= 6; j++) {
            _loop_2(j);
        }
        setTimeout(function () {
            document.getElementById("total" + String(i)).innerHTML = String(a.Teams[0].player_scores[i - 1]);
        }, 1000);
    };
    for (var i = 1; i <= 10; i++) {
        _loop_1(i);
    }
});
bt2.addEventListener("click", function () {
    var _loop_3 = function (i) {
        var _loop_4 = function (j) {
            if (typeof (a.Teams[1].Players[i - 1].ballscore[j - 1]) == "undefined") {
                setTimeout(function () {
                    document.getElementById("2td" + String(i) + String(j)).innerHTML = "";
                }, 1000);
            }
            else {
                setTimeout(function () {
                    document.getElementById("2td" + String(i) + String(j)).innerHTML = String(a.Teams[1].Players[i - 1].ballscore[j - 1]);
                }, 1000);
            }
        };
        for (var j = 1; j <= 6; j++) {
            _loop_4(j);
        }
        document.getElementById("total2" + String(i)).innerHTML = String(a.Teams[1].player_scores[i - 1]);
    };
    for (var i = 1; i <= 10; i++) {
        _loop_3(i);
    }
});
b.addEventListener("click", function () {
});
row.append(col1);
row.append(col2);
row.append(col3);
document.body.append(title);
document.body.append(row);
