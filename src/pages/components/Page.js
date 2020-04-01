import React, { useState } from 'react';
import { useStateLink } from "@hookstate/core";
import { dataState, pageState } from "../../state/hookstate"

import { useInputControl } from "../hooks/useInputControl.js";
import ValidateFields from "../hooks/Validate";
import database from "../../data/database";

import { Container, Divider, Form, Input } from 'semantic-ui-react'

const Page = () => {
	const dataS = useStateLink(dataState);
	const pageS = useStateLink(pageState);
	console.log(dataS.value);

	const titleInput = useInputControl(dataS.value.title);
	const bodyInput = useInputControl(dataS.value.body);
	const tagInput = useInputControl(dataS.value.tags);
	const fourthInput = useInputControl("");
	
	const [validate, setValidate] = useState([]);

	const pageInfo = {
		title: titleInput.value,
		tags: tagInput.value,
		body: bodyInput.value,
		fourth: fourthInput.value,
	};
	
	let value
	let options

	const handleChange = (e, { value }) => {
		// this.setState({ value })
		console.log(value);
	}


	return (
		<Container fluid className="main">
			<Form>
				<Form.Input fluid
					{...titleInput}
					placeholder='Title'
					size="small"
					label={{ icon: 'text cursor' }}
					labelPosition='left'
				/>
				<Input fluid
					{...tagInput}
					placeholder='Descriptive Tags'
					size="mini"
					label={{ icon: 'tag' }}
					labelPosition='left'
				// transparent
				/>
				<Divider />
				<Form.TextArea
					{...bodyInput}
					placeholder='Tell me something good . . .'
				/>
				<Form.Button>Submit</Form.Button>
			</Form>
		</Container>
	)
}

export default Page