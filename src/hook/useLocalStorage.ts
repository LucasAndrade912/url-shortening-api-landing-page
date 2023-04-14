import { useCallback, useState } from 'react';

export function useLocalStorage(key: string, initialValue = '') {
	const [state, setState] = useState(() => {
		try {
			const storadValue = localStorage.getItem(key);

			return storadValue ? JSON.parse(storadValue) : initialValue;
		} catch {
			return initialValue;
		}
	});

	const setValue = useCallback(
		(value: unknown) => {
			try {
				setState(value);
				localStorage.setItem(key, JSON.stringify(value));
			} catch (err) {
				console.log(err);
			}
		},
		[key]
	);

	return [state, setValue];
}
