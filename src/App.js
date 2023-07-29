import DynamicBoxes from "./components/DynamicBoxes";
import TextEntry from "./components/TextEntry";
import Quotes from "./components/Quotes";
import Fifa18 from "./components/Fifa18";
import "./components/style/App.css";
export default function App() {
	return (
		<section>
			<Quotes />
			<Fifa18 />
			<TextEntry />
			<DynamicBoxes />
		</section>
	);
}
