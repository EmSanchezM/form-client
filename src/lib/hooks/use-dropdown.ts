import { useEffect, useRef, useState } from 'react';

export const useDropdown = () => {
	const [dropdownOpened, setDropdownOpened] = useState(false);
	const dropdownRef = useRef<HTMLUListElement | null>(null);

	const openDropdown = () => setDropdownOpened(true);
	const closeDropdown = () => setDropdownOpened(false);

	useEffect(() => {
		if (!dropdownOpened) return;

		const handleClickOutside = (ev: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(ev.target as Node)
			)
				closeDropdown();
		};

		document.addEventListener('click', handleClickOutside, { capture: true });

		return () =>
			document.removeEventListener('click', handleClickOutside, {
				capture: true
			});
	}, [dropdownOpened]);

	return { dropdownOpened, dropdownRef, openDropdown, closeDropdown };
};
