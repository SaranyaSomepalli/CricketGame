class game{
    Teams:Array<Team>=[];
    team_name:String;
    team_scores:Array<number>=[];
    constructor()
    {
        for(let i=1;i<=2;i++)
        {
            let a=new Team(i)
            this.Teams.push(new Team(i))
            this.team_name="Team"+String(i)
            this.team_scores.push(a.Team_score)
            this.team_scores.push(a.Team_score)

        }
        let a=Math.max.apply(Math, this.team_scores)
        
    }

}
class Team{
    Players:Array<players>=[];
    Team_number:number;
    Team_score:number=0;
    High_score:number=0;
    High_scorer:number=0;
    PlayerScores:Array<number>=[]
    constructor(id:number)
    {
        this.Team_number=id;
        for(let i=1;i<=10;i++)
        {
            let a=new players(i)
            this.Players.push(new players(i))
            this.Team_score=this.Team_score+a.score
        }
    }
}
class players{
    name:String;
    score:number;
    id:number;
    balls:number;
    ballscore:Array<number>=[];
    constructor(id:number)
    {

    
        this.id=id;
        this.name="player"+String(id)
        for(let i=1;i<=6;i++)
        {
    let run=Math.floor(Math.random()*7);
    if (run==0)    
    { this.ballscore.push(run);
        break;
    }
    else
    {
    this.ballscore.push(run);
    this.score=this.score+run;
    this.balls=this.balls+1
    }
}
    }
}
    

var title=document.createElement("div")
title.setAttribute("class","container-fluid")
title.innerHTML="cricket10"
title.style.position="relative"

title.style.left="600px"

var row1=document.createElement("div")
row1.setAttribute("class","row")
row1.style.position="relative";
row1.style.left="600px"
var colum1=document.createElement("div")
colum1.setAttribute("class","col-lg-2")
colum1.setAttribute("padding","50px")
colum1.setAttribute("margin","50px")
var score1=document.createElement("div")
score1.innerHTML="Team1 score"
colum1.append(score1)
var b=document.createElement("button")
b.setAttribute("class","btn btn-primary")
b.type="button"
//b.innerHTML="hit"
colum1.append(b)
var table1=document.createElement("table")
var head1=document.createElement("th")
head1.innerHTML="TEAM 1"
table1.append(head1)

for(let i=1;i<=6;i++)
{   var header=document.createElement("th")
header.style.border="2px solid black"
    header.setAttribute("id","table_header")
    header.innerHTML="B"+i
    table1.append(header)
}
var t=document.createElement("th")
t.innerHTML="TOTAL"
table1.append(t)
for(let i=1;i<=10;i++)
{
    var tab_row=document.createElement("tr")
    tab_row.style.border="2px solid black"
    tab_row.setAttribute("id","tr")
    var player=document.createElement("td")
    player.setAttribute("class","player")
    player.innerHTML="player"+i
    tab_row.append(player)
    for(let j=1;j<=6;j++)
    {
        var tab_d=document.createElement("td")
        tab_d.style.border="2px solid black"
        tab_d.setAttribute("id","td")
        tab_row.append(tab_d)


    }
    var total=document.createElement("td")
    total.setAttribute("id","total")
    tab_row.append(total)


    table1.append(tab_row)
}
colum1.append(table1)
var c2=document.createElement("div")
c2.setAttribute("class","col-lg-2")
c2.setAttribute("padding","50px")
c2.setAttribute("margin","50px")
c2.innerHTML="TIMER"
var timeR=document.createElement("h1")
timeR.innerHTML="60"
c2.append(timeR)

var b1=document.createElement("button")
b1.setAttribute("id","BTN")
b1.setAttribute("class","btn btn-primary")
b1.type="button"
b1.innerHTML="Generate Result"
c2.append(b1)





var c21=document.createElement("div")
c21.setAttribute("class","col-lg-2")
c21.setAttribute("padding","50px")
c21.setAttribute("margin","50px")
var T2S=document.createElement("div")
T2S.innerHTML="Team2 score"
c21.append(table1)
var bn=document.createElement("button")
bn.setAttribute("class","btn btn-primary")
bn.type="button"
bn.innerHTML="hit"
c21.append(bn)
var t21=document.createElement("table")
var h21=document.createElement("th")
h21.innerHTML="TEAM 2"
t21.append(h21)

for(let i=1;i<=6;i++)
{   
    var header1=document.createElement("th")

    header1.style.border="2px solid black"
    header1.setAttribute("id","table_header1")
    header1.innerHTML="B"+i
    t21.append(header1)
}
var t0=document.createElement("th")
t0.innerHTML="TOTAL"
t21.append(t0)
for(let i=1;i<=10;i++)
{
    var tr1=document.createElement("tr")
    tr1.style.border="2px solid black"
    tr1.setAttribute("id","tr1")
    var player1=document.createElement("td")
    player1.setAttribute("class","player1")
    player1.innerHTML="player"+i
    tr1.append(player1)
    for(let j=1;j<=6;j++)
    {
        var td1=document.createElement("td")
        td1.style.border="2px solid black"
        td1.setAttribute("id","td")
        tr1.append(td1)


    }
    var total1=document.createElement("td")
    total1.setAttribute("id","total")
    tr1.append(total1)


    t21.append(tr1)
}
c21.append(t21)

row1.append(colum1)
row1.append(c2)
row1.append(c21)
document.body.append(title)
document.body.append(row1)

