import { useState } from "react";
import "../components/style/DynamicBox.css"
export default function DynamicBoxes() {
	const [numBoxes, setNumBoxes] = useState(0);

	const handleInputChange = (event) => {
		const inputValue = parseInt(event.target.value);
		if (!isNaN(inputValue)) {
			setNumBoxes(inputValue);
		} else {
			setNumBoxes(0);
		}
	};

	const renderBoxes = () => {
		const boxes = [];
		for (let i = 0; i < numBoxes; i++) {
			boxes.push(
				<div key={i} className="box">
					aiRender
				</div>
			);
		}
		return boxes;
	};

	return (
		<div className="DBox">
			<label>Enter the number of boxes: </label>
			<input type="number" id="box-limit" onChange={handleInputChange} />
			<div className="box-container">{renderBoxes()}</div>
		</div>
	);
}
