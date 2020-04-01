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

	const titleInput = useInputControl("");
	const bodyInput = useInputControl("");
	const tagInput = useInputControl("");
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
					name="title"
					placeholder='Title'
					size="small"
					label={{ icon: 'text cursor' }}
					labelPosition='left'
				/>
				<Input fluid
					name="tags"
					placeholder='Descriptive Tags'
					size="mini"
					label={{ icon: 'tag' }}
					labelPosition='left'
				// transparent
				/>
				<Divider />
				<Form.TextArea
					name="body"
					placeholder='Tell me something good . . .'
				/>
				<Form.Button>Submit</Form.Button>
			</Form>
		</Container>
	)
}

export default Page