import { useState } from "react";
import "../components/style/TextEntry.css";
export default function TextEntry() {
	const [inputText, setInpuText] = useState("");
	const [displayText, setDisplayText] = useState("Output");

	function handleInputChange(event) {
		setInpuText(event.target.value);
	}

	function handelKeyPress(event) {
		if (event.key === "Enter") {
			setDisplayText(inputText);
			setInpuText("");
		}
	}

	return (
		<div className="container">
			<div>
				<input
					type="text"
					value={inputText}
					onChange={handleInputChange}
					onKeyDown={handelKeyPress}
					className="green-box"
					placeholder="Enter text here.."
				></input>
				<div class="hover-component">
					<div class="hover-trigger">
						<input
							type="submit"
							value="Help"
							style={{ padding: "5px", margin: "5px" }}
						></input>
					</div>
					<div class="hover-content">
						Content typed in the green blox displayed in blue box! 
					</div>
				</div>
			</div>
			<div className="blue-box">{displayText && <p>{displayText}</p>}</div>
		</div>
	);
}
