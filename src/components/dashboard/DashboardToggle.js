import React from 'react'
import {Icon ,Button,Drawer} from 'rsuite';
import {useModalState} from '../../misc/custom-hooks'
import Dashboard from '.'

const DashboardToggle = () => {

	const {isOpen,open,close} = useModalState()

	return (
		<>
		<Button block color="blue" onClick={open}><Icon icon="dashboard" /></Button>
		<Drawer show={isOpen} onHide={close} placement="left"> <Dashboard/> </Drawer>
		</>
	)
}

export default DashboardToggle