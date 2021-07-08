import React,{useState,useCallback,useEffect} from 'react'

export function useModalState(defaultvalue = false) {

	const [isOpen, setIsOpen] = useState(defaultvalue)

	const open = useCallback(() => setIsOpen(true),[])
	const close = useCallback(() => setIsOpen(false),[])

	return {isOpen,open,close}
}