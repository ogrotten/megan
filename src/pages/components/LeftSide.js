import React, { useState } from 'react';
import { useStateLink } from "@hookstate/core";
import { Container, Menu } from 'semantic-ui-react'

import { pageState } from "../../state/hookstate"

const LeftSide = () => {
	// const dataS = useStateLink(dataState);
	const pageS = useStateLink(pageState);

	const [item, setItem] = useState({ activeItem: 'Show All' })

	const handleItemClick = async (e, { name, page }) => {
		setItem({ activeItem: name })
		pageS.nested.page.set(page);
		console.log(16,pageS.value.page, page, name);
	}

	return (
		<Container fluid className="leftside">
			<Menu pointing secondary vertical>
				<Menu.Item
					name='Show All'
					page="main"
					active={item.activeItem === 'Show All'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Add New'
					page="page"
					active={item.activeItem === 'Add New'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					name='Manage'
					page="manage"
					active={item.activeItem === 'Manage'}
					onClick={handleItemClick}
				/>
			</Menu>
		</Container>
	)
}

export default LeftSide