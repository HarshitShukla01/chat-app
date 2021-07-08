import React,{useState,useCallback,useEffect} from 'react'

export function useModalState(defaultvalue = false) {

	const [isOpen, setIsOpen] = useState(defaultvalue)

	const open = useCallback(() => setIsOpen(true),[])
	const close = useCallback(() => setIsOpen(false),[])

	return {isOpen,open,close}
}


export const useMediaQuery = query => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    const listener = evt => setMatches(evt.matches);

    queryList.addListener(listener);
    return () => queryList.removeListener(listener);
  }, [query]);

  return matches;
};
