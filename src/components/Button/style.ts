import {styled} from '@stitches/react';

export const StyledButton = styled('button', {
	display: 'grid',
	placeItems: 'center',
	justifyItems: 'center',
	fontSize: '1.25rem',
	height: '4rem',
	padding: '0 2rem',
	cursor: 'pointer',

	variants: {
		className: {
			primary: {
				backgroundColor: '#336',
			},
			default: {
				backgroundColor: '#333',
			},
		},
		justify: {
			center: {
				justifySelf: 'center',
			},
			start: {
				justifySelf: 'flex-start',
			},
			end: {
				justifySelf: 'flex-end',
			},
		},
		align: {
			center: {
				alignSelf: 'center',
			},
			start: {
				alignSelf: 'flex-start',
			},
			end: {
				alignSelf: 'flex-end',
			},
		},
	},
});
