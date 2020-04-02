import React, { useState, useEffect } from 'react';
import { browserHistory } from 'react-router'
import { useStateLink } from "@hookstate/core";


import { dataLink, pageLink, allLink } from "../../state/hookstate"

// import { useInputControl } from "../hooks/useInputControl.js";
import ValidateFields from "../hooks/Validate";
import database from "../../data/database";

import { Container, Divider, Form, Input } from 'semantic-ui-react'

const Page = (props) => {
	const dataState = useStateLink(dataLink);
	const pageState = useStateLink(pageLink);
	const allState = useStateLink(allLink);
	// const fourthInput = useInputControl("");

	const [validate, setValidate] = useState([]);
	const [dbAction, setdbAction] = useState(pageState.get().id);
	const [pageInfo, setPageInfo] = useState({ title: "", tags: "", body: "" });

	// const titleInput = useInputControl(pageInfo.title);
	// const bodyInput = useInputControl(pageInfo.body);
	// const tagInput = useInputControl(pageInfo.tags);

	const doFields = e => {
		e.preventDefault();
		setPageInfo({ ...pageInfo, [e.target.name]: e.target.value });
		console.log(29, pageInfo[e.target.name]);
	}


	const doSubmit = e => {
		e.preventDefault();
		// setValidate(make)
		// 
		// db write here
		//
		database.insert(pageInfo)
			.then((id) => {
				setPageInfo({ ...pageInfo, id: id });
				console.log(56, id);
				setdbAction(id);
			});
		// props.history.push("/");
	}

	useEffect(() => {
		console.log(63, dbAction);
		if (dbAction) {
			// console.log(72, dbAction);
			database.get(dbAction)
				.then((result) => {
					// console.log(73, result);
					dataState.set(result)
					setPageInfo({ ...result, modified: new Date().getTime() })
				})
				.then(() => {
					// console.log(68, pageInfo);new Date().getTime()
				})
		} else {
			setPageInfo({ ...pageInfo, created: new Date().getTime() })
		}
	}, [dbAction])

	return (
		<Container fluid className="main">
			<Form onSubmit={doSubmit}>
				<Form.Input fluid
					// {...titleInput}
					name="title" value={pageInfo.title} onChange={doFields}
					placeholder='Title'
					size="small"
					label={{ icon: 'text cursor' }}
					labelPosition='left'
				/>
				<Input fluid
					// {...tagInput}
					name="tags" value={pageInfo.tags} onChange={doFields}
					placeholder='Descriptive Tags'
					size="mini"
					label={{ icon: 'tag' }}
					labelPosition='left'
				// transparent
				/>
				<Divider />
				<ValidateFields validate={validate} />
				<Form.TextArea
					// {...bodyInput}
					name="body" value={pageInfo.body} onChange={doFields}
					placeholder='Tell me something good . . .'
				/>
				<Form.Button size="small" primary>Save</Form.Button>
			</Form>
		</Container>
	)
}

export default Page