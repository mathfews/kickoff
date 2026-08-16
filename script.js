const home_team_score = document.getElementById("home-team-score")
const away_team_score = document.getElementById("away-team-score")
const button_home = document.getElementById("button-home")
const button_away = document.getElementById("button-away")

const eventSource = new EventSource("/scoreboard.json")

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data)
    const home_score = data.home_score
    const away_score = data.away_score

    home_team_score.textContent = home_score
    away_team_score.textContent = away_score
} 


/* button_home.addEventListener("click",() => {
    home_team_score.textContent = ++data[0].home_score
    console.log(home_team_score.textContent, away_team_score.textContent)
})

button_away.addEventListener("click",() => {
    away_team_score.textContent = ++data[0].away_score
    console.log(home_team_score.textContent, away_team_score.textContent)
}) */