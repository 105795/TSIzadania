const footballTeam = {
  team: "FC BC",
  year: 2025,
  headCoach: "Adam Adamek",
  players: [
    { name: "Andre Catlos", position: "midfielder", isCaptain: false },
    { name: "Papa Smerf", position: "midfielder", isCaptain: true },
    { name: "Diego Maruda", position: "forward", isCaptain: false },
    { name: "Sid Ogar", position: "forward", isCaptain: false },
    { name: "Cristoff Leniwiec", position: "defender", isCaptain: false },
    { name: "Ivan Konecko", position: "goalkeeper", isCaptain: false }
  ]
};

const teamSpan = document.getElementById("team");
const yearSpan = document.getElementById("year");
const coachSpan = document.getElementById("head-coach");
const playerCardsDiv = document.getElementById("player-cards");
const positionSelect = document.getElementById("players");

teamSpan.textContent = footballTeam.team;
yearSpan.textContent = footballTeam.year;
coachSpan.textContent = footballTeam.headCoach;

const createPlayerCard = ({ name, position, isCaptain }) => {
  const card = document.createElement("div");
  card.classList.add("player-card");

  const captainText = isCaptain ? "(Captain) " : "";
  card.innerHTML = `
    <h2>${captainText}${name}</h2>
    <p>Position: ${position}</p>
  `;

  return card;
};

const displayPlayers = (position = "all") => {
  playerCardsDiv.innerHTML = "";
  const filteredPlayers = footballTeam.players.filter(player =>
    position === "all" || player.position === position
  );
  filteredPlayers.forEach(player => {
    playerCardsDiv.appendChild(createPlayerCard(player));
  });
};

positionSelect.addEventListener("change", (event) => {
  displayPlayers(event.target.value);
});

// Initial display
displayPlayers();
