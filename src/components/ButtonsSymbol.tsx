import { FC } from 'react';

interface ButtonsSymbolProps {
	symbolArray: string[];
	onSymbolClick?: (symbol: string) => void;
	onDeleteClick: () => void;
}

const ButtonsSymbol: FC<ButtonsSymbolProps> = ({
	symbolArray,
	onSymbolClick,
	onDeleteClick,
}) => {
	return (
		<div className='buttons__symbol'>
			{symbolArray.map((symbol, index) => (
				<button
					className='buttons__symbol-item buttons__item'
					key={index}
					onClick={() => onSymbolClick?.(symbol)}
				>
					{symbol}
				</button>
			))}
			<button
				className='buttons__symbol-item buttons__item'
				onClick={onDeleteClick}
			>
				⌫
			</button>
		</div>
	);
};

export default ButtonsSymbol;
