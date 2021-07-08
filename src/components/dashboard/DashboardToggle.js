import React,{useCallback} from 'react'
import {Icon ,Button,Drawer,Alert} from 'rsuite';
import {useModalState,useMediaQuery} from '../../misc/custom-hooks'
import Dashboard from '.'
import {auth,database} from '../../misc/firebase'

const DashboardToggle = () => {

	const {isOpen,open,close} = useModalState()
    const isMobile = useMediaQuery('(max-width: 992px)')

    const onSignOut = useCallback(() => {

    	auth.signOut();
    	Alert.info('Signed Out Successfully',4000);
    	close();
    },[close])

	return (
		<>
		<Button block color="blue" onClick={open}><Icon icon="dashboard" /></Button>
		<Drawer full={isMobile} show={isOpen} onHide={close} placement="left"> 
		  <Dashboard onSignOut={onSignOut}/> 
		</Drawer>
		</>
	)
}

export default DashboardToggle