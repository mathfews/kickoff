const home_team_score = document.getElementById("home-team-score")
const away_team_score = document.getElementById("away-team-score")
const button_home = document.getElementById("button-home")
const button_away = document.getElementById("button-away")

let score_home = 2
let score_away = 1


home_team_score.textContent = score_home
away_team_score.textContent = score_away


button_home.addEventListener("click",() => {
    home_team_score.textContent = ++score_home
    console.log(home_team_score.textContent, away_team_score.textContent)
})

button_away.addEventListener("click",() => {
    away_team_score.textContent = ++score_away
    console.log(home_team_score.textContent, away_team_score.textContent)
})