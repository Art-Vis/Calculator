import { FC } from 'react';

interface ButtonsNumberProps {
	numberArray: string[];
	onNumberClick?: (symbol: string) => void;
}

const ButtonsNumber: FC<ButtonsNumberProps> = ({
	numberArray,
	onNumberClick,
}) => {
	return (
		<div className='buttons__number'>
			{numberArray.map((number, index) => (
				<button
					className='buttons__number-item buttons__item'
					key={index}
					value={number}
					onClick={() => onNumberClick?.(number)}
				>
					{number}
				</button>
			))}
		</div>
	);
};

export default ButtonsNumber;
