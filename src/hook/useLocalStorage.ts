import { useCallback, useState } from 'react';

export function useLocalStorage<T>(
	key: string,
	initialValue: T = '' as T
): [T, (value: T) => void] {
	const [state, setState] = useState<T>(() => {
		try {
			const storadValue = localStorage.getItem(key);

			return storadValue ? JSON.parse(storadValue) : initialValue;
		} catch {
			return initialValue;
		}
	});

	const setValue = useCallback(
		(value: T) => {
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
