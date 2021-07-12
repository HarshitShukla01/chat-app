import React from 'react'
import {Icon ,Button,Drawer,Divider,Alert} from 'rsuite';
import {useProfile} from '../../context/profile.context'
import EditableInput from '../EditableInput'
import {database} from '../../misc/firebase'
import ProviderBlock from './ProviderBlock'

const Dashboard = ({onSignOut}) => {

   const {profile} = useProfile()

   const onSave = async (newData) => {

   	 const userNicknameRef = database.ref(`/profiles/${profile.uid}`).child('name');

     try{
       
       await userNicknameRef.set(newData);
       Alert.success('Nickname has been updated',4000);

     }catch(err){
      Alert.error(err.message);
     }    

   }

	return (
 <>
	<Drawer.Header>
		<Drawer.Title>
					
		</Drawer.Title>
	</Drawer.Header>

	<Drawer.Body>
	 <h3>Hey,{profile.name}</h3>
   <ProviderBlock />
    <Divider/>
    <EditableInput 
      name = "nickname" 
      intialValue={profile.name} 
      onSave={onSave} 
      label={<h6 className="mb-2">Nickname</h6>}
    />
	</Drawer.Body>

	<Drawer.Footer>
	  <Button block color="red" onClick={onSignOut}>Sign Out</Button>
	</Drawer.Footer>
 </>
	)
}

export default Dashboard