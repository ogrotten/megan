import { useState, useCallback } from 'react';

export const useInputControl = incoming => {
	const [value, setValue] = useState(incoming);
	const onChange = useCallback(
		ev => setValue(ev.currentTarget.value),
		[]
	);
	console.log(9999, value);
	return { value, onChange };
};