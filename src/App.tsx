import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";

export interface IRobot {
	id: number;
	name: string;
	email: string;
}

interface IAppProps { }

interface IAppState {
	robots: Array<IRobot>;
	searchField: string;
}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			robots: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
		this.setState({ searchField: event.currentTarget.value })
	}

	render(): JSX.Element {
		const { robots, searchField } = this.state
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		return (!robots.length ? <h1>Loading</h1> :
			<div className="tc">
				<h1 className="f1">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
