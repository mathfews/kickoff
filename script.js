const home_team_score = document.getElementById("home-team-score")
const away_team_score = document.getElementById("away-team-score")
const button_home = document.getElementById("button-home")
const button_away = document.getElementById("button-away")

let score_home = 2
let score_away = 1

const response = await fetch("scoreboard.json")
const data = await response.json()

home_team_score.textContent = data[0].home_score
away_team_score.textContent = data[0].away_score


button_home.addEventListener("click",() => {
    home_team_score.textContent = ++data[0].home_score
    console.log(home_team_score.textContent, away_team_score.textContent)
})

button_away.addEventListener("click",() => {
    away_team_score.textContent = ++data[0].away_score
    console.log(home_team_score.textContent, away_team_score.textContent)
})