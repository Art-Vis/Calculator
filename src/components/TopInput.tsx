import { FC } from 'react';

interface TopInputProps {
	value: string;
}

const TopInput: FC<TopInputProps> = ({ value }) => {
	return (
		<>
			<input
				className='calculator__input'
				type='number'
				value={value}
				readOnly
			/>
		</>
	);
};

export default TopInput;
