import { h } from 'preact';

class TimezonelessDate extends Date {
	getHours() {
		return this.getUTCHours();
	}
}

const App = () => {
	const now = new TimezonelessDate();
	return <p>{now.getHours()}</p>;
};

export default App;
