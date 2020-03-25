import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [field, setField] = useState("");

	const doInput = e => {
		setField(e.target.value)
		console.log(e.target.value);
	}

	const getTest = e => {
		e.preventDefault();
		console.log(field);
	}

	return (
		<div className="App">
			<form onSubmit={getTest}>
    			<input onInput={doInput} id="testfield" type="text" placeholder=" " name="field" value={field} />
			</form>
		</div>
	);
}

export default App;
