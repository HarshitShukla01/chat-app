import React, { memo } from 'react';
import { Icon, ButtonToolbar } from 'rsuite';
import { Link } from 'react-router-dom';
//import { useCurrentRoom } from '../../../context/current-room.context';
import { useMediaQuery } from '../../../misc/custom-hooks';
import RoomInfoBtnModal from './RoomInfoBtnModal';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';
import SendFcmBtnModal from './SendFcmBtnModal';
import AskFcmBtnModal from './AskFcmBtnModal';

const Top = () => {
  return (
    <div>
      Top
    </div>
  )
}

export default Top