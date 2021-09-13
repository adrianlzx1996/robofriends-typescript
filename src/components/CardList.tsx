import Card from "./Card";
import { IRobot } from "../App";

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
	return (
		<div>
			{robots.map((robot, i) => {
				return (
					<Card
						key={i}
						id={robot.id}
						name={robot.name}
						email={robot.email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
