import React, { useState, useEffect } from 'react';
import { useStateLink } from "@hookstate/core";

import { pageLink } from "../../state/hookstate"

import { Button, Card, Container, Icon } from 'semantic-ui-react'

const MainItem = (props) => {
	const item = props.item

	const pageState = useStateLink(pageLink);

	const edititem = (e) => {
		pageState.set({page: "page", id: item.id})
	}

	useEffect(() => {
		// console.log(15, item);
	}, [])

	return (
		<Container fluid className="leftside">
			<Card>
				<Card.Content>
					<Card.Header>{item.title}</Card.Header>
					<Card.Meta>
						<span className='date'><Icon name='clock outline' /></span>
					</Card.Meta>
					<Card.Description>
						{item.body}
      				</Card.Description>
				</Card.Content>
				<Card.Content extra>
					{item.tags}
				</Card.Content>
				<Card.Content extra>
					<Button compact floated="right" size="small" icon="edit"
						onClick={edititem}
					/>
				</Card.Content>
			</Card>
		</Container>
	)
}

export default MainItem