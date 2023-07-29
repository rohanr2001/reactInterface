import React, { useState, useEffect } from "react";
import "../components/style/Quotes.css";
function Quoutes({ content }) {
	return (
		<div className="quote-container">
			<h1>
				<span>"{content}"</span>
			</h1>
		</div>
	);
}

export default function QuotesFetch() {
	const [data, setData] = useState("The Quote of the day");

	const handleNewQuote = () => {
		fetch(`https://api.quotable.io/random`)
			.then((response) => response.json())
			.then((data) => setData(data));
	};

	useEffect(() => {
		handleNewQuote();
	}, []);

	if (!data) return <p>Loading...</p>;

	return (
		<div className="quote-container">
			<Quoutes content={data.content} />
			<button onClick={handleNewQuote}>Next Quote</button>
			<div class="hover-component">
				<div class="hover-trigger">
					<input
						type="submit"
						value="Help"
						style={{ padding: "5px", margin: "5px" }}
					></input>
				</div>
				<div class="hover-content">
					Random Quotes are displayed!! Click new quote to display new quote.
				</div>
			</div>
		</div>
	);
}
