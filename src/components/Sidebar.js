import React from 'react'
import DashboardToggle from './dashboard/DashboardToggle'
import CreateRoomBtnModal from './CreateRoomBtnModal'

const Sidebar = () => {
	return (
		<div className="h-100 pt-2">
			<div> <DashboardToggle/> </div>
			<CreateRoomBtnModal />
		</div>
	)
}

export default Sidebar