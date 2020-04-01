import React from "react"
import {Message} from 'semantic-ui-react';

function ValidateFields(props) {
	let display = "none"
	if (props.validate.length !== 0) { display = "block" }
	return (
		<Message error style={{ display: display }}>
			{props.validate.map(v => {
				// clg(80,v)
				return (
					<div key={props.validate.indexOf(v)}>{v}</div>)
			})}
		</Message>
	)
}


export default ValidateFields