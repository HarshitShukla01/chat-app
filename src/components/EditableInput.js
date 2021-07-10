import React,{useState,useCallback} from 'react'
import {Icon ,Button,Input,Alert,InputGroup} from 'rsuite';

const EditableInput = ({
intialValue,
onSave,
label=null,
placeholder="Write Your Value",
emptyMsg="Input is empty",
...inputProps}) => {


	const [input, setInput] = useState(intialValue)
	const [isEditable, setIsEditable] = useState(false)

    const onInputChange = useCallback((value) => {
       setInput(value)
     },[])

    const onEditClick = useCallback(() => {
        setIsEditable(p => !p)
        setInput(intialValue)
    },[intialValue])

    const onSaveClick = async () => {
        const trimmed = input.trim();

        if(trimmed === ''){
        	Alert.info(emptyMsg, 4000)
        }

        if(trimmed !== intialValue){
        	await onSave(trimmed)
        }

        setIsEditable(false)
    }

	return (
		<div>
		  {label}
		  <InputGroup>
		  <Input {...inputProps} disabled={!isEditable} placeholder={placeholder} value={input} onChange={onInputChange}/>
		  <InputGroup.Button onClick={onEditClick}>
		  	<Icon icon = {isEditable ? 'close': 'edit2'}/>
		  </InputGroup.Button>
		  {isEditable && (
          <InputGroup.Button onClick={onSaveClick}>
		  	 <Icon icon = 'check'/>
		   </InputGroup.Button>)
		  }
		  </InputGroup>
		</div>
	)
}

export default EditableInput