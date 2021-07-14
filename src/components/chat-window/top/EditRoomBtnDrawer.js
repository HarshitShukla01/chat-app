import React, { memo } from 'react';
import { Button, Drawer, Alert } from 'rsuite';
import { useParams } from 'react-router';
import { useModalState, useMediaQuery } from '../../../misc/custom-hooks';
import EditableInput from '../../EditableInput';
//import { useCurrentRoom } from '../../../context/current-room.context';
import { database } from '../../../misc/firebase';


const EditRoomBtnDrawer = () => {
  return (
    <div>
      EditRoomBtnDrawer
    </div>
  )
}

export default EditRoomBtnDrawer