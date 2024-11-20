import { FC } from 'react';
import ButtonsNumber from './ButtonsNumber';
import ButtonsSymbol from './ButtonsSymbol';

interface ButtonsProps {
	onButtonClick: (value: string) => void;
	onDeleteClick: () => void;
}

const numberArray: string[] = [
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'0',
	'.',
];
const symbolArray: string[] = ['AC', '(', ')', '/', 'х', '-', '+', '='];

const Buttons: FC<ButtonsProps> = ({ onButtonClick, onDeleteClick }) => {
	return (
		<div className='buttons'>
			<ButtonsSymbol
				symbolArray={symbolArray}
				onSymbolClick={onButtonClick}
				onDeleteClick={onDeleteClick}
			/>
			<ButtonsNumber numberArray={numberArray} onNumberClick={onButtonClick} />
		</div>
	);
};

export default Buttons;
