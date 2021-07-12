import React,{useState} from 'react'
import {Icon ,Tag,Button,Alert} from 'rsuite';
import {auth,database} from '../../misc/firebase'
import firebase from 'firebase/app';

const ProviderBlock = () => {
  const [isConnected,setIsConnected] = useState({

  	'google.com': auth.currentUser.providerData.some((data) => data.providerId === "google.com"),
  	'facebook.com': auth.currentUser.providerData.some((data) => data.providerId === "facebook.com")
  })

  const updateIsConnected = (providerID,value) => {
   setIsConnected((prev)=> {
   	return {
   		...prev,
   		[providerID]:value
   	}
   } )
  }

  const unlink = async (providerID) => {

  	try{
  		if(auth.currentUser.providerData.length === 1){
  			throw new Error(`You can discontinue from ${providerID}`)
  		}

  		await auth.currentUser.unlink(providerID)

  		updateIsConnected(providerID,false);
  		Alert.info(`Disconnected from ${providerID}`,4000)

  	}catch(err){
      Alert.error(err.message,4000)
  	}
  }

  const unlinkFacebook = () => {
  	unlink('facebook.com')
  }
  const unlinkGoogle = () => {
  	unlink('google.com')
  }


  const link = async (provider) => {
    try{
    	await auth.currentUser.linkWithPopup(provider);
    	Alert.info(`Link With ${provider.providerID}`,4000)
    }catch(err){
     Alert.error(err.message,4000)
    }
  }

  const linkFacebook = () => {
   link(new firebase.auth.FacebookAuthProvider());
  }
  const linkGoogle = () => {
    link(new firebase.auth.GoogleAuthProvider());
  }

	return (
		<div>

		  {isConnected['google.com'] && 
		  <Tag color="green" closable onClose={unlinkGoogle}>
				<Icon icon="google" /> Connected
			</Tag>}
			
			{isConnected['facebook.com'] && 
			<Tag color="blue" closable onClose={unlinkFacebook}>
				<Icon icon="facebook" /> Connected
			</Tag>}

			<div className="mt-2">
			{!isConnected['google.com'] && 
			  <Button block color="green" onClick={linkGoogle}>
		  	  	<Icon icon="google" /> Link With Google
		  	</Button>}

		  	{!isConnected['facebook.com'] && 
				<Button block color="blue" onClick={linkFacebook}>
		  	    <Icon icon="facebook" /> Link With Facebook
		  	</Button>}
			</div>
		</div>
	)
}

export default ProviderBlock