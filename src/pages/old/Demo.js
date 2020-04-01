import React, { useState, useEffect } from 'react';
// import axios from "axios";
import { Container, Button, Card, InputGroup, FormControl, /* ToggleButton, ToggleButtonGroup */ } from "react-bootstrap";
import Dexie from "dexie";

import { useInputControl } from "./hooks/useInputControl.js";
// import AdminListitem from "./AdminListitem";
import ValidateFields from "./hooks/Validate";

// import './App.css';

const db = new Dexie("wikidb");
db.version(1).stores({
	pages: "++id, title, body, fourth"
})

const Demo = (props) => {
	// useInputControl setup, abstracting the basic form fields
	const titleInput = useInputControl("");
	const bodyInput = useInputControl("");
	const tagInput = useInputControl("");
	const fourthInput = useInputControl("");

	// setting up local state
	// const [alive, setAlive] = useState(true);
	const [allpages, setAllPages] = useState([]);
	const [validate, setValidate] = useState([]);
	const [dbAction, setdbAction] = useState([]);

	const pageInfo = {
		title: titleInput.value,
		tags: tagInput.value,
		body: bodyInput.value,
		fourth: fourthInput.value,
		// alive: alive
	};

	// const doAlive = e => {
	// 	const chgAlive = e.target.value;
	// 	setAlive(chgAlive);
	// };

	const doSubmit = async e => {
		e.preventDefault();
		const make = []
		Object.keys(pageInfo).forEach(el => {
			if (pageInfo[el] === "") {
				make.push(`"${el}" field cannot be blank.`)
			}
		})
		if (make.length !== 0) {
			setValidate(make)
			return
		} else {
			setValidate(make)
			setAllPages([pageInfo, ...allpages ])
			console.log(57, pageInfo);
			// 
			// db write here
			//
			setdbAction(await db.pages.put(pageInfo));

			// e.preventDefault();
		}
	}

	useEffect(() => {
		const getList = async () => {
			// 
			// db read here.
			// 
			const dbRead = await db.pages.where("id").equals(dbAction).first();
			console.log(71,dbRead)
		}
		getList();
	}, [dbAction])

	return (
		<Container>
			<Card style={{ maxWidth: '40rem', margin: "auto" }}>
				<form onSubmit={doSubmit}>
					<Card.Header>
						<Card.Title bg="light">Add Celeb</Card.Title>
					</Card.Header>
					<Card.Body style={{ padding: "2rem" }}>
						<InputGroup className="mb-3">
							<FormControl style={{ minWidth: "50%" }} {...titleInput} placeholder="Title" />
							{/* <ToggleButtonGroup name="alivequestion" defaultValue={true}>
								<ToggleButton type="radio" name="alive" value={true} checked={alive === true} onChange={doAlive} variant="outline-primary" >
									Alive
								</ToggleButton>
								<ToggleButton type="radio" name="dead" value={false} checked={alive === false} onChange={doAlive} variant="outline-primary">
									Dead
								</ToggleButton>
							</ToggleButtonGroup> */}
						</InputGroup>
						<InputGroup className="mb-3">
							<FormControl {...fourthInput} placeholder="(fourth)" style={{ maxWidth: "25%" }} />
							<FormControl {...tagInput} placeholder="Tags" />
						</InputGroup>
						<InputGroup className="mb-3">
							<FormControl {...bodyInput} placeholder="Body" />
						</InputGroup>
						<Button variant="primary" type="submit" style={{ width: "10rem" }}>
							Add Celeb
						</Button>
					</Card.Body>
				</form>
				<ValidateFields validate={validate} />
			</Card>
			{/* {allpages.map(item => (
				<AdminListitem key={allpages.indexOf(item)} item={item} />
			))} */}
		</Container>
	);
}

export default Demo;
