import React, { useState } from "react";
import semifinalsData from "../semifinalData.json";
import "../components/style/Fifa18.css";

const SemifinalResults = () => {
	const [selectedCountry, setSelectedCountry] = useState("");
	const [result, setResult] = useState(null);

	const handleCountrySelect = (event) => {
		const selectedTeam = event.target.value;
		setSelectedCountry(selectedTeam);

		const semifinalResult = semifinalsData.semifinals.find(
			(semifinal) =>
				semifinal.team1 === selectedTeam || semifinal.team2 === selectedTeam
		);

		if (semifinalResult) {
			setResult(semifinalResult.result);
		} else {
			setResult(null);
		}
	};

	return (
		<div className="container1">
			<div className="container2">
				<h2 className="title">Fifa-2018 SemiFinal Results</h2>
				<select
					value={selectedCountry}
					onChange={handleCountrySelect}
					className="choice"
				>
					<option value="">Select a country</option>
					{semifinalsData.semifinals.map((semifinal) => (
						<option key={semifinal.team1} value={semifinal.team1}>
							{semifinal.team1}
						</option>
					))}
					{semifinalsData.semifinals.map((semifinal) => (
						<option key={semifinal.team2} value={semifinal.team2}>
							{semifinal.team2}
						</option>
					))}
				</select>
				{result && (
					<div className="result">
						<p>Winner: {result.winner}</p>
						<p>Loser: {result.loser}</p>
						<p>Score: {result.score}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default SemifinalResults;
