import {styled} from '@stitches/react';

export const StyledInputContainer = styled('div', {
	width: '100%',
	height: '150px',
	display: 'grid',
	gridTemplateRows: '40px 1fr 36px',
	gap: '8px',
});

export const StyledLabel = styled('label', {
	fontSize: '1rem',
	fontVariant: 'small-caps',
	textTransform: 'capitalize',
	alignSelf: 'flex-end',
});

export const StyledInput = styled('input', {
	width: '100%',
	height: '100%',
	background: '#242424',
	padding: '0 18px',
	fontSize: '1.3rem',
	textTransform: 'capitalize',

	'&[type="number"]::-webkit-outer-spin-button': {
		'-webkit-appearance': 'none',
	},
	'&[type="number"]::-webkit-inner-spin-button': {
		'-webkit-appearance': 'none',
	},
});

export const StyledError = styled('span', {
	fontSize: '.85rem',
	color: '#822',
	transition: 'transform 150ms ease',
	transform: 'translateY(-18px) scaleY(0)',
	variants: {
		hasError: {
			true: {
				transform: 'translateY(0) scaleY(1)',
			},
		},
	},
});
