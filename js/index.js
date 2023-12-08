// There are 3 rounds defined, each of which has multiple matchups of 2 teams
// You will need to fill in the teams and the score of the match into the respective fields
// You should also add status: true if you are adding a new matchup so it's displayed as active
// There is also an optional date parameter in case you would want to show it
let obj = [
	{
		name: "round-one",
		matchups: [
			{
				teams: ["T1", "T2"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["T3", "T4"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: false,
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
		],
	},
	{
		name: "round-two",
		matchups: [
			{
				teams: ["T1", "T3"],
				score: [0, 0],
				date: "12-12-2019 12:00",
				status: true,
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
		],
	},
	{
		name: "round-three",
		matchups: [
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
			{
				teams: ["", ""],
				score: [0, 0],
				date: "12-12-2019 12:00",
			},
		],
	},
];

addEventListener("load", (ev) => {
	for (const round of obj) {
		let rounds = document.querySelectorAll(`.${round.name} .matchup`);

		for (let i = 0; i < round.matchups.length; i++) {
			const elem = rounds[i];
			const matchup = round.matchups[i];
			for (let j = 0; j < matchup.teams.length; j++) {
				if (matchup.status !== undefined || matchup.status) {
					elem.innerHTML += `<li class="team current-team">${matchup.teams[j]}<span class="score">${matchup.score[j]}</span></li>`;
					elem.classList.add("active");
				} else {
					elem.innerHTML += `<li class="team">&nbsp;<span class="score"></span></li>`;
				}
			}
		}
	}
});
