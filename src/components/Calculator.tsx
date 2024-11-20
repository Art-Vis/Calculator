import { useState } from 'react';
import Buttons from './Buttons';
import { Parser } from 'expr-eval';

const Calculator = () => {
	const [inputValue, setInputValue] = useState<string>('0');

	const handleButtonClick = (value: string) => {
		const lastChar = inputValue[inputValue.length - 1];
		const mathSymbols = ['+', '-', 'х', '/', '%'];
		const openBrackets = (inputValue.match(/\(/g) || []).length;
		const closeBrackets = (inputValue.match(/\)/g) || []).length;

		if (value === 'AC') {
			setInputValue('0');
		} else if (value === '=') {
			try {
				const parser = new Parser();
				const result = parser.evaluate(inputValue.replace('х', '*'));
				setInputValue(result.toString());
			} catch {
				setInputValue('Error');
			}
		} else if (mathSymbols.includes(value)) {
			if (mathSymbols.includes(lastChar)) {
				return;
			}
			setInputValue(prev => prev + value);
		} else if (value === '(') {
			if (lastChar !== '(' && openBrackets === closeBrackets) {
				setInputValue(prev => prev + value);
			}
		} else if (value === ')') {
			if (openBrackets > closeBrackets) {
				setInputValue(prev => prev + value);
			}
		} else if (value === '.') {
			if (inputValue === '0') {
				setInputValue('0.');
			} else if (!lastChar.includes('.')) {
				setInputValue(prev => prev + value);
			}
		} else {
			setInputValue(prev => (prev === '0' ? value : prev + value));
		}
	};

	const handleDeleteClick = () => {
		setInputValue(prev => prev.slice(0, -1));
	};

	return (
		<div className='calculator'>
			<input
				type='text'
				value={inputValue}
				readOnly
				className='calculator__input'
			/>
			<Buttons
				onButtonClick={handleButtonClick}
				onDeleteClick={handleDeleteClick}
			/>
		</div>
	);
};

export default Calculator;
